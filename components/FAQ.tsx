import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import InternalLink from './InternalLink';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Can you really build an MVP in a week?",
    answer: "Yes — but only if the scope is right. A week works when we focus on one core user flow. Before we start, we spend a day scoping and cutting everything that isn't essential. If your idea genuinely needs more time, I'll tell you upfront rather than overpromise."
  },
  {
    question: "What kind of ideas are a good fit?",
    answer: "Best fit: web apps, mobile apps, SaaS tools, marketplaces, and internal tools. If your core idea can be validated with a single user flow — you're a great fit. If you need complex integrations, hardware, or enterprise compliance from day one — we should talk before committing."
  },
  {
    question: "What do I need to bring to the table?",
    answer: "Just clarity on the problem you're solving and who you're solving it for. No technical knowledge needed. No designs needed. We figure out the rest together in the Blueprint day."
  },
  {
    question: "Who owns the code?",
    answer: "You do. 100%. Full source code handoff at the end of the project. No lock-in, no licensing fees."
  },
  {
    question: "What happens after the MVP is live?",
    answer: "You test it with real users. If you need more features built, we can plan a follow-up sprint. I also offer a monthly retainer for founders who want an ongoing technical co-founder relationship."
  },
  {
    question: "How much does it cost?",
    answer: "Pricing depends on complexity. A simple web MVP starts at ₹75,000. A Flutter mobile app MVP starts at ₹1,25,000. Exact pricing is confirmed after the Blueprint day when scope is clear."
  },
  {
    question: "Do you take equity instead of cash?",
    answer: "For the right idea — yes, we can talk. Equity deals are evaluated case by case based on market opportunity, founder commitment, and stage. Reach out and let's discuss."
  },
  {
    question: "How do we communicate during the build week?",
    answer: "Async by default — daily written update every evening. You can drop feedback anytime. We do a short call at start and end of the week. No endless meetings."
  },
  {
    question: "What tech stack do you use?",
    answer: "Depends on what's right for your product:\n- Web apps: Next.js + Tailwind + Supabase\n- Mobile apps: Flutter\n\nI won't use a stack just because it's trendy — I use what ships fast and scales cleanly."
  },
  {
    question: "I'm not based in Noida / India. Can we still work together?",
    answer: "Absolutely. All work is remote. I've worked with founders across India and internationally. Time zone alignment is the only thing we'll check."
  }
];

interface FAQProps {
  onNavigate?: (href: string) => void;
}

const FAQ: React.FC<FAQProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 border-t border-zinc-900 scroll-mt-24 bg-black/25">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading title="FAQ" subtitle="Questions founders usually ask" />
        
        <div className="border-t border-zinc-900 mt-12">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-zinc-900">
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                >
                  <span className="font-bold text-sm md:text-base text-zinc-150 group-hover:text-zinc-100 transition-colors duration-250">
                    {item.question}
                  </span>
                  <span className="text-zinc-550 text-xl font-mono ml-4 shrink-0 transition-transform duration-250">
                    {isOpen ? '×' : '+'}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed whitespace-pre-line pr-8">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-xs md:text-sm text-zinc-500 font-mono">
          Still have a question? →{' '}
          <InternalLink
            href="#contact"
            onNavigate={onNavigate}
            className="text-zinc-350 hover:text-white underline transition-colors"
          >
            Let's talk
          </InternalLink>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
