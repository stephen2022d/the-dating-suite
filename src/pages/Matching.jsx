import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { 
  Heart, 
  X, 
  MapPin, 
  Briefcase, 
  GraduationCap,
  Video,
  MessageCircle,
  Star,
  Sparkles
} from 'lucide-react'

// Mock profile data
const mockProfiles = [
  {
    id: 1,
    name: 'Emma',
    age: 28,
    location: 'San Francisco, CA',
    bio: 'Love hiking, yoga, and trying new coffee shops. Looking for someone who can make me laugh and enjoys deep conversations.',
    photos: ['https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face'],
    job: 'Product Designer',
    education: 'Stanford University',
    hasVideo: true,
    interests: ['Hiking', 'Yoga', 'Coffee', 'Travel']
  },
  {
    id: 2,
    name: 'Alex',
    age: 32,
    location: 'San Francisco, CA',
    bio: 'Entrepreneur and dog lover. Always up for an adventure or a quiet night cooking together.',
    photos: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face'],
    job: 'Startup Founder',
    education: 'UC Berkeley',
    hasVideo: false,
    interests: ['Entrepreneurship', 'Dogs', 'Cooking', 'Surfing']
  },
  {
    id: 3,
    name: 'Maya',
    age: 26,
    location: 'San Francisco, CA',
    bio: 'Artist and musician. I paint during the day and play guitar at night. Looking for my creative partner.',
    photos: ['https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face'],
    job: 'Artist',
    education: 'Art Institute',
    hasVideo: true,
    interests: ['Art', 'Music', 'Guitar', 'Photography']
  },
  {
    id: 4,
    name: 'Jordan',
    age: 29,
    location: 'San Francisco, CA',
    bio: 'Software engineer who loves rock climbing and board games. Seeking someone who appreciates both adventure and cozy nights in.',
    photos: ['https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face'],
    job: 'Software Engineer',
    education: 'MIT',
    hasVideo: true,
    interests: ['Rock Climbing', 'Board Games', 'Tech', 'Reading']
  }
]

const Matching = ({ user, updateUser }) => {
  const navigate = useNavigate()
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showMatchModal, setShowMatchModal] = useState(false)
  const [lastMatch, setLastMatch] = useState(null)

  const currentProfile = mockProfiles[currentProfileIndex]

  const handleSwipe = (direction) => {
    if (isAnimating) return
    
    setIsAnimating(true)
    
    // Simulate match (30% chance)
    const isMatch = direction === 'like' && Math.random() > 0.7
    
    if (isMatch) {
      setLastMatch(currentProfile)
      setShowMatchModal(true)
    }
    
    setTimeout(() => {
      setCurrentProfileIndex((prev) => (prev + 1) % mockProfiles.length)
      setIsAnimating(false)
    }, 300)
  }

  const handleMatchModalClose = () => {
    setShowMatchModal(false)
    setLastMatch(null)
  }

  const goToChat = () => {
    navigate(`/chat/${lastMatch.id}`)
  }

  if (!currentProfile) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center space-y-4">
          <Sparkles className="h-12 w-12 text-indigo-500 mx-auto" />
          <h2 className="text-xl font-semibold text-gray-900">No more profiles!</h2>
          <p className="text-gray-600">Check back later for new matches</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 max-w-sm mx-auto h-full flex flex-col">
      {/* Profile Card */}
      <div className="flex-1 relative">
        <Card className={`h-full shadow-2xl border-0 overflow-hidden transition-transform duration-300 ${isAnimating ? 'scale-95 opacity-50' : 'scale-100'}`}>
          <div className="relative h-full">
            {/* Profile Image */}
            <div 
              className="h-2/3 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${currentProfile.photos[0]})` }}
            >
              {/* Video Badge */}
              {currentProfile.hasVideo && (
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white border-0">
                  <Video className="h-3 w-3 mr-1" />
                  Video
                </Badge>
              )}
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Basic Info Overlay */}
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-2xl font-bold">{currentProfile.name}, {currentProfile.age}</h2>
                <div className="flex items-center space-x-1 mt-1">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{currentProfile.location}</span>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <CardContent className="p-4 h-1/3 overflow-y-auto">
              <div className="space-y-3">
                {/* Bio */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {currentProfile.bio}
                </p>

                {/* Work & Education */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Briefcase className="h-4 w-4" />
                    <span>{currentProfile.job}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <GraduationCap className="h-4 w-4" />
                    <span>{currentProfile.education}</span>
                  </div>
                </div>

                {/* Interests */}
                <div className="flex flex-wrap gap-2">
                  {currentProfile.interests.map((interest, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-6 mt-6 pb-4">
        <Button
          onClick={() => handleSwipe('pass')}
          size="lg"
          variant="outline"
          className="w-16 h-16 rounded-full border-2 border-gray-300 hover:border-red-400 hover:bg-red-50 transition-colors"
        >
          <X className="h-6 w-6 text-gray-600 hover:text-red-500" />
        </Button>

        <Button
          onClick={() => handleSwipe('like')}
          size="lg"
          className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 border-0 shadow-lg"
        >
          <Heart className="h-6 w-6 text-white" />
        </Button>
      </div>

      {/* Match Modal */}
      {showMatchModal && lastMatch && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-sm bg-white shadow-2xl border-0">
            <CardContent className="p-8 text-center">
              <div className="space-y-6">
                {/* Match Animation */}
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Star className="h-3 w-3 text-white" />
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">It's a Match!</h2>
                  <p className="text-gray-600">
                    You and {lastMatch.name} liked each other
                  </p>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 bg-cover bg-center" 
                       style={{ backgroundImage: `url(${user.profile?.photos?.[0] || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'})` }} />
                  <Heart className="h-6 w-6 text-pink-500" />
                  <div className="w-16 h-16 rounded-full bg-gray-200 bg-cover bg-center" 
                       style={{ backgroundImage: `url(${lastMatch.photos[0]})` }} />
                </div>

                <div className="space-y-3">
                  <Button 
                    onClick={goToChat}
                    className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white rounded-xl"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  
                  <Button 
                    onClick={handleMatchModalClose}
                    variant="outline"
                    className="w-full rounded-xl"
                  >
                    Keep Swiping
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export default Matching

