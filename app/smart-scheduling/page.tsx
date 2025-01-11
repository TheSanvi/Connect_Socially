'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { format } from "date-fns"
import { Clock, MapPin } from 'lucide-react'

type Event = {
  id: string;
  title: string;
  date: Date;
  time: string;
  location: string;
}

export default function SmartSchedulingPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [events, setEvents] = useState<Event[]>([])
  const [newEvent, setNewEvent] = useState({ title: '', time: '', location: '' })
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const addEvent = () => {
    if (newEvent.title && selectedDate) {
      const newEventObj: Event = {
        id: Date.now().toString(),
        title: newEvent.title,
        date: selectedDate,
        time: newEvent.time,
        location: newEvent.location
      }
      setEvents([...events, newEventObj])
      setNewEvent({ title: '', time: '', location: '' })
      setIsDialogOpen(false)
    }
  }

  const eventsForSelectedDate = events.filter(
    (event) => event.date.toDateString() === selectedDate?.toDateString()
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-100">Smart Scheduling</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Calendar</CardTitle>
            <CardDescription className="text-gray-400">Select a date to view or add events</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Events for {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Selected Date'}</CardTitle>
          </CardHeader>
          <CardContent>
            {eventsForSelectedDate.length > 0 ? (
              <ul className="space-y-4">
                {eventsForSelectedDate.map((event) => (
                  <li key={event.id} className="bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg text-gray-100">{event.title}</h3>
                    <div className="flex items-center text-sm text-gray-400 mt-2">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400 mt-1">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No events scheduled for this date.</p>
            )}
          </CardContent>
          <CardFooter>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="w-full">Add Event</Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-800 text-gray-100">
                <DialogHeader>
                  <DialogTitle>Add New Event</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Create a new event for {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'the selected date'}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="event-title" className="text-right">
                      Event Title
                    </Label>
                    <Input
                      id="event-title"
                      value={newEvent.title}
                      onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                      className="col-span-3 bg-gray-700 text-gray-100 border-gray-600"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="event-time" className="text-right">
                      Time
                    </Label>
                    <Input
                      id="event-time"
                      type="time"
                      value={newEvent.time}
                      onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                      className="col-span-3 bg-gray-700 text-gray-100 border-gray-600"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="event-location" className="text-right">
                      Location
                    </Label>
                    <Input
                      id="event-location"
                      value={newEvent.location}
                      onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                      className="col-span-3 bg-gray-700 text-gray-100 border-gray-600"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={addEvent}>Add Event</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

