'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <motion.section 
      className="flex flex-col items-center text-center px-12 py-16 md:py-24  bg-gradient-to-t from-gray-800 to-gray-900 text-gray-100"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Image 
        src="/assets/main-profile-pic.jpg" 
        width={450} 
        height={450} 
        alt="Profile Picture" 
        className="rounded-full shadow-lg object-cover mb-6 border-4 border-indigo-500"
      />

      <h1 className="text-5xl md:text-7xl font-bold mb-3">Jaskaranpreet Singh</h1>
      <p className="text-xl md:text-2xl text-pink-400">
        🎯 Senior Software Engineer – Frontend/Full-Stack
      </p>
    </motion.section>
  )
}