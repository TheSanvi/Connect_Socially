'use client'

import { useState } from 'react'
import Header from '../components/Header'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function PrivateNotes() {
  const [notes, setNotes] = useState<string[]>([])
  const [newNote, setNewNote] = useState('')

  const addNote = (e: React.FormEvent) => {
    e.preventDefault()
    if (newNote.trim()) {
      setNotes([...notes, newNote])
      setNewNote('')
    }
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Private Notes</h1>
        <Card>
          <CardHeader>
            <CardTitle>Your Secure Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={addNote} className="mb-4">
              <div className="flex space-x-2">
                <Input
                  type="text"
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Add a new note..."
                  className="flex-grow"
                />
                <Button type="submit">Add Note</Button>
              </div>
            </form>
            <ul className="space-y-2">
              {notes.map((note, index) => (
                <li key={index} className="bg-gray-100 p-2 rounded">{note}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

