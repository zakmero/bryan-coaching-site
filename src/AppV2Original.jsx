import React, { useEffect, useRef, useState } from 'react';
import { 
  CheckCircle,
  XCircle,
  BookOpen,
  Target,
  Brain,
  Crosshair,
  ChevronRight,
  UserCheck,
  UserX,
  FileCheck2,
  SearchX,
  Gauge
} from 'lucide-react';
import bryanPic from '../data/Bryan pic.png';
import storyBryan from '../data/story-bryan.png';
import tesolCert from '../data/World120hrTESOL_TEFLcert.pdf';
import tesolTranscript from '../data/Yong Ping Bryan Teng - TESOL Grades Transcript - WTA.pdf';
import tesolReference from '../data/Yong Ping Bryan Teng - TESOL Reference letter.pdf';
import testimonialImage from '../data/2025testimonial.jpg';
import examBMark from '../data/exam-b-mark.png';

const ICON_STROKE = 1.25;
const EXAM_FOCUS = ['A-Level', 'IB', 'IELTS', 'TOEFL'];
const APPLY_HASH = '#/apply';
const SNAPSHOT_HASH = '#/snapshot';
const SNAPSHOT_CAL_HASH = '#/snapshot-cal';
const SNAPSHOT_PAYMENT_HASH = '#/snapshot-payment';
const SNAPSHOT_BOOKED_HASH = '#/snapshot-booked';
const SPRINT_HASH = '#/sprint';
const SPRINT_SUBMITTED_HASH = '#/sprint-submitted';
const PRIMARY_CTA_LABEL = 'Apply for the 8-Week Sprint';
const SECONDARY_CTA_LABEL = 'Apply for the Performance Snapshot';
const CAL_SNAPSHOT_PAID_BOOKING_URL = 'https://cal.com/your-cal-link/snapshot-paid-booking';
const CAL_SPRINT_FREE_CALL_URL = 'https://cal.com/your-cal-link/sprint-free-call';
const HERO_EYEBROW_TEXT = 'NOT AN ENGLISH TUTORING PROGRAM, AN EXAM THINKING DIAGNOSTIC';
const APPLICATION_RECEIVER_EMAIL = 'yongpingbryan@gmail.com';
const APPLICATION_FORM_ENDPOINT = `https://formsubmit.co/${APPLICATION_RECEIVER_EMAIL}`;

const resolveRouteFromHash = (hash) => {
  switch (hash) {
    case APPLY_HASH:
      return 'apply';
    case SNAPSHOT_HASH:
      return 'snapshot';
    case SNAPSHOT_CAL_HASH:
      return 'snapshot-cal';
    case SNAPSHOT_PAYMENT_HASH:
      return 'snapshot-payment';
    case SNAPSHOT_BOOKED_HASH:
      return 'snapshot-booked';
    case SPRINT_HASH:
      return 'sprint';
    case SPRINT_SUBMITTED_HASH:
      return 'sprint-submitted';
    default:
      return 'home';
  }
};

const buildReturnUrlForHash = (hash) => {
  if (typeof window === 'undefined') return hash;
  return `${window.location.origin}${window.location.pathname}${window.location.search}${hash}`;
};
const HERO_DIAGNOSTICS = [
  {
    icon: SearchX,
    tone: 'red',
    label: 'MISREAD',
    title: 'You’re not failing because you didn’t study enough.',
    detail: 'You’re losing marks because the question changes shape under pressure, and your answer no longer matches what the examiner is rewarding.',
  },
  {
    icon: FileCheck2,
    tone: 'ink',
    label: 'REPEAT',
    title: 'More practice papers won’t fix a broken thinking pattern.',
    detail: 'If every paper is approached with the same rushed interpretation, practice only makes the mistake more automatic.',
  },
  {
    icon: XCircle,
    tone: 'red',
    label: 'FRUSTRATION',
    title: 'You keep paying for help, but the same pattern returns.',
    detail: 'More lessons, more notes, more hours, yet when the exam arrives, you still lose marks you should have secured.',
  },
  {
    icon: Gauge,
    tone: 'ink',
    label: 'REGRET',
    title: 'The worst part is knowing you knew it.',
    detail: 'You leave the exam replaying the question, realizing the answer was there, but your brain moved too fast to structure it properly.',
  },
];

const PROBLEM_INSIGHTS = [
  {
    title: 'CLARITY',
    detail: 'The student finally understands why marks are being lost, not just what the correct answer should have been.',
  },
  {
    title: 'CONTROL',
    detail: 'Instead of rushing into the answer, they learn a repeatable process for decoding the question before writing.',
  },
  {
    title: 'CONSISTENCY',
    detail: 'Performance becomes less dependent on mood, panic, or luck and more dependent on a trained exam process.',
  },
];

const GradeMark = ({ children }) => (
  <span className="v2-grade-mark">{children}</span>
);

// ---------- Reusable Components ----------

const SectionHeader = ({ badge, title, subtitle }) => (
  <div className="v2-mb-4 v2-text-center">
    {badge && <div className="v2-badge v2-animate-fade-up">{badge}</div>}
    <h2 className="v2-heading-lg v2-animate-fade-up v2-delay-100">{title}</h2>
    {subtitle && (
      <p className="v2-text-lg v2-animate-fade-up v2-delay-200"
         style={{ maxWidth: '750px', margin: '0 auto' }}>
        {subtitle}
      </p>
    )}
  </div>
);

const EngagementBand = ({ title, subtitle, cta = PRIMARY_CTA_LABEL }) => (
  <div className="v2-engagement-band v2-animate-fade-up">
    <div>
      <p className="v2-engagement-title">{title}</p>
      <p className="v2-engagement-subtitle">{subtitle}</p>
    </div>
    <a href={APPLY_HASH} className="v2-btn v2-btn-primary v2-engagement-cta">
      {cta} <ChevronRight size={16} strokeWidth={ICON_STROKE} />
    </a>
  </div>
);

const StoryVision = () => (
  <section className="v2-section" id="story">
    <div className="v2-container">
      <div className="v2-card v2-story-pain v2-animate-fade-up">
        <h3>The real problem is not that your child needs "more English."</h3>
        <ul>
          <li>They know the content, but lose marks because they do not decode the question properly.</li>
          <li>They practise papers, but repeat the same thinking mistakes.</li>
          <li>They write more, but still do not know what the examiner is rewarding.</li>
          <li>They revise harder, but panic when the wording changes.</li>
        </ul>
      </div>

      <div className="v2-story-section-head">
        <div className="v2-badge v2-animate-fade-up">Founder Story</div>
        <h2>
          Why this works
          <span>(and why most methods don’t)</span>
        </h2>
      </div>

      <article className="v2-card v2-story-card" style={{ maxWidth: '920px', margin: '0 auto' }}>
        <div className="v2-story-text-stack">
          <div className="v2-story-copy">
            <p>Bryan used to believe the same thing most students do:</p>
            <ul>
              <li>More papers = better grades</li>
              <li>More memorisation = stronger answers</li>
              <li>More hours = better results</li>
            </ul>
            <p>So that’s what he pushed.</p>
            <p>But something didn’t add up.</p>
            <p>
              Some students were doing all of that and still stuck at <GradeMark>B/C</GradeMark>.
            </p>
            <p>
              At the same time, others were doing less but consistently scoring <GradeMark>A</GradeMark>.
            </p>
            <p>That’s where everything changed.</p>
            <p>
              The difference wasn’t effort. It was what happened in the 30 seconds after reading the question.
            </p>
            <p>Top students didn’t rush.</p>
            <p>
              They paused, decoded what was actually being asked, and planned before writing.
            </p>
            <p>That’s what this coaching fixes.</p>
            <p>
              Not how much you study, but how you think when it matters.
            </p>
          </div>
        </div>
        <img
          src={storyBryan}
          alt="Bryan portrait"
          className="v2-story-portrait"
        />
      </article>

      <ProofsSection />
    </div>
  </section>
);

const ProofsSection = () => {
  const proofDocs = [
    { id: 'tesol-cert', label: 'TESOL/TEFL Certificate', file: tesolCert },
    { id: 'tesol-transcript', label: 'TESOL Grades Transcript', file: tesolTranscript },
    { id: 'tesol-reference', label: 'TESOL Reference Letter', file: tesolReference }
  ];
  const [selectedProof, setSelectedProof] = useState('tesol-cert');
  const activeProof = proofDocs.find((doc) => doc.id === selectedProof) ?? proofDocs[0];
  const activeProofOrientation = activeProof.id === 'tesol-cert' ? 'landscape' : 'portrait';

  return (
    <div id="proofs-panel" className="v2-proof-collapse v2-animate-fade-up">
      <div className="v2-proof-grid v2-proof-grid-single" style={{ marginTop: '1.1rem' }}>
        <div className="v2-card">
          <h3 className="v2-heading-md" style={{ fontSize: '1.4rem' }}>Proofs & Certificates</h3>
          <div className="v2-proof-links">
            {proofDocs.map((doc) => (
              <button
                key={doc.id}
                type="button"
                className={`v2-proof-link-btn ${selectedProof === doc.id ? 'is-active' : ''}`}
                onClick={() => setSelectedProof(doc.id)}
              >
                {doc.label}
              </button>
            ))}
          </div>
          <article className="v2-proof-locked-card">
            <p className="v2-proof-locked-title">{activeProof.label}</p>
            <div
              className="v2-proof-preview v2-proof-preview-locked"
              aria-label={`${activeProof.label} locked preview`}
              onContextMenu={(event) => event.preventDefault()}
            >
              <object
                data={`${activeProof.file}#page=1&toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit`}
                type="application/pdf"
                className={`v2-proof-frame v2-proof-frame-locked v2-proof-frame-${activeProofOrientation}`}
                tabIndex={-1}
                aria-hidden="true"
              >
                <p style={{ margin: 0, color: 'var(--v2-text-secondary)' }}>
                  Preview unavailable in this browser.
                </p>
              </object>
              <div className="v2-proof-lock-layer" aria-hidden="true">
                <span>Locked Preview</span>
              </div>
            </div>
          </article>
          </div>
        </div>
      </div>
  );
};

const TestimonialsSection = () => {
  const testimonialPanelRef = useRef(null);
  const testimonialScrollRef = useRef(null);

  useEffect(() => {
    let rafId;
    let startTimer;
    let startTime;
    let hasStarted = false;

    const startScroll = () => {
      const viewport = testimonialScrollRef.current;
      if (!viewport || hasStarted) return false;

      hasStarted = true;
      let attempts = 0;

      const run = () => {
        const currentViewport = testimonialScrollRef.current;
        if (!currentViewport) return;

        const maxScroll = currentViewport.scrollHeight - currentViewport.clientHeight;
        if (maxScroll <= 0 && attempts < 8) {
          attempts += 1;
          startTimer = setTimeout(run, 300);
          return;
        }

        if (maxScroll <= 0) return;

        currentViewport.scrollTop = 0;
        const duration = 8000;

        const step = (timestamp) => {
          if (startTime === undefined) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          currentViewport.scrollTop = maxScroll * progress;
          if (progress < 1) {
            rafId = requestAnimationFrame(step);
          }
        };

        rafId = requestAnimationFrame(step);
      };

      startTimer = setTimeout(run, 350);
      return true;
    };

    const panel = testimonialPanelRef.current;
    if (!panel) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const didStart = startScroll();
        if (didStart) observer.disconnect();
      }
    }, { threshold: 0.35 });

    observer.observe(panel);

    return () => {
      observer.disconnect();
      clearTimeout(startTimer);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="v2-proof-collapse v2-animate-fade-up" ref={testimonialPanelRef}>
      <div className="v2-proof-grid v2-proof-grid-single" style={{ marginTop: '1.1rem' }}>
        <div className="v2-card">
          <h3 className="v2-heading-md" style={{ fontSize: '1.4rem' }}>Testimonials</h3>
          <p style={{ color: 'var(--v2-text-secondary)', marginBottom: '0.8rem' }}>
            Real student feedback and result snapshots from coaching conversations.
          </p>
          <div className="v2-testimonial-media-link">
            <div className="v2-testimonial-reel" ref={testimonialScrollRef}>
              <img
                src={testimonialImage}
                alt="Student testimonial screenshot"
                className="v2-testimonial-media"
              />
            </div>
          </div>
          <a href={testimonialImage} target="_blank" rel="noreferrer" className="v2-testimonial-open">
            Open full screenshot
          </a>
        </div>
      </div>
    </div>
  );
};

const Header = ({ isSecondaryRoute }) => (
  <header className="v2-header">
    <div className="v2-container v2-header-content">
      <div className="v2-logo">Bryan Teng | English Exam Performance Coach</div>
      <a href={isSecondaryRoute ? '#' : SNAPSHOT_HASH} className={`v2-btn ${isSecondaryRoute ? 'v2-btn-primary' : 'v2-btn-snapshot-primary'} v2-header-cta`}>
        {isSecondaryRoute ? 'Back Home' : SECONDARY_CTA_LABEL}
      </a>
    </div>
  </header>
);

// 1. ABOVE THE FOLD
const Hero = () => {
  const diagnosticsRef = useRef(null);
  const [visibleDiagnostics, setVisibleDiagnostics] = useState([]);

  useEffect(() => {
    const node = diagnosticsRef.current;
    if (!node) return undefined;

    const items = Array.from(node.querySelectorAll('[data-diagnostic-index]'));
    if (!items.length) return undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const rawIndex = entry.target.getAttribute('data-diagnostic-index');
        const index = Number(rawIndex);
        if (Number.isNaN(index)) return;

        setVisibleDiagnostics((prev) => (
          prev.includes(index) ? prev : [...prev, index]
        ));
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.55, rootMargin: '0px 0px -10% 0px' });

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="v2-section v2-hero-section" id="home">
      <div className="v2-hero-lab-grid" aria-hidden="true"></div>

      <div className="v2-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="v2-card v2-hero-card">
          <div className="v2-hero-intro v2-mb-4">
          <div className="v2-hero-portrait-wrap v2-animate-fade-up" aria-hidden="true">
            <img className="v2-hero-portrait" src={bryanPic} alt="" />
          </div>
          <div className="v2-hero-copy v2-hero-copy-title v2-text-center">
          <p className="v2-hero-eyebrow v2-hero-eyebrow-mobile">{HERO_EYEBROW_TEXT}</p>
          <p className="v2-hero-eyebrow v2-hero-eyebrow-desktop">{HERO_EYEBROW_TEXT}</p>
          <h1 className="v2-hero-title v2-animate-fade-up v2-delay-100">
            Improve your English exam score by <br />
            <span className="v2-title-accent">+1 to +3 bands in 8-12 weeks</span> without doing more practice papers
          </h1>
          </div>
          <p className="v2-hero-subtitle v2-hero-copy-subtitle v2-animate-fade-up v2-delay-200">
            For IELTS, TOEFL, IB, A-Level, and similar English exam students who study hard but still lose marks from misreading prompts,
            weak essay structure, unclear examiner intent, or rushed answers under timed pressure.
          </p>
        </div>

          <div className="v2-hero-exam-grid v2-animate-fade-up v2-delay-300" aria-label="Exam focus areas">
            {EXAM_FOCUS.map((exam) => (
              <div key={exam} className="v2-hero-exam-pill">
                <span>{exam}</span>
              </div>
            ))}
          </div>

          <div className="v2-hero-message v2-animate-fade-up v2-delay-200" role="note" aria-label="Core transformation message">
            <p>Most students don’t fail because they lack knowledge. They fail because they think incorrectly under pressure.</p>
            <p>We train students to think like top-band examiners.</p>
          </div>

          <div
            ref={diagnosticsRef}
            className="v2-hero-diagnostics v2-animate-fade-up v2-delay-200"
            aria-label="Performance diagnostic warning signs"
          >
            <p className="v2-hero-diagnostic-kicker">Performance Diagnostic</p>
            <ul>
              {HERO_DIAGNOSTICS.map(({ icon: Icon, label, title, detail, tone }, index) => (
                <li
                  key={title}
                  data-diagnostic-index={index}
                  className={`v2-diagnostic-item v2-diagnostic-item-${tone} ${visibleDiagnostics.includes(index) ? 'is-visible' : ''}`}
                  style={{ '--v2-diag-delay': `${index * 120}ms` }}
                >
                  <div className="v2-diagnostic-visual" aria-hidden="true">
                    <span className="v2-diagnostic-icon-wrap">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <span className="v2-diagnostic-label">{label}</span>
                  </div>
                  <div className="v2-diagnostic-copy">
                    <strong>{title}</strong>
                    <p>{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="v2-animate-fade-up v2-delay-300 v2-text-center">
            <a href={APPLY_HASH} className="v2-btn v2-btn-snapshot-primary v2-hero-cta">
              {SECONDARY_CTA_LABEL} <ChevronRight size={18} strokeWidth={ICON_STROKE} style={{ marginLeft: '0.5rem' }} />
            </a>
            <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: 'var(--v2-text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Limited first intake: 30 students
            </p>
            <p className="v2-hero-authority-inline">
              120-hour TESOL/TEFL Certified • Accredited Training • 100% Assessment Completion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// 2. PROBLEM AGITATION
const Problem = () => {
  const insightsRef = useRef(null);
  const [visibleInsights, setVisibleInsights] = useState([]);

  useEffect(() => {
    const node = insightsRef.current;
    if (!node) return undefined;

    const items = Array.from(node.querySelectorAll('[data-problem-insight-index]'));
    if (!items.length) return undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const rawIndex = entry.target.getAttribute('data-problem-insight-index');
        const index = Number(rawIndex);
        if (Number.isNaN(index)) return;

        setVisibleInsights((prev) => (
          prev.includes(index) ? prev : [...prev, index]
        ));
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.6, rootMargin: '0px 0px -12% 0px' });

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="v2-section" id="problem">
      <div className="v2-container">
        <SectionHeader 
          badge="The Examiner Thinking System" 
          title="Most tutoring reinforces bad thinking patterns."
          subtitle={
            <span className="v2-problem-alert">More practice does not automatically improve grades.</span>
          } 
        />
        <p className="v2-problem-support">
          I’ve worked with students who solved 20+ papers and still couldn’t break a <GradeMark>B</GradeMark>.
        </p>
      <span className="v2-exam-proof-visual v2-pop-on-reach">
        <img
          src={examBMark}
          alt="English exam paper on a classroom desk with a red circled B grade"
        />
      </span>
        <p className="v2-problem-support">
          The issue wasn’t effort. It was how they approached the question under pressure.
        </p>
        <p className="v2-micro-proof">
          “Last month, a student went from <GradeMark>B</GradeMark> to <GradeMark>A</GradeMark> in 6 weeks.
          Not by studying more but by fixing how he reads questions.”
        </p>
        <TestimonialsSection />
        
        <div className="v2-problem-wrap">
          <div className="v2-card v2-text-center">
            <h3 className="v2-heading-md" style={{ fontSize: '1.7rem' }}>
              Top students don't study more.<br />
              <span style={{ color: 'var(--v2-accent)', fontStyle: 'italic' }}>They run a sequence.</span>
            </h3>
            <p className="v2-text-lg" style={{ marginBottom: '1.4rem' }}>
              Every question. No exception.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
              {['Decode question', 'Identify examiner intent', 'Build answer skeleton', 'Execute under time pressure'].map((step, idx) => (
                <div key={idx} style={{
                  border: '1px solid var(--v2-border)',
                  borderRadius: '10px',
                  padding: '0.55rem 0.9rem',
                  fontWeight: 700,
                  color: 'var(--v2-text-primary)',
                  background: '#fff'
                }}>
                  {idx + 1}. {step}
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.11em', color: 'var(--v2-text-muted)', marginBottom: '0.45rem' }}>
              The Insight
            </p>
            <p style={{ fontSize: '1.12rem', fontFamily: 'var(--v2-font-heading)', color: 'var(--v2-text-primary)' }}>
              Practice without fixing the thinking process doesn’t improve results. It locks mistakes in.
            </p>
            <div
              ref={insightsRef}
              className="v2-problem-insight-sequence"
            >
              {PROBLEM_INSIGHTS.map(({ title, detail }, idx) => (
                <article
                  key={title}
                  data-problem-insight-index={idx}
                  className={`v2-problem-insight-line ${visibleInsights.includes(idx) ? 'is-visible' : ''}`}
                  style={{ '--v2-problem-insight-delay': `${idx * 220}ms` }}
                >
                  <p className="v2-problem-insight-title">{title}</p>
                  <p className="v2-problem-insight-detail">{detail}</p>
                </article>
              ))}
            </div>
            <p style={{ margin: '0.8rem 0 0', color: 'var(--v2-text-primary)', fontFamily: 'var(--v2-font-heading)', fontSize: '1.2rem', lineHeight: 1.45 }}>
              "The goal is not to study more. The goal is to perform with a system when the paper is in front of them."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. AHA MOMENT
const AhaMoment = () => (
  <section className="v2-section" id="aha" style={{ backgroundColor: 'var(--v2-bg-alt)' }}>
    <div className="v2-container">
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 className="v2-heading-lg">
          Top students don't study more.<br/>
          <span style={{ color: 'var(--v2-accent)', fontStyle: 'italic' }}>They think differently.</span>
        </h2>
        <p className="v2-text-lg v2-mb-4">They use the same mental sequence every time they face a question:</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem' }}>
          {['Decode question', 'Identify examiner intent', 'Build answer skeleton', 'Execute under time pressure'].map((step, idx) => (
            <div key={idx} style={{
              borderBottom: '2px solid var(--v2-accent)',
              paddingBottom: '0.5rem',
              fontFamily: 'var(--v2-font-heading)',
              fontSize: '1.5rem',
              fontStyle: 'italic',
              color: 'var(--v2-text-primary)'
            }}>
              {idx + 1}. {step}
            </div>
          ))}
        </div>
        
        <div className="v2-card" style={{ borderTop: '2px solid var(--v2-border)' }}>
          <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--v2-text-muted)', marginBottom: '1rem' }}>The Insight</p>
          <p style={{ fontSize: '1.25rem', fontFamily: 'var(--v2-font-heading)', color: 'var(--v2-text-primary)', fontWeight: 600 }}>
            Practice without correcting the thinking can make the same mistakes stronger.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// 4. UNIQUE MECHANISM
const Mechanism = () => (
  <section className="v2-section" id="mechanism">
    <div className="v2-container">
      <SectionHeader 
        badge="The Examiner Thinking System" 
        title="This is not another content lesson." 
        subtitle="Students bring real questions. Bryan listens to how they think through them, then corrects the process in real time." 
      />
      
      <div className="v2-grid-3 v2-mb-4">
        <div className="v2-card">
          <Brain color="var(--v2-accent)" size={32} strokeWidth={ICON_STROKE} style={{ marginBottom: '1.5rem' }} />
          <h3 className="v2-heading-md" style={{ fontSize: '1.4rem' }}>Question Deconstruction</h3>
          <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'var(--v2-text-secondary)', lineHeight: 1.7 }}>
            Slow down long enough to understand what the question is really asking.
          </p>
        </div>

        <div className="v2-card">
          <Target color="var(--v2-accent)" size={32} strokeWidth={ICON_STROKE} style={{ marginBottom: '1.5rem' }} />
          <h3 className="v2-heading-md" style={{ fontSize: '1.4rem' }}>Pattern Recognition</h3>
          <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'var(--v2-text-secondary)', lineHeight: 1.7 }}>
            Notice how similar question patterns appear again and again in different wording.
          </p>
        </div>

        <div className="v2-card">
          <Crosshair color="var(--v2-accent)" size={32} strokeWidth={ICON_STROKE} style={{ marginBottom: '1.5rem' }} />
          <h3 className="v2-heading-md" style={{ fontSize: '1.4rem' }}>Answer Precision</h3>
          <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'var(--v2-text-secondary)', lineHeight: 1.7 }}>
            Answer clearly, stay relevant, and avoid wasting time on points that do not score.
          </p>
        </div>
      </div>

      <div className="v2-text-center">
        <p style={{ fontSize: '1.5rem', fontStyle: 'italic', fontFamily: 'var(--v2-font-heading)', color: 'var(--v2-text-secondary)' }}>
          "Once students understand what examiners are looking for, the question feels less random."
        </p>
      </div>

      <EngagementBand
        title="Want this to be your exam process too?"
        subtitle="Apply now and choose the right starting point for the student's performance needs."
      />
    </div>
  </section>
);

// 5. DELIVERY & 6. TIMELINE & 7. DIFFERENTIATION
const InsideProgram = () => (
  <section className="v2-section" id="delivery" style={{ backgroundColor: 'var(--v2-bg-alt)' }}>
    <div className="v2-container">
      <SectionHeader badge="Delivery Framework" title="What You Get Inside the Program" />
      
      <div className="v2-grid-2 v2-mb-4">
        <div className="v2-card">
          <h3 className="v2-heading-md" style={{ fontSize: '1.75rem' }}>1-2 Coaching Calls per Week</h3>
          <p style={{ color: 'var(--v2-text-secondary)', marginBottom: '1.5rem' }}>The standard program runs for 8 sessions and can be extended if needed. Each call includes:</p>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
            {['Live breakdown of real exam questions', 'You explain your reasoning out loud', 'Bryan corrects the thinking, not just the answer', 'You practise the better approach immediately'].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '1rem', color: 'var(--v2-text-primary)' }}>
                <span style={{ color: 'var(--v2-accent)', fontWeight: 700 }}>|</span> {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="v2-card">
          <h3 className="v2-heading-md" style={{ fontSize: '1.75rem' }}>Homework With a Reason</h3>
          <p style={{ color: 'var(--v2-text-secondary)', marginBottom: '1.5rem' }}>Students do targeted work based on the mistakes Bryan sees in their answers.</p>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
            {['Worksheets matched to weak spots', 'An error log that shows why mistakes happen', 'Weekly review of progress and patterns'].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--v2-text-primary)' }}>
                <BookOpen size={16} strokeWidth={ICON_STROKE} color="var(--v2-text-muted)"/> {item}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--v2-border)' }}>
            <p style={{ fontSize: '1.1rem', fontFamily: 'var(--v2-font-heading)', color: 'var(--v2-text-secondary)', fontWeight: 600 }}>
              The goal is not just to mark answers. It is to find the reason behind the mistake.
            </p>
          </div>
        </div>
      </div>

      <div className="v2-mb-4">
        <h3 className="v2-heading-md v2-text-center v2-timeline-title" style={{ fontSize: '2rem' }}>Timeline</h3>
        <p className="v2-timeline-subtitle">
          Improve 1–3 grade bands in 8–12 weeks by rebuilding how you process exam questions under pressure.
        </p>
        <div className="v2-roadmap" aria-label="Program timeline roadmap">
          {[
            { phase: 'Week 2-3', label: 'Questions start feeling clearer' },
            { phase: 'Week 6-8', label: 'Marked work should start showing movement' },
            { phase: 'Week 8-12', label: 'The exam process becomes more consistent' },
          ].map(({ phase, label }, i) => (
            <div key={i} className={`v2-roadmap-step ${i === 1 ? 'is-bottom' : 'is-top'}`}>
              {i !== 1 && (
                <>
                  <div className="v2-roadmap-content">
                    <p className="v2-roadmap-phase">{phase}</p>
                    <h4>{label}</h4>
                  </div>
                  <div className="v2-roadmap-stem" />
                </>
              )}

              <div className="v2-roadmap-node">
                <span className="v2-roadmap-dot" />
              </div>

              {i === 1 && (
                <>
                  <div className="v2-roadmap-stem" />
                  <div className="v2-roadmap-content">
                    <p className="v2-roadmap-phase">{phase}</p>
                    <h4>{label}</h4>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="v2-card v2-text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontFamily: 'var(--v2-font-heading)', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--v2-text-primary)', lineHeight: 1.4 }}>
          "Most tutoring gives students more answers.<br />Bryan works on how students arrive at the answer."
        </p>
        <p style={{ fontSize: '1.1rem', color: 'var(--v2-text-secondary)' }}>
          For many students, the issue is not lack of effort. <em style={{ fontFamily: 'var(--v2-font-heading)', color: 'var(--v2-text-primary)' }}>It is the method.</em>
        </p>
      </div>
    </div>
  </section>
);

// 8. WHO THIS IS FOR
const Qualification = () => (
  <section className="v2-section" id="qualification">
    <div className="v2-container">
      <SectionHeader
        title="Who This Is For"
        subtitle="This is for students who are willing to be corrected, practise differently, and take the work seriously."
      />

      <div className="v2-grid-2 v2-qual-grid" style={{ maxWidth: '980px', margin: '0 auto' }}>
        <div className="v2-card v2-qual-card v2-qual-card-good">
          <div className="v2-qual-head">
            <UserCheck color="#2f7a4f" size={30} strokeWidth={ICON_STROKE} />
            <h3 className="v2-heading-md" style={{ fontSize: '1.55rem', marginBottom: 0 }}>Best Fit Candidates</h3>
          </div>
          <ul className="v2-qual-list">
            <li className="v2-qual-list-item">
              <CheckCircle size={18} strokeWidth={1.9} color="#2f7a4f" />
              <span>Students stuck at <GradeMark>B/C</GradeMark> who are aiming for <GradeMark>A</GradeMark></span>
            </li>
            {['High achievers who want a distinction', 'Students who panic, rush, or become inconsistent in exams'].map((t, i) => (
              <li key={i} className="v2-qual-list-item">
                <CheckCircle size={18} strokeWidth={1.9} color="#2f7a4f" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="v2-card v2-qual-card v2-qual-card-bad">
          <div className="v2-qual-head">
            <UserX color="#8b7b76" size={30} strokeWidth={ICON_STROKE} />
            <h3 className="v2-heading-md" style={{ fontSize: '1.55rem', marginBottom: 0, color: 'var(--v2-text-secondary)' }}>Not Suitable For</h3>
          </div>
          <ul className="v2-qual-list v2-qual-list-muted">
            <li className="v2-qual-list-item">
              <XCircle size={18} strokeWidth={1.9} color="#c0392b" />
              <span>Students looking for shortcuts or passive lessons</span>
            </li>
            <li className="v2-qual-list-item">
              <XCircle size={18} strokeWidth={1.9} color="#c0392b" />
              <span>Students who do not want their thinking corrected in real time</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
);

const FinalEngagement = () => (
  <section className="v2-section v2-final-engagement-section" id="final-apply">
    <div className="v2-container">
      <EngagementBand
        title="If this sounds like you, don't wait until the next exam cycle."
        subtitle="Secure your place while intake is still open."
        cta={PRIMARY_CTA_LABEL}
      />
    </div>
  </section>
);

const sprintFeatures = [
  '8 live coaching sessions',
  'Question deconstruction',
  'Examiner intent training',
  'Timed execution practice',
  'Weekly error review'
];

const snapshotFeatures = [
  '20-minute live assessment',
  'Question reading check',
  'Pressure execution review',
  'Clear scorecard',
  '24-hour written report'
];

const EXAM_LEVEL_OPTIONS = ['A-Level', 'IB', 'IELTS', 'TOEFL', 'GCSE/IGCSE', 'Other'];
const MAIN_ISSUE_OPTIONS = ['Misreading questions', 'Weak essay structure', 'Running out of time', 'Pressure/anxiety', 'Inconsistent marks', 'Not sure'];
const STUDENT_PROFILE_OPTIONS = ['Stuck at B/C aiming for A', 'High achiever aiming for distinction', 'Inconsistent under pressure', 'Works hard but still loses marks', 'Not sure'];
const TRIED_OPTIONS = ['Tutoring', 'More practice papers', 'School support', 'Self-study', 'Online resources'];

const OfferCard = ({
  variant,
  header,
  title,
  subtext,
  description,
  features,
  cta,
  ctaHref = APPLY_HASH,
  microcopy,
  price,
  priceNote,
  priceDetails,
  signal,
  icon
}) => (
  <article className={`v2-card v2-offer-card v2-offer-card-${variant}`}>
    <div className="v2-offer-card-topline">
      <div className="v2-offer-icon">
        {React.createElement(icon, { size: 22, strokeWidth: ICON_STROKE })}
      </div>
      <span>{signal}</span>
    </div>

    <p className="v2-offer-header">{header}</p>
    <h3>{title}</h3>
    <p className="v2-offer-subtext">{subtext}</p>
    <p className="v2-offer-description">{description}</p>

      <div className="v2-offer-price-block" aria-label={`${title} pricing`}>
        <span className="v2-offer-price">{price}</span>
        <span className="v2-offer-price-note">{priceNote}</span>
        {priceDetails ? <span className="v2-offer-price-details">{priceDetails}</span> : null}
      </div>

    <div className="v2-offer-includes">
      <p>Includes</p>
      <ul>
        {features.map((feature) => (
          <li key={feature}>
            <CheckCircle size={16} strokeWidth={1.9} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="v2-offer-action">
      <a href={ctaHref} className={`v2-btn v2-offer-btn v2-offer-btn-${variant}`}>
        {cta} <ChevronRight size={16} strokeWidth={ICON_STROKE} />
      </a>
      <p>{microcopy}</p>
    </div>
  </article>
);

// 9. PROGRAM OPTIONS & CTA
const PricingCTA = () => (
  <section className="v2-section v2-program-section" id="apply">
    <div className="v2-container">
      <SectionHeader 
        badge="Program Options" 
        title="Choose Your Starting Point" 
        subtitle="Get a clear diagnosis first or move straight into an 8-week strategy system designed for repeatable score improvement." 
      />

      <div className="v2-offer-grid">
        <OfferCard
          variant="sprint"
          icon={Crosshair}
          signal="Primary intervention"
          header="Ready To Fix It?"
          title="8-Week Performance Sprint"
          subtext="For students already committed to serious improvement."
          description="A focused 8-session coaching program that rebuilds how the student reads questions, plans answers, structures essays, and executes under timed conditions."
          features={sprintFeatures}
          price="From $1,440"
          priceNote="Group format: $1,440"
          priceDetails="1-on-1 format: $2,880"
          cta={PRIMARY_CTA_LABEL}
          ctaHref={SPRINT_HASH}
          microcopy="Best for students ready for immediate intervention."
        />

        <OfferCard
          variant="snapshot"
          icon={FileCheck2}
          signal="Diagnostic entry point"
          header="Need Clarity First?"
          title="Performance Snapshot"
          subtext="Not a sales call. A real diagnosis."
          description="A paid assessment that identifies where the student is losing marks: question reading, examiner intent, essay structure, timing, or pressure execution."
          features={snapshotFeatures}
          price="$97"
          priceNote="Credited toward the Sprint if accepted within 7 days."
          cta={SECONDARY_CTA_LABEL}
          ctaHref={SNAPSHOT_HASH}
          microcopy="Best for students unsure what’s actually causing underperformance."
        />
      </div>

      <div className="v2-program-final">
        <p className="v2-assessment-kicker">Final step</p>
        <h2>
          The next exam cycle can be handled differently.
        </h2>
        <p>
          Choose the entry point that matches what you know right now: start the full program, or get the student’s work assessed first.
        </p>
        <p>
          <strong>Choose the Sprint if:</strong>
        </p>
        <p>
          You already know the student is underperforming and want structured correction over 8 weeks.
        </p>
        <p>
          <strong>Choose the Snapshot if:</strong>
        </p>
        <p>
          You are unsure whether the issue is question reading, essay structure, timing, pressure, or examiner intent.
        </p>
        <div className="v2-program-final-actions">
          <a href={SPRINT_HASH} className="v2-btn v2-btn-primary">
            {PRIMARY_CTA_LABEL} <ChevronRight size={16} strokeWidth={ICON_STROKE} />
          </a>
          <a href={SNAPSHOT_HASH} className="v2-btn v2-program-secondary-action">
            {SECONDARY_CTA_LABEL}
          </a>
        </div>
        <p className="v2-program-path-note">
          Not sure what’s causing the problem? Start with the $97 Performance Snapshot.
          <br />
          Already ready for structured correction? Apply for the 8-Week Performance Sprint.
        </p>
        <p className="v2-program-final-note">
          Snapshot reports are written within 24 hours. Sprint enrollment depends on fit.
        </p>
      </div>

      <div className="v2-faq-wrap">
        <h3>Questions</h3>
        <details className="v2-faq-item">
          <summary>Do I pay before the Snapshot?</summary>
          <p>
            Yes. The Snapshot is a paid diagnostic. Payment happens before the 20-minute call.
          </p>
        </details>
        <details className="v2-faq-item">
          <summary>Do I pay for the full program on the website?</summary>
          <p>
            No. The Sprint is application-based. If there is a fit, Bryan will explain the right format and enrollment after the call.
          </p>
        </details>
        <details className="v2-faq-item">
          <summary>Is the $97 credited toward the Sprint?</summary>
          <p>
            Yes. The $97 Snapshot is credited toward the Sprint if enrollment happens within 7 days.
          </p>
        </details>
        <details className="v2-faq-item">
          <summary>What is the main difference?</summary>
          <p>
            The Snapshot diagnoses the problem. The Sprint fixes the problem over 8 weeks.
          </p>
        </details>
      </div>
    </div>
  </section>
);

const SnapshotBookingPage = () => {
  const [showMainIssueOptions, setShowMainIssueOptions] = useState(false);
  const [selectedMainIssue, setSelectedMainIssue] = useState('');
  const [mainIssueError, setMainIssueError] = useState('');

  return (
    <section className="v2-section v2-program-section" id="snapshot-booking">
      <div className="v2-container">
        <article className="v2-card v2-form-shell">
          <div className="v2-form-head">
            <h1>Book Your $97 Performance Snapshot</h1>
            <p>
              A 20-minute diagnostic to identify where the student is losing marks: question interpretation, structure, timing, or pressure execution.
            </p>
          </div>

          <form
            className="v2-form-grid"
            action={APPLICATION_FORM_ENDPOINT}
            method="POST"
            encType="multipart/form-data"
            onSubmit={(event) => {
              event.preventDefault();
              if (!selectedMainIssue) {
                setMainIssueError('Please choose one main issue before continuing.');
                setShowMainIssueOptions(true);
                return;
              }
              setMainIssueError('');
              event.currentTarget.submit();
            }}
          >
          <input type="hidden" name="_subject" value="New Performance Snapshot Application" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={buildReturnUrlForHash(SNAPSHOT_BOOKED_HASH)} />
          <input type="hidden" name="_url" value={buildReturnUrlForHash(SNAPSHOT_HASH)} />
          <label className="v2-form-field">
            Parent name
            <input type="text" name="parentName" required />
          </label>

          <label className="v2-form-field">
            Student name
            <input type="text" name="studentName" required />
          </label>

          <label className="v2-form-field">
            Gmail
            <input type="email" name="email" required />
          </label>

          <label className="v2-form-field">
            WhatsApp number
            <input type="tel" name="whatsappNumber" required />
          </label>

          <label className="v2-form-field">
            Student level / exam
            <select name="studentExamLevel" defaultValue="" required>
              <option value="" disabled>Select one</option>
              {EXAM_LEVEL_OPTIONS.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>

          <label className="v2-form-field">
            Current grade / band
            <input type="text" name="currentGrade" required />
          </label>

          <label className="v2-form-field">
            Target grade / band
            <input type="text" name="targetGrade" required />
          </label>

            <fieldset className="v2-form-field v2-form-field-full v2-issue-picker">
              <legend>What feels like the main issue?</legend>
              <button
                type="button"
                className={`v2-issue-picker-trigger ${showMainIssueOptions ? 'is-open' : ''}`}
                aria-expanded={showMainIssueOptions}
                onClick={() => setShowMainIssueOptions((prev) => !prev)}
              >
                <span className="v2-issue-picker-trigger-label">Click to choose an option</span>
                <span className={`v2-issue-picker-trigger-value ${selectedMainIssue ? 'has-value' : ''}`}>
                  {selectedMainIssue || 'No option selected yet'}
                </span>
              </button>
              <div className={`v2-issue-picker-options ${showMainIssueOptions ? 'is-open' : ''}`}>
                <div className="v2-option-grid">
                  {MAIN_ISSUE_OPTIONS.map((option) => (
                    <label key={option} className="v2-option-item">
                      <input
                        type="radio"
                        name="mainIssue"
                        value={option}
                        checked={selectedMainIssue === option}
                        onChange={() => {
                          setSelectedMainIssue(option);
                          setMainIssueError('');
                          setShowMainIssueOptions(false);
                        }}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              {mainIssueError ? <p className="v2-form-error">{mainIssueError}</p> : null}
            </fieldset>

            <label className="v2-form-field v2-form-field-full">
              Upload one recent essay, exam paper, or marked answer
              <input
                type="file"
                name="studentWork"
                className="v2-file-input"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp"
                required
              />
              <small>Required for Bryan’s live breakdown.</small>
            </label>

            <div className="v2-form-actions">
              <button type="submit" className="v2-btn v2-form-submit v2-form-submit-snapshot">
                Submit Application <ChevronRight size={16} strokeWidth={ICON_STROKE} />
              </button>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
};

const SnapshotCalBookingPage = () => (
  <section className="v2-section v2-program-section" id="snapshot-cal-booking">
    <div className="v2-container">
      <article className="v2-card v2-form-shell v2-form-shell-narrow">
        <div className="v2-form-head">
          <h1>Choose Your Snapshot Time on Cal.com</h1>
          <p>
            Pick the 20-minute slot that matches both your availability and Bryan’s availability first.
          </p>
        </div>
        <div className="v2-form-actions v2-form-actions-column">
          <a href={CAL_SNAPSHOT_PAID_BOOKING_URL} target="_blank" rel="noreferrer" className="v2-btn v2-form-submit v2-form-submit-snapshot">
            Open Cal.com Paid Booking
          </a>
          <button
            type="button"
            className="v2-btn v2-form-submit v2-form-submit-snapshot"
            onClick={() => {
              window.location.hash = SNAPSHOT_PAYMENT_HASH;
            }}
          >
            Continue to $97 Payment
          </button>
          <a href={SNAPSHOT_HASH} className="v2-form-text-link">Back to Snapshot form</a>
        </div>
      </article>
    </div>
  </section>
);

const SnapshotPaymentPage = () => (
  <section className="v2-section v2-program-section" id="snapshot-payment">
    <div className="v2-container">
      <article className="v2-card v2-form-shell v2-form-shell-narrow">
        <div className="v2-form-head">
          <h1>Complete Your $97 Snapshot Payment</h1>
          <p>
            Final step: complete the $97 payment to lock the slot you selected on Cal.com.
          </p>
        </div>
        <div className="v2-form-actions v2-form-actions-column">
          <button
            type="button"
            className="v2-btn v2-form-submit v2-form-submit-snapshot"
            onClick={() => {
              window.location.hash = SNAPSHOT_BOOKED_HASH;
            }}
          >
            I Completed the $97 Payment
          </button>
          <a href={SNAPSHOT_CAL_HASH} className="v2-form-text-link">Back to Cal.com booking step</a>
        </div>
      </article>
    </div>
  </section>
);

const SnapshotBookedPage = () => (
  <section className="v2-section v2-program-section" id="snapshot-booked">
    <div className="v2-container">
      <article className="v2-card v2-form-shell v2-form-shell-narrow">
        <div className="v2-form-head">
          <div className="v2-success-motion" role="img" aria-label="Application successfully received">
            <span className="v2-success-pulse" />
            <span className="v2-success-core">
              <span className="v2-success-check" />
            </span>
          </div>
          <h1>Your application is successfully received</h1>
          <p>
            A reply will be sent within 24-48 hours.
          </p>
        </div>
        <div className="v2-form-actions v2-form-actions-column">
          <a href="#" className="v2-form-text-link">Back Home</a>
        </div>
      </article>
    </div>
  </section>
);

const SprintApplicationPage = () => {
  const [showStudentProfileOptions, setShowStudentProfileOptions] = useState(false);
  const [showTriedOptions, setShowTriedOptions] = useState(false);
  const [showWillingnessOptions, setShowWillingnessOptions] = useState(false);
  const [showProgramTypeOptions, setShowProgramTypeOptions] = useState(false);
  const [selectedStudentProfile, setSelectedStudentProfile] = useState('');
  const [selectedTriedOptions, setSelectedTriedOptions] = useState([]);
  const [selectedWillingness, setSelectedWillingness] = useState('');
  const [selectedProgramType, setSelectedProgramType] = useState('');
  const [studentProfileError, setStudentProfileError] = useState('');
  const [willingnessError, setWillingnessError] = useState('');
  const [programTypeError, setProgramTypeError] = useState('');

  const toggleTriedOption = (option) => {
    setSelectedTriedOptions((prev) => (
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    ));
  };

  return (
    <section className="v2-section v2-program-section" id="sprint-application">
      <div className="v2-container">
        <article className="v2-card v2-form-shell">
          <div className="v2-form-head">
            <h1>Apply for the 8-Week Performance Sprint</h1>
            <p>
              For students ready to rebuild how they decode questions, structure answers, and perform under exam pressure.
            </p>
          </div>

          <form
            className="v2-form-grid"
            action={APPLICATION_FORM_ENDPOINT}
            method="POST"
            encType="multipart/form-data"
            onSubmit={(event) => {
              event.preventDefault();
              let hasError = false;
              if (!selectedStudentProfile) {
                setStudentProfileError('Please choose one option before continuing.');
                setShowStudentProfileOptions(true);
                hasError = true;
              } else {
                setStudentProfileError('');
              }

              if (!selectedWillingness) {
                setWillingnessError('Please choose one option before continuing.');
                setShowWillingnessOptions(true);
                hasError = true;
              } else {
                setWillingnessError('');
              }

              if (!selectedProgramType) {
                setProgramTypeError('Please choose one program preference before continuing.');
                setShowProgramTypeOptions(true);
                hasError = true;
              } else {
                setProgramTypeError('');
              }

              if (hasError) return;
              event.currentTarget.submit();
            }}
          >
          <input type="hidden" name="_subject" value="New 8-Week Performance Sprint Application" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={buildReturnUrlForHash(SPRINT_SUBMITTED_HASH)} />
          <input type="hidden" name="_url" value={buildReturnUrlForHash(SPRINT_HASH)} />
          <label className="v2-form-field">
            Parent name
            <input type="text" name="parentName" required />
          </label>

          <label className="v2-form-field">
            Student name
            <input type="text" name="studentName" required />
          </label>

          <label className="v2-form-field">
            Gmail
            <input type="email" name="email" required />
          </label>

          <label className="v2-form-field">
            WhatsApp number
            <input type="tel" name="whatsappNumber" required />
          </label>

          <label className="v2-form-field">
            Student level / exam
            <select name="studentExamLevel" defaultValue="" required>
              <option value="" disabled>Select one</option>
              {EXAM_LEVEL_OPTIONS.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>

          <label className="v2-form-field">
            Current grade / band
            <input type="text" name="currentGrade" required />
          </label>

          <label className="v2-form-field">
            Target grade / band
            <input type="text" name="targetGrade" required />
          </label>

            <fieldset className="v2-form-field v2-form-field-full v2-issue-picker">
              <legend>What best describes the student?</legend>
              <button
                type="button"
                className={`v2-issue-picker-trigger ${showStudentProfileOptions ? 'is-open' : ''}`}
                aria-expanded={showStudentProfileOptions}
                onClick={() => setShowStudentProfileOptions((prev) => !prev)}
              >
                <span className="v2-issue-picker-trigger-label">Click to choose one option</span>
                <span className={`v2-issue-picker-trigger-value ${selectedStudentProfile ? 'has-value' : ''}`}>
                  {selectedStudentProfile || 'No option selected yet'}
                </span>
              </button>
              <div className={`v2-issue-picker-options ${showStudentProfileOptions ? 'is-open' : ''}`}>
                <div className="v2-option-grid">
                  {STUDENT_PROFILE_OPTIONS.map((option) => (
                    <label key={option} className="v2-option-item">
                      <input
                        type="radio"
                        name="studentProfile"
                        value={option}
                        checked={selectedStudentProfile === option}
                        onChange={() => {
                          setSelectedStudentProfile(option);
                          setStudentProfileError('');
                          setShowStudentProfileOptions(false);
                        }}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              {studentProfileError ? <p className="v2-form-error">{studentProfileError}</p> : null}
            </fieldset>

            <fieldset className="v2-form-field v2-form-field-full v2-issue-picker">
              <legend>What has the student already tried?</legend>
              <button
                type="button"
                className={`v2-issue-picker-trigger ${showTriedOptions ? 'is-open' : ''}`}
                aria-expanded={showTriedOptions}
                onClick={() => setShowTriedOptions((prev) => !prev)}
              >
                <span className="v2-issue-picker-trigger-label">Click to choose one or more</span>
                <span className={`v2-issue-picker-trigger-value ${selectedTriedOptions.length ? 'has-value' : ''}`}>
                  {selectedTriedOptions.length ? selectedTriedOptions.join(', ') : 'No options selected yet'}
                </span>
              </button>
              <div className={`v2-issue-picker-options ${showTriedOptions ? 'is-open' : ''}`}>
                <div className="v2-option-grid">
                  {TRIED_OPTIONS.map((option) => (
                    <label key={option} className="v2-option-item">
                      <input
                        type="checkbox"
                        name="tried"
                        value={option}
                        checked={selectedTriedOptions.includes(option)}
                        onChange={() => toggleTriedOption(option)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </fieldset>

            <fieldset className="v2-form-field v2-form-field-full v2-issue-picker">
              <legend>Is the student willing to be corrected and practise differently?</legend>
              <button
                type="button"
                className={`v2-issue-picker-trigger ${showWillingnessOptions ? 'is-open' : ''}`}
                aria-expanded={showWillingnessOptions}
                onClick={() => setShowWillingnessOptions((prev) => !prev)}
              >
                <span className="v2-issue-picker-trigger-label">Click to choose one option</span>
                <span className={`v2-issue-picker-trigger-value ${selectedWillingness ? 'has-value' : ''}`}>
                  {selectedWillingness || 'No option selected yet'}
                </span>
              </button>
              <div className={`v2-issue-picker-options ${showWillingnessOptions ? 'is-open' : ''}`}>
                <div className="v2-option-grid">
                  {['Yes', 'Maybe', 'Not sure'].map((option) => (
                    <label key={option} className="v2-option-item">
                      <input
                        type="radio"
                        name="willingness"
                        value={option}
                        checked={selectedWillingness === option}
                        onChange={() => {
                          setSelectedWillingness(option);
                          setWillingnessError('');
                          setShowWillingnessOptions(false);
                        }}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              {willingnessError ? <p className="v2-form-error">{willingnessError}</p> : null}
            </fieldset>

            <fieldset className="v2-form-field v2-form-field-full v2-issue-picker">
              <legend>Are you interested in:</legend>
              <button
                type="button"
                className={`v2-issue-picker-trigger ${showProgramTypeOptions ? 'is-open' : ''}`}
                aria-expanded={showProgramTypeOptions}
                onClick={() => setShowProgramTypeOptions((prev) => !prev)}
              >
                <span className="v2-issue-picker-trigger-label">Click to choose one option</span>
                <span className={`v2-issue-picker-trigger-value ${selectedProgramType ? 'has-value' : ''}`}>
                  {selectedProgramType || 'No option selected yet'}
                </span>
              </button>
              <div className={`v2-issue-picker-options ${showProgramTypeOptions ? 'is-open' : ''}`}>
                <div className="v2-option-grid">
                  <label className="v2-option-item">
                    <input
                      type="radio"
                      name="programType"
                      value="Small group program — $1,440"
                      checked={selectedProgramType === 'Small group program — $1,440'}
                      onChange={() => {
                        setSelectedProgramType('Small group program — $1,440');
                        setProgramTypeError('');
                        setShowProgramTypeOptions(false);
                      }}
                    />
                    <span>Small group program — $1,440</span>
                  </label>
                  <label className="v2-option-item">
                    <input
                      type="radio"
                      name="programType"
                      value="1:1 program — $2,880"
                      checked={selectedProgramType === '1:1 program — $2,880'}
                      onChange={() => {
                        setSelectedProgramType('1:1 program — $2,880');
                        setProgramTypeError('');
                        setShowProgramTypeOptions(false);
                      }}
                    />
                    <span>1:1 program — $2,880</span>
                  </label>
                  <label className="v2-option-item">
                    <input
                      type="radio"
                      name="programType"
                      value="Not sure yet"
                      checked={selectedProgramType === 'Not sure yet'}
                      onChange={() => {
                        setSelectedProgramType('Not sure yet');
                        setProgramTypeError('');
                        setShowProgramTypeOptions(false);
                      }}
                    />
                    <span>Not sure yet</span>
                  </label>
                </div>
              </div>
              {programTypeError ? <p className="v2-form-error">{programTypeError}</p> : null}
            </fieldset>

          <label className="v2-form-field v2-form-field-full">
            In one sentence, what result do you want from Bryan’s coaching?
            <textarea name="desiredResult" rows={4} required />
          </label>

          <div className="v2-form-actions">
            <button type="submit" className="v2-btn v2-form-submit v2-form-submit-sprint">
              Submit Application
            </button>
          </div>
          </form>
        </article>
      </div>
    </section>
  );
};

const SprintSubmittedPage = () => (
  <section className="v2-section v2-program-section" id="sprint-submitted">
    <div className="v2-container">
      <article className="v2-card v2-form-shell v2-form-shell-narrow">
        <div className="v2-form-head">
          <div className="v2-success-motion" role="img" aria-label="Application successfully received">
            <span className="v2-success-pulse" />
            <span className="v2-success-core">
              <span className="v2-success-check" />
            </span>
          </div>
          <h1>Application Received</h1>
        </div>
        <div className="v2-form-actions v2-form-actions-column">
          <a href="#" className="v2-form-text-link">Back Home</a>
        </div>
      </article>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ padding: '3rem 0', textAlign: 'center', color: 'var(--v2-text-muted)', borderTop: '1px solid var(--v2-border)', backgroundColor: '#fafafa' }}>
    <div className="v2-container">
      <p style={{ fontSize: '0.875rem' }}>&copy; {new Date().getFullYear()} Elite English Coaching.</p>
    </div>
  </footer>
);

export default function AppV2() {
  const [route, setRoute] = useState(() => resolveRouteFromHash(window.location.hash));
  const isSecondaryRoute = route !== 'home';

  useEffect(() => {
    const onHashChange = () => setRoute(resolveRouteFromHash(window.location.hash));
    window.addEventListener('hashchange', onHashChange);
    onHashChange();
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    // Reset viewport when switching between home and apply route.
    window.scrollTo(0, 0);
  }, [route]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('v2-roadmap')) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
            return;
          }

          if (entry.target.classList.contains('v2-pop-on-reach')) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
            return;
          }

          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.v2-card, .v2-animate-fade-up, .v2-roadmap, .v2-pop-on-reach').forEach(el => {
      if (el.classList.contains('v2-roadmap')) {
        observer.observe(el);
        return;
      }

      if (el.classList.contains('v2-pop-on-reach')) {
        observer.observe(el);
        return;
      }

      if (!el.classList.contains('v2-animate-fade-up')) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(15px)';
        el.style.transition = 'all 0.8s ease';
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [route]);

  return (
    <div className="v2-page" style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      <Header isSecondaryRoute={isSecondaryRoute} />
      <main>
        {route === 'apply' && <PricingCTA />}
        {route === 'snapshot' && <SnapshotBookingPage />}
        {route === 'snapshot-cal' && <SnapshotCalBookingPage />}
        {route === 'snapshot-payment' && <SnapshotPaymentPage />}
        {route === 'snapshot-booked' && <SnapshotBookedPage />}
        {route === 'sprint' && <SprintApplicationPage />}
        {route === 'sprint-submitted' && <SprintSubmittedPage />}
        {route === 'home' && (
          <>
            <Hero />
            <StoryVision />
            <Problem />
            <Qualification />
            <InsideProgram />
            <FinalEngagement />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

