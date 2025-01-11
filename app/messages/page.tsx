'use client'

import { useState } from 'react'
import Header from '../components/Header'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const mockMessages = [
  { id: 1, sender: 'Alice', content: 'Hey, how are you?' },
  { id: 2, sender: 'You', content: 'I'm good, thanks! How about you?' },
  { id: 3, sender: 'Alice', content: 'Doing great! Want to meet up this weekend?' },
]

export default function Messages() {
  const [messages, setMessages] = useState(mockMessages)
  const [newMessage, setNewMessage] = useState('')

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: 'You', content: newMessage }])
      setNewMessage('')
    }
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Messages</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="space-y-4 mb-4">
            {messages.map(message => (
              <div key={message.id} className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-lg p-2 ${message.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                  <p className="font-bold">{message.sender}</p>
                  <p>{message.content}</p>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="flex space-x-2">
            <Input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow"
            />
            <Button type="submit">Send</Button>
          </form>
        </div>
      </main>
    </div>
  )
}

