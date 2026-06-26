export interface ServiceItem {
  id: string;
  title: string;
  category: 'individual' | 'group' | 'coworking';
  price: number;
  priceText: string;
  duration: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  tag: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BookingFormData {
  serviceId: string;
  date: string;
  timeSlot: string;
  name: string;
  phone: string;
  comment?: string;
}
