import { ExternalLink } from 'lucide-react';
import { projects } from '../../data/projects';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import './Projects.css';

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <SectionTitle label="What I've built" heading="Projects" />

        <div className="projects__grid">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card"
            >
              <div className="project-card__header">
                <h3 className="project-card__title">{project.title}</h3>
                <a
                  href={project.github}
                  className="project-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <ExternalLink size={16} strokeWidth={1.8} />
                </a>
              </div>

              <p className="project-card__description">{project.description}</p>

              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <Badge key={t} text={t} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
