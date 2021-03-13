/**
 * Typically this would be in a shared library so that we don't
 * duplicate code, and can use a shared interface.
 */
export interface SiteTemplate {
  title: string;
  cost: string;
  id: string;
  description: string;
  thumbnail: string;
  image: string;
}

export interface SiteTemplateBrief {
  title: string;
  id: string;
  thumbnail: string;
}

export const defaultTemplate = {
  title: 'No template selected',
  cost: '0.00',
  id: '0000',
  description: 'No description provided.',
  thumbnail: '',
  image: '',
};
