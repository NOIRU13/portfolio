export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'ai';
  icon?: string;
}



export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}



export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
}