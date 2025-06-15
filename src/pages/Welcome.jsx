import { Link } from "react-router-dom";
import React from 'react';

export default function Welcome() {
  return (
    <div
      className="flex flex-col scroll-smooth bg-fixed bg-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 via-peach-900 via-green-900 to-purple-900 text-white" // Dark gradient background and white text
    >
      <section className="w-full flex flex-col items-center justify-center px-6 py-20"> {/* Single main section with padding */}

        {/* Hero/Welcome Division */}
        <div className="text-center mb-20"> {/* Division for welcome content with margin bottom */}
          <h1 className="text-5xl font-bold mb-4 text-teal-400 drop-shadow-lg">Welcome to Myfyn</h1> {/* Neon-like blue/teal color for heading */}
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto"> {/* Centered paragraph */}
            Your journey to managing and mastering your personal finances starts here.
          </p>
          <div className="flex gap-4 justify-center"> {/* Centered buttons */}
            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition" // Button style
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition" // Button style
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Info Division */}
        <div className="max-w-2xl text-center mb-20"> {/* Division for info content */}
          <h2 className="text-3xl font-semibold mb-4 text-teal-400">Track. Analyze. Grow.</h2> {/* Neon-like color for heading */}
          <p className="text-lg text-gray-300">
            Myfyn helps you manage your budgets, investments, expenses, and savings all in one place.
            Built for clarity and control over your finances.
          </p>
        </div>

        {/* Features Division (Cards) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20"> {/* Division for features grid */}
          {/* Feature Card 1 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:bg-white/20 transition-colors duration-300 cursor-pointer"> {/* Card styling with hover effect */}
            <h3 className="text-xl font-bold mb-2 text-teal-400">Real-Time Tracking</h3> {/* Neon-like color for heading */}
            <p className="text-gray-300">Monitor expenses, savings & assets in real-time from one place.</p>
          </div>
          {/* Feature Card 2 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:bg-white/20 transition-colors duration-300 cursor-pointer"> {/* Card styling with hover effect */}
            <h3 className="text-xl font-bold mb-2 text-teal-400">Investment Overview</h3> {/* Neon-like color for heading */}
            <p className="text-gray-300">Analyze stocks, mutual funds, and more with live data sync.</p>
          </div>
          {/* Feature Card 3 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:bg-white/20 transition-colors duration-300 cursor-pointer"> {/* Card styling with hover effect */}
            <h3 className="text-xl font-bold mb-2 text-teal-400">Personalized Insights</h3> {/* Neon-like color for heading */}
            <p className="text-gray-300">Get insights and smart suggestions to manage your money better.</p>
          </div>
        </div>

        {/* CTA Division */}
        <div className="text-center mb-20"> {/* Division for CTA content */}
          <h2 className="text-3xl font-bold mb-4 text-teal-400">Ready to take control?</h2> {/* Neon-like color for heading */}
          <p className="mb-6 text-gray-300">Sign up now and start organizing your money the smart way.</p>
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition" // Button style
          >
            Get Started
          </Link>
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-black/80 text-gray-400 py-6 text-center text-sm backdrop-blur-sm"> {/* Footer */}
        © 2025 Myfyn. All rights reserved. | Built with 💡 and Tailwind CSS
      </footer>
    </div>
  );
}
