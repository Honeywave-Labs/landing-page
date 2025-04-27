"use client";

export default function CTA() {
  return (
    <section className="w-full py-16 bg-blue-600 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to get started?
      </h2>
      <p className="text-lg md:text-xl mb-8">
        Join thousands of others who are building amazing things with Next.js and TailwindCSS.
      </p>
      <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100">
        Start Building Now
      </button>
    </section>
  );
}
