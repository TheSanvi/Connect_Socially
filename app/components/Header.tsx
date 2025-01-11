import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Social App
        </Link>
        <div className="space-x-4">
          <Link href="/calendar" className="text-gray-600 hover:text-gray-900">Calendar</Link>
          <Link href="/messages" className="text-gray-600 hover:text-gray-900">Messages</Link>
          <Link href="/profile" className="text-gray-600 hover:text-gray-900">Profile</Link>
        </div>
      </nav>
    </header>
  )
}

