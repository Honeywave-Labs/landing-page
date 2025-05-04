import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; 
import Footer from './components/Footer';
import Contact from './components/Contact'; 

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}


