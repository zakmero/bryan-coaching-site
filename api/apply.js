const DEFAULT_RECEIVER_EMAIL = 'yongpingbryan@gmail.com';
const DEFAULT_FROM_EMAIL = 'Bryan Applications <apply@fullestlife.store>';

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

const makeAbsoluteUrl = (origin, hash) => {
  if (!hash || typeof hash !== 'string') return `${origin}/`;
  return `${origin}/${hash.startsWith('#') ? hash : `#${hash}`}`;
};

const makeErrorRedirectUrl = (origin, hash) => {
  const safeHash = hash && typeof hash === 'string'
    ? (hash.startsWith('#') ? hash : `#${hash}`)
    : '#';
  return `${origin}/?submit=error${safeHash}`;
};

const readFormValues = (formData) => {
  const values = {};
  for (const [key, value] of formData.entries()) {
    if (value instanceof File) continue;
    if (values[key]) {
      values[key] = `${values[key]}, ${value}`;
    } else {
      values[key] = value;
    }
  }

  const triedValues = formData.getAll('tried').filter((v) => typeof v === 'string');
  if (triedValues.length) {
    values.tried = triedValues.join(', ');
  }

  return values;
};

const buildEmailBody = (values, formType) => {
  const title = formType === 'snapshot'
    ? 'New Performance Snapshot Application'
    : 'New 8-Week Performance Sprint Application';

  const rows = Object.entries(values)
    .filter(([key]) => !['successHash', 'errorHash'].includes(key))
    .map(([key, value]) => `<tr><td style="padding:6px 10px;font-weight:600;">${escapeHtml(key)}</td><td style="padding:6px 10px;">${escapeHtml(value)}</td></tr>`)
    .join('');

  return {
    title,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111;">
        <h2 style="margin:0 0 12px;">${escapeHtml(title)}</h2>
        <table style="border-collapse:collapse;border:1px solid #ddd;">
          ${rows}
        </table>
      </div>
    `,
    text: `${title}\n\n${Object.entries(values)
      .filter(([key]) => !['successHash', 'errorHash'].includes(key))
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n')}`,
  };
};

const sendWithResend = async ({ apiKey, from, to, replyTo, subject, html, text, attachments }) => {
  const payload = {
    from,
    to: [to],
    subject,
    html,
    text,
  };

  if (replyTo) payload.reply_to = replyTo;
  if (attachments.length) payload.attachments = attachments;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend API failed (${response.status}): ${errorText}`);
  }
};

export async function POST(request) {
  const origin = new URL(request.url).origin;
  let formData;

  try {
    formData = await request.formData();
  } catch (error) {
    return Response.redirect(makeErrorRedirectUrl(origin, '#/'), 303);
  }

  const values = readFormValues(formData);
  const formType = values.formType === 'snapshot' ? 'snapshot' : 'sprint';
  const successRedirect = makeAbsoluteUrl(origin, values.successHash || '#');
  const errorRedirect = makeAbsoluteUrl(origin, values.errorHash || '#');

  const resendApiKey = process.env.RESEND_API_KEY;
  const receiverEmail = process.env.FORM_RECEIVER_EMAIL || DEFAULT_RECEIVER_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL;

  if (!resendApiKey) {
    console.error('Missing RESEND_API_KEY environment variable.');
    return Response.redirect(makeErrorRedirectUrl(origin, values.errorHash || '#/'), 303);
  }

  const { title, html, text } = buildEmailBody(values, formType);

  const fileField = formData.get('studentWork');
  const attachments = [];
  if (fileField instanceof File && fileField.size > 0) {
    const arrayBuffer = await fileField.arrayBuffer();
    attachments.push({
      filename: fileField.name || 'student-work',
      content: Buffer.from(arrayBuffer).toString('base64'),
    });
  }

  try {
    await sendWithResend({
      apiKey: resendApiKey,
      from: fromEmail,
      to: receiverEmail,
      replyTo: values.email || '',
      subject: title,
      html,
      text,
      attachments,
    });
    return Response.redirect(successRedirect, 303);
  } catch (error) {
    console.error('Application email failed:', error);
    return Response.redirect(makeErrorRedirectUrl(origin, values.errorHash || '#/'), 303);
  }
}

export async function GET() {
  return Response.json({
    ok: true,
    resendConfigured: Boolean(process.env.RESEND_API_KEY),
    fromDomain: (process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL).match(/@([^>]+)/)?.[1] || null,
    receiverConfigured: Boolean(process.env.FORM_RECEIVER_EMAIL || DEFAULT_RECEIVER_EMAIL),
  });
}
