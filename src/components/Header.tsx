"use client";

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-900">
              AbogadoSAS
            </div>
            <div className="ml-2 text-sm text-gray-600 hidden sm:block">
              Ecuador
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-900 font-medium">
              Inicio
            </a>
            <a href="#servicios" className="text-gray-700 hover:text-blue-900 font-medium">
              Servicios
            </a>
            <a href="#proceso" className="text-gray-700 hover:text-blue-900 font-medium">
              Proceso
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-900 font-medium">
              Contacto
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-900 focus:outline-none focus:text-blue-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#inicio" className="text-gray-700 hover:text-blue-900 font-medium py-2">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-700 hover:text-blue-900 font-medium py-2">
                Servicios
              </a>
              <a href="#proceso" className="text-gray-700 hover:text-blue-900 font-medium py-2">
                Proceso
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-900 font-medium py-2">
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
