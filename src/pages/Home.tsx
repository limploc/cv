import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import TechStack from '../components/TechStack/TechStack';
import Projects from '../components/Projects/Projects';

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <Projects />
    </main>
  );
}

export default Home;