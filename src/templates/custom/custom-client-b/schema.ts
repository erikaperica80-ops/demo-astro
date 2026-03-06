import type { TemplateSchema } from '../../../lib/schema';
import { FieldType } from '../../../lib/schema';

const schema: TemplateSchema = {
  templateKey: 'custom-client-b',
  version: '1.0.0',
  sections: [
    {
      id: 'hero',
      type: 'hero',
      active: true,
      order: 1,
      fields: [
        { id: 'heading', type: FieldType.text, value: 'Strategic Advisory for the Modern Enterprise', active: true, label: 'Main Heading' },
        { id: 'subheading', type: FieldType.text, value: 'Nexus Consulting brings together elite legal minds and business strategists.', active: true, label: 'Subheading' },
        { id: 'cta_label', type: FieldType.text, value: 'Start Your Strategy Session', active: true, label: 'CTA Button Text' },
        { id: 'cta_url', type: FieldType.url, value: '#engage', active: true, label: 'CTA URL' },
        { id: 'stat_1_value', type: FieldType.text, value: '500+', active: true, label: 'Stat 1 Value' },
        { id: 'stat_1_label', type: FieldType.text, value: 'Clients Served', active: true, label: 'Stat 1 Label' },
        { id: 'stat_2_value', type: FieldType.text, value: '$2B+', active: true, label: 'Stat 2 Value' },
        { id: 'stat_2_label', type: FieldType.text, value: 'Deals Closed', active: true, label: 'Stat 2 Label' },
        { id: 'stat_3_value', type: FieldType.text, value: '20+', active: true, label: 'Stat 3 Value' },
        { id: 'stat_3_label', type: FieldType.text, value: 'Years of Excellence', active: true, label: 'Stat 3 Label' },
        { id: 'image_url', type: FieldType.image, value: '', active: true, label: 'Hero Image' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      active: true,
      order: 2,
      fields: [
        { id: 'heading', type: FieldType.text, value: 'Ready to Scale Your Business?', active: true, label: 'Heading' },
        { id: 'subheading', type: FieldType.text, value: 'Join hundreds of enterprises that trust Nexus for their most critical decisions.', active: true, label: 'Subheading' },
        { id: 'button_label', type: FieldType.text, value: 'Engage Nexus Today', active: true, label: 'Button Label' },
        { id: 'button_url', type: FieldType.url, value: 'mailto:engage@nexusconsulting.demo', active: true, label: 'Button URL' },
      ],
    },
  ],
};

export default schema;
