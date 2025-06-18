'use client'
import Link from 'next/link'
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
      <Link href="/" className="bg-pink-500 px-6 py-3 rounded text-white hover:bg-pink-600 transition">
        Go Home
      </Link>
    </motion.div>
  )
}
