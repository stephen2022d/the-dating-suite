import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Input } from '../components/ui/input'
import { 
  Video, 
  Send, 
  ArrowLeft, 
  Phone,
  Heart,
  Smile,
  MoreVertical,
  Clock,
  Zap
} from 'lucide-react'

// Mock match data (would come from the matching system)
const mockMatches = {
  1: {
    id: 1,
    name: 'Emma',
    age: 28,
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    lastSeen: '2 min ago',
    hasVideo: true
  },
  2: {
    id: 2,
    name: 'Alex',
    age: 32,
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    lastSeen: '5 min ago',
    hasVideo: false
  },
  3: {
    id: 3,
    name: 'Maya',
    age: 26,
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    lastSeen: '1 hour ago',
    hasVideo: true
  },
  4: {
    id: 4,
    name: 'Jordan',
    age: 29,
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    lastSeen: 'Online now',
    hasVideo: true
  }
}

// Mock chat messages
const mockMessages = {
  1: [
    { id: 1, sender: 'Emma', text: "Hey! Thanks for the match! 😊", timestamp: '2:30 PM', isOwn: false },
    { id: 2, sender: 'You', text: "Hi Emma! Great to match with you too!", timestamp: '2:32 PM', isOwn: true },
    { id: 3, sender: 'Emma', text: "I saw you're into hiking too! Have you been to any good trails lately?", timestamp: '2:35 PM', isOwn: false },
    { id: 4, sender: 'You', text: "Yes! I just did the Marin Headlands trail last weekend. The views were incredible!", timestamp: '2:37 PM', isOwn: true },
    { id: 5, sender: 'Emma', text: "That sounds amazing! I've been wanting to try that one. Maybe we could go together sometime? 🥾", timestamp: '2:40 PM', isOwn: false },
    { id: 6, sender: 'You', text: "I'd love that! Want to hop on a quick video call to chat more about it?", timestamp: '2:42 PM', isOwn: true }
  ],
  2: [
    { id: 1, sender: 'Alex', text: "Hey there! Love your profile!", timestamp: '1:15 PM', isOwn: false },
    { id: 2, sender: 'You', text: "Thank you! Your startup sounds really interesting", timestamp: '1:20 PM', isOwn: true }
  ],
  3: [
    { id: 1, sender: 'Maya', text: "Hi! Fellow creative here 🎨", timestamp: '11:30 AM', isOwn: false }
  ],
  4: [
    { id: 1, sender: 'Jordan', text: "Hey! Ready for some board game recommendations? 😄", timestamp: '10:45 AM', isOwn: false },
    { id: 2, sender: 'You', text: "Always! What's your current favorite?", timestamp: '10:50 AM', isOwn: true }
  ]
}

const Chat = ({ user, updateUser }) => {
  const { matchId } = useParams()
  const navigate = useNavigate()
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const match = mockMatches[matchId]
  const chatMessages = mockMessages[matchId] || []

  useEffect(() => {
    setMessages(chatMessages)
  }, [matchId])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const message = {
      id: messages.length + 1,
      sender: 'You',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwn: true
    }

    setMessages([...messages, message])
    setNewMessage('')

    // Simulate typing indicator and response
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      const responses = [
        "That's so interesting! Tell me more 😊",
        "I totally agree with you on that!",
        "Haha, you're funny! 😄",
        "That sounds like a great idea!",
        "I'd love to hear more about that!"
      ]
      const response = {
        id: messages.length + 2,
        sender: match.name,
        text: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: false
      }
      setMessages(prev => [...prev, response])
    }, 2000)
  }

  const handleVideoCall = () => {
    if (user.credits < 2) {
      alert('You need at least 2 credits for a video call!')
      return
    }
    navigate(`/video-call/${matchId}`)
  }

  if (!match) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center space-y-4">
          <Heart className="h-12 w-12 text-gray-400 mx-auto" />
          <h2 className="text-xl font-semibold text-gray-900">Match not found</h2>
          <Button onClick={() => navigate('/dashboard')} variant="outline">
            Back to Dashboard
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full max-w-sm mx-auto bg-white">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b bg-white shadow-sm">
        <div className="flex items-center space-x-3">
          <Button
            onClick={() => navigate('/dashboard')}
            variant="ghost"
            size="sm"
            className="p-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          
          <div 
            className="w-10 h-10 rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url(${match.photo})` }}
          />
          
          <div>
            <h3 className="font-semibold text-gray-900">{match.name}</h3>
            <p className="text-xs text-gray-500">{match.lastSeen}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {match.hasVideo && (
            <Badge className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white border-0 text-xs">
              <Video className="h-3 w-3 mr-1" />
              Video
            </Badge>
          )}
          <Button variant="ghost" size="sm" className="p-2">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
          >
            <div className="max-w-xs">
              <div
                className={`px-4 py-2 rounded-2xl ${
                  message.isOwn
                    ? 'bg-gradient-to-r from-indigo-500 to-pink-500 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
              <p className="text-xs text-gray-500 mt-1 px-2">
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-xs">
              <div className="px-4 py-2 rounded-2xl bg-gray-100">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1 px-2">
                {match.name} is typing...
              </p>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Video Call Prompt */}
      <div className="p-4 border-t bg-gradient-to-r from-indigo-50 to-pink-50">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Video className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">2-Minute Video Date</h4>
                  <p className="text-xs text-gray-600">Get to know each other better!</p>
                </div>
              </div>
              
              <Button
                onClick={handleVideoCall}
                className="bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white text-xs px-3 py-2 h-auto"
              >
                <Zap className="h-3 w-3 mr-1" />
                2 Credits
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Message Input */}
      <div className="p-4 border-t bg-white">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="p-2">
            <Smile className="h-5 w-5 text-gray-400" />
          </Button>
          
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type a message..."
            className="flex-1 border-gray-200 rounded-full"
          />
          
          <Button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white rounded-full p-2 w-10 h-10"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Chat

