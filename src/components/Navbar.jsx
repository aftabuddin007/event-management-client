"use client"; // Required for Next.js App Router to handle interactivity (useState)

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full z-50 top-0 left-0 fixed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tight">
              EventPro
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                Home
              </Link>
              <Link href="/all-events" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                Browse Events
              </Link>
              <Link href="/add-event" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                Add Events
              </Link>
              <Link href="/my-event" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                My Events
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                Contact
              </Link>
              
              {/* Call to Action Button */}
             
              <Link href="/signup" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Signup
              </Link>
              <Link href="/login" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Login
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                /* Close Icon */
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-inner">
          <Link href="/" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link href="/all-events" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium">
            Browse Events
          </Link>
          <Link href="/add-event" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium">
            Add Events
          </Link>
          <Link href="/my-event" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium">
            My Events
          </Link>
          <Link href="/contact" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium">
            Contact
          </Link>
          <Link href="/signup" onClick={toggleMenu} className="block w-full text-center bg-blue-600 text-white px-3 py-2 mt-4 rounded-md text-base font-medium hover:bg-blue-700">
            Sign up
          </Link>
          <Link href="/login" onClick={toggleMenu} className="block w-full text-center bg-blue-600 text-white px-3 py-2 mt-4 rounded-md text-base font-medium hover:bg-blue-700">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}