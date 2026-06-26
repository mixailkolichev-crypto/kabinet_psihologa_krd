import React from 'react';
import { Phone, MapPin, Calendar } from 'lucide-react';
import { SPECIALIST_INFO } from '../data/content';

interface HeaderProps {
  onBookClick: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  return (
    <header className="sticky top-0 h-20 border-b border-stone-800 flex items-center justify-between px-4 sm:px-8 lg:px-12 z-50 bg-[#121212]/90 backdrop-blur-md transition-all">
      <div className="flex items-center gap-4">
        <a href="#" className="flex flex-col group">
          <span className="text-[#E5A93C] font-serif italic text-lg sm:text-xl tracking-wide uppercase group-hover:text-[#F39C12] transition-colors">
            Кабинет психолога
          </span>
          <span className="text-[9px] sm:text-[10px] text-stone-500 uppercase tracking-widest">
            Психотерапевт в Краснодаре
          </span>
        </a>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-stone-400 uppercase tracking-wider">
        <a href="#about" className="hover:text-[#E5A93C] transition-colors">О специалисте</a>
        <a href="#services" className="hover:text-[#E5A93C] transition-colors">Услуги и цены</a>
        <a href="#booking" className="hover:text-[#E5A93C] transition-colors">Онлайн-запись</a>
        <a href="#reviews" className="hover:text-[#E5A93C] transition-colors">Отзывы</a>
        <a href="#contacts" className="hover:text-[#E5A93C] transition-colors">Контакты</a>
      </nav>

      <div className="flex items-center gap-4 sm:gap-6 text-sm">
        <div className="hidden xl:block text-right">
          <a 
            href={`tel:${SPECIALIST_INFO.phoneRaw}`} 
            className="text-stone-200 font-medium hover:text-[#E5A93C] flex items-center justify-end gap-1.5 transition-colors"
          >
            <Phone size={13} className="text-[#E5A93C]" />
            {SPECIALIST_INFO.phoneDisplay}
          </a>
          <div className="text-[10px] text-stone-500 flex items-center justify-end gap-1 mt-0.5">
            <MapPin size={10} className="text-stone-500" />
            Краснодар, 2-я Ямальская ул., 7 (оф. 303)
          </div>
        </div>

        <button 
          onClick={() => onBookClick()}
          className="bg-[#E5A93C] text-[#121212] px-5 sm:px-6 py-2 rounded-full font-bold text-[11px] sm:text-xs uppercase tracking-wider hover:bg-[#F39C12] transition-all duration-300 shadow-[0_0_15px_rgba(229,169,60,0.3)] hover:shadow-[0_0_25px_rgba(229,169,60,0.5)] flex items-center gap-2 active:scale-95 cursor-pointer"
        >
          <Calendar size={14} />
          <span>Записаться</span>
        </button>
      </div>
    </header>
  );
};
