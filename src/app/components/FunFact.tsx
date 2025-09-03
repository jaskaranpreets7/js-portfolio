'use client'
import { motion } from 'framer-motion'

export default function FunFact() {
  const funFacts = [
    {
      emoji: "🎬",
      title: "Bollywood Dreams",
      description: "Acted in a Punjabi song that has garnered millions of views! Who knew coding skills would translate to the silver screen?",
      highlight: "Millions of views",
      link: "https://www.youtube.com/watch?v=6Agwu8DL72g",
      linkText: "Watch the Song"
    },
    {
      emoji: "🌶️",
      title: "Heat Seeker",
      description: "Survived the infamous One Chip Challenge! Turns out debugging production issues is easier than handling Carolina Reaper peppers.",
      highlight: "Still recovering",
      link: null,
      linkText: null
    }
  ]

  return (
    <motion.section 
      className="max-w-4xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          🎯 Fun Facts
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Some unexpected adventures from my life beyond code
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {funFacts.map((fact, index) => (
          <motion.div
            key={fact.title}
            className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-200 dark:border-gray-700"
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="text-6xl mb-4 text-center">{fact.emoji}</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 text-center">
              {fact.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed mb-4">
              {fact.description}
            </p>
            <div className="text-center">
              {fact.link ? (
                <a 
                  href={fact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium text-sm"
                >
                  🎥 {fact.linkText} • {fact.highlight}
                </a>
              ) : (
                <span className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full text-sm font-medium">
                  {fact.highlight}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="text-gray-500 dark:text-gray-400 italic text-lg">
          Life's too short for boring stories! 🚀
        </p>
      </motion.div>
    </motion.section>
  )
}
