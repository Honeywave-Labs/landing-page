import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; 
import Footer from './components/Footer'; 

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}


