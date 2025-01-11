'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-800 shadow fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-gray-100">
            SocialConnect
          </Link>
          <div className="hidden md:flex space-x-2 items-center">
            <Button asChild variant="outline" className="text-gray-100 border-gray-100">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-gray-100">
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-gray-100">
              <Link href="/get-started">Join SocialConnect Today</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Button asChild variant="outline" className="w-full text-gray-100 border-gray-100">
                <Link href="/login">Log In</Link>
              </Button>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-gray-100">
                <Link href="/signup">Sign Up</Link>
              </Button>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-gray-100">
                <Link href="/get-started">Join SocialConnect Today</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

