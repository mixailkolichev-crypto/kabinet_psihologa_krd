import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, MessageSquare, CheckCircle, ShieldAlert, Sparkles } from 'lucide-react';
import { SERVICES_LIST, TIME_SLOTS, SPECIALIST_INFO } from '../data/content';
import { ServiceItem, BookingFormData } from '../types';

interface BookingSectionProps {
  preselectedService?: ServiceItem | null;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ preselectedService }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_LIST[0].id);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>(TIME_SLOTS[0]);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (preselectedService) {
      setSelectedServiceId(preselectedService.id);
    }
  }, [preselectedService]);

  // Generate next 7 available dates
  const availableDates = React.useMemo(() => {
    const dates: { dateStr: string; displayStr: string; weekday: string }[] = [];
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      const dateStr = nextDate.toISOString().split('T')[0];
      const displayStr = nextDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
      const weekday = nextDate.toLocaleDateString('ru-RU', { weekday: 'short' });
      dates.push({ dateStr, displayStr, weekday });
    }
    return dates;
  }, []);

  useEffect(() => {
    if (availableDates.length > 0 && !selectedDate) {
      setSelectedDate(availableDates[0].dateStr);
    }
  }, [availableDates, selectedDate]);

  const currentService = SERVICES_LIST.find(s => s.id === selectedServiceId) || SERVICES_LIST[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Пожалуйста, укажите ваше имя');
      return;
    }
    if (!phone.trim() || phone.length < 6) {
      setError('Пожалуйста, укажите корректный номер телефона');
      return;
    }
    setError('');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setComment('');
  };

  return (
    <section id="booking" className="py-20 px-4 sm:px-8 lg:px-12 border-b border-stone-800 relative z-10 bg-[#121212]/80">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-[#E5A93C] uppercase tracking-widest font-mono">Конфиденциальная запись</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white mt-2 mb-4">
            Записаться на <span className="italic text-[#E5A93C]">консультацию</span>
          </h2>
          <p className="text-stone-400 text-sm">
            Выберите направление, удобный день и время. После отправки заявки психолог Андрей свяжется с вами для подтверждения.
          </p>
        </div>

        <div className="bg-[#1E1E24] border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {isSubmitted ? (
            <div className="py-12 text-center max-w-lg mx-auto space-y-6">
              <div className="w-20 h-20 bg-[#E5A93C]/20 border border-[#E5A93C] text-[#E5A93C] rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-3xl font-serif text-white">Заявка успешно принята!</h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Спасибо, <strong className="text-[#E5A93C]">{name}</strong>. Вы забронировали: <br />
                <span className="text-white font-medium">«{currentService.title}»</span> на <strong className="text-white">{selectedDate}</strong> в <strong className="text-[#E5A93C]">{selectedTime}</strong>.
              </p>
              <div className="p-4 bg-[#121212] rounded-2xl border border-stone-800 text-xs text-stone-400">
                Психолог Андрей свяжется с вами по номеру <strong>{phone}</strong> в ближайшее время через WhatsApp или Telegram для уточнения деталей.
              </div>
              <button 
                onClick={handleReset}
                className="bg-stone-800 hover:bg-stone-700 text-stone-300 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
              >
                Создать новую запись
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Step 1: Select Service */}
              <div className="lg:col-span-7 space-y-8">
                
                <div>
                  <label className="text-xs text-[#E5A93C] uppercase tracking-widest font-mono block mb-3">
                    1. Выберите услугу
                  </label>
                  <select 
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                    className="w-full bg-[#121212] border border-stone-700 text-stone-200 rounded-xl p-3.5 text-sm focus:border-[#E5A93C] outline-none transition-colors cursor-pointer font-serif"
                  >
                    {SERVICES_LIST.map((s) => (
                      <option key={s.id} value={s.id} className="bg-[#121212] text-stone-200 py-2">
                        {s.title} — {s.priceText} ({s.duration})
                      </option>
                    ))}
                  </select>
                  <div className="mt-2 text-xs text-stone-400 flex items-center justify-between font-mono px-1">
                    <span>Стоимость: <strong className="text-[#E5A93C]">{currentService.priceText}</strong></span>
                    <span>Длительность: {currentService.duration}</span>
                  </div>
                </div>

                {/* Step 2: Select Date */}
                <div>
                  <label className="text-xs text-[#E5A93C] uppercase tracking-widest font-mono block mb-3">
                    2. Выберите дату
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {availableDates.map((dt) => (
                      <button
                        key={dt.dateStr}
                        type="button"
                        onClick={() => setSelectedDate(dt.dateStr)}
                        className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                          selectedDate === dt.dateStr
                            ? 'bg-[#E5A93C] border-[#E5A93C] text-[#121212] font-bold shadow-[0_0_15px_rgba(229,169,60,0.4)]'
                            : 'bg-[#121212] border-stone-800 text-stone-300 hover:border-stone-600'
                        }`}
                      >
                        <span className="text-[10px] uppercase font-mono tracking-tighter opacity-80">{dt.weekday}</span>
                        <span className="text-sm font-serif mt-0.5">{dt.displayStr}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Select Time Slot */}
                <div>
                  <label className="text-xs text-[#E5A93C] uppercase tracking-widest font-mono block mb-3">
                    3. Удобное время
                  </label>
                  <div className="grid grid-cols-4 gap-2.5">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2.5 px-3 rounded-xl border font-mono text-xs transition-all cursor-pointer ${
                          selectedTime === slot
                            ? 'bg-[#E5A93C] border-[#E5A93C] text-[#121212] font-bold shadow-md'
                            : 'bg-[#121212] border-stone-800 text-stone-300 hover:border-stone-600'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Step 4: User Contact Details */}
              <div className="lg:col-span-5 bg-[#121212] p-6 sm:p-8 rounded-2xl border border-stone-800 flex flex-col justify-between">
                <div className="space-y-4">
                  <h4 className="text-lg font-serif text-[#E5A93C] border-b border-stone-800 pb-3 flex items-center gap-2">
                    <Sparkles size={18} />
                    <span>Ваши контактные данные</span>
                  </h4>

                  {error && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                      <ShieldAlert size={16} className="shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div>
                    <label className="text-xs text-stone-400 block mb-1">Как к вам обращаться *</label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-3.5 text-stone-500" />
                      <input 
                        type="text" 
                        required
                        placeholder="Ваше имя или псевдоним"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#1E1E24] border border-stone-700 rounded-xl py-3 pl-10 pr-4 text-xs text-stone-200 focus:border-[#E5A93C] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-stone-400 block mb-1">Номер телефона / Мессенджер *</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3.5 top-3.5 text-stone-500" />
                      <input 
                        type="tel" 
                        required
                        placeholder="+7 (999) 000-00-00"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#1E1E24] border border-stone-700 rounded-xl py-3 pl-10 pr-4 text-xs text-stone-200 focus:border-[#E5A93C] outline-none transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-stone-400 block mb-1">Короткий комментарий (по желанию)</label>
                    <div className="relative">
                      <MessageSquare size={16} className="absolute left-3.5 top-3.5 text-stone-500" />
                      <textarea 
                        rows={2}
                        placeholder="Тема запроса или предпочтительный способ связи (WhatsApp / Telegram)"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full bg-[#1E1E24] border border-stone-700 rounded-xl py-2.5 pl-10 pr-4 text-xs text-stone-200 focus:border-[#E5A93C] outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <div className="text-[11px] text-stone-500 leading-normal pt-2">
                    Нажимая кнопку, вы соглашаетесь с условиями конфиденциальности психологических консультаций.
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#E5A93C] hover:bg-[#F39C12] text-[#121212] py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(229,169,60,0.3)] hover:shadow-[0_0_30px_rgba(229,169,60,0.5)] mt-6 active:scale-98 cursor-pointer"
                >
                  Записаться на консультацию
                </button>

              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
