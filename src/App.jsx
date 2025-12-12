import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid';
import ContactForm from './components/ContactForm';

export default function App() {
  return (
    <div className="app min-h-screen bg-linear-to-r from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <Hero />
      <CardGrid />
      <ContactForm />
    </div>
  );
}

