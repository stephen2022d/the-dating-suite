import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { 
  Heart, 
  MessageCircle, 
  Users, 
  Sparkles,
  ArrowRight,
  Play,
  Zap
} from 'lucide-react'

const Dashboard = ({ user }) => {
  const navigate = useNavigate()

  const coachCards = [
    {
      id: 'heartmend',
      name: 'Heartmend',
      tagline: "MicroDate's very own Heart Healing Coach",
      description: 'Get over past relationships and open your heart to new love',
      icon: Heart,
      gradient: 'from-pink-400 to-rose-500',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-700',
      iconColor: 'text-pink-600'
    },
    {
      id: 'wingmate',
      name: 'The Wingmate',
      tagline: 'Your easygoing personal date coach',
      description: 'Master the art of flirty banter and confident conversation',
      icon: MessageCircle,
      gradient: 'from-purple-400 to-indigo-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      iconColor: 'text-purple-600'
    },
    {
      id: 'mentor',
      name: 'The Mentor',
      tagline: 'Your calm, honest guide to real connection',
      description: 'Build meaningful relationships with authentic communication',
      icon: Users,
      gradient: 'from-emerald-400 to-teal-500',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700',
      iconColor: 'text-emerald-600'
    }
  ]

  return (
    <div className="p-6 space-y-8 max-w-2xl mx-auto">
      {/* Welcome Section */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user.profile?.name || 'there'}!
        </h1>
        <p className="text-gray-600 text-lg">Ready to find your perfect match?</p>
      </div>

      {/* AI Coach Cards */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 mb-6">
          <Sparkles className="h-6 w-6 text-indigo-600" />
          <h2 className="text-xl font-semibold text-gray-900">Your AI Coaches</h2>
          <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">
            Always Available
          </Badge>
        </div>

        <div className="grid gap-4">
          {coachCards.map((coach) => {
            const IconComponent = coach.icon
            return (
              <Card 
                key={coach.id}
                className={`${coach.bgColor} border-0 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group`}
                onClick={() => navigate(`/coach/${coach.id}`)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${coach.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200`}>
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div>
                        <h3 className={`text-lg font-semibold ${coach.textColor}`}>
                          {coach.name}
                        </h3>
                        <p className="text-sm text-gray-600 italic">
                          {coach.tagline}
                        </p>
                      </div>
                      
                      <p className="text-sm text-gray-700">
                        {coach.description}
                      </p>
                      
                      <div className="flex items-center justify-between pt-2">
                        <Badge variant="outline" className={`${coach.textColor} border-current`}>
                          Free Session
                        </Badge>
                        <ArrowRight className={`h-4 w-4 ${coach.iconColor} group-hover:translate-x-1 transition-transform duration-200`} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Start Matching Section */}
      <div className="space-y-6">
        <Card className="bg-gradient-to-r from-indigo-500 to-pink-500 border-0 shadow-lg">
          <CardContent className="p-8 text-center text-white">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-white" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to Meet Someone?</h3>
                <p className="text-white/90">
                  Start swiping and discover amazing people near you
                </p>
              </div>
              
              <Button 
                onClick={() => navigate('/matching')}
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Play className="h-5 w-5 mr-2" />
                Start Matching
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-indigo-600">10</div>
              <div className="text-sm text-gray-600">Credits Left</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-pink-600">0</div>
              <div className="text-sm text-gray-600">Matches</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-emerald-600">0</div>
              <div className="text-sm text-gray-600">Video Dates</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tips Section */}
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Sparkles className="h-4 w-4 text-amber-600" />
            </div>
            <div>
              <h4 className="font-medium text-amber-900 mb-1">Pro Tip</h4>
              <p className="text-sm text-amber-800">
                Complete your profile with photos and a bio to get 3x more matches! 
                Try talking to our AI coaches for personalized dating advice.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard

