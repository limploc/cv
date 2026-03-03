export interface TechItem {
  name: string;
}

export interface TechCategory {
  label: string;
  items: TechItem[];
}

export const techStack: TechCategory[] = [
  {
    label: 'Backend',
    items: [{ name: 'NestJS' }, { name: 'Express.js' }],
  },
  {
    label: 'Frontend',
    items: [{ name: 'React' }, { name: 'Vue.js' }],
  },
  {
    label: 'Languages',
    items: [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Java' },
      { name: 'C' },
      { name: 'C++' },
      { name: 'Python' },
    ],
  },
  {
    label: 'Mobile',
    items: [{ name: 'Android (Java)' }],
  },
  {
    label: 'Databases',
    items: [{ name: 'MongoDB' }, { name: 'PostgreSQL' }, { name: 'MySQL' }],
  },
];
