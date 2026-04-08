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
  AlertCircle,
  ScanSearch,
  ShieldCheck,
  FileCheck2,
  Timer,
  SearchX,
  RotateCcw,
  Gauge
} from 'lucide-react';
import bryanPic from '../data/Bryan pic.png';
import storyBryan from '../data/story-bryan.png';
import tesolCert from '../data/World120hrTESOL_TEFLcert.pdf';
import tesolTranscript from '../data/Yong Ping Bryan Teng - TESOL Grades Transcript - WTA.pdf';
import tesolReference from '../data/Yong Ping Bryan Teng - TESOL Reference letter.pdf';
import testimonialImage from '../data/2025testimonial.jpg';

const ICON_STROKE = 1.25;
const EXAM_FOCUS = ['A-Level', 'IB', 'IELTS', 'TOEFL'];
const APPLY_HASH = '#/apply';

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

const EngagementBand = ({ title, subtitle, cta = 'Apply for Coaching' }) => (
  <div className="v2-engagement-band v2-animate-fade-up">
    <div>
      <p className="v2-engagement-title">{title}</p>
      <p className="v2-engagement-subtitle">{subtitle}</p>
    </div>
    <a href={APPLY_HASH} className="v2-btn v2-btn-primary" style={{ whiteSpace: 'nowrap' }}>
      {cta} <ChevronRight size={16} strokeWidth={ICON_STROKE} />
    </a>
  </div>
);

const StoryVision = () => {
  const [showProofs, setShowProofs] = useState(false);
  const [selectedProof, setSelectedProof] = useState('tesol-cert');
  const testimonialScrollRef = useRef(null);
  const proofDocs = [
    { id: 'tesol-cert', label: 'TESOL/TEFL Certificate', file: tesolCert },
    { id: 'tesol-transcript', label: 'TESOL Grades Transcript', file: tesolTranscript },
    { id: 'tesol-reference', label: 'TESOL Reference Letter', file: tesolReference }
  ];
  const activeProof = proofDocs.find((doc) => doc.id === selectedProof) ?? proofDocs[0];

  useEffect(() => {
    if (!showProofs) return;

    const viewport = testimonialScrollRef.current;
    if (!viewport) return;

    viewport.scrollTop = 0;
    const maxScroll = viewport.scrollHeight - viewport.clientHeight;
    if (maxScroll <= 0) return;

    let rafId;
    let startTime;
    const duration = 8000;

    const step = (timestamp) => {
      if (startTime === undefined) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      viewport.scrollTop = maxScroll * progress;
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    const startTimer = setTimeout(() => {
      rafId = requestAnimationFrame(step);
    }, 350);

    return () => {
      clearTimeout(startTimer);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [showProofs]);

  return (
    <section className="v2-section" id="story">
      <div className="v2-container">
        <SectionHeader
          badge="Founder Story"
          title="Bryan's Story"
          subtitle="The coaching model was built from real student patterns, not theory."
        />

      <article className="v2-card v2-story-card" style={{ maxWidth: '920px', margin: '0 auto' }}>
        <p style={{ color: 'var(--v2-text-secondary)', marginTop: '0.35rem', maxWidth: '72%' }}>
          Bryan noticed a clear pattern: many students were working hard, doing more papers, and still staying at B/C, while a smaller group
          did less but kept scoring A. The difference was not effort, it was thinking quality under pressure. That realization shaped this
          coaching model: stop overloading students with more content, and train them to decode questions, think like examiners, and execute
          with precision in timed conditions. The mission is simple: build repeatable high performance for committed students through a selective
          system of Application, Strategy Call, and Enrollment.
        </p>
        <button
            type="button"
            className="v2-btn v2-btn-primary v2-proof-trigger"
            style={{ marginTop: '1.1rem' }}
            onClick={() => setShowProofs((prev) => !prev)}
            aria-expanded={showProofs}
            aria-controls="proofs-panel"
        >
          View Proofs & Certificates
        </button>
        <img
          src={storyBryan}
          alt="Bryan portrait"
          className="v2-story-portrait"
        />
      </article>

        <div
          id="proofs-panel"
          className={`v2-proof-collapse ${showProofs ? 'is-open' : ''}`}
          aria-hidden={!showProofs}
        >
          <div className="v2-proof-grid" style={{ marginTop: '1.1rem' }}>
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
      </div>
    </section>
  );
};

const Header = ({ isApplyPage }) => (
  <header className="v2-header">
    <div className="v2-container v2-header-content">
      <div className="v2-logo">Elite English Edge</div>
      <a href={isApplyPage ? '#' : APPLY_HASH} className="v2-btn v2-btn-primary" style={{ padding: '0.6rem 2rem', fontSize: '0.75rem' }}>
        {isApplyPage ? 'Back Home' : 'Apply'}
      </a>
    </div>
  </header>
);

// 1. ABOVE THE FOLD
const Hero = () => (
  <section className="v2-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem', position: 'relative' }} id="home">
    {/* Dot grid */}
    <div style={{ position: 'absolute', inset: 0, opacity: 0.07, backgroundImage: 'radial-gradient(#c0392b 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
    
    <div className="v2-container" style={{ position: 'relative', zIndex: 1 }}>
      <div className="v2-card" style={{ maxWidth: '900px', margin: '0 auto', borderTop: '3px solid var(--v2-accent)', padding: '4rem' }}>
        <div className="v2-hero-intro v2-mb-4">
          <div className="v2-hero-portrait-wrap v2-animate-fade-up" aria-hidden="true">
            <img className="v2-hero-portrait" src={bryanPic} alt="" />
          </div>
          <div className="v2-hero-copy v2-text-center">
          <h1 className="v2-animate-fade-up v2-delay-100"
              style={{ fontFamily: 'var(--v2-font-heading)', fontSize: 'clamp(2.5rem, 4vw, 4.5rem)', lineHeight: 1.15, fontWeight: 700, marginBottom: '1.5rem', color: 'var(--v2-text-primary)' }}>
            Get from B/C to A in 8–12 Weeks<br />
            <span style={{ color: 'var(--v2-accent)', fontStyle: 'italic', fontSize: '0.8em', fontWeight: 400 }}>Without Studying More, By Training How You Think</span>
          </h1>
          
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
          <p>Most students fail because they practice wrong.</p>
          <p>This system rewires how you read, process, and answer questions under pressure.</p>
        </div>

        <div className="v2-grid-2 v2-animate-fade-up v2-delay-200"
             style={{ gap: '2rem', marginBottom: '2.25rem' }}>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '1.25rem' }}>
            {[
              { text: 'Decode any exam question in seconds (no confusion)', Icon: ScanSearch },
              { text: 'Stop losing marks to "careless mistakes"', Icon: ShieldCheck }
            ].map(({ text, Icon }, i) => (
              <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--v2-text-secondary)' }}>
                <Icon size={18} strokeWidth={1.8} color="#2aa889" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '1.25rem' }}>
            {[
              { text: 'Write answers that match examiner expectations', Icon: FileCheck2 },
              { text: 'Perform under time pressure with consistency', Icon: Timer }
            ].map(({ text, Icon }, i) => (
              <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', color: 'var(--v2-text-secondary)' }}>
                <Icon size={18} strokeWidth={1.8} color="#2aa889" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="v2-animate-fade-up v2-delay-300 v2-text-center">
          <a href={APPLY_HASH} className="v2-btn v2-btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.125rem' }}>
            Apply for Coaching <ChevronRight size={18} strokeWidth={ICON_STROKE} style={{ marginLeft: '0.5rem' }} />
          </a>
          <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: 'var(--v2-text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Only 20 students accepted for the first intake
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
        title="Hard work is not the problem. Thinking under pressure is." 
        subtitle="This is not normal tuition. You get a structured thinking framework plus live correction until your process is automatic." 
      />
      
      <div className="v2-problem-wrap">
        <div className="v2-problem-lead">
          <p>
            The bottleneck is not effort. It is decision quality under pressure.
          </p>
        </div>

        <div className="v2-problem-grid">
          <div className="v2-problem-item">
            <SearchX size={18} strokeWidth={1.8} />
            <div>
              <h4>Misread Questions</h4>
              <p>Students rush and answer before decoding what is truly asked.</p>
            </div>
          </div>
          <div className="v2-problem-item">
            <RotateCcw size={18} strokeWidth={1.8} />
            <div>
              <h4>Repeat Mistakes</h4>
              <p>More practice, same errors, because the thinking process stays uncorrected.</p>
            </div>
          </div>
          <div className="v2-problem-item">
            <Gauge size={18} strokeWidth={1.8} />
            <div>
              <h4>Pressure Drop</h4>
              <p>Performance falls in timed conditions even when content knowledge is good.</p>
            </div>
          </div>
        </div>

        <div className="v2-card v2-text-center" style={{ marginTop: '1rem' }}>
          <h3 className="v2-heading-md" style={{ fontSize: '1.7rem' }}>
            Top students don't study more.<br />
            <span style={{ color: 'var(--v2-accent)', fontStyle: 'italic' }}>They think differently.</span>
          </h3>
          <p className="v2-text-lg" style={{ marginBottom: '1.4rem' }}>
            They use the same mental sequence every time they face a question:
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
            {['Pause', 'Decode', 'Plan', 'Execute'].map((step, idx) => (
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
            Practice without correcting thinking = reinforcing mistakes.
          </p>
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
          {['Pause', 'Decode', 'Plan', 'Execute'].map((step, idx) => (
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
            Practice without correcting thinking = reinforcing mistakes.
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
        title="This is not normal tuition." 
        subtitle="You get a structured thinking framework plus live correction until your process is automatic." 
      />
      
      <div className="v2-grid-3 v2-mb-4">
        {[
          { Icon: Brain, title: 'Question Deconstruction', text: 'Understand exactly what is being asked before writing a single word.' },
          { Icon: Target, title: 'Pattern Recognition', text: 'See hidden repetition across exams. The core structures never change.' },
          { Icon: Crosshair, title: 'Answer Precision', text: 'Deliver exactly what gets marks, efficiently under time constraints.' },
        ].map(({ Icon, title, text }, i) => (
          <div key={i} className="v2-card">
            <Icon color="var(--v2-accent)" size={32} strokeWidth={ICON_STROKE} style={{ marginBottom: '1.5rem' }} />
            <h3 className="v2-heading-md" style={{ fontSize: '1.4rem' }}>{title}</h3>
            <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'var(--v2-text-secondary)', lineHeight: 1.7 }}>{text}</p>
          </div>
        ))}
      </div>

      <div className="v2-text-center">
        <p style={{ fontSize: '1.5rem', fontStyle: 'italic', fontFamily: 'var(--v2-font-heading)', color: 'var(--v2-text-secondary)' }}>
          "Once you see how examiners think, questions become predictable."
        </p>
      </div>

      <EngagementBand
        title="Want this to be your exam process too?"
        subtitle="Apply now and we will assess fit in a short strategy call."
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
          <p style={{ color: 'var(--v2-text-secondary)', marginBottom: '1.5rem' }}>8-session transformation cycle (extendable). Each call includes:</p>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
            {['Live exam breakdown', 'You explain your thinking process', 'Immediate, structural correction', 'Real-time, observable improvement'].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '1rem', color: 'var(--v2-text-primary)' }}>
                <span style={{ color: 'var(--v2-accent)', fontWeight: 700 }}>|</span> {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="v2-card">
          <h3 className="v2-heading-md" style={{ fontSize: '1.75rem' }}>High-Precision Homework System</h3>
          <p style={{ color: 'var(--v2-text-secondary)', marginBottom: '1.5rem' }}>Targeted exercises only. No random worksheets.</p>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
            {['Targeted exercise mapping', 'Comprehensive error tracking system', 'Weekly performance review'].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--v2-text-primary)' }}>
                <BookOpen size={16} strokeWidth={ICON_STROKE} color="var(--v2-text-muted)"/> {item}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--v2-border)' }}>
            <p style={{ fontSize: '1.1rem', fontFamily: 'var(--v2-font-heading)', color: 'var(--v2-text-secondary)', fontWeight: 600 }}>
              We don't track scores. We track thinking errors.
            </p>
          </div>
        </div>
      </div>

      <div className="v2-mb-4">
        <h3 className="v2-heading-md v2-text-center v2-mb-2" style={{ fontSize: '2rem' }}>Timeline</h3>
        <div className="v2-roadmap" aria-label="Program timeline roadmap">
          {[
            { phase: 'Phase 1 / Week 2-3', label: 'Clarity improves' },
            { phase: 'Phase 2 / Week 6-8', label: 'Grades start shifting' },
            { phase: 'Phase 3 / Week 8-12', label: 'Consistent A-level performance' },
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
          "Others teach content or give model answers.<br />We rewire the exam strategy entirely."
        </p>
        <p style={{ fontSize: '1.1rem', color: 'var(--v2-text-secondary)' }}>
          Content is not the bottleneck. <em style={{ fontFamily: 'var(--v2-font-heading)', color: 'var(--v2-text-primary)' }}>Thinking is.</em>
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
        subtitle="Selective intake for students ready to commit to real performance change."
      />

      <div className="v2-grid-2 v2-qual-grid" style={{ maxWidth: '980px', margin: '0 auto' }}>
        <div className="v2-card v2-qual-card v2-qual-card-good">
          <div className="v2-qual-head">
            <UserCheck color="#2f7a4f" size={30} strokeWidth={ICON_STROKE} />
            <h3 className="v2-heading-md" style={{ fontSize: '1.55rem', marginBottom: 0 }}>Best Fit Candidates</h3>
          </div>
          <ul className="v2-qual-list">
            {['Students stuck at B/C aiming for A', 'High achievers wanting distinction', 'Students inconsistent or anxious in exams'].map((t, i) => (
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
              <span>Students looking for shortcuts or passive learning</span>
            </li>
            <li className="v2-qual-list-item">
              <XCircle size={18} strokeWidth={1.9} color="#c0392b" />
              <span>Those unwilling to have their thinking challenged in real-time</span>
            </li>
          </ul>
        </div>
      </div>

      <EngagementBand
        title="If this sounds like you, don't wait until the next exam cycle."
        subtitle="Secure your place while intake is still open."
        cta="Apply Now"
      />
    </div>
  </section>
);

// 9. PRICING & 10. CTA
const PricingCTA = () => (
  <section className="v2-section" id="apply">
    <div className="v2-container">
      <SectionHeader 
        badge="Program Options" 
        title="Choose Your Coaching Track" 
        subtitle="Both options use the same examiner-thinking framework. Choose your support depth based on how fast and how personal you want the transformation." 
      />
      
      <div className="v2-grid-2" style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
        <div className="v2-card v2-pricing-card">
          <div className="v2-plan-tag">Best for driven students</div>
          <h3 className="v2-heading-md" style={{ fontSize: '1.5rem' }}>Group Format</h3>
          <div className="v2-price">$1,440</div>
          <p style={{ color: 'var(--v2-text-secondary)', marginBottom: '1.25rem' }}>High-leverage coaching with a small peer cohort and direct correction on your process.</p>
          <p className="v2-plan-note">2-part installment available</p>
          <a href="#apply" className="v2-btn v2-btn-secondary" style={{ width: '100%' }}>Apply for Group</a>
        </div>
        
        <div className="v2-card v2-pricing-card" style={{ borderColor: 'var(--v2-accent)', borderTop: '3px solid var(--v2-accent)', backgroundColor: '#fff8f7' }}>
          <div className="v2-plan-tag v2-plan-tag-featured">Most personalized</div>
          <h3 className="v2-heading-md" style={{ fontSize: '1.5rem', color: 'var(--v2-accent)' }}>1-on-1 Format</h3>
          <div className="v2-price">$2,880</div>
          <p style={{ color: 'var(--v2-text-secondary)', marginBottom: '1.25rem' }}>Complete, high-accountability coaching tailored to your exact blind spots and exam patterns.</p>
          <p className="v2-plan-note">Priority scheduling + deeper customization</p>
          <a href="#apply" className="v2-btn v2-btn-primary" style={{ width: '100%' }}>Apply for 1-on-1</a>
        </div>
      </div>
      
      <div className="v2-card v2-text-center v2-mb-4" style={{ maxWidth: '760px', margin: '0 auto 5rem auto', padding: '2.2rem' }}>
        <div className="v2-policy-badge" aria-hidden="true">
          <div className="v2-policy-badge-ring">
            <ShieldCheck size={34} strokeWidth={2.2} />
          </div>
        </div>
        <h3 className="v2-heading-md" style={{ fontSize: '1.5rem' }}>Performance Support Policy</h3>
        <p style={{ color: 'var(--v2-text-secondary)', marginBottom: '1rem' }}>
          If you follow the system and still do not improve, support continues until you do.
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--v2-text-muted)', fontStyle: 'italic' }}>
          No refunds. This is a transformation process, not a one-off class.
        </p>
      </div>
      
      <div className="v2-text-center" style={{ padding: '4rem 0', borderTop: '1px solid var(--v2-border)' }}>
        <h2 className="v2-heading-lg" style={{ marginBottom: '2rem' }}>
          Next exam cycle can be different.<br />
          <span style={{ color: 'var(--v2-accent)', fontStyle: 'italic' }}>Apply now and train your thinking before the pressure hits.</span>
        </h2>
        <a href="#apply" className="v2-btn v2-btn-primary">
          Book Your Strategy Call
        </a>
        <p style={{ marginTop: '0.9rem', fontSize: '0.82rem', color: 'var(--v2-text-muted)' }}>
          Limited intake. Application and fit check required.
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.v2-card, .v2-animate-fade-up').forEach(el => {
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
            <InsideProgram />
            <Qualification />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
