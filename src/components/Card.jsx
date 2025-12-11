import React from 'react';

export default function Card({ icon, title, description, gradientFrom, gradientTo }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300 shadow-xl">
      <div className={`w-12 h-12 bg-linear-to-br ${gradientFrom} ${gradientTo} rounded-lg mb-4 flex items-center justify-center`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-purple-200">{description}</p>
    </div>
  );
}
