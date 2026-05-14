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
const HERO_EYEBROW_TEXT = 'NOT AN ENGLISH TUTORING PROGRAM, AN EXAM THINKING DIAGNOSTIC';
const HERO_DIAGNOSTICS = [
  {
    icon: SearchX,
    label: 'MISREAD',
    title: 'You’re not failing because you didn’t study enough.',
    detail: 'You’re losing marks because the question changes shape under pressure, and your answer no longer matches what the examiner is rewarding.',
  },
  {
    icon: FileCheck2,
    label: 'REPEAT',
    title: 'More practice papers won’t fix a broken thinking pattern.',
    detail: 'If every paper is approached with the same rushed interpretation, practice only makes the mistake more automatic.',
  },
  {
    icon: XCircle,
    label: 'FRUSTRATION',
    title: 'You keep paying for help, but the same pattern returns.',
    detail: 'More lessons, more notes, more hours, yet when the exam arrives, you still lose marks you should have secured.',
  },
  {
    icon: Gauge,
    label: 'REGRET',
    title: 'The worst part is knowing you knew it.',
    detail: 'You leave the exam replaying the question, realizing the answer was there, but your brain moved too fast to structure it properly.',
  },
  {
    icon: Target,
    label: 'PLATEAU',
    title: 'You’re too strong to fail, but not precise enough to break through.',
    detail: 'At this level, the gap is no longer effort. It is interpretation, structure, and execution under pressure.',
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

const EngagementBand = ({ title, subtitle, cta = 'Apply for an Audit' }) => (
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
              Some students were doing all of that…<br />
              and still stuck at <GradeMark>B/C</GradeMark>.
            </p>
            <p>
              At the same time, others were doing less,<br />
              but consistently scoring <GradeMark>A</GradeMark>.
            </p>
            <p>That’s where everything changed.</p>
            <p>
              The difference wasn’t effort.<br />
              It was what happened in the 30 seconds after reading the question.
            </p>
            <p>Top students didn’t rush.</p>
            <p>
              They paused.<br />
              They decoded what was actually being asked.<br />
              They planned before writing.
            </p>
            <p>That’s what this coaching fixes.</p>
            <p>
              Not how much you study,<br />
              but how you think when it matters.
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
  const [selectedProof, setSelectedProof] = useState('tesol-cert');
  const proofDocs = [
    { id: 'tesol-cert', label: 'TESOL/TEFL Certificate', file: tesolCert },
    { id: 'tesol-transcript', label: 'TESOL Grades Transcript', file: tesolTranscript },
    { id: 'tesol-reference', label: 'TESOL Reference Letter', file: tesolReference }
  ];
  const activeProof = proofDocs.find((doc) => doc.id === selectedProof) ?? proofDocs[0];

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
          <div className="v2-proof-preview">
            <object data={activeProof.file} type="application/pdf" className="v2-proof-frame">
              <p style={{ margin: 0, color: 'var(--v2-text-secondary)' }}>
                Preview is unavailable in this browser.{' '}
                <a href={activeProof.file} target="_blank" rel="noreferrer">Open document</a>
              </p>
            </object>
          </div>
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

const Header = ({ isApplyPage }) => (
  <header className="v2-header">
    <div className="v2-container v2-header-content">
      <div className="v2-logo">Bryan Teng | English Exam Performance Coach</div>
      <a href={isApplyPage ? '#' : APPLY_HASH} className="v2-btn v2-btn-primary v2-header-cta">
        {isApplyPage ? 'Back Home' : 'Apply'}
      </a>
    </div>
  </header>
);

// 1. ABOVE THE FOLD
const Hero = () => (
  <section className="v2-section v2-hero-section" id="home">
    <div className="v2-hero-lab-grid" aria-hidden="true"></div>
    
    <div className="v2-container" style={{ position: 'relative', zIndex: 1 }}>
      <div className="v2-card v2-hero-card">
        <div className="v2-hero-intro v2-mb-4">
          <div className="v2-hero-portrait-wrap v2-animate-fade-up" aria-hidden="true">
            <p className="v2-hero-eyebrow v2-hero-eyebrow-mobile">{HERO_EYEBROW_TEXT}</p>
            <img className="v2-hero-portrait" src={bryanPic} alt="" />
          </div>
          <div className="v2-hero-copy v2-text-center">
          <p className="v2-hero-eyebrow v2-hero-eyebrow-desktop">{HERO_EYEBROW_TEXT}</p>
          <h1 className="v2-hero-title v2-animate-fade-up v2-delay-100">
            Improve your English exam score by <br />
            <span className="v2-title-accent">+1 to +3 bands in 8-12 weeks</span> without doing more practice papers
          </h1>
          <p className="v2-hero-subtitle v2-animate-fade-up v2-delay-200">
            For IELTS, TOEFL, IB, A-level, and similar English exam students who study hard but still lose marks from misreading questions,
            rushing answers, or not knowing what the examiner is really asking for.
          </p>
          </div>
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

        <div className="v2-hero-diagnostics v2-animate-fade-up v2-delay-200" aria-label="Performance diagnostic warning signs">
          <p className="v2-hero-diagnostic-kicker">Performance Diagnostic</p>
          <ul>
            {HERO_DIAGNOSTICS.map(({ icon: Icon, label, title, detail }) => (
              <li key={title}>
                <div className="v2-diagnostic-visual" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.8} />
                  <span>{label}</span>
                </div>
                <span className="v2-diagnostic-copy">
                  <strong>{title}</strong>
                  <span>{detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="v2-animate-fade-up v2-delay-300 v2-text-center">
          <a href={APPLY_HASH} className="v2-btn v2-btn-primary v2-hero-cta">
            Apply for an Audit <ChevronRight size={18} strokeWidth={ICON_STROKE} style={{ marginLeft: '0.5rem' }} />
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

// 2. PROBLEM AGITATION
const Problem = () => (
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
      <span className="v2-exam-proof-visual">
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
          <div style={{ maxWidth: '760px', margin: '1.5rem auto 0', textAlign: 'center', display: 'grid', gap: '1rem' }}>
            <div>
              <p style={{ margin: 0, color: 'var(--v2-accent)', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                CLARITY
              </p>
              <p style={{ margin: '0.35rem 0 0', color: 'var(--v2-text-secondary)', lineHeight: 1.6 }}>
                The student finally understands why marks are being lost, not just what the correct answer should have been.
              </p>
            </div>
            <div>
              <p style={{ margin: 0, color: 'var(--v2-accent)', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                CONTROL
              </p>
              <p style={{ margin: '0.35rem 0 0', color: 'var(--v2-text-secondary)', lineHeight: 1.6 }}>
                Instead of rushing into the answer, they learn a repeatable process for decoding the question before writing.
              </p>
            </div>
            <div>
              <p style={{ margin: 0, color: 'var(--v2-accent)', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                CONSISTENCY
              </p>
              <p style={{ margin: '0.35rem 0 0', color: 'var(--v2-text-secondary)', lineHeight: 1.6 }}>
                Performance becomes less dependent on mood, panic, or luck and more dependent on a trained exam process.
              </p>
            </div>
            <p style={{ margin: '0.2rem 0 0', color: 'var(--v2-text-primary)', fontFamily: 'var(--v2-font-heading)', fontSize: '1.2rem', lineHeight: 1.45 }}>
              "The goal is not to study more. The goal is to perform with a system when the paper is in front of them."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

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
        cta="Apply Now"
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

const OfferCard = ({
  variant,
  header,
  title,
  subtext,
  description,
  features,
  cta,
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
      <a href={APPLY_HASH} className={`v2-btn v2-offer-btn v2-offer-btn-${variant}`}>
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

      <div className="v2-apply-journey" aria-label="What happens after you apply">
        <h3>What happens after you apply</h3>
        <div className="v2-apply-journey-grid">
          <div className="v2-apply-journey-item">
            <p>1</p>
            <h4>Application Review</h4>
            <span>We review the student profile, current grade, and target score for fit.</span>
          </div>
          <div className="v2-apply-journey-item">
            <p>2</p>
            <h4>Strategy Call</h4>
            <span>You get a live diagnostic of thinking gaps, pressure errors, and exam execution.</span>
          </div>
          <div className="v2-apply-journey-item">
            <p>3</p>
            <h4>Clear Next Step</h4>
            <span>Start the Sprint or begin with the Snapshot, based on what will move grades fastest.</span>
          </div>
        </div>
      </div>

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
          cta="Apply For The Sprint"
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
          cta="Book The Snapshot"
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
        <div className="v2-program-final-actions">
          <a href={APPLY_HASH} className="v2-btn v2-btn-primary">
            Apply For The Sprint <ChevronRight size={16} strokeWidth={ICON_STROKE} />
          </a>
          <a href={APPLY_HASH} className="v2-btn v2-program-secondary-action">
            Book The Snapshot
          </a>
        </div>
        <p className="v2-program-final-note">
          Snapshot reports are written within 24 hours. Sprint enrollment depends on fit.
        </p>
      </div>
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
  const [isApplyPage, setIsApplyPage] = useState(() => window.location.hash === APPLY_HASH);

  useEffect(() => {
    const onHashChange = () => setIsApplyPage(window.location.hash === APPLY_HASH);
    window.addEventListener('hashchange', onHashChange);
    onHashChange();
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    // Reset viewport when switching between home and apply route.
    window.scrollTo(0, 0);
  }, [isApplyPage]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('v2-roadmap')) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
            return;
          }

          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.v2-card, .v2-animate-fade-up, .v2-roadmap').forEach(el => {
      if (el.classList.contains('v2-roadmap')) {
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
  }, [isApplyPage]);

  return (
    <div className="v2-page" style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      <Header isApplyPage={isApplyPage} />
      <main>
        {isApplyPage ? (
          <PricingCTA />
        ) : (
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

