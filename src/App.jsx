import { MotionConfig, motion, useScroll } from "framer-motion";
import { Nav, Hero, About, Stats, Dream, Garage, CarLove, Qualities, Journey, Skills, Quotes, Goals, Facts, Letter, Contact } from "./sections.jsx";

export default function App() {
  const { scrollYProgress } = useScroll();
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-1.5 origin-left bg-ink"
        style={{ scaleX: scrollYProgress }}
      />
      <Nav />
      <main>
        <Hero />
        
        <About />
        <Stats />
        <Dream />
        <Garage />
        <CarLove />
        <Qualities />
        <Journey />
        <Skills />
        <Quotes />
        <Goals />
        <Facts />
        <Letter />
        <Contact />
      </main>
    </MotionConfig>
  );
}
