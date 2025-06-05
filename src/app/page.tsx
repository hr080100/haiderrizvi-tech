'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? 'dark bg-slate-900 text-white' : 'bg-white text-gray-900'}>
      <div className="flex justify-end p-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <span className="text-sm font-bold">DARK MODE</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="toggle toggle-success"
          />
        </label>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full blur-3xl opacity-60 -z-10"></div>

        {/* Card */}
        <div className="bg-black bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-10 max-w-4xl w-full">
          <Image
            src="/me.jpg" // Place your image in /public as me.jpg
            alt="Haider Rizvi"
            width={300}
            height={300}
            className="rounded-xl mx-auto mb-6"
          />
          <p className="text-sm tracking-wide uppercase text-teal-400 mb-2">
            | AWS Solutions Architect | Data Science | Machine Learning | Python | SQL | Web Development |
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-teal-400 mb-4">Haider Rizvi</h1>
          <p className="text-gray-300 text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem itaque quia nobis, neque esse quas qui quis numquam asperiores maxime repellendus.
          </p>
          <a
            href="mailto:you@example.com"
            className="inline-block px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
          >
            📧 Email me
          </a>
        </div>
      </div>

      <footer className="text-center p-6 text-xs text-gray-500">
        © Haider Rizvi 2025. All rights reserved.
      </footer>
    </main>
  );
}
