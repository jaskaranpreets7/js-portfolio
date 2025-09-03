
'use client'
import { motion } from 'framer-motion'
import React from 'react'

export default function Hobbies() {
 const hobbies = [
    {
      icon: "💪",
      title: "Working Out",
      description: "Weightlifting and calisthenics"
    },
    {
      icon: "🏀",
      title: "Playing Sports",
      description: "Cricket, Basketball, Tennis, and Table Tennis"
    },
    {
      icon: "📚",
      title: "Reading or Listening podcasts",
      description: "Tech, Space Science and True Crime"
    },
    {
      icon: "🎨",
      title: "Digital Art",
      description: "Creating illustrations or sketches"
    },
    {
      icon: "🥾",
      title: "Hiking and Exploring",
      description: "Exploring nature trails and enjoying scenic views"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Hanging out with friends and family",
      description: "Quality time, making memories over meals and board games"
    }
  ]

  return (
    <motion.section 
      className="max-w-6xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          When I&apos;m Not Coding
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Life beyond the terminal — my passions and interests
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={hobby.title}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl mb-4">{hobby.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              {hobby.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {hobby.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-500 dark:text-gray-400 italic">
          Always exploring new interests and experiences! 🌟
        </p>
      </div>
    </motion.section>
  )
}
