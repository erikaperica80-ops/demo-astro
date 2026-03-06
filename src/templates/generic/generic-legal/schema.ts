import type { TemplateSchema } from '../../../lib/schema';
import { FieldType } from '../../../lib/schema';

const schema: TemplateSchema = {
  templateKey: 'generic-legal',
  version: '1.0.0',
  sections: [
    {
      id: 'hero',
      type: 'hero',
      active: true,
      order: 1,
      fields: [
        { id: 'heading', type: FieldType.text, value: 'Defending Your Rights', active: true, label: 'Main Heading' },
        { id: 'subheading', type: FieldType.text, value: 'Expert legal representation for individuals and businesses.', active: true, label: 'Subheading' },
        { id: 'cta_label', type: FieldType.text, value: 'Free Consultation', active: true, label: 'CTA Button Text' },
        { id: 'cta_url', type: FieldType.url, value: '#contact', active: true, label: 'CTA URL' },
        { id: 'image_url', type: FieldType.image, value: '', active: true, label: 'Hero Image' },
      ],
    },
    {
      id: 'testimonials',
      type: 'testimonials',
      active: true,
      order: 2,
      fields: [
        { id: 'heading', type: FieldType.text, value: 'Client Testimonials', active: true, label: 'Heading' },
        { id: 'testimonial_1_name', type: FieldType.text, value: '', active: true, label: 'Name 1' },
        { id: 'testimonial_1_text', type: FieldType.richtext, value: '', active: true, label: 'Text 1' },
        { id: 'testimonial_1_rating', type: FieldType.number, value: 5, active: true, label: 'Rating 1' },
        { id: 'testimonial_2_name', type: FieldType.text, value: '', active: true, label: 'Name 2' },
        { id: 'testimonial_2_text', type: FieldType.richtext, value: '', active: true, label: 'Text 2' },
        { id: 'testimonial_2_rating', type: FieldType.number, value: 5, active: true, label: 'Rating 2' },
        { id: 'testimonial_3_name', type: FieldType.text, value: '', active: true, label: 'Name 3' },
        { id: 'testimonial_3_text', type: FieldType.richtext, value: '', active: true, label: 'Text 3' },
        { id: 'testimonial_3_rating', type: FieldType.number, value: 5, active: true, label: 'Rating 3' },
      ],
    },
    {
      id: 'location',
      type: 'location',
      active: true,
      order: 3,
      fields: [
        { id: 'heading', type: FieldType.text, value: 'Our Office', active: true, label: 'Heading' },
        { id: 'address', type: FieldType.text, value: '', active: true, label: 'Address' },
        { id: 'phone', type: FieldType.text, value: '', active: true, label: 'Phone' },
        { id: 'email', type: FieldType.text, value: '', active: true, label: 'Email' },
        { id: 'hours', type: FieldType.text, value: '', active: true, label: 'Hours' },
        { id: 'map_url', type: FieldType.url, value: '#', active: true, label: 'Map URL' },
      ],
    },
    {
      id: 'cta',
      type: 'cta',
      active: true,
      order: 4,
      fields: [
        { id: 'heading', type: FieldType.text, value: 'Get the Representation You Deserve', active: true, label: 'Heading' },
        { id: 'subheading', type: FieldType.text, value: 'Schedule your free consultation today.', active: true, label: 'Subheading' },
        { id: 'button_label', type: FieldType.text, value: 'Book a Free Consultation', active: true, label: 'Button Label' },
        { id: 'button_url', type: FieldType.url, value: '#', active: true, label: 'Button URL' },
      ],
    },
  ],
};

export default schema;
