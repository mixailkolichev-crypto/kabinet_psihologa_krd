import React, { useState } from 'react';
import { Clock, ArrowRight, Check, Tag } from 'lucide-react';
import { SERVICES_LIST } from '../data/content';
import { DynamicIcon } from './DynamicIcon';
import { ServiceItem } from '../types';

interface ServicesGridProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'individual' | 'group' | 'coworking'>('all');

  const filteredServices = activeTab === 'all' 
    ? SERVICES_LIST 
    : SERVICES_LIST.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-20 px-4 sm:px-8 lg:px-12 border-b border-stone-800 relative z-10 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs text-[#E5A93C] uppercase tracking-widest font-mono">Услуги и инвестиции в себя</span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white mt-2">
              Направления <span className="italic text-[#E5A93C]">работы и цены</span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-[#1E1E24] p-1.5 rounded-2xl border border-stone-800 self-start md:self-auto">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'all' 
                  ? 'bg-[#E5A93C] text-[#121212] font-bold shadow-md' 
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Все направления
            </button>
            <button 
              onClick={() => setActiveTab('individual')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'individual' 
                  ? 'bg-[#E5A93C] text-[#121212] font-bold shadow-md' 
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Индивидуально
            </button>
            <button 
              onClick={() => setActiveTab('group')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'group' 
                  ? 'bg-[#E5A93C] text-[#121212] font-bold shadow-md' 
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Группы и клубы
            </button>
            <button 
              onClick={() => setActiveTab('coworking')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'coworking' 
                  ? 'bg-[#E5A93C] text-[#121212] font-bold shadow-md' 
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              Коллегам / Коворкинг
            </button>
          </div>
        </div>

        {/* Services Grid based on Atmospheric Immersive Media cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((srv) => (
            <div 
              key={srv.id}
              onClick={() => onSelectService(srv)}
              className="bg-[#1E1E24] rounded-2xl border border-stone-800 hover:border-[#E5A93C]/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer group relative overflow-hidden"
            >
              {/* Subtle top ambient border glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E5A93C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#121212] border border-stone-800 flex items-center justify-center text-[#E5A93C] group-hover:scale-110 group-hover:border-[#E5A93C]/40 transition-all">
                    <DynamicIcon name={srv.iconName} size={22} />
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <span className="text-[#E5A93C] font-mono text-lg sm:text-xl font-semibold tracking-tight">
                      {srv.priceText}
                    </span>
                    {srv.badge && (
                      <span className="text-[10px] uppercase font-mono bg-[#E5A93C]/10 text-[#E5A93C] px-2 py-0.5 rounded-full border border-[#E5A93C]/20 mt-1">
                        {srv.badge}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-serif text-stone-100 font-medium leading-snug mb-3 group-hover:text-[#E5A93C] transition-colors">
                  {srv.title}
                </h3>

                <p className="text-xs text-stone-400 leading-relaxed mb-6 font-light">
                  {srv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-stone-400 font-mono">
                  <Clock size={13} className="text-[#E5A93C]" />
                  <span>{srv.duration}</span>
                </div>

                <button className="text-[#E5A93C] font-semibold text-[11px] uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Записаться</span>
                  <ArrowRight size={13} />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Transparent Notice Note */}
        <div className="mt-12 bg-[#1E1E24]/50 border border-stone-800 rounded-2xl p-6 text-xs text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Check size={18} className="text-[#E5A93C] shrink-0" />
            <span>Оплата производится удобным способом после сессии или при бронировании времени.</span>
          </div>
          <a href="#booking" className="text-[#E5A93C] font-bold hover:underline shrink-0">
            Перейти к форме записи ↓
          </a>
        </div>

      </div>
    </section>
  );
};
