import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_LIST } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-12 border-b border-stone-800 relative z-10 bg-[#121212]/60">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-xs text-[#E5A93C] uppercase tracking-widest font-mono flex items-center justify-center gap-1.5">
            <HelpCircle size={14} />
            Важные ответы
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white mt-2">
            Часто задаваемые <span className="italic text-[#E5A93C]">вопросы</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-[#1E1E24] rounded-2xl border border-stone-800 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-white hover:text-[#E5A93C] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-[#121212] border border-stone-700 flex items-center justify-center shrink-0 text-[#E5A93C] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#E5A93C] text-[#121212]' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-stone-300 font-light leading-relaxed border-t border-stone-800/60 mt-2 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
