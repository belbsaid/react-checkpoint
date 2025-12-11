import React from 'react';
import Card from './Card';

const LightningIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const ThumbsUpIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
  </svg>
);

export default function CardGrid() {
  const cards = [
    {
      id: 1,
      title: 'Fast Performance',
      description: 'Lightning-fast load times and optimized performance for the best user experience.',
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-pink-500',
      icon: <LightningIcon />
    },
    {
      id: 2,
      title: 'Secure & Safe',
      description: 'Enterprise-grade security to keep your data protected and your privacy intact.',
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-cyan-500',
      icon: <LockIcon />
    },
    {
      id: 3,
      title: 'Easy to Use',
      description: 'Intuitive interface designed with user experience in mind for effortless navigation.',
      gradientFrom: 'from-green-500',
      gradientTo: 'to-emerald-500',
      icon: <ThumbsUpIcon />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
