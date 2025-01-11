import Header from '../components/Header'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function Profile() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
        <Card>
          <CardHeader>
            <CardTitle>John Doe</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Email: john@example.com</p>
            <p>Interests: Technology, Travel, Photography</p>
            <p>Location: New York, NY</p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

