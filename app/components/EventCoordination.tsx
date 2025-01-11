'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const mockEvents = [
  { id: 1, name: 'Coffee Meetup', date: '2023-06-15', time: '15:00' },
  { id: 2, name: 'Movie Night', date: '2023-06-18', time: '20:00' },
]

export default function EventCoordination() {
  const [events, setEvents] = useState(mockEvents)

  const createEvent = () => {
    // In a real app, this would open a modal or navigate to an event creation page
    alert('Event creation functionality would be implemented here.')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Event Coordination</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={createEvent} className="mb-4">Create New Event</Button>
        <ul>
          {events.map(event => (
            <li key={event.id} className="mb-2">
              {event.name} - {event.date} at {event.time}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

