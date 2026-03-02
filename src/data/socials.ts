export interface Social {
  label: string;
  url: string;
  icon: 'github' | 'instagram' | 'mail';
}

export const socials: Social[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/septianrenaldi',
    icon: 'github',
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com/septianrenaldi',
    icon: 'instagram',
  },
  {
    label: 'Email',
    url: 'mailto:septianrenaldi@example.com',
    icon: 'mail',
  },
];
