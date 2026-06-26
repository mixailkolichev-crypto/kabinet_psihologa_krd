import React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { REVIEWS_LIST } from '../data/content';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 px-4 sm:px-8 lg:px-12 border-b border-stone-800 relative z-10 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs text-[#E5A93C] uppercase tracking-widest font-mono">Социальное доказательство • 5.0 ★★★★★</span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white mt-2">
              Отзывы <span className="italic text-[#E5A93C]">клиентов</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-[#1E1E24] px-4 py-2 rounded-xl border border-stone-800 text-xs text-stone-300">
            <ShieldCheck size={16} className="text-[#E5A93C]" />
            <span>Реальные подтвержденные отзывы с независимых площадок</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {REVIEWS_LIST.map((rev) => (
            <div 
              key={rev.id}
              className="bg-[#1E1E24] p-8 rounded-3xl border border-stone-800 hover:border-[#E5A93C]/40 flex flex-col justify-between transition-all duration-300 relative group shadow-xl"
            >
              <Quote size={40} className="absolute top-6 right-6 text-stone-800 group-hover:text-[#E5A93C]/10 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#F1C40F] tracking-widest text-sm">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-[#121212] px-2.5 py-1 rounded-full text-stone-400 border border-stone-800">
                    {rev.tag}
                  </span>
                </div>

                <p className="text-sm text-stone-300 italic leading-relaxed mb-6 font-light">
                  «{rev.text}»
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#121212] border border-stone-700 flex items-center justify-center font-serif font-bold text-[#E5A93C] text-xs">
                    {rev.author[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">{rev.author}</h4>
                    <span className="text-[10px] text-stone-500 font-mono">{rev.date}</span>
                  </div>
                </div>
                <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <span>✓ Проверен</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
