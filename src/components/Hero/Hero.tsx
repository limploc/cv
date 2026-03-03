import { Github, Instagram, Mail } from 'lucide-react';
import { socials } from '../../data/socials';
import './Hero.css';

const iconMap = {
  github: Github,
  instagram: Instagram,
  mail: Mail,
};

function Hero() {
  return (
    <section className="hero">

      <div className="hero__content">
        <div className="hero__avatar-wrapper">
          <img
            className="hero__avatar"
            src="/profile.jpg"
            alt="Septian Renaldi Dowongi"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hero__avatar-fallback--hidden');
            }}
          />
          <div className="hero__avatar-fallback hero__avatar-fallback--hidden">SRD</div>
        </div>

        <div className="hero__meta">
          <span className="hero__available">Available for opportunities</span>
        </div>

        <h1 className="hero__name">Septian Renaldi Dowongi</h1>

        <p className="hero__title">Backend Developer</p>

        <p className="hero__subtitle">Informatics Engineering Student</p>

        <p className="hero__tagline">
          Backend-focused developer specializing in scalable REST APIs and clean architecture.
        </p>

        <div className="hero__socials">
          {socials.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={social.label}
                href={social.url}
                className="hero__social-link"
                target={social.icon !== 'mail' ? '_blank' : undefined}
                rel={social.icon !== 'mail' ? 'noopener noreferrer' : undefined}
                aria-label={social.label}
              >
                <Icon size={20} strokeWidth={1.8} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
