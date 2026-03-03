export interface Social {
  label: string;
  url: string;
  icon: 'github' | 'instagram' | 'mail';
}

export const socials: Social[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/limploc',
    icon: 'github',
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com/iamrenaall',
    icon: 'instagram',
  },
  {
    label: 'Email',
    url: 'mailto:septianrnaldi.dev@gmail.com',
    icon: 'mail',
  },
];
