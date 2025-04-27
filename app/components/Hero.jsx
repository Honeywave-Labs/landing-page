"use client";

export default function Hero() {
  return (
    <section className="w-full h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
        Nectar Inc.
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        Build beautiful websites easily with Next.js and TailwindCSS. Let's get started with something amazing today!
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Get Started
        </button>
        <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
          Learn More
        </button>
      </div>
    </section>
  );
}
