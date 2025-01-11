'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'

export default function LocationSharing() {
  const [isSharing, setIsSharing] = useState(false)

  const toggleSharing = () => {
    // In a real app, this would enable or disable location sharing
    setIsSharing(!isSharing)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Location Sharing</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <Switch id="location-sharing" checked={isSharing} onCheckedChange={toggleSharing} />
          <label htmlFor="location-sharing">
            {isSharing ? 'Location sharing is on' : 'Location sharing is off'}
          </label>
        </div>
        {isSharing && (
          <p className="mt-4">Your location is being shared with your friends.</p>
        )}
      </CardContent>
    </Card>
  )
}

