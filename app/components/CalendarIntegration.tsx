'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function CalendarIntegration() {
  const [connected, setConnected] = useState(false)

  const handleConnect = () => {
    // In a real app, this would initiate the OAuth flow with Google Calendar
    setConnected(true)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar Integration</CardTitle>
      </CardHeader>
      <CardContent>
        {connected ? (
          <p>Your calendar is connected. Upcoming events will appear here.</p>
        ) : (
          <Button onClick={handleConnect}>Connect Google Calendar</Button>
        )}
      </CardContent>
    </Card>
  )
}

