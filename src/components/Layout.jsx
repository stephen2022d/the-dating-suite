import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Heart, MessageCircle, User, CreditCard, ArrowLeft, Coins } from 'lucide-react'

const Layout = ({ children, user, updateUser }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const showBackButton = location.pathname !== '/dashboard'
  const showBottomNav = ['/dashboard', '/matching', '/credits'].includes(location.pathname)

  const handleBack = () => {
    if (location.pathname.includes('/chat') || location.pathname.includes('/video-call')) {
      navigate('/matching')
    } else if (location.pathname === '/matching') {
      navigate('/dashboard')
    } else {
      navigate(-1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          {showBackButton && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="p-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center">
              <Heart className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">MicroDate</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* Credits Counter */}
          <Badge 
            variant="secondary" 
            className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 cursor-pointer px-3 py-1"
            onClick={() => navigate('/credits')}
          >
            <Coins className="h-4 w-4 mr-1" />
            {user.credits} credits
          </Badge>

          {/* Profile Avatar */}
          <Avatar className="h-8 w-8 cursor-pointer" onClick={() => navigate('/profile')}>
            <AvatarImage src={user.profile?.photos?.[0]} />
            <AvatarFallback className="bg-indigo-100 text-indigo-600">
              {user.profile?.name?.[0] || 'U'}
            </AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>

      {/* Bottom Navigation */}
      {showBottomNav && (
        <nav className="bg-white border-t border-gray-200 px-4 py-2">
          <div className="flex justify-around items-center max-w-md mx-auto">
            <Button
              variant={location.pathname === '/dashboard' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => navigate('/dashboard')}
              className="flex flex-col items-center space-y-1 px-3 py-2"
            >
              <Heart className="h-5 w-5" />
              <span className="text-xs">Home</span>
            </Button>
            
            <Button
              variant={location.pathname === '/matching' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => navigate('/matching')}
              className="flex flex-col items-center space-y-1 px-3 py-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="text-xs">Match</span>
            </Button>
            
            <Button
              variant={location.pathname === '/credits' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => navigate('/credits')}
              className="flex flex-col items-center space-y-1 px-3 py-2"
            >
              <CreditCard className="h-5 w-5" />
              <span className="text-xs">Credits</span>
            </Button>
          </div>
        </nav>
      )}
    </div>
  )
}

export default Layout

