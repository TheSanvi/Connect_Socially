'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Heart, X } from 'lucide-react'

type Profile = {
  id: number;
  name: string;
  age: number;
  location: string;
  interests: string[];
  avatar: string;
}

const mockProfiles: Profile[] = [
  { id: 1, name: 'Alice Johnson', age: 28, location: 'New York, NY', interests: ['hiking', 'photography', 'travel'], avatar: '/placeholder.svg' },
  { id: 2, name: 'Bob Smith', age: 32, location: 'Los Angeles, CA', interests: ['cooking', 'music', 'movies'], avatar: '/placeholder.svg' },
  { id: 3, name: 'Charlie Brown', age: 25, location: 'Chicago, IL', interests: ['sports', 'reading', 'art'], avatar: '/placeholder.svg' },
  { id: 4, name: 'Diana Lee', age: 30, location: 'San Francisco, CA', interests: ['yoga', 'technology', 'dancing'], avatar: '/placeholder.svg' },
]

export default function ProfileMatchingPage() {
  const [profiles, setProfiles] = useState(mockProfiles)
  const [currentProfile, setCurrentProfile] = useState(0)

  const handleLike = () => {
    // In a real app, this would send a like notification or create a match
    console.log(`Liked ${profiles[currentProfile].name}`)
    nextProfile()
  }

  const handlePass = () => {
    nextProfile()
  }

  const nextProfile = () => {
    setCurrentProfile((prev) => (prev + 1) % profiles.length)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-100">Profile Matching</h1>
      <div className="max-w-md mx-auto">
        <Card className="w-full bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Find Your Match</CardTitle>
            <CardDescription className="text-gray-400">Discover people with similar interests</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Avatar className="w-32 h-32 mb-4">
              <AvatarImage src={profiles[currentProfile].avatar} alt={profiles[currentProfile].name} />
              <AvatarFallback>{profiles[currentProfile].name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-semibold mb-2 text-gray-100">{profiles[currentProfile].name}, {profiles[currentProfile].age}</h2>
            <div className="flex items-center text-gray-400 mb-4">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{profiles[currentProfile].location}</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {profiles[currentProfile].interests.map((interest, index) => (
                <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-300">{interest}</Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center space-x-4">
            <Button onClick={handlePass} variant="outline" size="icon" className="border-gray-600 text-gray-300">
              <X className="h-6 w-6" />
            </Button>
            <Button onClick={handleLike} variant="default" size="icon" className="bg-blue-600 text-gray-100">
              <Heart className="h-6 w-6" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

