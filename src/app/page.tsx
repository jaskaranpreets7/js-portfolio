'use client'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-around min-h-screen w-full px-4 bg-white text-gray-900 dark:bg-[#101828] dark:text-gray-100 transition-colors duration-300"
    >
      <Hero />
      <Footer />
    </motion.div>
  )
}
