import { useState } from "react";
import Image from "../../assets/logo-text.png";
import MobileNav from "./mobileres";


export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={Image} alt="Logo" className="w-24 md:w-36 object-contain" />
        </div>

        <div className="hidden md:flex">
          <ul className="flex items-center gap-6 text-sm md:text-base font-medium text-gray-700">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Technologies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-base font-medium text-gray-700  transition-colors">
            Sign In
          </button>
          <button className="btn btn-secondary  text-white font-medium px-5 py-2 rounded-full shadow-sm transition-all">
        Sign Up
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none p-2"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <MobileNav isOpen={isOpen} />
    </nav>
  );
}