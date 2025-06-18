'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  // const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const getLinkClass = (path: string) => {
    const isActive = pathname === path
    return `transition px-3 py-1 rounded-md text-sm font-medium ${
      isActive 
        ? 'text-pink-400 border-b-2 border-pink-400' 
        : 'hover:text-pink-300'
    }`
  }

  return (
    <nav className="w-full sticky top-0 z-50 drop-shadow-sm bg-white dark:bg-[#101828] border-b border-gray-800 text-gray-900 dark:text-white px-6 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold">J.S</h1>
      </div>
      <div className="flex gap-4 text-sm md:text-base">
        <Link href="/" className={getLinkClass('/')}>Home</Link>
        <Link href="/about" className={getLinkClass('/about')}>About</Link>
        <Link href="/projects" className={getLinkClass('/projects')}>Projects</Link>
        <Link href="/contact" className={getLinkClass('/contact')}>Contact</Link>
      </div>
      {/* <button 
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="bg-gray-600 px-3 py-2 rounded hover:bg-pink-500 transition text-white text-sm"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button> */}
    </nav>
  )
}
