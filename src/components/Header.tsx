import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export default function Header() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow transition-colors duration-300">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <motion.span 
            className="text-2xl font-bold text-blue-600 dark:text-[#8257e6]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            JS Dev
          </motion.span>
          <div className="flex space-x-4 items-center">
            <motion.a href="#about" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-[#8257e6]" whileHover={{ scale: 1.1 }}>About</motion.a>
            <motion.a href="#skills" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-[#8257e6]" whileHover={{ scale: 1.1 }}>Skills</motion.a>
            <motion.a href="#projects" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-[#8257e6]" whileHover={{ scale: 1.1 }}>Projects</motion.a>
            <motion.a href="#contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-[#8257e6]" whileHover={{ scale: 1.1 }}>Contact</motion.a>
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-blue-600 dark:text-[#8257e6]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
          </div>
        </nav>
      </div>
    </header>
  )
}