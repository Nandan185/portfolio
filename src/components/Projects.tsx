import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  { 
    title: "Moodify", 
    description: "Crafting serenity with ambient sounds for focus, calm, and insomnia relief, featuring 18 primary sounds and essential user-friendly functionalities",
    imageSrc: "src/assets/modify.png",
    link: "https://moodify.pages.dev/"
  },
  { 
    title: "Customer Details Portal", 
    description: "A customer details portal displays a scrollable list of as many customers, loading 20 at a time with an infinite scroll, and highlights the selected card details on the right",
    imageSrc: "src/assets/customer.png",
    link: "https://customer-details-portal-iota.vercel.app/"
  },
  { 
    title: "Drawing Board", 
    description: "A responsive doodling app with download functionality, stroke adjustment, and color selection, enhancing creativity on the go.",
    imageSrc: "src/assets/drawing.png",
    link: "https://wboard.pages.dev/"
  }
]

export default function Projects() {
  return (
    <motion.section id="projects" className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <img
              src={project.imageSrc}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <motion.a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-[#8257e6] dark:hover:text-[#9466ff]"
                whileHover={{ x: 5 }}
              >
                View Project <ExternalLink className="w-4 h-4 ml-2" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}