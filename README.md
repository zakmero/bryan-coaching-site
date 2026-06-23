# Bryan Coaching Site

## Application Delivery (Vercel + Resend)

The forms now submit to the local API route `POST /api/apply`, which sends applications by email using Resend.

### One-time setup

1. Deploy this project on Vercel.
2. In Vercel Project Settings -> Environment Variables, set:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL` = `Bryan Applications <apply@fullestlife.store>`
   - `FORM_RECEIVER_EMAIL` (defaults to `yongpingbryan@gmail.com` if omitted)
3. Make sure your `RESEND_FROM_EMAIL` domain is verified in Resend. The verified domain is `fullestlife.store`.
4. After redeploying, visit `/api/apply` on the production domain. It should return JSON with `"resendConfigured": true`.

Reference values are in `.env.example`.

### Local development

- Run frontend:
  - `npm run dev`
- If you need to test API routes locally, use Vercel dev:
  - `vercel dev`
