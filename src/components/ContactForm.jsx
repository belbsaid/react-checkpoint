import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Form Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg">
            Have a question or want to work together? Drop us a message!
          </p>
        </div>

        {/* Form Container with Glassmorphism */}
        <div className="relative">
          {/* Gradient Background Blur */}
          <div className="absolute -inset-1 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          
          {/* Form */}
          <form 
            onSubmit={handleSubmit}
            className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20"
          >
            {/* Name Input */}
            <div className="mb-6">
              <label 
                htmlFor="name" 
                className="block text-white font-semibold mb-2 text-sm uppercase tracking-wide"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 backdrop-blur-sm"
                placeholder="John Doe"
              />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label 
                htmlFor="email" 
                className="block text-white font-semibold mb-2 text-sm uppercase tracking-wide"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 backdrop-blur-sm"
                placeholder="john@example.com"
              />
            </div>

            {/* Subject Input */}
            <div className="mb-6">
              <label 
                htmlFor="subject" 
                className="block text-white font-semibold mb-2 text-sm uppercase tracking-wide"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 backdrop-blur-sm"
                placeholder="How can we help?"
              />
            </div>

            {/* Message Textarea */}
            <div className="mb-6">
              <label 
                htmlFor="message" 
                className="block text-white font-semibold mb-2 text-sm uppercase tracking-wide"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 backdrop-blur-sm resize-none"
                placeholder="Tell us more about your project..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-500/50"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </span>
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            We'll get back to you within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}
