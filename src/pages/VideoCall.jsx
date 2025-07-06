import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Phone, 
  PhoneOff,
  MessageCircle,
  Heart,
  Clock,
  Lightbulb,
  Sparkles
} from 'lucide-react'

// Mock match data
const mockMatches = {
  1: {
    id: 1,
    name: 'Emma',
    age: 28,
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
  },
  2: {
    id: 2,
    name: 'Alex',
    age: 32,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
  },
  3: {
    id: 3,
    name: 'Maya',
    age: 26,
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
  },
  4: {
    id: 4,
    name: 'Jordan',
    age: 29,
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
  }
}

// Icebreaker questions
const icebreakerQuestions = [
  "What's the most adventurous thing you've done recently?",
  "If you could have dinner with anyone, who would it be?",
  "What's your favorite way to spend a weekend?",
  "What's something you're passionate about that might surprise me?",
  "If you could travel anywhere right now, where would you go?",
  "What's the best piece of advice you've ever received?",
  "What's your favorite childhood memory?",
  "If you could learn any skill instantly, what would it be?",
  "What's something that always makes you laugh?",
  "What's your idea of a perfect day?"
]

const VideoCall = ({ user, updateUser }) => {
  const { matchId } = useParams()
  const navigate = useNavigate()
  const [timeLeft, setTimeLeft] = useState(120) // 2 minutes in seconds
  const [isCallActive, setIsCallActive] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [videoEnabled, setVideoEnabled] = useState(true)
  const [audioEnabled, setAudioEnabled] = useState(true)
  const [callEnded, setCallEnded] = useState(false)

  const match = mockMatches[matchId]
  const questions = icebreakerQuestions.slice(0, 3) // Show 3 questions during the call

  useEffect(() => {
    if (isCallActive && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsCallActive(false)
            setCallEnded(true)
            // Deduct credits
            updateUser(prevUser => ({
              ...prevUser,
              credits: Math.max(0, prevUser.credits - 2)
            }))
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [isCallActive, timeLeft, updateUser])

  // Change question every 40 seconds
  useEffect(() => {
    if (isCallActive) {
      const questionTimer = setInterval(() => {
        setCurrentQuestion(prev => (prev + 1) % questions.length)
      }, 40000)

      return () => clearInterval(questionTimer)
    }
  }, [isCallActive, questions.length])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const startCall = () => {
    setIsCallActive(true)
    setTimeLeft(120)
    setCallEnded(false)
  }

  const endCall = () => {
    setIsCallActive(false)
    setCallEnded(true)
    // Deduct credits
    updateUser(prevUser => ({
      ...prevUser,
      credits: Math.max(0, prevUser.credits - 2)
    }))
  }

  const goToChat = () => {
    navigate(`/chat/${matchId}`)
  }

  if (!match) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center space-y-4">
          <Video className="h-12 w-12 text-gray-400 mx-auto" />
          <h2 className="text-xl font-semibold text-gray-900">Match not found</h2>
          <Button onClick={() => navigate('/dashboard')} variant="outline">
            Back to Dashboard
          </Button>
        </div>
      </div>
    )
  }

  if (callEnded) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 max-w-sm mx-auto">
        <Card className="w-full shadow-2xl border-0">
          <CardContent className="p-8 text-center">
            <div className="space-y-6">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-10 w-10 text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Great Call!</h2>
                <p className="text-gray-600">
                  Hope you enjoyed your 2-minute date with {match.name}!
                </p>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 bg-cover bg-center" 
                     style={{ backgroundImage: `url(${user.profile?.photos?.[0] || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'})` }} />
                <Sparkles className="h-6 w-6 text-yellow-500" />
                <div className="w-16 h-16 rounded-full bg-gray-200 bg-cover bg-center" 
                     style={{ backgroundImage: `url(${match.photo})` }} />
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={goToChat}
                  className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white rounded-xl"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Continue Chatting
                </Button>
                
                <Button 
                  onClick={() => navigate('/matching')}
                  variant="outline"
                  className="w-full rounded-xl"
                >
                  Find More Matches
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full max-w-sm mx-auto bg-gray-900 text-white">
      {/* Call Header */}
      <div className="flex items-center justify-between p-4 bg-black/20">
        <div className="flex items-center space-x-3">
          <div 
            className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-white"
            style={{ backgroundImage: `url(${match.photo})` }}
          />
          <div>
            <h3 className="font-semibold text-white">{match.name}</h3>
            <p className="text-xs text-gray-300">2-Minute Date</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Badge className="bg-red-500 text-white border-0">
            <Clock className="h-3 w-3 mr-1" />
            {formatTime(timeLeft)}
          </Badge>
        </div>
      </div>

      {/* Video Area */}
      <div className="flex-1 relative bg-gradient-to-br from-gray-800 to-gray-900">
        {!isCallActive ? (
          // Pre-call screen
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <div className="space-y-6">
              <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                <Video className="h-12 w-12 text-white" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-2">Ready for your 2-minute date?</h2>
                <p className="text-gray-300 text-sm">
                  Connect with {match.name} for a quick video chat with guided conversation starters!
                </p>
              </div>

              <div className="bg-black/30 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Lightbulb className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm font-medium text-white">What to expect:</span>
                </div>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• 2-minute timer to keep things fun and focused</li>
                  <li>• 3 icebreaker questions to spark conversation</li>
                  <li>• Relaxed atmosphere to get to know each other</li>
                </ul>
              </div>

              <Button
                onClick={startCall}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl py-3"
              >
                <Video className="h-5 w-5 mr-2" />
                Start Video Date
              </Button>
            </div>
          </div>
        ) : (
          // Active call screen
          <div className="h-full relative">
            {/* Simulated video feeds */}
            <div className="grid grid-cols-1 h-full">
              {/* Partner's video (main) */}
              <div 
                className="relative bg-cover bg-center"
                style={{ backgroundImage: `url(${match.photo})` }}
              >
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Your video (small overlay) */}
                <div className="absolute top-4 right-4 w-20 h-28 rounded-lg overflow-hidden border-2 border-white shadow-lg">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${user.profile?.photos?.[0] || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'})` }}
                  />
                </div>

                {/* Icebreaker Question Overlay */}
                <div className="absolute bottom-20 left-4 right-4">
                  <Card className="bg-black/70 border-0 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-2">
                        <Lightbulb className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-300 mb-1">Icebreaker Question:</p>
                          <p className="text-sm font-medium">{questions[currentQuestion]}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Call Controls */}
      {isCallActive && (
        <div className="p-4 bg-black/30">
          <div className="flex items-center justify-center space-x-6">
            <Button
              onClick={() => setVideoEnabled(!videoEnabled)}
              variant="ghost"
              className={`w-12 h-12 rounded-full ${videoEnabled ? 'bg-gray-700 hover:bg-gray-600' : 'bg-red-600 hover:bg-red-700'} text-white`}
            >
              {videoEnabled ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
            </Button>

            <Button
              onClick={() => setAudioEnabled(!audioEnabled)}
              variant="ghost"
              className={`w-12 h-12 rounded-full ${audioEnabled ? 'bg-gray-700 hover:bg-gray-600' : 'bg-red-600 hover:bg-red-700'} text-white`}
            >
              {audioEnabled ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
            </Button>

            <Button
              onClick={endCall}
              className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white"
            >
              <PhoneOff className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoCall

