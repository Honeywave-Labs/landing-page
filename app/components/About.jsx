import Link from 'next/link';

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <p className="text-lg mb-8">
          We are a passionate team dedicated to delivering top-notch services to our customers.
        </p>
        <Link href="#contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            Contact Us
        </Link>
      </div>
    </section>
  );
};

export default About;

