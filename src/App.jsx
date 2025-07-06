import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import './App.css'

// Import hero images
import heroDiversePeople from './assets/hero-diverse-people.jpg'
import heroWomanSmiling from './assets/hero-woman-smiling.jpg'
import heroManSmiling from './assets/hero-man-smiling.jpg'

// Landing Page Component
const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen" style={{backgroundColor: '#FFF9F6'}}>
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 md:hidden">
        <a 
          href="https://tally.so/r/nPNMV5"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-white py-3 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 block text-center"
          style={{backgroundColor: '#D158A5', fontFamily: 'Inter, sans-serif'}}
        >
          👉 Join Our Waiting List – Free
        </a>
      </div>
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-[#D158A5] to-[#D8B4E2] rounded-full flex items-center justify-center">
            <span className="text-white text-lg">💜</span>
          </div>
          <span className="text-xl font-bold text-gray-800" style={{fontFamily: 'DM Serif Display, serif'}}>The Dating Suite</span>
          <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-full" style={{fontFamily: 'Inter, sans-serif'}}>BETA</span>
        </div>
        <button 
          onClick={() => navigate('/login')}
          className="text-[#D158A5] hover:text-[#D8B4E2] font-medium"
        >
          Sign In
        </button>
      </header>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 pb-24 md:pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" style={{fontFamily: 'DM Serif Display, serif'}}>
                The Dating Suite — A Dating App & Community That 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D158A5] to-[#D8B4E2]"> Cares</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>
                A dating community built on support, honesty, real conversation — and of course, fun.
              </p>
              <p className="text-lg text-gray-500">
                Connect with people, not just profiles.
              </p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="https://tally.so/r/nPNMV5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                style={{backgroundColor: '#7ED6A7', fontFamily: 'Inter, sans-serif'}}
              >
                👉 Join Our Waiting List – It's Free
              </a>
              <p className="text-sm text-gray-500" style={{fontFamily: 'Inter, sans-serif'}}>Free to join • No hidden fees</p>
              
              {/* BETA Notice */}
              <p className="text-sm text-gray-400 text-center italic" style={{fontFamily: 'Inter, sans-serif'}}>
                Now in BETA — help shape the future of dating.
              </p>
              
              {/* Pricing Reassurance */}
              <p className="text-xs text-gray-400 text-center font-light" style={{fontFamily: 'Inter, sans-serif'}}>
                The Dating Suite will always offer a free tier. Paid features will remain affordable and optional.
              </p>
              
              {/* Feature Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>Privacy-first</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>Supportive features</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>Meaningful interactions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>AI guidance from Heartmend, The Wingmate & The Mentor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={heroWomanSmiling} 
                  alt="Happy woman smiling" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <img 
                  src={heroManSmiling} 
                  alt="Happy man smiling" 
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="pt-8">
                <img 
                  src={heroDiversePeople} 
                  alt="Diverse group of happy people" 
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* AI Coaches Section - MOVED TO TOP FOR MAXIMUM ENGAGEMENT */}
        <div className="mt-20">
          <div className="text-center space-y-8">
            <div className="inline-block bg-gradient-to-r from-[#7ED6A7]/20 to-[#D8B4E2]/20 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>Coming Soon</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>
              🧠 Meet Your In-House AI Coaches
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{fontFamily: 'Inter, sans-serif'}}>
              Three distinct personalities, each designed to support you through different aspects of your dating journey. 
              Think of them as your personal guides, each with unique strengths to help you navigate love and relationships.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            {/* Heartmend */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-100">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-3xl">💔</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{fontFamily: 'DM Serif Display, serif'}}>Heartmend</h3>
                  <p className="text-lg font-medium text-pink-600 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>The Compassionate Healer</p>
                </div>
                
                <p className="text-gray-700 leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>
                  <strong>Heartmend is your gentle guide through the tender process of healing and moving forward.</strong> If you've experienced heartbreak, 
                  a tough breakup, or just need to mend your spirit before diving back into dating, Heartmend offers a safe space for reflection and recovery.
                </p>
                
                <div className="bg-pink-50 rounded-2xl p-4 border-l-4 border-pink-300">
                  <p className="text-pink-800 italic" style={{fontFamily: 'Inter, sans-serif'}}>
                    "Think of me as that wise friend who's been through it all. I help you process emotions, build resilience, 
                    and rediscover your self-worth, ensuring you approach new connections from a place of strength and peace."
                  </p>
                </div>
                
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>Perfect for:</h4>
                  <ul className="text-sm text-gray-600 space-y-1" style={{fontFamily: 'Inter, sans-serif'}}>
                    <li>• Anyone feeling bruised by past relationships</li>
                    <li>• Those needing emotional support and validation</li>
                    <li>• People looking to build a stronger foundation of self-love</li>
                    <li>• Anyone wanting to heal before opening their heart again</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-pink-100 to-red-100 rounded-2xl p-4">
                  <p className="text-sm text-pink-700 italic" style={{fontFamily: 'Inter, sans-serif'}}>
                    "Heartmend helped me realize that my worth isn't defined by whether someone swipes right. 
                    I'm finally ready to date from a place of confidence, not desperation."
                  </p>
                </div>
              </div>
            </div>

            {/* The Wingmate */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-yellow-100">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-3xl">😎</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{fontFamily: 'DM Serif Display, serif'}}>The Wingmate</h3>
                  <p className="text-lg font-medium text-yellow-600 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>Your Confident Co-Pilot</p>
                </div>
                
                <p className="text-gray-700 leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>
                  <strong>The Wingmate is your go-to for boosting confidence, mastering the art of conversation, and making a great first impression.</strong> 
                  Whether you're feeling shy about starting a chat, need help crafting a compelling profile, or want to inject more fun into your interactions.
                </p>
                
                <div className="bg-yellow-50 rounded-2xl p-4 border-l-4 border-yellow-300">
                  <p className="text-yellow-800 italic" style={{fontFamily: 'Inter, sans-serif'}}>
                    "I'm your hype person! I provide practical tips, witty icebreakers, and personalized advice to help you shine. 
                    I'm all about helping you feel comfortable and charismatic, whether you're looking for casual connections or something more serious."
                  </p>
                </div>
                
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>Perfect for:</h4>
                  <ul className="text-sm text-gray-600 space-y-1" style={{fontFamily: 'Inter, sans-serif'}}>
                    <li>• Those who want to improve their dating game</li>
                    <li>• People looking to overcome social anxiety</li>
                    <li>• Anyone wanting to add more sparkle to their interactions</li>
                    <li>• Users seeking confidence boosts and conversation starters</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-4">
                  <p className="text-sm text-yellow-700 italic" style={{fontFamily: 'Inter, sans-serif'}}>
                    "The Wingmate gave me conversation starters that actually worked! I went from awkward small talk to having genuine fun with my matches."
                  </p>
                </div>
              </div>
            </div>

            {/* The Mentor */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-blue-100">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-3xl">🧠</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{fontFamily: 'DM Serif Display, serif'}}>The Mentor</h3>
                  <p className="text-lg font-medium text-blue-600 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>The Wise Guide to Deeper Connections</p>
                </div>
                
                <p className="text-gray-700 leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>
                  <strong>The Mentor is your strategic partner for building meaningful, lasting relationships.</strong> If you're looking beyond the surface 
                  and want to cultivate deeper emotional intimacy, improve communication with a potential partner, or understand relationship dynamics.
                </p>
                
                <div className="bg-blue-50 rounded-2xl p-4 border-l-4 border-blue-300">
                  <p className="text-blue-800 italic" style={{fontFamily: 'Inter, sans-serif'}}>
                    "I offer insightful perspectives and actionable strategies. I help you identify your relationship goals, 
                    navigate complex situations, and foster genuine bonds that stand the test of time."
                  </p>
                </div>
                
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 mb-2" style={{fontFamily: 'Inter, sans-serif'}}>Perfect for:</h4>
                  <ul className="text-sm text-gray-600 space-y-1" style={{fontFamily: 'Inter, sans-serif'}}>
                    <li>• Individuals seeking serious relationships</li>
                    <li>• Those wanting to improve their communication skills</li>
                    <li>• People looking for guidance on long-term compatibility</li>
                    <li>• Anyone focused on personal growth within relationships</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-4">
                  <p className="text-sm text-blue-700 italic" style={{fontFamily: 'Inter, sans-serif'}}>
                    "The Mentor helped me understand why my relationships kept following the same pattern. 
                    Now I'm dating with intention, not just hoping for the best."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How Your Coaches Work */}
          <div className="mt-16 bg-gradient-to-r from-[#7ED6A7]/10 to-[#D8B4E2]/10 rounded-3xl p-8 lg:p-12">
            <div className="text-center space-y-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>
                How Your Coaches Work
              </h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{fontFamily: 'Inter, sans-serif'}}>
                <strong>Your coaches adapt to you.</strong> Whether you need a pep talk, practical advice, or deep emotional support, 
                they learn your communication style and provide personalized guidance that feels genuinely helpful.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#7ED6A7] to-[#D8B4E2] rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white text-2xl">💬</span>
                  </div>
                  <h4 className="font-semibold text-gray-900" style={{fontFamily: 'Inter, sans-serif'}}>Personalized Conversations</h4>
                  <p className="text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>Each coach adapts to your unique needs and communication style</p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#7ED6A7] to-[#D8B4E2] rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h4 className="font-semibold text-gray-900" style={{fontFamily: 'Inter, sans-serif'}}>Targeted Support</h4>
                  <p className="text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>Get specific help for your current dating challenges</p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#7ED6A7] to-[#D8B4E2] rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white text-2xl">📈</span>
                  </div>
                  <h4 className="font-semibold text-gray-900" style={{fontFamily: 'Inter, sans-serif'}}>Growth-Focused</h4>
                  <p className="text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>Build lasting skills and confidence for all your relationships</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Features */}
          <div className="mt-12 bg-white/50 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-4" style={{fontFamily: 'DM Serif Display, serif'}}>Coming Soon:</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                <div className="flex items-center justify-center space-x-2">
                  <span>📹</span>
                  <span>Live video MicroDates</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>💬</span>
                  <span>Personalized coaching chats</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>👥</span>
                  <span>Community-led support</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>⭐</span>
                  <span>Premium match features</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MicroDate & Micro Lounge - EXCITING FEATURES SECTION */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12">
          {/* MicroDate */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="text-center space-y-6">
              <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-medium text-purple-700" style={{fontFamily: 'Inter, sans-serif'}}>Coming Soon</span>
              </div>
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-3xl">💜</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>
                MicroDate
              </h3>
              <h4 className="text-xl font-semibold text-purple-600" style={{fontFamily: 'Inter, sans-serif'}}>
                Our signature 2-minute AI-guided video dates are on the way.
              </h4>
              <p className="text-lg text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                Get ready — think modern speed dating, 2025 style. No pressure, just spark.
              </p>
            </div>
          </div>

          {/* Micro Lounge */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="text-center space-y-6">
              <div className="inline-block bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-medium text-green-700" style={{fontFamily: 'Inter, sans-serif'}}>Coming Soon</span>
              </div>
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-3xl">💬</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>
                Micro Lounge
              </h3>
              <h4 className="text-xl font-semibold text-green-600" style={{fontFamily: 'Inter, sans-serif'}}>
                Not just for dating — it's where the fun lives!
              </h4>
              <p className="text-lg text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                Share stories, drop advice, or dive into real talk with other singles. Like a group chat… but better.
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof Section - BUILD TRUST EARLY */}
        <div className="mt-20 text-center space-y-8">
          <h2 className="text-3xl font-bold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>
            💬 Why People Love The Dating Suite
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-xl">💭</span>
                </div>
                <p className="text-gray-700 italic" style={{fontFamily: 'Inter, sans-serif'}}>
                  "Finally, a dating space that feels human again."
                </p>
              </div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-xl">✨</span>
                </div>
                <p className="text-gray-700 italic" style={{fontFamily: 'Inter, sans-serif'}}>
                  "I got more value from one chat with a coach than a month of swiping."
                </p>
              </div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-xl">💖</span>
                </div>
                <p className="text-gray-700 italic" style={{fontFamily: 'Inter, sans-serif'}}>
                  "You can feel the difference — this place actually cares."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thoughtful Matching - QUICK VALUE PROP */}
        <div className="mt-20 bg-gradient-to-r from-[#7ED6A7]/10 to-[#D8B4E2]/10 rounded-3xl p-8 lg:p-12">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-[#7ED6A7] to-[#D8B4E2] rounded-full flex items-center justify-center mx-auto">
              <span className="text-white text-3xl">🎯</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>
              Thoughtful Matching
            </h3>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto" style={{fontFamily: 'Inter, sans-serif'}}>
              Designed to reduce ghosting and awkwardness.
            </p>
            <p className="text-lg text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
              The Dating Suite prioritizes people, not profiles.
            </p>
          </div>
        </div>

        {/* Meet the Founders Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8" style={{fontFamily: 'DM Serif Display, serif'}}>
            Meet the Founders
          </h2>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-sm">
            <div className="space-y-6 text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
              <p className="text-lg font-medium text-gray-900">
                Founded in Manchester by Stephen and Hayley.
              </p>
              
              <p className="text-base leading-relaxed">
                The Dating Suite was created with real people in mind — not just swipers.
              </p>
              
              <p className="text-base leading-relaxed">
                Hayley, a former sociology teacher turned skills coach, has spent her career helping people build confidence and connection. Stephen works on the ground in construction, where the site chat is often about how hard dating really is — especially when the apps feel cold, crowded, and fake.
              </p>
              
              <p className="text-base leading-relaxed">
                Over cups of tea and late-night chats in their Greater Manchester home, they began shaping something better: a place where people can date smarter, with real support, and actually enjoy the process.
              </p>
              
              <div className="text-center space-y-3 pt-4">
                <p className="text-base font-medium text-gray-900">
                  Built in Manchester. Designed for connection. Powered by empathy.
                </p>
                <p className="text-base leading-relaxed">
                  This isn't just another dating app — it's a space that listens, guides, and evolves with you.
                </p>
                <p className="text-lg font-medium text-[#D158A5] pt-2">
                  Stephen & Hayley
                </p>
              </div>
              
              {/* Placeholder for founder photos */}
              <div className="flex justify-center space-x-8 pt-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#7ED6A7] to-[#D8B4E2] rounded-full flex items-center justify-center mb-2">
                    <span className="text-white text-2xl font-bold">S</span>
                  </div>
                  <p className="text-sm text-gray-600">Stephen</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#D158A5] to-[#D8B4E2] rounded-full flex items-center justify-center mb-2">
                    <span className="text-white text-2xl font-bold">H</span>
                  </div>
                  <p className="text-sm text-gray-600">Hayley</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why We Built This Section - MOVED DOWN */}
        <div className="mt-20 bg-white/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>
              Why We Built The Dating Suite
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>
              We were tired of dating apps that felt like shopping catalogs. Endless swiping, ghosting, and surface-level connections. 
              We believe dating should be about genuine human connection, not algorithms optimized for engagement.
            </p>
            <p className="text-lg text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
              The Dating Suite is our answer: a space where authenticity matters more than perfect photos, 
              where you get support instead of just matches, and where real conversations happen before you even meet.
            </p>
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-[#D158A5]/10 to-[#D8B4E2]/10 rounded-2xl p-6">
                <p className="text-lg font-medium text-[#D158A5]" style={{fontFamily: 'Inter, sans-serif'}}>
                  "Dating apps should make you feel better about yourself, not worse."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust & Privacy Section - MOVED DOWN */}
        <div className="mt-20">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>
              🛡️ Privacy-First by Design
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{fontFamily: 'Inter, sans-serif'}}>
              Your data is yours. We're building a dating app that respects your privacy and puts your safety first.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
              <div className="text-center space-y-4 bg-green-50 rounded-2xl p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-green-600 text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>No Data Selling</h3>
                <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                  We will never sell your personal information to third parties. Your privacy is not our product.
                </p>
              </div>
              
              <div className="text-center space-y-4 bg-blue-50 rounded-2xl p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-blue-600 text-2xl">👁️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>You Control Visibility</h3>
                <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                  Choose exactly who can see your profile and when. No surprise appearances in other apps.
                </p>
              </div>
              
              <div className="text-center space-y-4 bg-purple-50 rounded-2xl p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-purple-600 text-2xl">🗑️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>Easy Data Deletion</h3>
                <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                  Want to leave? Delete your account and all your data with one click. No hidden backups.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* FAQ Section */}
        <div className="mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12" style={{fontFamily: 'DM Serif Display, serif'}}>
              ❓ Questions? We've Got Answers
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{fontFamily: 'DM Serif Display, serif'}}>
                  How is this different from other dating apps?
                </h3>
                <p className="text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  We focus on community and support, not just matching. You'll get AI coaching, join group conversations in The Suite, 
                  and have optional short video dates when you're both ready. No endless swiping or pressure to meet immediately.
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{fontFamily: 'DM Serif Display, serif'}}>
                  Is my data safe and private?
                </h3>
                <p className="text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  Absolutely. We never sell your data, you control who sees your profile, and you can delete everything with one click. 
                  Your privacy isn't our product - meaningful connections are.
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{fontFamily: 'DM Serif Display, serif'}}>
                  What are MicroDates and do I have to do them?
                </h3>
                <p className="text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  MicroDates are optional 2-minute AI-guided video chats - think modern speed dating. They're completely optional and only happen when both people are interested. 
                  No pressure, just a quick way to see if there's chemistry before investing more time.
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{fontFamily: 'DM Serif Display, serif'}}>
                  How much does it cost?
                </h3>
                <p className="text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  The Dating Suite is free to join with no hidden fees. We're still finalizing our pricing model, 
                  but our commitment is to keep meaningful connections accessible to everyone.
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{fontFamily: 'DM Serif Display, serif'}}>
                  When will all features be available?
                </h3>
                <p className="text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>
                  We're launching thoughtfully, starting with core matching and community features. 
                  AI coaches and MicroDates are coming soon. Join our waitlist to be first to know when new features launch.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Origin Section */}
        <div className="mt-20 text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>
            Thoughtful. Honest. Different.
          </h2>
          <p className="text-xl text-gray-600 italic" style={{fontFamily: 'Inter, sans-serif'}}>
            Born in Manchester, made for everyone.
          </p>
        </div>

        {/* Final CTA Section */}
        <div className="mt-20 text-center space-y-8 bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>
            💖 Real connection is closer than you think.
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto" style={{fontFamily: 'Inter, sans-serif'}}>
            Join a dating community built around support, not swiping.
          </p>
          <p className="text-lg text-gray-500" style={{fontFamily: 'Inter, sans-serif'}}>
            Because meaningful relationships deserve better tools.
          </p>
          
          <a 
            href="https://tally.so/r/nPNMV5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            style={{backgroundColor: '#D158A5', fontFamily: 'Inter, sans-serif'}}
          >
            Join the Waiting List – It's Free
          </a>
          
          <p className="text-lg text-gray-500 pt-4" style={{fontFamily: 'Inter, sans-serif'}}>
            See you on the other side.
          </p>
        </div>
      </div>
    </div>
  )
}

// Simple placeholder for other components
const Dashboard = () => <div>Dashboard - Coming Soon</div>
const Login = () => <div>Login - Coming Soon</div>

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

