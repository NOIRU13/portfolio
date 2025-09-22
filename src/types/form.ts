export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationRule {
  required?: boolean;
  email?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
}

export interface FormField {
  value: string;
  error: string;
  touched: boolean;
  rules: ValidationRule[];
}

export interface FormState {
  [key: string]: FormField;
}

export interface FormErrors {
  [key: string]: string;
}