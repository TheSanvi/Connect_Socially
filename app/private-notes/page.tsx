'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Pencil, Trash2 } from 'lucide-react'

type Note = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
}

export default function PrivateNotesPage() {
  const [notes, setNotes] = useState<Note[]>([])
  const [newNote, setNewNote] = useState({ title: '', content: '' })
  const [editingNote, setEditingNote] = useState<Note | null>(null)

  const addNote = (e: React.FormEvent) => {
    e.preventDefault()
    if (newNote.title && newNote.content) {
      if (editingNote) {
        setNotes(notes.map(note => 
          note.id === editingNote.id ? { ...note, ...newNote } : note
        ))
        setEditingNote(null)
      } else {
        setNotes([...notes, { id: Date.now(), ...newNote, createdAt: new Date() }])
      }
      setNewNote({ title: '', content: '' })
    }
  }

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const editNote = (note: Note) => {
    setEditingNote(note)
    setNewNote({ title: note.title, content: note.content })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-100">Private Notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">{editingNote ? 'Edit Note' : 'Add New Note'}</CardTitle>
            <CardDescription className="text-gray-400">Keep your thoughts organized and secure</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={addNote} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-gray-300">Title</Label>
                <Input
                  id="title"
                  value={newNote.title}
                  onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                  placeholder="Note title"
                  className="bg-gray-700 text-gray-100 border-gray-600"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content" className="text-gray-300">Content</Label>
                <Textarea
                  id="content"
                  value={newNote.content}
                  onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                  placeholder="Note content"
                  rows={4}
                  className="bg-gray-700 text-gray-100 border-gray-600"
                />
              </div>
              <Button type="submit">{editingNote ? 'Update Note' : 'Add Note'}</Button>
            </form>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Your Notes</CardTitle>
            <CardDescription className="text-gray-400">View and manage your private notes</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] pr-4">
              {notes.map(note => (
                <div key={note.id} className="mb-4 p-4 border border-gray-700 rounded-lg bg-gray-750">
                  <h3 className="font-semibold text-lg text-gray-100">{note.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{note.content}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{note.createdAt.toLocaleDateString()}</span>
                    <div>
                      <Button variant="ghost" size="sm" onClick={() => editNote(note)} className="text-gray-400 hover:text-gray-300">
                        <Pencil className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => deleteNote(note.id)} className="text-gray-400 hover:text-gray-300">
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

