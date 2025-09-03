'use client'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <motion.div
      className="text-center py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops — page not found.</p>
    </motion.div>
  )
}
