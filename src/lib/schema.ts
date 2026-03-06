export enum FieldType {
  text = 'text',
  richtext = 'richtext',
  image = 'image',
  url = 'url',
  color = 'color',
  number = 'number',
  boolean = 'boolean',
  select = 'select',
}

export interface FieldValidation {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: string;
}

export interface Field {
  id: string;
  type: FieldType;
  value: string | number | boolean | null;
  active: boolean;
  label?: string;
  options?: string[];
  validation?: FieldValidation;
  meta?: Record<string, unknown>;
}

export interface Section {
  id: string;
  type: string;
  active: boolean;
  order: number;
  fields: Field[];
}

export interface TemplateSchema {
  templateKey: string;
  version: string;
  sections: Section[];
}

export interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  font: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  canonical?: string;
  robots?: string;
}

export interface TenantConfig {
  tenantId: string;
  templateKey: string;
  theme: ThemeConfig;
  seo: SeoConfig;
  content: TemplateSchema;
}
