import Link from "next/link";  
import { Geist, Geist_Mono } from "next/font/google"; 

export default function Navbar() {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/logo.jpeg" alt="Logo" className="h-12 w-12" />
          <span className="ml-4 text-3xl font-bold text-gray-800">Nectar Inc.</span>
        </Link>
        <div className="space-x-6">
          <Link href="#home" className="text-black hover:text-gray-300">
            Home
          </Link>
          <Link href="#about" className="text-black hover:text-gray-300">
            About
          </Link>
          <Link href="#contact" className="text-black hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
