import { motion } from 'framer-motion'
import Image from 'next/image'
import { ZoomIn } from 'lucide-react'

const images = [
  '/placeholder.svg?height=400&width=400&text=Space+Station',
  '/placeholder.svg?height=400&width=400&text=Nebula',
  '/placeholder.svg?height=400&width=400&text=Black+Hole',
  '/placeholder.svg?height=400&width=400&text=Galaxy',
  '/placeholder.svg?height=400&width=400&text=Supernova',
  '/placeholder.svg?height=400&width=400&text=Asteroid+Belt',
]

export default function GallerySection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative h-48 md:h-64 rounded-lg overflow-hidden group"
        >
          <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <ZoomIn className="text-white w-8 h-8" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

