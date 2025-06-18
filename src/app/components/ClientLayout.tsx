'use client'
import { useEffect, useState } from 'react'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // Prevent hydration mismatch

  return (
    <main className="min-h-screen bg-white dark:bg-[#101828] text-gray-900 dark:text-gray-100 transition-colors duration-300 container mx-auto p-6">
      {children}
    </main>
  )
}
