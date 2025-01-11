'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, Search } from 'lucide-react'

const mockEvents = [
  { id: 1, name: "Tech Meetup", location: "San Francisco, CA", date: "2023-06-15", description: "A gathering for tech enthusiasts" },
  { id: 2, name: "Art Exhibition", location: "New York, NY", date: "2023-06-20", description: "Showcasing local artists' work" },
  { id: 3, name: "Yoga in the Park", location: "Austin, TX", date: "2023-06-18", description: "Morning yoga session for all levels" },
  { id: 4, name: "Food Festival", location: "Chicago, IL", date: "2023-06-25", description: "Taste cuisines from around the world" },
  { id: 5, name: "Music Concert", location: "Los Angeles, CA", date: "2023-06-30", description: "Live performances by top artists" },
]

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [events, setEvents] = useState(mockEvents)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const filteredEvents = mockEvents.filter(event => 
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setEvents(filteredEvents)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Discover Events</h1>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="Search events or locations"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.name}</CardTitle>
              <CardDescription className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" /> {event.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{event.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" /> {event.date}
              </div>
              <Button>RSVP</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

