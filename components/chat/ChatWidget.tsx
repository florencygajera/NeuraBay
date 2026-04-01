'use client'

import { useMemo, useState } from 'react'
import { Bot, MessageCircle, Send, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

const starterReplies = [
  'You can start with our Product Discovery sprint to validate scope and architecture.',
  'For a new SaaS build, we usually recommend Next.js + API-first backend + analytics from day one.',
  'If you share your timeline, we can suggest the fastest delivery model for your team.',
]

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<string[]>([])

  const hint = useMemo(() => {
    return starterReplies[messages.length % starterReplies.length]
  }, [messages.length])

  function handleSend() {
    if (!input.trim()) {
      return
    }

    setMessages((prev) => [...prev, `You: ${input.trim()}`, `NeuraBay AI: ${hint}`])
    setInput('')
  }

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {isOpen ? (
        <div className="surface-card mb-3 w-[320px] p-4 shadow-2xl">
          <div className="mb-3 flex items-center justify-between">
            <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Bot className="h-4 w-4 text-sky-600" />
              NeuraBay Assistant
            </p>
            <button
              aria-label="Close assistant"
              className="rounded-md p-1 text-slate-500 transition hover:bg-slate-100"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mb-3 max-h-56 space-y-2 overflow-y-auto rounded-lg bg-slate-50 p-3 text-xs text-slate-700">
            {messages.length === 0 ? (
              <p>Ask about services, timelines, or technical recommendations.</p>
            ) : (
              messages.map((msg, idx) => <p key={idx}>{msg}</p>)
            )}
          </div>

          <div className="flex gap-2">
            <Input
              aria-label="Type message"
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask something..."
              value={input}
            />
            <Button aria-label="Send message" onClick={handleSend} size="sm" type="button" variant="secondary">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : null}

      <Button
        className="rounded-full shadow-xl"
        onClick={() => setIsOpen((prev) => !prev)}
        size="md"
        type="button"
      >
        <MessageCircle className="mr-2 h-4 w-4" />
        Chat
      </Button>
    </div>
  )
}
