import React from 'react';
import { ShieldCheck, Sparkles, HeartHandshake, Compass, CheckCircle2, Award, Users } from 'lucide-react';
import { SPECIALIST_INFO, QUALITIES_LIST } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-8 lg:px-12 border-b border-stone-800 relative z-10 bg-[#121212]/60">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-[#E5A93C] uppercase tracking-widest font-mono">О психологе</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white mt-3 mb-6">
            Психолог Андрей — <span className="italic text-[#E5A93C]">пространство бережных перемен</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Практикующий психолог и психотерапевт в Краснодаре. В своей работе опирается на принципы глубокого уважения к личности, абсолютной анонимности и терапевтического спокойствия.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Specialist Bio Card */}
          <div className="lg:col-span-5 bg-[#1E1E24] p-8 rounded-3xl border border-stone-800 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#E5A93C]/5 rounded-full blur-3xl group-hover:bg-[#E5A93C]/10 transition-colors"></div>
            
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-stone-800">
              <div className="w-20 h-20 rounded-2xl bg-stone-800 border border-[#E5A93C]/40 flex items-center justify-center text-[#E5A93C] font-serif text-3xl font-bold shadow-lg">
                А
              </div>
              <div>
                <h3 className="text-2xl font-serif text-white">{SPECIALIST_INFO.fullName}</h3>
                <p className="text-xs text-[#E5A93C] font-mono mt-1">Психолог • Психотерапевт</p>
                <div className="flex items-center gap-1 mt-2 text-xs text-stone-400">
                  <Award size={14} className="text-[#E5A93C]" />
                  <span>Лицензированная практика</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed mb-6 italic">
              «В моей практике нет стандартизированных советов или готовых рецептов правильной жизни. Мы исследуем ваш уникальный внутренний мир, чтобы распутать сложные клубки переживаний, вернуть контакт с телом и обрести внутреннее равновесие.»
            </p>

            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#E5A93C] shrink-0 mt-0.5" />
                <span>Опыт индивидуальной и групповой психотерапии</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#E5A93C] shrink-0 mt-0.5" />
                <span>Специализированный опыт работы мужским и военным психологом</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#E5A93C] shrink-0 mt-0.5" />
                <span>Строгое соблюдение этического кодекса и тайны консультаций</span>
              </div>
            </div>

          </div>

          {/* Qualities Grid based on real reviews */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {QUALITIES_LIST.map((q, idx) => (
              <div 
                key={idx}
                className="bg-[#1E1E24]/80 p-6 rounded-2xl border border-stone-800 hover:border-[#E5A93C]/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#121212] border border-stone-800 flex items-center justify-center text-[#E5A93C] mb-4 group-hover:scale-110 group-hover:border-[#E5A93C]/50 transition-all">
                  {idx === 0 && <Award size={24} />}
                  {idx === 1 && <Sparkles size={24} />}
                  {idx === 2 && <HeartHandshake size={24} />}
                  {idx === 3 && <ShieldCheck size={24} />}
                </div>
                <h4 className="text-lg font-serif text-white mb-2 group-hover:text-[#E5A93C] transition-colors">
                  {q.title}
                </h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {q.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Philosophy Highlight Banner */}
        <div className="bg-gradient-to-r from-[#1E1E24] via-stone-900 to-[#1E1E24] p-8 sm:p-10 rounded-3xl border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-serif text-white">
              Готовы сделать первый шаг к внутреннему спокойствию?
            </h4>
            <p className="text-xs sm:text-sm text-stone-400">
              Запись доступна онлайн или через прямой диалог в Telegram / WhatsApp
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <a 
              href={SPECIALIST_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <span>WhatsApp</span>
            </a>
            <a 
              href={SPECIALIST_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0088cc]/10 hover:bg-[#0088cc]/20 text-[#2AABEE] border border-[#0088cc]/30 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <span>Telegram</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
