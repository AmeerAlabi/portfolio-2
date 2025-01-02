import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, User, Mail, MessageSquare } from 'lucide-react'

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formState)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="max-w-md mx-auto"
    >
      <div className="mb-4 relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formState.name}
          onChange={handleChange}
          className="w-full bg-gray-700 text-white pl-10"
          required
        />
      </div>
      <div className="mb-4 relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formState.email}
          onChange={handleChange}
          className="w-full bg-gray-700 text-white pl-10"
          required
        />
      </div>
      <div className="mb-4 relative">
        <MessageSquare className="absolute left-3 top-3 text-gray-400" />
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formState.message}
          onChange={handleChange}
          className="w-full bg-gray-700 text-white pl-10"
          rows={4}
          required
        />
      </div>
      <Button type="submit" className="w-full flex items-center justify-center">
        <Send className="w-5 h-5 mr-2" />
        Send Transmission
      </Button>
    </motion.form>
  )
}

