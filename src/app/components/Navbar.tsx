'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const getLinkClass = (path: string) => {
    const isHome = path === '/about' && (pathname === '/' || pathname === '/about')
    const isActive = path === pathname || isHome
    return `transition px-3 py-1 rounded-md text-sm font-medium ${
      isActive 
        ? 'text-pink-400 border-b-2 border-pink-400' 
        : 'hover:text-pink-300'
    }`
  }

  const getMobileLinkClass = (path: string) => {
    const isHome = path === '/about' && (pathname === '/' || pathname === '/about')
    const isActive = path === pathname || isHome
    return `transition px-3 py-1 rounded-md text-sm font-medium inline-block ${
      isActive 
        ? 'text-pink-400  border-pink-400' 
        : 'hover:text-pink-300'
    }`
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="w-full sticky top-0 z-50 drop-shadow-sm bg-white dark:bg-[#101828] border-b border-gray-800 text-gray-900 dark:text-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">J.S</h1>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden min-[430px]:flex gap-4 text-sm md:text-base">
          <Link href="/" className={getLinkClass('/about')}>About</Link>
          <Link href="/summary" className={getLinkClass('/summary')}>Summary</Link>
          <Link href="/projects" className={getLinkClass('/projects')}>Projects</Link>
          <Link href="/contact" className={getLinkClass('/contact')}>Contact</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMenu}
          className="min-[430px]:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`min-[430px]:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-60 mt-4' : 'max-h-0'}`}>
        <div className="flex flex-col space-y-3 pb-4 text-center">
          <Link 
            href="/" 
            className={getMobileLinkClass('/about')}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            href="/summary" 
            className={getMobileLinkClass('/summary')}
            onClick={closeMenu}
          >
            Summary
          </Link>
          <Link 
            href="/projects" 
            className={getMobileLinkClass('/projects')}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            href="/contact" 
            className={getMobileLinkClass('/contact')}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
