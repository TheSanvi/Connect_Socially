'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { MapPin, Users, Clock } from 'lucide-react'
import { Slider } from "@/components/ui/slider"

export default function LocationSharingPage() {
  const [isSharing, setIsSharing] = useState(false)
  const [privacyLevel, setPrivacyLevel] = useState('friends')
  const [sharingDuration, setSharingDuration] = useState(60) // in minutes

  const toggleSharing = () => setIsSharing(!isSharing)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-100">Location Sharing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Share Your Location</CardTitle>
            <CardDescription className="text-gray-400">Control your location sharing settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="location-sharing" className="text-lg text-gray-300">Enable Location Sharing</Label>
              <Switch
                id="location-sharing"
                checked={isSharing}
                onCheckedChange={toggleSharing}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-lg text-gray-300">Privacy Level</Label>
              <div className="flex space-x-4">
                <Button 
                  variant={privacyLevel === 'friends' ? 'default' : 'outline'}
                  className={privacyLevel === 'friends' ? 'bg-blue-600 text-gray-100' : 'text-gray-300 border-gray-600'}
                  onClick={() => setPrivacyLevel('friends')}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Friends Only
                </Button>
                <Button 
                  variant={privacyLevel === 'public' ? 'default' : 'outline'}
                  className={privacyLevel === 'public' ? 'bg-blue-600 text-gray-100' : 'text-gray-300 border-gray-600'}
                  onClick={() => setPrivacyLevel('public')}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Public
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-lg text-gray-300">Sharing Duration</Label>
              <div className="flex items-center space-x-4">
                <Slider
                  value={[sharingDuration]}
                  onValueChange={(value) => setSharingDuration(value[0])}
                  max={240}
                  step={30}
                  className="w-[60%] [&_[role=slider]]:bg-blue-600"
                />
                <span className="text-lg font-semibold text-gray-300">{sharingDuration} minutes</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Location Sharing Status</CardTitle>
            <CardDescription className="text-gray-400">Current sharing information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-blue-500" />
              <span className="text-lg text-gray-300">
                {isSharing ? 'Your location is being shared' : 'Location sharing is off'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-purple-500" />
              <span className="text-lg text-gray-300">
                Visible to: {privacyLevel === 'friends' ? 'Friends Only' : 'Public'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-green-500" />
              <span className="text-lg text-gray-300">
                Sharing duration: {sharingDuration} minutes
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

