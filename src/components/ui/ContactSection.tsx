import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="my-16"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <Input type="text" placeholder="Your Name" className="w-full" />
        </div>
        <div className="mb-4">
          <Input type="email" placeholder="Your Email" className="w-full" />
        </div>
        <div className="mb-4">
          <Textarea placeholder="Your Message" className="w-full" rows={4} />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </motion.section>
  )
}

