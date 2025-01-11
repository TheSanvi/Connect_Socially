'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"

export default function GetStartedPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    birthday: '',
    gender: '',
    profilePhoto: '',
    locationPermission: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData)
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full mx-auto shadow-2xl">
        <CardHeader>
          <CardTitle>{step === 1 ? 'Sign Up' : 'Complete Your Profile'}</CardTitle>
          <CardDescription>{`Step ${step} of 3`}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= i ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {i}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="birthday">Birthday</Label>
                  <Input
                    id="birthday"
                    name="birthday"
                    type="date"
                    value={formData.birthday}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Gender</Label>
                  <RadioGroup
                    name="gender"
                    value={formData.gender}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="profilePhoto">Profile Photo URL</Label>
                  <Input
                    id="profilePhoto"
                    name="profilePhoto"
                    type="url"
                    value={formData.profilePhoto}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="locationPermission"
                    checked={formData.locationPermission}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, locationPermission: checked }))}
                  />
                  <Label htmlFor="locationPermission">Allow location sharing</Label>
                </div>
              </>
            )}
          </form>
          <div className="mt-6">
            <Button onClick={handleSubmit} className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md shadow-md transition-colors duration-300">
              {step < 3 ? 'Next' : 'Complete Setup'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

