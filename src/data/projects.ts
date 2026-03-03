export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
}

export const projects: Project[] = [
  {
    title: 'Social media app',
    description:
      'A full-stack social media platform featuring user authentication, post creation, likes, comments, and follow systems — closely mirroring Instagram core functionality.',
    tech: ['JavaScript', 'ExpressJS', 'MongoDB', 'REST API'],
    github: 'https://github.com/DEVTENO/backend-faceflix',
  },
];
