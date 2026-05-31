import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Programs from '../components/sections/Programs';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Instructors from '../components/sections/Instructors';
import Testimonials from '../components/sections/Testimonials';
import Achievements from '../components/sections/Achievements';
import Gallery from '../components/sections/Gallery';
import Events from '../components/sections/Events';
import Pricing from '../components/sections/Pricing';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <WhyChooseUs />
      <Instructors />
      <Testimonials />
      <Achievements />
      <Gallery />
      <Events />
      <Pricing />
      <Contact />
    </>
  );
}
