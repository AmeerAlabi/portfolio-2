'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Rocket, Zap, Globe, Code, Mail, ImageIcon, User } from 'lucide-react'
import HolographicCard from '@/components/ui/HolographicCard'
import ProjectShowcase from '@/components/ui/ProjectShowcase'
import GallerySection from '@/components/ui/GallerySection'
import AboutMe from '@/components/ui/AboutMe'
import ContactForm from '@/components/ui/ContactForm'
import Navbar from '@/components/ui/Navbar'


function StarryBackground() {
  const stars = Array.from({ length: 1000 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 2 + 1,
  }))

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute bg-white rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.y}px`,
            left: `${star.x}px`,
            opacity: Math.random() * 0.8 + 0.2,
          }}
        ></div>
      ))}
    </div>
  )
}

export default function FuturisticSpacePortfolio() {
  const { scrollYProgress } = useScroll()
  const yPosAnim = useTransform(scrollYProgress, [0, 1], [0, -1000])

  return (
    <div className="bg-black text-white min-h-screen">
      <StarryBackground />
      <Navbar />

      <motion.div
        className="relative z-10"
        style={{ y: yPosAnim }}
      >
        <section id="welcome" className="h-screen flex items-center justify-center">
          <HolographicCard>
            <h1 className="text-4xl font-bold mb-4 text-center">Welcome to My Universe</h1>
            <p className="text-xl mb-4 text-center">Full-Stack Developer | Space Enthusiast | Tech Explorer</p>
            <div className="flex justify-center space-x-4">
              <Rocket className="w-8 h-8 text-blue-400" />
              <Zap className="w-8 h-8 text-yellow-400" />
              <Globe className="w-8 h-8 text-green-400" />
            </div>
          </HolographicCard>
        </section>

        <section id="about" className="min-h-screen bg-gray-900 bg-opacity-80 p-8">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
            <User className="w-8 h-8 mr-2 text-blue-400" />
            About Me
          </h2>
          <AboutMe />
        </section>

        <section id="projects" className="min-h-screen bg-gray-800 bg-opacity-80 p-8">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
            <Code className="w-8 h-8 mr-2 text-purple-400" />
            My Cosmic Projects
          </h2>
          <ProjectShowcase />
        </section>

        <section id="contact" className="min-h-screen bg-gray-900 bg-opacity-80 p-8">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
            <Mail className="w-8 h-8 mr-2 text-blue-400" />
            Contact the Mothership
          </h2>
          <ContactForm />
        </section>

        <section id="gallery" className="bg-gray-800 bg-opacity-80 p-8">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
            <ImageIcon className="w-8 h-8 mr-2 text-green-400" />
            Technologies Gallery 
          </h2>
          <GallerySection />
        </section>
      </motion.div>
    </div>
  )
}
