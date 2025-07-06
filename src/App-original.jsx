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
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-[#D158A5] to-[#D8B4E2] rounded-full flex items-center justify-center">
            <span className="text-white text-lg">💜</span>
          </div>
          <span className="text-xl font-bold text-gray-800" style={{fontFamily: 'DM Serif Display, serif'}}>The DateLounge</span>
        </div>
        <button 
          onClick={() => navigate('/login')}
          className="text-[#D158A5] hover:text-[#D8B4E2] font-medium"
        >
          Sign In
        </button>
      </header>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" style={{fontFamily: 'DM Serif Display, serif'}}>
                The DateLounge — A Dating App & Community That 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D158A5] to-[#D8B4E2]"> Cares</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>
                A space built on support, honesty, real conversation — and of course, fun.
              </p>
              <p className="text-lg text-gray-500">
                Connect with people, not just profiles.
              </p>
            </div>
            
            <div className="space-y-4">
              <button 
                onClick={() => navigate('/onboarding')}
                className="text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                style={{backgroundColor: '#7ED6A7', fontFamily: 'Inter, sans-serif'}}
              >
                Join Our Community — It's Free
              </button>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center space-x-1">
                  <span className="text-[#7ED6A7]">✅</span>
                  <span className="text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>Free to join</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-[#7ED6A7]">✅</span>
                  <span className="text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>No hidden fees</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-[#7ED6A7]">✅</span>
                  <span className="text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>Privacy-first</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-[#7ED6A7]">✅</span>
                  <span className="text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>Supportive features</span>
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

        {/* Tagline Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <p className="text-lg font-medium text-gray-700" style={{fontFamily: 'Inter, sans-serif', color: '#D158A5'}}>
              "Flirt easy. Vibe check faster. Feel something real."
            </p>
          </div>
        </div>

        {/* MicroDates Section */}
        <div className="mt-20 text-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>Introducing MicroDates™</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{fontFamily: 'Inter, sans-serif'}}>
            Our signature 2-minute, AI-guided live video date.<br/>
            Think Speed Dating 2025 — real sparks, low pressure, and always optional.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
            <div className="bg-white/70 rounded-lg p-4">
              <p className="text-sm text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>✨ AI-guided conversation prompts</p>
            </div>
            <div className="bg-white/70 rounded-lg p-4">
              <p className="text-sm text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>🚫 No awkward silences</p>
            </div>
            <div className="bg-white/70 rounded-lg p-4">
              <p className="text-sm text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>🎯 Optional, live, and low-stakes</p>
            </div>
            <div className="bg-white/70 rounded-lg p-4">
              <p className="text-sm text-gray-700" style={{fontFamily: 'Inter, sans-serif'}}>⚡ Designed to help you vibe-check before wasting time</p>
            </div>
          </div>
        </div>

        {/* Meet the Coaches Section */}
        <div className="mt-20 text-center space-y-8">
          <h2 className="text-4xl font-bold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>Meet Your In-House AI Coaches</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#F76C5E] to-[#D158A5] rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">💔</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>Heartmend</h3>
              <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>Breakup & healing support</p>
            </div>
            
            <div className="text-center space-y-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D158A5] to-[#D8B4E2] rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">😎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>The Wingmate</h3>
              <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>Confidence, banter, profile help</p>
            </div>
            
            <div className="text-center space-y-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#7ED6A7] to-[#D8B4E2] rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>The Mentor</h3>
              <p className="text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>Deep connection & emotional insight</p>
            </div>
          </div>
        </div>

        {/* The Lounge Section */}
        <div className="mt-20 text-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>The Lounge — A fun place to chill and chat with other members</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto" style={{fontFamily: 'Inter, sans-serif'}}>
            Whether you're warming up before a MicroDate™, dropping into a trending convo, or just vibing — The Lounge is your space to hang out, connect, and keep things light.
          </p>
          <p className="text-lg text-gray-500" style={{fontFamily: 'Inter, sans-serif'}}>
            Hosted by AI. Powered by the community. Open to everyone.
          </p>
        </div>

        {/* Final CTA Section */}
        <div className="mt-20 text-center space-y-8 bg-gradient-to-br from-[#D158A5]/10 to-[#D8B4E2]/10 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-gray-900" style={{fontFamily: 'DM Serif Display, serif'}}>
            Because real connection deserves better tools.
          </h2>
          <p className="text-xl text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
            See you on the other side.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => navigate('/onboarding')}
              className="text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              style={{backgroundColor: '#7ED6A7', fontFamily: 'Inter, sans-serif'}}
            >
              Start Free
            </button>
            <button 
              onClick={() => navigate('/onboarding')}
              className="text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              style={{backgroundColor: '#D158A5', fontFamily: 'Inter, sans-serif'}}
            >
              Try a MicroDate™
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/*
// Onboarding Component
const Onboarding = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    photos: [],
    video: null,
    age: '',
    gender: '',
    pronouns: '',
    orientation: '',
    location: '',
    preferences: {},
    bio: '',
    compatibility: {}
  })
  const navigate = useNavigate()

  const nextStep = () => {
    if (step < 8) setStep(step + 1)
    else navigate('/dashboard')
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Create Your Account</h2>
            <p className="text-gray-600">Just a few quick details to get started — and don't worry, we keep your info private.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your first name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Create Password</label>
                <input 
                  type="password" 
                  value={formData.password}
                  onChange={(e) => updateFormData('password', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Create a secure password"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                <input 
                  type="password" 
                  value={formData.confirmPassword}
                  onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Confirm your password"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                <input 
                  type="date" 
                  value={formData.dateOfBirth}
                  onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select 
                  value={formData.gender}
                  onChange={(e) => updateFormData('gender', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select your gender</option>
                  <option value="Man">Man</option>
                  <option value="Woman">Woman</option>
                  <option value="Non-binary">Non-binary</option>
                  <option value="Prefer to self-describe">Prefer to self-describe</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Looking For</label>
                <select 
                  value={formData.lookingFor}
                  onChange={(e) => updateFormData('lookingFor', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Who are you interested in?</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Everyone">Everyone</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input 
                  type="text" 
                  value={formData.location}
                  onChange={(e) => updateFormData('location', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="City or Postcode"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sexual Orientation <span className="text-gray-400">(Optional)</span></label>
                <select 
                  value={formData.sexualOrientation}
                  onChange={(e) => updateFormData('sexualOrientation', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select orientation</option>
                  <option value="Straight">Straight</option>
                  <option value="Gay">Gay</option>
                  <option value="Lesbian">Lesbian</option>
                  <option value="Bisexual">Bisexual</option>
                  <option value="Pansexual">Pansexual</option>
                  <option value="Asexual">Asexual</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">Only used to improve your experience — never shared.</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Religion <span className="text-gray-400">(Optional)</span></label>
                <select 
                  value={formData.religion}
                  onChange={(e) => updateFormData('religion', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select religion</option>
                  <option value="Christianity">Christianity</option>
                  <option value="Islam">Islam</option>
                  <option value="Judaism">Judaism</option>
                  <option value="Hinduism">Hinduism</option>
                  <option value="Buddhism">Buddhism</option>
                  <option value="Sikhism">Sikhism</option>
                  <option value="Atheist">Atheist</option>
                  <option value="Agnostic">Agnostic</option>
                  <option value="Spiritual">Spiritual</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">Only used to improve your experience — never shared.</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ethnicity <span className="text-gray-400">(Optional)</span></label>
                <select 
                  value={formData.ethnicity}
                  onChange={(e) => updateFormData('ethnicity', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select ethnicity</option>
                  <option value="Asian">Asian</option>
                  <option value="Black">Black</option>
                  <option value="Hispanic/Latino">Hispanic/Latino</option>
                  <option value="Middle Eastern">Middle Eastern</option>
                  <option value="Native American">Native American</option>
                  <option value="Pacific Islander">Pacific Islander</option>
                  <option value="White">White</option>
                  <option value="Mixed">Mixed</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">Only used to improve your experience — never shared.</p>
              </div>
            </div>
          </div>
        )
      
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Create Your Account</h2>
            <p className="text-gray-600">Just a few quick details to get started — and don't worry, we keep your info private.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your first name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Create Password</label>
                <input 
                  type="password" 
                  value={formData.password}
                  onChange={(e) => updateFormData('password', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Create a secure password"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                <input 
                  type="password" 
                  value={formData.confirmPassword}
                  onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Confirm your password"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                <input 
                  type="date" 
                  value={formData.dateOfBirth}
                  onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select 
                  value={formData.gender}
                  onChange={(e) => updateFormData('gender', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select your gender</option>
                  <option value="Man">Man</option>
                  <option value="Woman">Woman</option>
                  <option value="Non-binary">Non-binary</option>
                  <option value="Prefer to self-describe">Prefer to self-describe</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Looking For</label>
                <select 
                  value={formData.lookingFor}
                  onChange={(e) => updateFormData('lookingFor', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Who are you interested in?</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Everyone">Everyone</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input 
                  type="text" 
                  value={formData.location}
                  onChange={(e) => updateFormData('location', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="City or Postcode"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sexual Orientation <span className="text-gray-400">(Optional)</span></label>
                <select 
                  value={formData.sexualOrientation}
                  onChange={(e) => updateFormData('sexualOrientation', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select orientation</option>
                  <option value="Straight">Straight</option>
                  <option value="Gay">Gay</option>
                  <option value="Lesbian">Lesbian</option>
                  <option value="Bisexual">Bisexual</option>
                  <option value="Pansexual">Pansexual</option>
                  <option value="Asexual">Asexual</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">Only used to improve your experience — never shared.</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Religion <span className="text-gray-400">(Optional)</span></label>
                <select 
                  value={formData.religion}
                  onChange={(e) => updateFormData('religion', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select religion</option>
                  <option value="Christianity">Christianity</option>
                  <option value="Islam">Islam</option>
                  <option value="Judaism">Judaism</option>
                  <option value="Hinduism">Hinduism</option>
                  <option value="Buddhism">Buddhism</option>
                  <option value="Sikhism">Sikhism</option>
                  <option value="Atheist">Atheist</option>
                  <option value="Agnostic">Agnostic</option>
                  <option value="Spiritual">Spiritual</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">Only used to improve your experience — never shared.</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ethnicity <span className="text-gray-400">(Optional)</span></label>
                <select 
                  value={formData.ethnicity}
                  onChange={(e) => updateFormData('ethnicity', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select ethnicity</option>
                  <option value="Asian">Asian</option>
                  <option value="Black">Black</option>
                  <option value="Hispanic/Latino">Hispanic/Latino</option>
                  <option value="Middle Eastern">Middle Eastern</option>
                  <option value="Native American">Native American</option>
                  <option value="Pacific Islander">Pacific Islander</option>
                  <option value="White">White</option>
                  <option value="Mixed">Mixed</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">Only used to improve your experience — never shared.</p>
              </div>
            </div>
          </div>
        )
      
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Where are you located?</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <div className="flex space-x-3">
                  <input 
                    type="text" 
                    value={formData.location}
                    onChange={(e) => updateFormData('location', e.target.value)}
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="London, UK"
                  />
                  <button className="px-4 py-3 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
                    📍 Auto-detect
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Tell us about yourself</h2>
            <p className="text-gray-600">Write a short bio (max 500 characters)</p>
            
            <div className="space-y-4">
              <div>
                <textarea 
                  value={formData.bio}
                  onChange={(e) => updateFormData('bio', e.target.value)}
                  maxLength={500}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent h-32 resize-none"
                  placeholder="I love hiking, trying new restaurants, and having deep conversations over coffee..."
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>💡 Mention hobbies, values, or fun facts</span>
                  <span>{formData.bio.length}/500</span>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Your preferences</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">Age range (18-50)</label>
                <div className="px-4">
                  <input 
                    type="range" 
                    min="18" 
                    max="50" 
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>22</span>
                    <span>35</span>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Relationship goal</label>
                <div className="space-y-3">
                  {['Something casual', 'Long-term', 'Open to either'].map(option => (
                    <button
                      key={option}
                      onClick={() => updateFormData('relationshipGoal', option)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-colors ${
                        formData.relationshipGoal === option 
                          ? 'border-purple-500 bg-purple-50 text-purple-700' 
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      
      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Fun compatibility quiz</h2>
            <p className="text-gray-600">Help us find your perfect matches!</p>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">What's your ideal first date?</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Coffee & conversation', 'Adventure activity', 'Museum or gallery', 'Cooking together'].map(option => (
                    <button
                      key={option}
                      className="p-3 bg-white rounded-lg border-2 border-gray-200 hover:border-purple-300 transition-colors text-sm"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Your communication style?</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Direct & honest', 'Gentle & thoughtful', 'Playful & teasing', 'Deep & philosophical'].map(option => (
                    <button
                      key={option}
                      className="p-3 bg-white rounded-lg border-2 border-gray-200 hover:border-purple-300 transition-colors text-sm"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      
      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Compatibility questions</h2>
            <p className="text-gray-600">These help us find truly compatible matches</p>
            
            <div className="space-y-6">
              {[
                { question: 'Do you smoke?', options: ['Never', 'Socially', 'Regularly', 'Prefer not to say'] },
                { question: 'Do you want children?', options: ['Yes', 'No', 'Maybe', 'Have kids'] },
                { question: 'How important is religion?', options: ['Very important', 'Somewhat important', 'Not important', 'Prefer not to say'] },
                { question: 'Your exercise habits?', options: ['Daily', 'Few times a week', 'Occasionally', 'Rarely'] }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-3">{item.question}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {item.options.map(option => (
                      <button
                        key={option}
                        className="p-2 bg-white rounded border-2 border-gray-200 hover:border-purple-300 transition-colors text-sm"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      
      case 8:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Optional: Add a video intro</h2>
            <p className="text-gray-600">Profiles with a video get 5x more matches!</p>
            
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">🎥</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Record a 30-second intro</h3>
                <p className="text-gray-600 mb-6">Show your personality and make a great first impression</p>
                
                <div className="flex justify-center space-x-4">
                  <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                    📹 Record Video
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-purple-300 transition-colors">
                    📁 Upload Video
                  </button>
                </div>
              </div>
              
              <div className="text-center">
                <button 
                  onClick={nextStep}
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Skip for now
                </button>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Step {step} of 8</span>
            <span>{Math.round((step / 8) * 100)}% complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 8) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step content */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          {renderStep()}
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button 
              onClick={prevStep}
              disabled={step === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                step === 1 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Back
            </button>
            <button 
              onClick={nextStep}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
            >
              {step === 1 ? 'Continue to Your Profile' : step === 8 ? 'Complete' : 'Next'}
            </button>
          </div>
          
          {step === 1 && (
            <div className="text-center mt-4">
              <p className="text-xs text-gray-500">
                By continuing, you agree to our Terms & Privacy Policy.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
*/

// Dashboard Component
const Dashboard = () => {
  const [credits, setCredits] = useState(10)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">💜</span>
            </div>
            <span className="text-xl font-bold text-gray-800">MicroDate</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-purple-100 px-3 py-2 rounded-full">
              <span className="text-purple-600">💎</span>
              <span className="font-semibold text-purple-700">{credits} credits</span>
            </div>
            <button className="text-gray-600 hover:text-gray-800">⚙️</button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome back! 👋</h1>
          <p className="text-xl text-gray-600">Ready to make meaningful connections?</p>
        </div>

        {/* AI Coaches Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your AI Relationship Coaches</h2>
          <p className="text-gray-600 mb-8">Get personalized guidance from our expert coaches (Coming Soon)</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Heartmend */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Heartmend</h3>
                <p className="text-purple-600 font-medium mb-3">Your personal breakup & healing guide</p>
                <p className="text-gray-600 text-sm mb-4">Get over heartbreak, regain confidence, open your heart again.</p>
                <div className="bg-gray-100 text-gray-500 px-4 py-2 rounded-lg text-sm">
                  Coming Soon
                </div>
              </div>
            </div>

            {/* The Wingmate */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">😎</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Wingmate</h3>
                <p className="text-purple-600 font-medium mb-3">Boosts confidence, flirting tips, first message help</p>
                <p className="text-gray-600 text-sm mb-4">Flirt smarter. Avoid ghosting. Make your first impression count.</p>
                <div className="bg-gray-100 text-gray-500 px-4 py-2 rounded-lg text-sm">
                  Coming Soon
                </div>
              </div>
            </div>

            {/* The Mentor */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Mentor</h3>
                <p className="text-purple-600 font-medium mb-3">Build stronger bonds, understand relationship patterns</p>
                <p className="text-gray-600 text-sm mb-4">Build lasting relationships and express yourself without fear.</p>
                <div className="bg-gray-100 text-gray-500 px-4 py-2 rounded-lg text-sm">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Matching Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to meet someone special?</h2>
            <p className="text-gray-600 mb-8">Discover people who share your interests and values</p>
            
            <button 
              onClick={() => navigate('/matching')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Start Matching
            </button>
          </div>
        </div>

        {/* Referral Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Invite friends = get 10 bonus credits each</h3>
          <p className="mb-6 opacity-90">Share the love and earn credits when your friends join MicroDate</p>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
            Invite Friends
          </button>
        </div>
      </div>
    </div>
  )
}

// Matching Component with Gamified Features
const Matching = () => {
  const [currentProfile, setCurrentProfile] = useState(0)
  const [showMatch, setShowMatch] = useState(false)
  const [showLikedNotification, setShowLikedNotification] = useState(false)
  const [credits, setCredits] = useState(10)
  const navigate = useNavigate()

  const profiles = [
    {
      id: 1,
      name: 'Emma',
      age: 28,
      location: 'London',
      bio: 'Love hiking and trying new restaurants',
      tags: ['Foodie', 'Adventure lover', 'Dog parent'],
      image: heroWomanSmiling
    },
    {
      id: 2,
      name: 'James',
      age: 30,
      location: 'Manchester',
      bio: 'Photographer who loves coffee and deep conversations',
      tags: ['Creative', 'Coffee lover', 'Photographer'],
      image: heroManSmiling
    }
  ]

  const handleLike = () => {
    // Simulate match
    if (Math.random() > 0.5) {
      setShowMatch(true)
      setTimeout(() => {
        setShowMatch(false)
        nextProfile()
      }, 3000)
    } else {
      nextProfile()
    }
  }

  const handlePass = () => {
    nextProfile()
  }

  const nextProfile = () => {
    setCurrentProfile((prev) => (prev + 1) % profiles.length)
  }

  const revealMatch = () => {
    if (credits > 0) {
      setCredits(credits - 1)
      setShowLikedNotification(true)
      setTimeout(() => setShowLikedNotification(false), 3000)
    }
  }

  const profile = profiles[currentProfile]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => navigate('/dashboard')} className="text-gray-600 hover:text-gray-800">
            ← Back
          </button>
          <div className="flex items-center space-x-2 bg-purple-100 px-3 py-2 rounded-full">
            <span className="text-purple-600">💎</span>
            <span className="font-semibold text-purple-700">{credits} credits</span>
          </div>
        </div>
      </header>

      <div className="max-w-md mx-auto px-6 py-8">
        {/* Liked notification */}
        {showLikedNotification && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg z-50 animate-bounce">
            You've been liked! 💜
          </div>
        )}

        {/* Match popup */}
        {showMatch && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 text-center max-w-sm mx-4">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">It's a Match!</h2>
              <p className="text-gray-600 mb-6">You both liked each other</p>
              <button 
                onClick={() => navigate('/chat/1')}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold w-full"
              >
                Start Chatting
              </button>
            </div>
          </div>
        )}

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative">
            <img 
              src={profile.image} 
              alt={profile.name}
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
              <h2 className="text-2xl font-bold">{profile.name}, {profile.age}</h2>
              <p className="text-sm opacity-90">📍 {profile.location}</p>
            </div>
          </div>
          
          <div className="p-6">
            <p className="text-gray-700 mb-4">{profile.bio}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {profile.tags.map(tag => (
                <span key={tag} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Action buttons */}
            <div className="flex justify-center space-x-6">
              <button 
                onClick={handlePass}
                className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-2xl hover:bg-gray-200 transition-colors"
              >
                ✕
              </button>
              <button 
                onClick={handleLike}
                className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-2xl text-white hover:shadow-lg transition-all"
              >
                💜
              </button>
            </div>
          </div>
        </div>

        {/* Curiosity Hook */}
        <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg text-center">
          <h3 className="font-bold text-gray-900 mb-2">You've been liked!</h3>
          <p className="text-gray-600 mb-4">Someone is interested in you. Reveal 1 free match today!</p>
          <button 
            onClick={revealMatch}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold mb-2"
          >
            Reveal Free Match
          </button>
          <p className="text-sm text-gray-500">Still curious? Reveal more for 1 credit.</p>
        </div>

        {/* Micro Gifting */}
        <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="font-bold text-gray-900 mb-4 text-center">Send a gift to break the ice</h3>
          <div className="grid grid-cols-4 gap-3">
            {[
              { emoji: '🌹', name: 'Rose', cost: 1 },
              { emoji: '☕', name: 'Coffee', cost: 1 },
              { emoji: '🧸', name: 'Teddy', cost: 2 },
              { emoji: '🍫', name: 'Chocolate', cost: 1 }
            ].map(gift => (
              <button 
                key={gift.name}
                className="bg-purple-50 hover:bg-purple-100 p-3 rounded-lg text-center transition-colors"
              >
                <div className="text-2xl mb-1">{gift.emoji}</div>
                <div className="text-xs text-gray-600">{gift.cost} credit</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Login Component
const Login = () => {
  const navigate = useNavigate()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">💜</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
            <p className="text-gray-600">Sign in to continue your journey</p>
          </div>
          
          <div className="space-y-4">
            <input 
              type="email" 
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <input 
              type="password" 
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button 
              onClick={() => navigate('/dashboard')}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Sign In
            </button>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don't have an account? 
              <button 
                onClick={() => navigate('/onboarding')}
                className="text-purple-600 hover:text-purple-700 font-medium ml-1"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Chat Component
const Chat = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey! Great to match with you 😊", sender: 'other', time: '2:30 PM' },
    { id: 2, text: "Hi! I loved your photos, especially the hiking one!", sender: 'me', time: '2:32 PM' },
    { id: 3, text: "Thanks! Do you hike often?", sender: 'other', time: '2:35 PM' }
  ])
  const navigate = useNavigate()

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        text: message,
        sender: 'me',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }])
      setMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate('/matching')} className="text-gray-600 hover:text-gray-800">
            ← Back
          </button>
          <img src={heroWomanSmiling} alt="Emma" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <h2 className="font-semibold text-gray-900">Emma</h2>
            <p className="text-sm text-green-500">Online now</p>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs px-4 py-2 rounded-2xl ${
              msg.sender === 'me' 
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' 
                : 'bg-white border border-gray-200 text-gray-900'
            }`}>
              <p>{msg.text}</p>
              <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-pink-100' : 'text-gray-500'}`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Call CTA */}
      <div className="bg-purple-50 p-4 border-t border-purple-100">
        <div className="text-center">
          <p className="text-purple-700 font-medium mb-2">Ready for a video date?</p>
          <button 
            onClick={() => navigate('/video-call/1')}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            🎥 Start 2-Minute Video Date (2 credits)
          </button>
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex space-x-3">
          <input 
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message..."
            className="flex-1 p-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button 
            onClick={sendMessage}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

// Video Call Component
const VideoCall = () => {
  const [timeLeft, setTimeLeft] = useState(120) // 2 minutes
  const [isActive, setIsActive] = useState(true)
  const [showQuiz, setShowQuiz] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    let interval = null
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsActive(false)
      setShowQuiz(true)
    }
    return () => clearInterval(interval)
  }, [isActive, timeLeft])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const endCall = () => {
    setIsActive(false)
    setShowQuiz(true)
  }

  if (showQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How was your date?</h2>
            <p className="text-gray-600 mb-6">Help us improve your matches</p>
            
            <div className="space-y-4 mb-6">
              <div className="text-left">
                <p className="font-medium text-gray-900 mb-2">Did you feel a connection?</p>
                <div className="grid grid-cols-3 gap-2">
                  {['Yes!', 'Maybe', 'No'].map(option => (
                    <button key={option} className="p-2 border-2 border-gray-200 rounded-lg hover:border-purple-300 transition-colors text-sm">
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="text-left">
                <p className="font-medium text-gray-900 mb-2">Conversation flowed well?</p>
                <div className="grid grid-cols-3 gap-2">
                  {['Great', 'Okay', 'Awkward'].map(option => (
                    <button key={option} className="p-2 border-2 border-gray-200 rounded-lg hover:border-purple-300 transition-colors text-sm">
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <button 
                onClick={() => navigate('/chat/1')}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold"
              >
                Continue Chatting
              </button>
              <button 
                onClick={() => navigate('/matching')}
                className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:border-purple-300 transition-colors"
              >
                Back to Matching
              </button>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-purple-700">
                Want more time with this match? Unlock unlimited video with MicroDate+
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Video area */}
      <div className="flex-1 relative">
        {/* Partner video (main) */}
        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
          <img 
            src={heroWomanSmiling} 
            alt="Emma" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Your video (small) */}
        <div className="absolute top-4 right-4 w-32 h-24 bg-gray-700 rounded-lg overflow-hidden">
          <img 
            src={heroManSmiling} 
            alt="You" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Timer */}
        <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
          <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
        </div>
        
        {/* Icebreaker questions */}
        <div className="absolute bottom-20 left-4 right-4">
          <div className="bg-black bg-opacity-70 text-white p-4 rounded-lg">
            <p className="text-sm opacity-75 mb-1">Icebreaker:</p>
            <p className="font-medium">What's the most adventurous thing you've done recently?</p>
          </div>
        </div>
      </div>
      
      {/* Controls */}
      <div className="bg-black p-6 flex justify-center space-x-6">
        <button className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-500 transition-colors">
          🎤
        </button>
        <button className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-500 transition-colors">
          📹
        </button>
        <button 
          onClick={endCall}
          className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors"
        >
          📞
        </button>
      </div>
    </div>
  )
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/onboarding" element={<Onboarding />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/video-call/:id" element={<VideoCall />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

