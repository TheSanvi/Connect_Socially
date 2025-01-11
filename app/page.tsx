import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MapPin, Users, MessageSquare, Notebook } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-100">Welcome to SocialConnect</h1>
        <p className="text-2xl mb-10 text-gray-300 max-w-2xl mx-auto">Connect, Share, and Explore with like-minded individuals in a vibrant online community</p>
        <Button asChild size="lg" className="px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          <Link href="/get-started">Get Started</Link>
        </Button>
      </section>

      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<CalendarDays className="h-12 w-12 text-blue-500" />}
              title="Smart Scheduling"
              description="AI-powered event planning and scheduling to make your social life effortless."
              href="/smart-scheduling"
            />
            <FeatureCard 
              icon={<MapPin className="h-12 w-12 text-green-500" />}
              title="Location Sharing"
              description="Share your location with friends and discover nearby events and meetups."
              href="/location-sharing"
            />
            <FeatureCard 
              icon={<Users className="h-12 w-12 text-purple-500" />}
              title="Profile Matching"
              description="Connect with people who share your interests and passions."
              href="/profile-matching"
            />
            <FeatureCard 
              icon={<MessageSquare className="h-12 w-12 text-yellow-500" />}
              title="Seamless Messaging"
              description="Stay in touch with your connections through our intuitive messaging system."
              href="/messaging"
            />
            <FeatureCard 
              icon={<Notebook className="h-12 w-12 text-red-500" />}
              title="Private Notes"
              description="Keep your thoughts organized with secure, private notes."
              href="/private-notes"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-100">Ready to get connected?</h2>
          <Button asChild size="lg">
            <Link href="/get-started">Join SocialConnect Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) {
  return (
    <Link href={href} className="block">
      <Card className="flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gray-700 border-gray-600 h-full">
        <CardHeader className="pb-2">
          <div className="rounded-full bg-gray-600 p-4 inline-block mb-4">
            {icon}
          </div>
          <CardTitle className="text-2xl mb-2 text-gray-100">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-gray-300">{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}

