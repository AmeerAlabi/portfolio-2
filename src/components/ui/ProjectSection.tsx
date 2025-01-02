import { motion } from 'framer-motion'
import { Star, Github, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ProjectSection() {
  const projects = [
    {
      name: 'Project Alpha',
      description: 'A cool tech project description goes here.',
      stars: 245,
      image: 'https://via.placeholder.com/300', // Dummy image
      tools: ['React', 'Node.js', 'TailwindCSS'],
      github: 'https://github.com/yourusername/project-alpha',
      site: 'https://project-alpha.com',
    },
    {
      name: 'Project Beta',
      description: 'Another awesome project you worked on.',
      stars: 189,
      image: 'https://via.placeholder.com/300', // Dummy image
      tools: ['Vue', 'Vuetify', 'Express'],
      github: 'https://github.com/yourusername/project-beta',
      site: 'https://project-beta.com',
    },
    {
      name: 'Project Gamma',
      description: 'Your latest and greatest creation.',
      stars: 327,
      image: 'https://via.placeholder.com/300', // Dummy image
      tools: ['Angular', 'Firebase', 'TailwindCSS'],
      github: 'https://github.com/yourusername/project-gamma',
      site: 'https://project-gamma.com',
    },
  ]

  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="my-16"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {/* Tools/Technologies used */}
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-sm text-white px-3 py-1 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-yellow-400" />
                <span>{project.stars}</span>
              </div>
              <div className="flex items-center space-x-4">
                {/* GitHub Icon */}
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                {/* Live Project Link */}
                <a href={project.site} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>
            <Button variant="outline" className="mt-4 w-full">
              View Project
            </Button>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
