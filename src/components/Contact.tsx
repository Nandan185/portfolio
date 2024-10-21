import { motion } from "framer-motion"

export default function Contact() {
    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        window.open("mailto:nandan1852000@gmail.com", "_blank")
    }

  return (
    <motion.section id="contact" className="mb-12 py-16 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 
            className="text-5xl font-bold mb-6 text-blue-600 dark:text-[#8257e6]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="text-lg mb-8 text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Feel free to send me an Email through this button, and I'll get back to you as soon as possible.
        </motion.p>
        
        <motion.a 
          href="mailto:nandan1852000@gmail.com"
          onClick={handleContactClick}
          className="inline-block px-8 py-3  bg-blue-600 dark:bg-[#8257e6] text-white rounded-full text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)',
          }}
        >
          Contact Me  
        </motion.a>
      </div>
    </motion.section>
  )
}