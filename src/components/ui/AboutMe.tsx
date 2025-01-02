import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <Card className="bg-gray-800 text-white">
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold mb-4">Greetings, Earthlings!</h3>
          <p className="mb-4">
            I'm [Your Name], a full-stack developer with a passion for exploring the vast universe of technology. Just as astronauts venture into the unknown, I love diving into new programming challenges and discovering innovative solutions.
          </p>
          <p className="mb-4">
            My journey in the tech cosmos began [X] years ago, and since then, I've been on a mission to create stellar web applications that push the boundaries of what's possible. When I'm not coding, you can find me stargazing, reading sci-fi novels, or planning my next interstellar project.
          </p>
          <p>
            Let's connect and embark on a cosmic coding adventure together!
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

