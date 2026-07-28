export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  image: string;
  badge?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'panels' | 'inverters' | 'batteries' | 'mounting' | 'pumps' | 'lights';
  priceRange: string;
  specs: { [key: string]: string };
  image: string;
  rating: number;
  reviewsCount: number;
  popular?: boolean;
  efficiency?: string;
  warranty: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'industrial';
  location: string;
  capacity: string;
  savings: string;
  image: string;
  completionYear: string;
  description: string;
  panelsCount: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  content: string;
  projectType: string;
  annualSavings: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'cost' | 'installation' | 'netmetering' | 'maintenance';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface CalculatorState {
  propertyType: 'residential' | 'commercial' | 'industrial';
  monthlyBill: number; // in USD
  sunlightHours: number;
  roofAreaSqFt: number;
  utilityRatePerKwh: number;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  propertyType: 'residential' | 'commercial' | 'industrial';
  monthlyBill: string;
  address: string;
  message: string;
  preferredContact: 'phone' | 'email' | 'whatsapp';
}
