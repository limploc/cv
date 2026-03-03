import { techStack } from '../../data/techStack';
import SectionTitle from '../ui/SectionTitle';
import './TechStack.css';

function TechStack() {
  return (
    <section className="tech-stack">
      <div className="container">
        <SectionTitle label="Tools & Technologies" heading="Tech Stack" />

        <div className="tech-stack__grid">
          {techStack.map((category) => (
            <div key={category.label} className="tech-stack__card">
              <h3 className="tech-stack__card-label">{category.label}</h3>
              <ul className="tech-stack__items">
                {category.items.map((item) => (
                  <li key={item.name} className="tech-stack__item">
                    <span className="tech-stack__dot" />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
