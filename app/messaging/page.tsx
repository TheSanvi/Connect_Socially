'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { format } from 'date-fns'

type Message = {
  id: number;
  sender: string;
  content: string;
  timestamp: Date;
}

const initialMessages: Message[] = [
  { id: 1, sender: 'Alice', content: 'Hey, how are you?', timestamp: new Date('2023-06-15T10:00:00') },
  { id: 2, sender: 'You', content: "I'm good, thanks! How about you?", timestamp: new Date('2023-06-15T10:05:00') },
  { id: 3, sender: 'Alice', content: 'Doing great! Want to meet up this weekend?', timestamp: new Date('2023-06-15T10:10:00') },
]

export default function MessagingPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    // Scroll to the bottom of the message list when new messages are added
    const messageList = document.getElementById('message-list')
    if (messageList) {
      messageList.scrollTop = messageList.scrollHeight
    }
  }, [messages])

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: messages.length + 1,
        sender: 'You',
        content: newMessage,
        timestamp: new Date()
      }
      setMessages([...messages, newMsg])
      setNewMessage('')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-100">Seamless Messaging</h1>
      <Card className="max-w-2xl mx-auto bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-100">Chat with Alice</CardTitle>
          <CardDescription className="text-gray-400">Stay connected with your friends</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] pr-4" id="message-list">
            {messages.map((message, index) => (
              <div key={message.id} className="mb-4">
                <div className={`flex items-start ${message.sender === 'You' ? 'justify-end' : ''}`}>
                  {message.sender !== 'You' && (
                    <Avatar className="mr-2">
                      <AvatarImage src="/placeholder.svg" alt={message.sender} />
                      <AvatarFallback>{message.sender[0]}</AvatarFallback>
                    </Avatar>
                  )}
                  <div className={`rounded-lg p-3 ${message.sender === 'You' ? 'bg-blue-600 text-gray-100' : 'bg-gray-700 text-gray-300'}`}>
                    <p>{message.content}</p>
                    <p className="text-xs mt-1 opacity-70">{format(message.timestamp, 'HH:mm')}</p>
                  </div>
                </div>
                {index < messages.length - 1 && <Separator className="my-4" />}
              </div>
            ))}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form onSubmit={sendMessage} className="flex w-full space-x-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow bg-gray-700 text-gray-100 border-gray-600"
            />
            <Button type="submit" className="bg-blue-600 text-gray-100">Send</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}

