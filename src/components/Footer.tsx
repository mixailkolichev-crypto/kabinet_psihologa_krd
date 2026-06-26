import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, Shield, ArrowUp } from 'lucide-react';
import { SPECIALIST_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacts" className="relative z-10 bg-[#0a0a0a] text-stone-400 border-t border-stone-800 pt-16 pb-12 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-800">
        
        {/* Contacts Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex flex-col">
            <span className="text-[#E5A93C] font-serif italic text-2xl tracking-wide uppercase">
              Кабинет психолога
            </span>
            <span className="text-[10px] text-stone-500 uppercase tracking-widest mt-1">
              Психотерапевт в Краснодаре • Андрей
            </span>
          </div>

          <p className="text-xs text-stone-400 leading-relaxed max-w-sm font-light">
            Профессиональная психологическая помощь. Терапия тревоги, мужских кризисов, эмоционального выгорания и панических атак.
          </p>

          <div className="space-y-3 pt-2 text-sm">
            <div className="flex items-center gap-3 text-stone-200">
              <Phone size={16} className="text-[#E5A93C]" />
              <a href={`tel:${SPECIALIST_INFO.phoneRaw}`} className="hover:text-[#E5A93C] font-semibold tracking-wide transition-colors">
                {SPECIALIST_INFO.phoneDisplay}
              </a>
            </div>
            
            <div className="flex items-start gap-3 text-xs text-stone-300">
              <MapPin size={16} className="text-[#E5A93C] shrink-0 mt-0.5" />
              <span>{SPECIALIST_INFO.addressFull}</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-stone-400">
              <Clock size={16} className="text-[#E5A93C]" />
              <span>{SPECIALIST_INFO.hours}</span>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <a 
              href={SPECIALIST_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-black px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-[#25D366]/20"
            >
              <span>WhatsApp</span>
            </a>
            <a 
              href={SPECIALIST_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2AABEE] text-black px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-[#2AABEE]/20"
            >
              <MessageCircle size={14} />
              <span>Telegram</span>
            </a>
          </div>
        </div>

        {/* Interactive Map Placeholder / Embed Column */}
        <div className="lg:col-span-7 flex flex-col">
          <h4 className="text-xs text-[#E5A93C] uppercase tracking-widest font-mono mb-4 flex items-center justify-between">
            <span>Расположение кабинета</span>
            <span className="text-stone-500">этаж 3, офис 303</span>
          </h4>

          {/* Map Container */}
          <div className="w-full h-80 rounded-2xl bg-[#1E1E24] border border-stone-800 overflow-hidden relative group shadow-inner flex items-center justify-center">
            
            <iframe
              title="Кабинет психолога на карте Краснодара"
              src="https://yandex.ru/map-widget/v1/?ll=38.974868%2C45.035470&z=16&text=Краснодар,%202-я%20Ямальская%20ул.,%207"
              width="100%"
              height="100%"
              frameBorder="0"
              className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
            />

            <div className="absolute bottom-4 left-4 bg-[#121212]/90 backdrop-blur-md border border-stone-700 p-3 rounded-xl pointer-events-none text-xs text-stone-200 flex items-center gap-2 shadow-xl">
              <MapPin size={16} className="text-[#E5A93C]" />
              <div>
                <div className="font-medium">Краснодар, 2-я Ямальская ул., 7</div>
                <div className="text-[10px] text-stone-400">Удобная парковка и тихий зеленый район</div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Copyright Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
        <div>© 2024–2026 Кабинет психолога Андрея в Краснодаре. Все права защищены.</div>
        
        <div className="flex items-center gap-6 uppercase tracking-widest">
          <span className="flex items-center gap-1 text-stone-400">
            <Shield size={12} className="text-[#E5A93C]" />
            100% Конфиденциально
          </span>
          <span>Очно и онлайн</span>
        </div>

        <button 
          onClick={scrollToTop}
          className="bg-[#1E1E24] hover:bg-stone-800 text-stone-300 p-2.5 rounded-full border border-stone-800 transition-colors cursor-pointer"
          title="Наверх"
        >
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
};
