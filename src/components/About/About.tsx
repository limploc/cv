import SectionTitle from '../ui/SectionTitle';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="container">
        <SectionTitle label="Who I am" heading="About Me" />

        <div className="about__body">
          <div className="about__text">
            <p>
              I'm a passionate backend developer and Informatics Engineering student with a strong
              focus on building reliable, scalable server-side systems. My primary interest lies in
              designing well-structured REST APIs that are easy to maintain and built to grow.
            </p>
            <p>
              With hands-on experience in frameworks like NestJS and Express.js, I enjoy working
              through the full lifecycle of an API — from architecture decisions and database
              modeling through to implementation, testing, and deployment.
            </p>
            <p>
              I'm drawn to clean architecture principles and patterns that separate concerns
              cleanly, making codebases predictable and a pleasure to work in long-term. Outside
              of backend work, I've explored mobile development and frontend technologies, giving
              me a well-rounded perspective when collaborating across the full stack.
            </p>
          </div>

          <div className="about__highlights">
            {[
              { value: 'REST APIs', label: 'Primary Focus' },
              { value: 'Clean Arch', label: 'Design Principle' },
              { value: 'NestJS', label: 'Preferred Framework' },
              { value: 'Node.js', label: 'Runtime' },
            ].map((item) => (
              <div key={item.label} className="about__highlight-card">
                <span className="about__highlight-value">{item.value}</span>
                <span className="about__highlight-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
