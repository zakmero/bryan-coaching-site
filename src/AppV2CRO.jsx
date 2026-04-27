import React from 'react';
import {
  BadgeCheck,
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Crosshair,
  FileSearch,
  GraduationCap,
  ScanSearch,
  ShieldCheck,
  Target,
  Workflow,
  XCircle,
} from 'lucide-react';
import bryanPic from '../data/Bryan pic.png';
import tesolCert from '../data/World120hrTESOL_TEFLcert.pdf';
import tesolTranscript from '../data/Yong Ping Bryan Teng - TESOL Grades Transcript - WTA.pdf';
import tesolReference from '../data/Yong Ping Bryan Teng - TESOL Reference letter.pdf';

const CTA_LABEL = 'Apply for Coaching';

function PrimaryCTA({ className = '' }) {
  return (
    <a href="#apply" className={`v3-cta ${className}`.trim()}>
      {CTA_LABEL} <ChevronRight size={18} strokeWidth={2} />
    </a>
  );
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="v3-section-head">
      {eyebrow ? <p className="v3-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {subtitle ? <p className="v3-subtitle">{subtitle}</p> : null}
    </div>
  );
}

function Header() {
  return (
    <header className="v3-header">
      <div className="v3-container v3-header-inner">
        <a href="#home" className="v3-logo">Bryan Teng | English Exam Performance Coach</a>
        <PrimaryCTA className="v3-header-cta" />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="v3-hero" id="home">
      <div className="v3-container">
        <div className="v3-hero-card">
          <div className="v3-hero-content">
            <p className="v3-eyebrow">Premium Exam Performance Coaching</p>
            <h1>
              Improve your English exam score by +1 to +3 bands in 8-12 weeks - without doing more practice papers
            </h1>
            <p className="v3-subtitle">
              For students preparing for IELTS, TOEFL, IB, A-level, or similar English exams who want consistent high performance under exam pressure.
            </p>
            <div className="v3-chip-row" aria-label="Exam types">
              <span>IELTS</span>
              <span>TOEFL</span>
              <span>IB</span>
              <span>A-level</span>
            </div>
            <PrimaryCTA />
            <p className="v3-capacity-note">Selective intake: first 20 clients only</p>
          </div>

          <div className="v3-hero-image-wrap" aria-hidden="true">
            <img src={bryanPic} alt="" className="v3-hero-image" />
          </div>
        </div>

        <div className="v3-authority-strip" role="note" aria-label="Authority credentials">
          120-hour TESOL/TEFL Certified • Accredited Training • 100% Assessment Completion
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="v3-section" id="problem">
      <div className="v3-container">
        <SectionHeader
          eyebrow="1. Problem"
          title="Students are not stuck because they are lazy"
          subtitle="Most students don't fail because they are lazy. They stay stuck because they practice the same thinking mistakes over and over."
        />

        <div className="v3-card-grid v3-grid-3">
          <article className="v3-card">
            <FileSearch size={22} />
            <h3>Misread Questions</h3>
            <p>They know the content, but they answer the wrong thing under pressure.</p>
          </article>
          <article className="v3-card">
            <Clock3 size={22} />
            <h3>Time Pressure Errors</h3>
            <p>Rushed decisions create avoidable mistakes and unstable scores.</p>
          </article>
          <article className="v3-card">
            <Workflow size={22} />
            <h3>Inconsistent Process</h3>
            <p>Each paper is approached differently, so results stay unpredictable.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function FalseBeliefSection() {
  return (
    <section className="v3-section v3-section-alt" id="belief">
      <div className="v3-container">
        <SectionHeader
          eyebrow="2. False Belief"
          title="More practice is not the real fix"
          subtitle="More practice does not automatically create better grades. If the thinking process is wrong, more practice only makes the wrong pattern stronger."
        />

        <div className="v3-card-grid v3-grid-2">
          <article className="v3-card v3-card-muted">
            <h3>Old Pattern</h3>
            <p>More papers to same thinking to same mistakes to same results</p>
          </article>
          <article className="v3-card v3-card-accent">
            <h3>New Pattern</h3>
            <p>Better thinking to better decisions to better answers to better grades</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function MechanismSection() {
  return (
    <section className="v3-section" id="mechanism">
      <div className="v3-container">
        <SectionHeader
          eyebrow="3. Unique Mechanism"
          title="The Examiner Thinking Method"
          subtitle="The Examiner Thinking Method trains students to pause, decode, plan, and answer with precision."
        />

        <div className="v3-card-grid v3-grid-4">
          <article className="v3-card">
            <ScanSearch size={22} />
            <h3>Pause</h3>
            <p>Stop autopilot and stabilize under pressure.</p>
          </article>
          <article className="v3-card">
            <Brain size={22} />
            <h3>Decode</h3>
            <p>Break the question down like an examiner.</p>
          </article>
          <article className="v3-card">
            <Target size={22} />
            <h3>Plan</h3>
            <p>Choose the scoring structure before writing.</p>
          </article>
          <article className="v3-card">
            <Crosshair size={22} />
            <h3>Answer</h3>
            <p>Execute with precision, relevance, and clarity.</p>
          </article>
        </div>

        <div className="v3-cta-band">
          <p>This is not normal tutoring. This is exam performance training.</p>
          <PrimaryCTA />
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="v3-section v3-section-alt" id="how-it-works">
      <div className="v3-container">
        <SectionHeader
          eyebrow="4. How Coaching Works"
          title="A structured system, not random tutoring sessions"
          subtitle="Every session targets thinking quality, decision speed, and exam execution."
        />

        <div className="v3-list-grid">
          <div className="v3-list-item">
            <CheckCircle2 size={18} />
            <span>Live exam question breakdowns</span>
          </div>
          <div className="v3-list-item">
            <CheckCircle2 size={18} />
            <span>Real-time correction of thought process</span>
          </div>
          <div className="v3-list-item">
            <CheckCircle2 size={18} />
            <span>Student explains reasoning, not just answers</span>
          </div>
          <div className="v3-list-item">
            <CheckCircle2 size={18} />
            <span>Targeted worksheets</span>
          </div>
          <div className="v3-list-item">
            <CheckCircle2 size={18} />
            <span>Error tracking system</span>
          </div>
          <div className="v3-list-item">
            <CheckCircle2 size={18} />
            <span>Weekly performance review</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="v3-section" id="timeline">
      <div className="v3-container">
        <SectionHeader
          eyebrow="5. Expected Timeline"
          title="What progress usually looks like"
          subtitle="Students build consistent exam execution in phases, not overnight."
        />

        <div className="v3-card-grid v3-grid-3">
          <article className="v3-card v3-time-card">
            <p className="v3-time-label">2-3 weeks</p>
            <h3>Clearer Question Interpretation</h3>
            <p>Less confusion, faster decoding, and fewer misreads.</p>
          </article>
          <article className="v3-card v3-time-card">
            <p className="v3-time-label">6-8 weeks</p>
            <h3>Measurable Grade Movement</h3>
            <p>Better answer quality starts showing in marked results.</p>
          </article>
          <article className="v3-card v3-time-card">
            <p className="v3-time-label">8-12 weeks</p>
            <h3>Consistent Exam Performance</h3>
            <p>Students perform with structure, precision, and control.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function AuthoritySection() {
  return (
    <section className="v3-section v3-section-alt" id="authority">
      <div className="v3-container">
        <SectionHeader
          eyebrow="6. Authority"
          title="I do not teach more content. I train students to think like examiners."
          subtitle="120-hour TESOL/TEFL certified, accredited course graduate, and 100% assessment completion."
        />

        <div className="v3-card-grid v3-grid-3">
          <article className="v3-card">
            <BadgeCheck size={22} />
            <h3>TESOL/TEFL Certified</h3>
            <p>120-hour formal certification focused on English teaching standards.</p>
            <a href={tesolCert} target="_blank" rel="noreferrer">View Certificate</a>
          </article>
          <article className="v3-card">
            <GraduationCap size={22} />
            <h3>Accredited Training Graduate</h3>
            <p>Completed accredited coursework designed for professional instruction.</p>
            <a href={tesolTranscript} target="_blank" rel="noreferrer">View Transcript</a>
          </article>
          <article className="v3-card">
            <ShieldCheck size={22} />
            <h3>100% Assessment Completion</h3>
            <p>All required assessments passed successfully in full.</p>
            <a href={tesolReference} target="_blank" rel="noreferrer">View Reference</a>
          </article>
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section className="v3-section" id="offer">
      <div className="v3-container">
        <SectionHeader
          eyebrow="7. Program Offer"
          title="1-1 or small group coaching"
          subtitle="Premium, selective coaching designed for serious students and parent-backed commitment."
        />

        <div className="v3-card-grid v3-grid-2">
          <article className="v3-card">
            <h3>Coaching Formats</h3>
            <ul className="v3-bullet-list">
              <li>1-1 coaching for maximum personalization</li>
              <li>Small group coaching for high-accountability learning</li>
              <li>Application required before enrollment</li>
            </ul>
          </article>
          <article className="v3-card">
            <h3>Enrollment Flow</h3>
            <div className="v3-flow-row" aria-label="Application flow">
              <span>Application</span>
              <span>Call</span>
              <span>Enrollment</span>
            </div>
            <p className="v3-capacity-note">Capacity is capped at the first 20 clients.</p>
          </article>
        </div>

        <div className="v3-offer-cta-wrap">
          <PrimaryCTA />
        </div>
      </div>
    </section>
  );
}

function QualificationSection() {
  return (
    <section className="v3-section v3-section-alt" id="qualification">
      <div className="v3-container">
        <SectionHeader
          eyebrow="8. Qualification"
          title="Selective by design"
          subtitle="This is not for students looking for another passive class. This is for committed students ready to change how they think during the exam."
        />

        <div className="v3-card-grid v3-grid-2">
          <article className="v3-card">
            <h3>Best Fit</h3>
            <ul className="v3-icon-list">
              <li><CheckCircle2 size={18} />Students stuck at B/C aiming for A</li>
              <li><CheckCircle2 size={18} />High achievers aiming for distinction</li>
              <li><CheckCircle2 size={18} />Students with inconsistent exam performance</li>
              <li><CheckCircle2 size={18} />Students who study hard but misread questions under pressure</li>
              <li><CheckCircle2 size={18} />Families ready to invest in premium coaching</li>
            </ul>
          </article>
          <article className="v3-card v3-card-muted">
            <h3>Not a Fit</h3>
            <ul className="v3-icon-list">
              <li><XCircle size={18} />Students looking for shortcuts</li>
              <li><XCircle size={18} />Students who want passive lessons without behavior change</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="v3-section" id="apply">
      <div className="v3-container">
        <div className="v3-final-cta">
          <p className="v3-eyebrow">9. Final Step</p>
          <h2>Apply now to see if Bryan's coaching is the right fit.</h2>
          <p>
            If accepted, you will move to a strategy call and a custom performance plan for your exam timeline.
          </p>
          <PrimaryCTA />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="v3-footer">
      <div className="v3-container v3-footer-inner">
        <p>Elite English Coaching</p>
        <p>Selective intake • Application required</p>
      </div>
    </footer>
  );
}

export default function AppV2() {
  return (
    <div className="v3-page">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <FalseBeliefSection />
        <MechanismSection />
        <HowItWorksSection />
        <TimelineSection />
        <AuthoritySection />
        <OfferSection />
        <QualificationSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

