import React from 'react';
import { ShieldCheck, Calendar, MessageSquare, ArrowRight, Star } from 'lucide-react';
import { SPECIALIST_INFO } from '../data/content';

interface HeroProps {
  onBookClick: () => void;
  onServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onServicesClick }) => {
  return (
    <section className="relative pt-12 pb-16 px-4 sm:px-8 lg:px-12 border-b border-stone-800 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E24] border border-stone-800 text-[#E5A93C] text-xs font-medium uppercase tracking-widest mb-6 shadow-sm">
            <ShieldCheck size={14} className="text-[#E5A93C]" />
            <span>Психологическая помощь • Конфиденциально</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif leading-[1.1] text-white mb-6">
            Мир в душе — начало <br />
            <span className="text-[#E5A93C] italic underline underline-offset-8 decoration-1 decoration-[#E5A93C]/50">
              ваших перемен
            </span>
          </h1>

          <p className="text-base sm:text-lg text-stone-300 max-w-xl leading-relaxed mb-8 font-light">
            Безопасное, поддерживающее пространство для проживания личностных кризисов, преодоления тревоги, панических атак, выгорания и обретения внутренней опоры.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <button 
              onClick={onBookClick}
              className="w-full sm:w-auto bg-[#E5A93C] text-[#121212] px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#F39C12] transition-all duration-300 shadow-[0_0_20px_rgba(229,169,60,0.35)] hover:shadow-[0_0_35px_rgba(229,169,60,0.6)] flex items-center justify-center gap-3 active:scale-95 cursor-pointer group"
            >
              <Calendar size={16} />
              <span>Записаться на прием</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={onServicesClick}
              className="w-full sm:w-auto bg-[#1E1E24] hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-[#E5A93C]/40 px-7 py-4 rounded-full font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Выбрать услугу и цену</span>
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-stone-800/80 grid grid-cols-3 gap-6 w-full max-w-lg">
            <div>
              <div className="text-2xl font-serif text-[#E5A93C] font-semibold flex items-center gap-1">
                {SPECIALIST_INFO.rating}
                <Star size={16} className="fill-[#E5A93C] text-[#E5A93C]" />
              </div>
              <div className="text-[11px] text-stone-500 uppercase tracking-wider mt-1">Рейтинг отзывов</div>
            </div>
            <div>
              <div className="text-2xl font-serif text-white font-semibold">100%</div>
              <div className="text-[11px] text-stone-500 uppercase tracking-wider mt-1">Анонимность</div>
            </div>
            <div>
              <div className="text-2xl font-serif text-white font-semibold">Очно / Онлайн</div>
              <div className="text-[11px] text-stone-500 uppercase tracking-wider mt-1">Краснодар / Весь мир</div>
            </div>
          </div>

        </div>

        {/* Right Atmospheric Specialist Spotlight */}
        <div className="lg:col-span-5 relative z-10">
          <div className="relative mx-auto max-w-md">
            
            {/* Ambient Background Warm Glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#E5A93C]/20 via-transparent to-[#1E1E24] rounded-3xl blur-2xl opacity-70 -z-10"></div>

            <div className="bg-[#1E1E24] border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5A93C]/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-stone-800 border border-[#E5A93C]/30 flex items-center justify-center text-[#E5A93C] font-serif text-2xl font-bold shadow-inner">
                  А
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white">{SPECIALIST_INFO.name}</h3>
                  <p className="text-xs text-[#E5A93C] font-mono tracking-wide mt-0.5">Психолог • Психотерапевт</p>
                </div>
              </div>

              <blockquote className="text-sm text-stone-300 italic leading-relaxed bg-[#121212]/60 border-l-2 border-[#E5A93C] p-4 rounded-r-xl mb-6">
                «Главное в терапии — это принятие без осуждения. В моем кабинете вы можете позволить себе быть любым: уставшим, растерянным, тревожным. Шаг за шагом мы найдем выход и вернем ясность.»
              </blockquote>

              <div className="space-y-2.5 text-xs text-stone-400">
                <div className="flex items-center gap-2.5 bg-[#121212]/40 px-3.5 py-2.5 rounded-xl border border-stone-800/60">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Принимаю очно: <strong className="text-stone-200">г. Краснодар, 2-я Ямальская ул., 7</strong></span>
                </div>
                <div className="flex items-center gap-2.5 bg-[#121212]/40 px-3.5 py-2.5 rounded-xl border border-stone-800/60">
                  <MessageSquare size={14} className="text-[#E5A93C]" />
                  <span>Онлайн консультации: <strong className="text-stone-200">Telegram / WhatsApp</strong></span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-500 uppercase tracking-widest">
                <span>Этаж 3 • Офис 303</span>
                <a href={SPECIALIST_INFO.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-[#E5A93C] hover:underline flex items-center gap-1">
                  Написать в Telegram →
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
