import React from 'react';

export default function Navbar() {
  const navLinks = ['Home', 'About', 'Services', 'Contact'];

  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-white">MyApp</h1>
          
          <div className="flex space-x-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
