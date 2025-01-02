import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Cpu, Cloud, Clock, Github, Link } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Quantum Flux',
    description: 'A revolutionary quantum computing simulator',
    icon: Cpu,
    image: 'path_to_image', // Replace with actual image path
    tags: ['Quantum', 'Simulation', 'Python', 'C++'],
    github: 'https://github.com/yourusername/quantum-flux',
    externalLink: 'https://quantumflux.com',
  },
  {
    id: 2,
    title: 'NebulaNET',
    description: 'Decentralized cloud storage using interstellar data nodes',
    icon: Cloud,
    image: 'path_to_image', // Replace with actual image path
    tags: ['Cloud', 'Blockchain', 'Node.js', 'Rust'],
    github: 'https://github.com/yourusername/nebula-net',
    externalLink: 'https://nebulanet.com',
  },
  {
    id: 3,
    title: 'Chronos',
    description: 'Time-warping task management for busy astronauts',
    icon: Clock,
    image: 'path_to_image', // Replace with actual image path
    tags: ['Time Management', 'React', 'Redux', 'Node.js'],
    github: 'https://github.com/yourusername/chronos',
    externalLink: 'https://chronosapp.com',
  },
  {
    id: 4,
    title: 'Chronos',
    description: 'Time-warping task management for busy astronauts',
    icon: Clock,
    image: 'path_to_image', // Replace with actual image path
    tags: ['Time Management', 'React', 'Redux', 'Node.js'],
    github: 'https://github.com/yourusername/chronos',
    externalLink: 'https://chronosapp.com',
  },
  {
    id: 5,
    title: 'Chronos',
    description: 'Time-warping task management for busy astronauts',
    icon: Clock,
    image: 'path_to_image', // Replace with actual image path
    tags: ['Time Management', 'React', 'Redux', 'Node.js'],
    github: 'https://github.com/yourusername/chronos',
    externalLink: 'https://chronosapp.com',
  },
]

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(projects[0])

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      <motion.div
        key={activeProject.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full"
      >
        <img src={activeProject.image} alt={activeProject.title} className="w-full h-48 object-cover rounded-lg mb-4" />
        <div className="flex items-center mb-4">
          {activeProject.icon && <activeProject.icon className="w-8 h-8 mr-2 text-blue-400" />}
          <h3 className="text-2xl font-bold">{activeProject.title}</h3>
        </div>
        <p className="text-gray-300 mb-4">{activeProject.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {activeProject.tags.map((tag, index) => (
            <span key={index} className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={activeProject.github} target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 text-gray-400 hover:text-gray-600" />
          </a>
          <a href={activeProject.externalLink} target="_blank" rel="noopener noreferrer">
            <Link className="w-6 h-6 text-gray-400 hover:text-gray-600" />
          </a>
        </div>
      </motion.div>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <Button
            key={project.id}
            variant={project.id === activeProject.id ? "default" : "outline"}
            onClick={() => setActiveProject(project)}
            className="flex items-center"
          >
            {project.icon && <project.icon className="w-5 h-5 mr-2" />}
            {project.title}
          </Button>
        ))}
      </div>
    </div>
  )
}
