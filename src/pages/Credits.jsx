import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { 
  Zap, 
  Crown, 
  Check, 
  Star,
  Video,
  MessageCircle,
  Heart,
  Eye,
  Sparkles,
  ArrowLeft,
  CreditCard,
  Gift
} from 'lucide-react'

const Credits = ({ user, updateUser }) => {
  const navigate = useNavigate()
  const [selectedPlan, setSelectedPlan] = useState(null)

  const creditPackages = [
    {
      id: 'starter',
      name: 'Starter Pack',
      credits: 25,
      price: 9.99,
      popular: false,
      description: 'Perfect for getting started',
      features: ['25 Credits', '12+ Video Dates', 'Basic Support']
    },
    {
      id: 'popular',
      name: 'Popular Pack',
      credits: 60,
      price: 19.99,
      popular: true,
      description: 'Most popular choice',
      features: ['60 Credits', '30+ Video Dates', 'Priority Support', '20% Bonus Credits']
    },
    {
      id: 'vip',
      name: 'VIP Pack',
      credits: 150,
      price: 39.99,
      popular: false,
      description: 'Maximum value',
      features: ['150 Credits', '75+ Video Dates', 'VIP Support', '50% Bonus Credits']
    }
  ]

  const subscriptionFeatures = [
    { icon: Zap, text: '50 weekly credits', included: true },
    { icon: Video, text: 'Unlimited coach access', included: true },
    { icon: MessageCircle, text: 'Free video calls', included: true },
    { icon: Eye, text: 'See who liked you', included: true },
    { icon: Star, text: 'Priority matching', included: true },
    { icon: Crown, text: 'Exclusive features', included: true }
  ]

  const handlePurchaseCredits = (packageId) => {
    const selectedPackage = creditPackages.find(pkg => pkg.id === packageId)
    if (selectedPackage) {
      // Simulate purchase
      updateUser(prevUser => ({
        ...prevUser,
        credits: prevUser.credits + selectedPackage.credits
      }))
      alert(`Successfully purchased ${selectedPackage.credits} credits!`)
    }
  }

  const handleSubscribe = () => {
    // Simulate subscription
    updateUser(prevUser => ({
      ...prevUser,
      subscription: 'microdate_plus',
      credits: prevUser.credits + 50
    }))
    alert('Welcome to MicroDate+! You now have unlimited access!')
  }

  return (
    <div className="p-4 max-w-sm mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button
          onClick={() => navigate('/dashboard')}
          variant="ghost"
          size="sm"
          className="p-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        
        <h1 className="text-xl font-bold text-gray-900">Credits & Plans</h1>
        
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Current Balance */}
      <Card className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white border-0">
        <CardContent className="p-6 text-center">
          <div className="space-y-2">
            <Zap className="h-8 w-8 mx-auto" />
            <h2 className="text-2xl font-bold">{user.credits} Credits</h2>
            <p className="text-indigo-100">Your current balance</p>
          </div>
        </CardContent>
      </Card>

      {/* MicroDate+ Subscription */}
      <Card className="border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Crown className="h-6 w-6 text-yellow-600" />
              <CardTitle className="text-lg text-gray-900">MicroDate+</CardTitle>
            </div>
            <Badge className="bg-yellow-500 text-white border-0">
              Premium
            </Badge>
          </div>
          <p className="text-sm text-gray-600">Unlimited dating experience</p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {subscriptionFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <feature.icon className="h-4 w-4 text-yellow-600" />
                <span className="text-xs text-gray-700">{feature.text}</span>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div>
              <p className="text-lg font-bold text-gray-900">$29.99/month</p>
              <p className="text-xs text-gray-500">Cancel anytime</p>
            </div>
            
            <Button
              onClick={handleSubscribe}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
            >
              <Crown className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Credit Packages */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Buy Credits</h3>
        
        {creditPackages.map((pkg) => (
          <Card 
            key={pkg.id} 
            className={`relative ${pkg.popular ? 'border-2 border-indigo-500 bg-gradient-to-br from-indigo-50 to-pink-50' : 'border border-gray-200'}`}
          >
            {pkg.popular && (
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white border-0">
                <Star className="h-3 w-3 mr-1" />
                Most Popular
              </Badge>
            )}
            
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{pkg.name}</h4>
                  <p className="text-sm text-gray-600">{pkg.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">${pkg.price}</p>
                  <p className="text-xs text-gray-500">{pkg.credits} credits</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                {pkg.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button
                onClick={() => handlePurchaseCredits(pkg.id)}
                className={`w-full ${
                  pkg.popular 
                    ? 'bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white' 
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Purchase
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* How Credits Work */}
      <Card className="bg-gray-50 border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg text-gray-900 flex items-center">
            <Sparkles className="h-5 w-5 mr-2 text-indigo-500" />
            How Credits Work
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
              <Video className="h-4 w-4 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Video Dates</p>
              <p className="text-xs text-gray-600">2 credits per 2-minute call</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
              <MessageCircle className="h-4 w-4 text-pink-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">AI Coaching</p>
              <p className="text-xs text-gray-600">1 credit per session</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <Heart className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Matching & Chat</p>
              <p className="text-xs text-gray-600">Always free</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Free Credits Offer */}
      <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
        <CardContent className="p-4 text-center">
          <Gift className="h-8 w-8 mx-auto mb-2" />
          <h4 className="font-semibold mb-1">Invite Friends</h4>
          <p className="text-sm text-green-100 mb-3">
            Get 5 free credits for each friend who joins!
          </p>
          <Button 
            variant="outline" 
            className="bg-white text-green-600 border-white hover:bg-green-50"
          >
            Share MicroDate
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Credits

