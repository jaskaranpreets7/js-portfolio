'use client'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-gray-800 dark:text-gray-200 max-w-2xl mx-auto py-10 px-4 md:px-8"
    >
      <h1 className="text-5xl font-bold mb-6">📬 Get in Touch</h1>
      <p className="text-lg mb-8">
        Have an exciting project idea or just want to chat? I'd love to hear from you!
      </p>
      <div className="space-y-4">
        <div>
          <span className="font-semibold">✉️ Email:</span> <a href="mailto:jaskaransingh123@gmail.com" className="text-indigo-500 hover:underline">jaskaransingh123@gmail.com</a>
        </div>
        <div>
          <span className="font-semibold">💼 LinkedIn:</span> <a href="https://www.linkedin.com/in/jaskaranpreet-singh/" className="text-indigo-500 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/jaskaranpreet-singh/</a>
        </div>
        <div>
          <span className="font-semibold">💻 GitHub:</span> <a href="https://github.com/jaskaranpreets7" className="text-indigo-500 hover:underline" target="_blank" rel="noopener noreferrer">github.com/jaskaranpreets7</a>
        </div>
      </div>
    </motion.div>
  )
}
