import React from 'react';
import SectionHeading from './SectionHeading';
import InternalLink from './InternalLink';

interface Step {
  number: string;
  title: string;
  duration: string;
  points: string[];
}

interface HowItWorksProps {
  onNavigate?: (href: string) => void;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Discovery Call",
    duration: "30 mins",
    points: [
      "Understand your idea and target user",
      "Define what success looks like in week 1",
      "Decide if we're a fit"
    ]
  },
  {
    number: "02",
    title: "Scope & Blueprint",
    duration: "1 day",
    points: [
      "Identify the single core user flow to build",
      "Tech stack decision",
      "Wireframe of key screens",
      "Clear definition of 'done'"
    ]
  },
  {
    number: "03",
    title: "Build Week",
    duration: "5 days",
    points: [
      "Full focused build — one idea, one week",
      "Daily async update so you're never in the dark",
      "You can give feedback, but scope is locked"
    ]
  },
  {
    number: "04",
    title: "Launch & Handoff",
    duration: "2 days",
    points: [
      "Deployed to production with real URL",
      "Basic analytics setup (so you can measure)",
      "Codebase handoff + documentation",
      "1 week of post-launch support"
    ]
  }
];

const HowItWorks: React.FC<HowItWorksProps> = ({ onNavigate }) => {
  return (
    <section id="process" className="py-24 border-t border-zinc-900 scroll-mt-24">
      {/* Headings */}
      <SectionHeading title="The Process" subtitle="From Idea to Live Product — Here's How We Work" />
      
      <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed -mt-6 mb-16">
        No fluff. No long onboarding. Just focused execution to get your idea in front of real users — fast.
      </p>

      {/* Comparison Cards: Co-founder vs Agency */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {/* Left card: What you get with me */}
        <div className="border border-zinc-200 bg-zinc-950/80 p-8 rounded-sm relative overflow-hidden flex flex-col justify-between shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-200"></div>
          <div>
            <h3 className="text-xl font-bold text-zinc-100 font-mono uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              What you get with me
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-mono mt-0.5 shrink-0">✦</span>
                <span className="text-zinc-300 text-sm md:text-base leading-relaxed">I believe in your idea — not just your budget</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-mono mt-0.5 shrink-0">✦</span>
                <span className="text-zinc-300 text-sm md:text-base leading-relaxed">I make technical decisions, not just follow orders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-mono mt-0.5 shrink-0">✦</span>
                <span className="text-zinc-300 text-sm md:text-base leading-relaxed">Honest feedback on what to build and what to skip</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-mono mt-0.5 shrink-0">✦</span>
                <span className="text-zinc-300 text-sm md:text-base leading-relaxed">One person accountable for the entire product</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-mono mt-0.5 shrink-0">✦</span>
                <span className="text-zinc-300 text-sm md:text-base leading-relaxed">Speed — MVP live in a week, not months</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right card: Agency comparison */}
        <div className="border border-zinc-900 bg-zinc-950/20 p-8 rounded-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-zinc-500 font-mono uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
              vs. hiring a dev agency
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-zinc-700 font-mono mt-0.5 shrink-0">✗</span>
                <span className="text-zinc-500 text-sm md:text-base leading-relaxed">Agencies optimise for billable hours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-zinc-700 font-mono mt-0.5 shrink-0">✗</span>
                <span className="text-zinc-500 text-sm md:text-base leading-relaxed">You manage 5 people with no technical context</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-zinc-700 font-mono mt-0.5 shrink-0">✗</span>
                <span className="text-zinc-500 text-sm md:text-base leading-relaxed">Scope creep and delayed timelines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-zinc-700 font-mono mt-0.5 shrink-0">✗</span>
                <span className="text-zinc-500 text-sm md:text-base leading-relaxed">No ownership of your product outcome</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-zinc-700 font-mono mt-0.5 shrink-0">✗</span>
                <span className="text-zinc-500 text-sm md:text-base leading-relaxed">2–3 months to see anything working</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stepper Timeline Section */}
      <div className="mb-24">
        <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-12">The Steps</h3>

        {/* Mobile View: Vertical Timeline */}
        <div className="block md:hidden space-y-8 relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-zinc-850">
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <span className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full border border-zinc-800 bg-zinc-950 group-hover:border-zinc-400 transition-colors flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
              </span>
              
              <div className="border border-zinc-900 bg-zinc-950/40 p-6 rounded-sm">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-2xl font-bold text-zinc-100 font-mono tracking-tight">{step.number}</span>
                  <span className="text-[10px] font-mono uppercase bg-zinc-900 border border-zinc-850 text-zinc-400 px-2 py-0.5">
                    {step.duration}
                  </span>
                </div>
                <h4 className="text-base font-bold text-zinc-150 mb-3">{step.title}</h4>
                <ul className="space-y-2">
                  {step.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-xs text-zinc-400 flex items-start gap-2">
                      <span className="text-zinc-650">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Horizontal Stepper */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 relative">
          {/* Connecting line behind cards */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-zinc-900 -translate-y-1/2 -z-10"></div>

          {STEPS.map((step, idx) => (
            <div 
              key={idx}
              className="border border-zinc-900 bg-zinc-950/80 p-6 rounded-sm flex flex-col justify-between min-h-[260px] hover:border-zinc-600 transition-all duration-300 group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-3xl font-bold text-zinc-100 font-mono tracking-tight group-hover:text-zinc-200 transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[9px] font-mono uppercase bg-zinc-900 border border-zinc-855 text-zinc-400 px-2 py-0.5 rounded-sm">
                    {step.duration}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-zinc-200 uppercase tracking-wider mb-4 group-hover:text-zinc-100 transition-colors">
                  {step.title}
                </h4>
                <ul className="space-y-2">
                  {step.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-xs text-zinc-450 leading-relaxed flex items-start gap-2">
                      <span className="text-zinc-700 font-mono">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scope Block */}
      <div className="border border-zinc-900 bg-zinc-950/40 p-8 rounded-sm mb-24">
        <h3 className="text-xl font-bold text-zinc-100 font-mono uppercase tracking-wider mb-8 text-center md:text-left">
          What's included in an MVP week
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* In Scope */}
          <div>
            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="text-emerald-500">✓</span> In Scope
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-zinc-400 flex items-start gap-3">
                <span className="text-emerald-500">✓</span>
                <span>One core user flow, fully functional</span>
              </li>
              <li className="text-sm text-zinc-400 flex items-start gap-3">
                <span className="text-emerald-500">✓</span>
                <span>Mobile responsive web app or Flutter app</span>
              </li>
              <li className="text-sm text-zinc-400 flex items-start gap-3">
                <span className="text-emerald-500">✓</span>
                <span>Basic auth (if needed)</span>
              </li>
              <li className="text-sm text-zinc-400 flex items-start gap-3">
                <span className="text-emerald-500">✓</span>
                <span>Deployed with custom domain setup</span>
              </li>
              <li className="text-sm text-zinc-400 flex items-start gap-3">
                <span className="text-emerald-500">✓</span>
                <span>Source code ownership — yours, fully</span>
              </li>
              <li className="text-sm text-zinc-400 flex items-start gap-3">
                <span className="text-emerald-500">✓</span>
                <span>1 week post-launch bug fixes</span>
              </li>
            </ul>
          </div>

          {/* Out of Scope */}
          <div>
            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="text-zinc-600">✗</span> Out of Scope
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-zinc-500 flex items-start gap-3">
                <span className="text-zinc-700">✗</span>
                <span>Admin dashboards (unless core to MVP)</span>
              </li>
              <li className="text-sm text-zinc-500 flex items-start gap-3">
                <span className="text-zinc-700">✗</span>
                <span>Third-party integrations beyond essentials</span>
              </li>
              <li className="text-sm text-zinc-500 flex items-start gap-3">
                <span className="text-zinc-700">✗</span>
                <span>Redesigns mid-build</span>
              </li>
              <li className="text-sm text-zinc-500 flex items-start gap-3">
                <span className="text-zinc-700">✗</span>
                <span>Ongoing feature development</span>
              </li>
              <li className="text-sm text-zinc-500 flex items-start gap-3">
                <span className="text-zinc-700">✗</span>
                <span>Marketing or growth work</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom CTA Block */}
      <div className="border border-zinc-900 bg-zinc-950/60 p-12 rounded-sm text-center max-w-3xl mx-auto flex flex-col items-center">
        <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 tracking-tight mb-4">
          Ready to test your idea?
        </h3>
        <p className="text-zinc-450 text-sm md:text-base font-light max-w-lg mb-8 leading-relaxed">
          Most founders spend months planning. Let's spend a week building instead.
        </p>
        <InternalLink
          href="#contact"
          onNavigate={onNavigate}
          className="inline-flex items-center justify-center px-8 py-3.5 bg-zinc-100 text-zinc-950 font-mono text-xs uppercase tracking-[0.18em] font-bold hover:bg-zinc-300 transition-colors rounded-sm"
        >
          Let's Build Together
        </InternalLink>
      </div>
    </section>
  );
};

export default HowItWorks;
