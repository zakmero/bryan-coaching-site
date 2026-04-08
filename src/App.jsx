import React, { useEffect } from 'react';
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
  AlertCircle
} from 'lucide-react';
import bryanPic from '../data/Bryan pic.png';

const ICON_STROKE = 1.25;

// Reusable Components
const SectionHeader = ({ badge, title, subtitle }) => (
  <div className="mb-4 text-center">
    {badge && <div className="badge animate-fade-up">{badge}</div>}
    <h2 className="heading-lg animate-fade-up delay-100">{title}</h2>
    {subtitle && <p className="text-lg animate-fade-up delay-200" style={{ maxWidth: '750px', margin: '0 auto' }}>{subtitle}</p>}
  </div>
);

const Header = () => (
  <header className="header">
    <div className="container header-content">
      <div className="logo">Elite English Edge</div>
      <a href="#apply" className="btn btn-primary" style={{ padding: '0.6rem 2rem', fontSize: '0.75rem' }}>
        Apply
      </a>
    </div>
  </header>
);

// 1. ABOVE THE FOLD
const Hero = () => (
  <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem', position: 'relative' }} id="home">
    <div style={{ position: 'absolute', inset: 0, opacity: 0.15, backgroundImage: 'radial-gradient(var(--border-medium) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
    
    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <div className="editorial-card" style={{ maxWidth: '900px', margin: '0 auto', borderTop: '3px solid var(--accent-gold)', padding: '4rem' }}>
        <div className="hero-intro mb-4">
          <div className="hero-portrait-wrap animate-fade-up" aria-hidden="true">
            <img className="hero-portrait" src={bryanPic} alt="" />
          </div>

          <div className="hero-copy text-center">
            <h1 className="animate-fade-up delay-100" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 4vw, 4.5rem)', lineHeight: 1.15, fontWeight: 500, marginBottom: '1.5rem', color: '#fff' }}>
              Get from B/C to A in 8-12 Weeks<br />
              <span className="text-accent" style={{ fontStyle: 'italic', fontSize: '0.8em' }}>Without Studying More, By Training How You Think</span>
            </h1>
            
            <p className="text-lg animate-fade-up delay-200" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-primary)' }}>
              Most students fail because they practice wrong.<br />
              This system rewires how you read, process, and answer questions under pressure.
            </p>
          </div>
        </div>

        <div className="grid-2 animate-fade-up delay-200" style={{ gap: '2rem', borderTop: '1px solid var(--border-medium)', paddingTop: '2.5rem', marginBottom: '3rem' }}>
           <ul style={{ listStyle: 'none', display: 'grid', gap: '1.25rem', color: 'var(--text-secondary)' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ marginTop: '0.5rem', width: '4px', height: '4px', backgroundColor: 'var(--accent-gold)', flexShrink: 0 }}></div>
                <span>Decode any exam question in seconds (no confusion)</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ marginTop: '0.5rem', width: '4px', height: '4px', backgroundColor: 'var(--accent-gold)', flexShrink: 0 }}></div>
                <span>Stop losing marks to "careless mistakes"</span>
              </li>
           </ul>
           <ul style={{ listStyle: 'none', display: 'grid', gap: '1.25rem', color: 'var(--text-secondary)' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ marginTop: '0.5rem', width: '4px', height: '4px', backgroundColor: 'var(--accent-gold)', flexShrink: 0 }}></div>
                <span>Write answers that match examiner expectations</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ marginTop: '0.5rem', width: '4px', height: '4px', backgroundColor: 'var(--accent-gold)', flexShrink: 0 }}></div>
                <span>Perform under time pressure with consistency</span>
              </li>
           </ul>
        </div>

        <div className="animate-fade-up delay-300 text-center">
          <a href="#apply" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.125rem' }}>
            Apply for Coaching <ChevronRight size={18} strokeWidth={ICON_STROKE} style={{ marginLeft: '0.5rem' }} />
          </a>
          <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Only 20 students accepted for the first intake
          </p>
        </div>
      </div>
    </div>
  </section>
);

// 2. PROBLEM AGITATION
const Problem = () => (
  <section className="section" id="problem">
    <div className="container">
      <SectionHeader 
        badge="The Status Quo" 
        title="You're already working hard." 
        subtitle="Past papers. Notes. Memorisation." 
      />
      
      <div className="editorial-card text-center" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        <p className="text-lg" style={{ fontSize: '2rem', lineHeight: '1.4', fontWeight: 300, color: 'var(--text-primary)' }}>
          The problem isn't effort.<br /><br />
          It's <span className="highlight italic">how you think</span> when facing the question.
        </p>
      </div>
    </div>
  </section>
);

// 3. AHA MOMENT
const AhaMoment = () => (
  <section className="section" id="aha" style={{ backgroundColor: 'var(--bg-card-alt)' }}>
    <div className="container">
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 className="heading-lg">Top students don't study more. <br/><span className="text-accent italic">They think differently.</span></h2>
        <p className="text-lg mb-4">They don't guess. When they see a paper, they:</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem' }}>
          {['Pause', 'Decode', 'Plan', 'Execute'].map((step, idx) => (
            <div key={idx} style={{ borderBottom: '1px solid var(--accent-gold)', paddingBottom: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontStyle: 'italic', color: 'var(--text-primary)' }}>
              {idx + 1}. {step}
            </div>
          ))}
        </div>
        
        <div className="editorial-card" style={{ borderTop: '2px solid var(--border-medium)' }}>
          <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1rem' }}>The Insight</p>
          <p style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>Practice without correcting thinking = reinforcing mistakes.</p>
        </div>
      </div>
    </div>
  </section>
);

// 4. UNIQUE MECHANISM
const Mechanism = () => (
  <section className="section" id="mechanism">
    <div className="container">
      <SectionHeader 
        badge="The Examiner Thinking System" 
        title="I don't teach content." 
        subtitle="I train you to think like the examiner." 
      />
      
      <div className="grid-3 mb-4">
        <div className="editorial-card">
          <Brain color="var(--accent-gold)" size={32} strokeWidth={ICON_STROKE} style={{ marginBottom: '1.5rem' }} />
          <h3 className="heading-md" style={{ fontSize: '1.5rem' }}>Question Deconstruction</h3>
          <p className="text-secondary" style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
            Understand exactly what is being asked before writing a single word.
          </p>
        </div>
        
        <div className="editorial-card">
          <Target color="var(--accent-gold)" size={32} strokeWidth={ICON_STROKE} style={{ marginBottom: '1.5rem' }} />
          <h3 className="heading-md" style={{ fontSize: '1.5rem' }}>Pattern Recognition</h3>
          <p className="text-secondary" style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
            See hidden repetition across exams. The core structures never change.
          </p>
        </div>
        
        <div className="editorial-card">
          <Crosshair color="var(--accent-gold)" size={32} strokeWidth={ICON_STROKE} style={{ marginBottom: '1.5rem' }} />
          <h3 className="heading-md" style={{ fontSize: '1.5rem' }}>Answer Precision</h3>
          <p className="text-secondary" style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
            Deliver exactly what gets marks, efficiently under time constraints.
          </p>
        </div>
      </div>

      <div className="text-center">
        <p className="italic" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
          "Once you see how examiners think, questions become predictable."
        </p>
      </div>
    </div>
  </section>
);

// 5. DELIVERY & 6. TIMELINE & 7. DIFFERENTIATION
const InsideProgram = () => (
  <section className="section" id="delivery" style={{ backgroundColor: 'var(--bg-card-alt)' }}>
    <div className="container">
      <SectionHeader badge="Delivery Framework" title="Inside the Program" />
      
      <div className="grid-2 mb-4">
        <div className="editorial-card">
          <h3 className="heading-md" style={{ fontSize: '1.75rem' }}>1–2 Sessions per Week</h3>
          <p className="text-secondary mb-2">8 sessions total (extendable). Each live session includes:</p>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem', color: 'var(--text-primary)' }}>
            <li style={{ display: 'flex', gap: '1rem' }}><span className="text-accent">|</span> Live exam breakdown</li>
            <li style={{ display: 'flex', gap: '1rem' }}><span className="text-accent">|</span> You explain your thinking process</li>
            <li style={{ display: 'flex', gap: '1rem' }}><span className="text-accent">|</span> Immediate, structural correction</li>
            <li style={{ display: 'flex', gap: '1rem' }}><span className="text-accent">|</span> Real-time, observable improvement</li>
          </ul>
        </div>
        
        <div className="editorial-card">
          <h3 className="heading-md" style={{ fontSize: '1.75rem' }}>The Homework System</h3>
          <p className="text-secondary mb-2">Targeted exercises, strictly no random practice.</p>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem', color: 'var(--text-primary)' }}>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><BookOpen size={16} strokeWidth={ICON_STROKE} color="var(--text-muted)"/> Targeted exercise mapping</li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><BookOpen size={16} strokeWidth={ICON_STROKE} color="var(--text-muted)"/> Comprehensive error tracking system</li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><BookOpen size={16} strokeWidth={ICON_STROKE} color="var(--text-muted)"/> Weekly performance review</li>
          </ul>
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-medium)' }}>
            <p style={{ fontSize: '1.125rem', fontFamily: 'var(--font-heading)', color: 'var(--text-secondary)' }}>
              We don't track scores. We track thinking errors.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-4">
         <h3 className="heading-md text-center mb-2" style={{ fontSize: '2rem' }}>Timeline</h3>
         <div className="grid-3">
            <div className="editorial-card" style={{ padding: '2rem' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phase 1 / Week 2-3</p>
              <h4 className="heading-md" style={{ fontSize: '1.5rem', marginBottom: 0 }}>Clarity improves</h4>
            </div>
            <div className="editorial-card" style={{ padding: '2rem' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phase 2 / Week 6-8</p>
              <h4 className="heading-md" style={{ fontSize: '1.5rem', marginBottom: 0 }}>Grades start shifting</h4>
            </div>
            <div className="editorial-card" style={{ padding: '2rem' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phase 3 / Week 8-12</p>
              <h4 className="heading-md" style={{ fontSize: '1.5rem', marginBottom: 0 }}>Consistent A-level performance</h4>
            </div>
         </div>
      </div>

      <div className="editorial-card text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p className="heading-md" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
          "Others teach content or give model answers.<br /> We rewire the exam strategy entirely."
        </p>
        <p className="text-secondary" style={{ fontSize: '1.125rem' }}>
          Content is not the bottleneck. <span className="text-primary italic">Thinking is.</span>
        </p>
      </div>

    </div>
  </section>
);

// 8. WHO THIS IS FOR
const Qualification = () => (
  <section className="section" id="qualification">
    <div className="container">
      <SectionHeader title="Application Criteria" subtitle="This is a selective program designed only for students who are ready to change their approach." />
      
      <div className="grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="editorial-card border-top">
          <UserCheck color="var(--accent-gold)" size={28} strokeWidth={ICON_STROKE} style={{ marginBottom: '1.5rem' }} />
          <h3 className="heading-md" style={{ fontSize: '1.5rem' }}>Who this is for:</h3>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem', color: 'var(--text-secondary)' }}>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--text-primary)' }}></div> Students stuck at B/C aiming for A</li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--text-primary)' }}></div> High achievers wanting distinction</li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--text-primary)' }}></div> Students inconsistent or anxious in exams</li>
          </ul>
        </div>
        
        <div className="editorial-card" style={{ borderTop: '3px solid var(--border-medium)' }}>
          <UserX color="var(--text-muted)" size={28} strokeWidth={ICON_STROKE} style={{ marginBottom: '1.5rem' }} />
          <h3 className="heading-md" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>Not suitable for:</h3>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem', color: 'var(--text-muted)' }}>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>- Students looking for shortcuts or passive learning</li>
            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>- Those unwilling to have their thinking challenged in real-time</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// 9. PRICING & 10. RISK REVERSAL
const PricingCTA = () => (
  <section className="section" id="apply">
    <div className="container">
      <SectionHeader 
        badge="Engagement" 
        title="This is not tuition." 
        subtitle="This is performance training." 
      />
      
      <div className="grid-2" style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
        <div className="editorial-card pricing-card">
          <h3 className="heading-md" style={{ fontSize: '1.5rem' }}>Group Format</h3>
          <div className="price">$1,440</div>
          <p className="text-secondary mb-4">High-leverage coaching with a small peer cohort.</p>
          <a href="#apply" className="btn btn-secondary" style={{ width: '100%' }}>Apply For Group</a>
        </div>
        
        <div className="editorial-card pricing-card card-true">
          <h3 className="heading-md" style={{ fontSize: '1.5rem', color: 'var(--accent-gold)' }}>1-on-1 Format</h3>
          <div className="price">$2,880</div>
          <p className="text-secondary mb-4" style={{ color: 'var(--text-primary)' }}>Complete, hyper-personalized attention to rewire your process.</p>
          <a href="#apply" className="btn btn-primary" style={{ width: '100%' }}>Apply For 1-on-1</a>
        </div>
      </div>
      
      <div className="editorial-card text-center mb-4" style={{ maxWidth: '700px', margin: '0 auto 6rem auto', padding: '2rem' }}>
        <h3 className="heading-md" style={{ fontSize: '1.5rem' }}>The Policy</h3>
        <p className="text-secondary" style={{ marginBottom: '1rem' }}>
          If you apply the system and don't improve, you get continued support until you do.
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
          No refunds. Extra support provided if fully compliant. Extensions available.
        </p>
      </div>
      
      <div className="text-center" style={{ padding: '4rem 0', borderTop: '1px solid var(--border-light)' }}>
        <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>
          You can keep practicing blindly...<br />
          <span className="text-accent italic">Or fix how you think, once.</span>
        </h2>
        <a href="#apply" className="btn btn-primary">
          Apply Now (20 Students Only)
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ padding: '3rem 0', textAlign: 'center', color: 'var(--text-muted)' }}>
    <div className="container">
      <p style={{ fontSize: '0.875rem' }}>&copy; {new Date().getFullYear()} Elite English Coaching.</p>
    </div>
  </footer>
);

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.editorial-card, .animate-fade-up').forEach(el => {
      if(!el.classList.contains('animate-fade-up')) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(15px)';
        el.style.transition = 'all 0.8s ease';
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <AhaMoment />
        <Mechanism />
        <InsideProgram />
        <Qualification />
        <PricingCTA />
      </main>
      <Footer />
    </>
  );
}
