import { motion } from "framer-motion";
import photo1 from "../assets/photo1.jpg";
import { Github, Linkedin, Mail } from "lucide-react";

export default function About() {
  return (
    <motion.section id="about" className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={photo1} 
              alt="Profile picture"
              width={300}
              height={300}
              className="rounded-full object-cover"
            />
          </motion.div>
        </div>
        <div className="md:w-2/3 md:pl-8">
          <motion.h1 
            className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nandan S
          </motion.h1>
          <motion.h2 
            className="text-2xl mb-4 text-blue-600 dark:text-[#8257e6]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            React JS Developer
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I'm a passionate React JS developer with 3 years of experience building modern web applications. 
            I love creating intuitive user interfaces and solving complex problems with clean, efficient code.
          </motion.p>
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.a href="https://github.com/Nandan185" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-[#8257e6]" whileHover={{ scale: 1.2 }}>
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/nandan-s-17a6571a5/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-[#8257e6]" whileHover={{ scale: 1.2 }}>
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a href="mailto:nandan1852000@gmail.com" target="_blank" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-[#8257e6]" whileHover={{ scale: 1.2 }}>
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}