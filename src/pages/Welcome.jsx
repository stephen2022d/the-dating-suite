import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/microdate-logo.png';
import heroDiversePeople from '../assets/hero-diverse-people.jpg';
import heroWomanSmiling from '../assets/hero-woman-smiling.jpg';
import heroManSmiling from '../assets/hero-man-smiling.jpg';

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex flex-col items-center justify-center p-4">
      {/* Hero Section */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden md:flex mb-8">
        <div className="md:w-1/2 p-8 flex flex-col justify-center items-center text-center">
          <img src={logo} alt="MicroDate Logo" className="h-16 mb-4" />
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            MicroDate — A Dating App & Community That Cares
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Real connections. Real conversations.
          </p>
          <p className="text-md text-gray-500 mb-8">
            Guided by Heartmend, The Wingmate & The Mentor — your personal AI relationship coaches.
          </p>
          <Link
            to="/signup"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get Started
          </Link>
          <p className="text-sm text-gray-500 mt-4">Free to join · No hidden fees</p>
        </div>
        <div className="md:w-1/2 relative">
          <img
            src={heroDiversePeople}
            alt="Diverse happy people"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-pink-500/20"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-8 mb-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <span className="text-purple-500 text-3xl mb-2">✔</span>
            <p className="text-lg font-semibold text-gray-800">Privacy-first</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-purple-500 text-3xl mb-2">✔</span>
            <p className="text-lg font-semibold text-gray-800">Real connections</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-purple-500 text-3xl mb-2">✔</span>
            <p className="text-lg font-semibold text-gray-800">AI support from Heartmend, The Wingmate & The Mentor</p>
          </div>
        </div>
      </div>

      {/* Mid-section: Skip the small talk */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-8 mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Skip the small talk.</h2>
        <p className="text-lg text-gray-600">
          Connect through messages first — then unlock a 2-minute video date when you're both ready.
        </p>
      </div>

      {/* Detailed Features Section */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center text-center">
            <img src={heroWomanSmiling} alt="2-Minute Video Dates" className="w-full h-48 object-cover rounded-xl mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">2-Minute Video Dates</h3>
            <p className="text-md text-gray-600">
              Spend credits to unlock a short video chat when interest is mutual — real connection, low pressure.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={heroManSmiling} alt="Meet Your AI Coaches" className="w-full h-48 object-cover rounded-xl mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Meet Your AI Coaches</h3>
            <p className="text-md text-gray-600 mb-2">Support from:</p>
            <ul className="text-md text-gray-600 list-disc list-inside">
              <li>Heartmend – Breakup & healing</li>
              <li>The Wingmate – Confidence & casual dating</li>
              <li>The Mentor – Building deeper connection</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thoughtful Matching</h3>
          <p className="text-md text-gray-600">
            Designed to reduce ghosting and awkwardness. MicroDate prioritizes people, not profiles.
          </p>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Real connection is closer than you think.</h2>
        <p className="text-lg text-gray-600 mb-6">
          Join a dating community built around support, not swiping.
          Because meaningful relationships deserve better tools.
        </p>
        <Link
          to="/signup"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Start Your Journey
        </Link>
      </div>
    </div>
  );
};

export default Welcome;


