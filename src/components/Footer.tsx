import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow transition-colors duration-300">
      <div className="container mx-auto px-6 py-4">
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          &copy; 2024 Nandan S. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}