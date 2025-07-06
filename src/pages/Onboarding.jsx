import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Label } from '../components/ui/label'
import { Badge } from '../components/ui/badge'
import { 
  ArrowLeft, 
  ArrowRight, 
  Camera, 
  Upload, 
  MapPin, 
  Heart,
  Users,
  Video,
  Skip,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const Onboarding = ({ updateUser }) => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    photo: null,
    photoPreview: null,
    gender: '',
    interestedIn: '',
    age: '',
    location: '',
    bio: '',
    ageRange: [18, 35],
    relationshipGoal: '',
    ethnicity: '',
    religion: '',
    politics: '',
    orientation: '',
    genderIdentity: '',
    matchPreferences: [],
    videoIntro: null,
    hasVideo: false
  })
  
  const fileInputRef = useRef(null)
  const videoInputRef = useRef(null)
  const cameraRef = useRef(null)

  const totalSteps = 7

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          photo: file,
          photoPreview: e.target.result
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCameraCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      // In a real app, you'd implement camera capture here
      alert('Camera capture would be implemented here. For demo, please use upload instead.')
      stream.getTracks().forEach(track => track.stop())
    } catch (error) {
      alert('Camera access denied. Please use the upload option instead.')
    }
  }

  const handleVideoUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setFormData(prev => ({
        ...prev,
        videoIntro: file,
        hasVideo: true
      }))
    }
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      // Complete onboarding
      updateUser({
        isAuthenticated: true,
        onboardingComplete: true,
        profile: formData
      })
      navigate('/dashboard')
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSkip = () => {
    if (currentStep === 6 || currentStep === 7) {
      handleNext()
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.name && formData.photo
      case 2: return formData.gender && formData.interestedIn
      case 3: return formData.age && formData.location
      case 4: return formData.bio.length > 0
      case 5: return formData.relationshipGoal
      case 6: return true // Optional step
      case 7: return true // Optional step
      default: return false
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Let's start with the basics</h2>
              <p className="text-gray-600">What's your name and best photo?</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your first name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700">Profile Photo</Label>
                <div className="mt-2 space-y-3">
                  {formData.photoPreview ? (
                    <div className="relative">
                      <img 
                        src={formData.photoPreview} 
                        alt="Preview" 
                        className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-purple-200"
                      />
                      <Button
                        onClick={() => setFormData(prev => ({ ...prev, photo: null, photoPreview: null }))}
                        variant="outline"
                        size="sm"
                        className="mt-2"
                      >
                        Change Photo
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={() => fileInputRef.current?.click()}
                        variant="outline"
                        className="flex-1"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Photo
                      </Button>
                      <Button
                        onClick={handleCameraCapture}
                        variant="outline"
                        className="flex-1"
                      >
                        <Camera className="h-4 w-4 mr-2" />
                        Take Photo
                      </Button>
                    </div>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  💡 Clear photos get 3x more interest
                </p>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell us about yourself</h2>
              <p className="text-gray-600">This helps us find your perfect matches</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-3 block">Gender Identity</Label>
                <div className="grid grid-cols-2 gap-3">
                  {['Male', 'Female', 'Non-binary', 'Prefer not to say'].map((option) => (
                    <Button
                      key={option}
                      onClick={() => handleInputChange('gender', option)}
                      variant={formData.gender === option ? 'default' : 'outline'}
                      className={`h-12 ${formData.gender === option ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-3 block">Interested In</Label>
                <div className="grid grid-cols-3 gap-3">
                  {['Women', 'Men', 'Everyone'].map((option) => (
                    <Button
                      key={option}
                      onClick={() => handleInputChange('interestedIn', option)}
                      variant={formData.interestedIn === option ? 'default' : 'outline'}
                      className={`h-12 ${formData.interestedIn === option ? 'bg-pink-600 hover:bg-pink-700' : ''}`}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Age and location</h2>
              <p className="text-gray-600">Help us find matches near you</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="age" className="text-sm font-medium text-gray-700">Your Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="25"
                  min="18"
                  max="100"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="location" className="text-sm font-medium text-gray-700">Location</Label>
                <div className="relative mt-1">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="location"
                    type="text"
                    placeholder="London, UK"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="pl-10"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  We'll auto-detect your location or you can enter it manually
                </p>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">About you</h2>
              <p className="text-gray-600">Share what makes you unique</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="bio" className="text-sm font-medium text-gray-700">
                  Write a short bio (max 500 characters)
                </Label>
                <Textarea
                  id="bio"
                  placeholder="I love hiking, trying new restaurants, and spending time with my dog. Looking for someone who shares my passion for adventure and good conversation..."
                  value={formData.bio}
                  onChange={(e) => {
                    if (e.target.value.length <= 500) {
                      handleInputChange('bio', e.target.value)
                    }
                  }}
                  className="mt-1 min-h-[120px]"
                />
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs text-gray-500">
                    💡 Mention hobbies, values, or fun facts
                  </p>
                  <span className={`text-xs ${formData.bio.length > 450 ? 'text-red-500' : 'text-gray-500'}`}>
                    {formData.bio.length}/500
                  </span>
                </div>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Dating preferences</h2>
              <p className="text-gray-600">What are you looking for?</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-3 block">Age Range</Label>
                <div className="px-3">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>{formData.ageRange[0]}</span>
                    <span>{formData.ageRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="18"
                    max="65"
                    value={formData.ageRange[1]}
                    onChange={(e) => handleInputChange('ageRange', [formData.ageRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-3 block">Relationship Goal</Label>
                <div className="space-y-3">
                  {[
                    { value: 'casual', label: 'Something casual', icon: '😊' },
                    { value: 'longterm', label: 'Long-term', icon: '💕' },
                    { value: 'open', label: 'Open to either', icon: '🤷‍♀️' }
                  ].map((option) => (
                    <Button
                      key={option.value}
                      onClick={() => handleInputChange('relationshipGoal', option.value)}
                      variant={formData.relationshipGoal === option.value ? 'default' : 'outline'}
                      className={`w-full h-12 justify-start ${
                        formData.relationshipGoal === option.value ? 'bg-purple-600 hover:bg-purple-700' : ''
                      }`}
                    >
                      <span className="mr-3">{option.icon}</span>
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Optional details</h2>
              <p className="text-gray-600">Help us find even better matches (all skippable)</p>
            </div>

            <div className="space-y-4">
              {[
                { field: 'ethnicity', label: 'Race/Ethnicity', options: ['Asian', 'Black', 'Hispanic', 'White', 'Middle Eastern', 'Mixed', 'Other'] },
                { field: 'religion', label: 'Religion', options: ['Christian', 'Muslim', 'Jewish', 'Hindu', 'Buddhist', 'Atheist', 'Agnostic', 'Other'] },
                { field: 'politics', label: 'Political Views', options: ['Liberal', 'Conservative', 'Moderate', 'Not Political', 'Other'] }
              ].map((section) => (
                <div key={section.field}>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">{section.label}</Label>
                  <div className="flex flex-wrap gap-2">
                    {section.options.map((option) => (
                      <Button
                        key={option}
                        onClick={() => handleInputChange(section.field, option)}
                        variant={formData[section.field] === option ? 'default' : 'outline'}
                        size="sm"
                        className={formData[section.field] === option ? 'bg-purple-600 hover:bg-purple-700' : ''}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Video introduction</h2>
              <p className="text-gray-600">Stand out with a personal touch</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-6">
                <Video className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <p className="text-sm text-purple-800 font-medium">
                  📈 Profiles with a video get 5x more matches
                </p>
              </div>

              {formData.hasVideo ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span>Video uploaded successfully!</span>
                  </div>
                  <Button
                    onClick={() => setFormData(prev => ({ ...prev, videoIntro: null, hasVideo: false }))}
                    variant="outline"
                  >
                    Change Video
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      onClick={() => alert('Video recording would be implemented here')}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      <Video className="h-4 w-4 mr-2" />
                      Record Video
                    </Button>
                    <Button
                      onClick={() => videoInputRef.current?.click()}
                      variant="outline"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Video
                    </Button>
                  </div>
                  <input
                    ref={videoInputRef}
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    className="hidden"
                  />
                </div>
              )}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-4">
      <div className="max-w-md mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-gray-500">{Math.round((currentStep / totalSteps) * 100)}% complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Content Card */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-6">
            {renderStep()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6">
          <Button
            onClick={handleBack}
            variant="outline"
            disabled={currentStep === 1}
            className="flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          <div className="flex space-x-3">
            {(currentStep === 6 || currentStep === 7) && (
              <Button
                onClick={handleSkip}
                variant="ghost"
                className="text-gray-500"
              >
                <Skip className="h-4 w-4 mr-2" />
                Skip
              </Button>
            )}
            
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              {currentStep === totalSteps ? 'Complete' : 'Next'}
              {currentStep !== totalSteps && <ArrowRight className="h-4 w-4 ml-2" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Onboarding

