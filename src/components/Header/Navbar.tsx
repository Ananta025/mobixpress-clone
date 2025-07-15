'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ShoppingCart, Grid3X3, LogIn } from 'lucide-react'
import clsx from 'clsx'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'MobiXpress Store', href: '/store' },
  { label: 'My Order', href: '/orders' },
  { label: 'Exchange', href: '/exchange' },
  { label: 'Accessories', href: '/accessories' },
  { label: 'Hot Deals', href: '/hot-deals', isHot: true },
]

const typingTexts = [
  "Search for products",
  "Try 'iPhone 15'",
  "Try 'Samsung S24'",
  "Try 'Smart Watch'",
]

export default function Navbar() {
  const [cartCount] = useState(1)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [placeholder, setPlaceholder] = useState(typingTexts[0])

  useEffect(() => {
    let textIndex = 0
    let charIndex = 0
    let typing = true
    let timeout: NodeJS.Timeout

    const type = () => {
      if (typing) {
        if (charIndex < typingTexts[textIndex].length) {
          setPlaceholder(typingTexts[textIndex].slice(0, charIndex + 1))
          charIndex++
          timeout = setTimeout(type, 60)
        } else {
          typing = false
          timeout = setTimeout(type, 1200)
        }
      } else {
        if (charIndex > 0) {
          setPlaceholder(typingTexts[textIndex].slice(0, charIndex - 1))
          charIndex--
          timeout = setTimeout(type, 30)
        } else {
          typing = true
          textIndex = (textIndex + 1) % typingTexts.length
          timeout = setTimeout(type, 400)
        }
      }
    }

    type()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <header className="w-full bg-white z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 xl:px-44 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Mobixpress Logo" 
            width={200} 
            height={200}
            className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-[200px] h-auto"
          />
        </Link>

        {/* Search - Hidden on small screens */}
        <div className="hidden md:flex flex-1 mx-6 max-w-xl relative">
          <input
            type="text"
            placeholder={placeholder}
            className="w-full px-6 py-4.5 rounded-xl focus:outline-none text-md bg-gray-100"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Grid3X3 className="w-6 h-6 text-gray-600" />
          </button>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button>
              <Grid3X3 className="w-6 h-6 text-gray-600" />
            </button>
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 text-xs bg-red-600 text-white rounded-full px-1.5">
                  {cartCount}
                </span>
              )}
            </div>
            <Link href="/login">
              <button className="bg-red-500 hover:bg-red-600 text-white px-3 sm:px-4 py-2 rounded-md shadow-md text-sm">
                <LogIn className="inline-block mr-1 sm:mr-2 w-4 h-4" />
                <span className="hidden sm:inline">Login</span>
              </button>
            </Link>
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center gap-2">
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 text-xs bg-red-600 text-white rounded-full px-1.5">
                  {cartCount}
                </span>
              )}
            </div>
            <Link href="/login">
              <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md shadow-md text-sm">
                <LogIn className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Search - Visible on small screens */}
      <div className="md:hidden px-4 pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder={placeholder}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-red-600">
            🔍
          </button>
        </div>
      </div>

      {/* Nav Links - Desktop */}
      <nav className="hidden md:flex justify-center gap-6 py-2">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <span
              className={clsx(
                'text-sm font-medium hover:text-red-600 transition-all',
                link.isHot && 'text-red-600 flex items-center gap-1'
              )}
            >
              {link.isHot && '🔥'}
              {link.label}
            </span>
          </Link>
        ))}
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={clsx(
                    'block text-sm font-medium hover:text-red-600 transition-all py-2',
                    link.isHot && 'text-red-600 flex items-center gap-1'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.isHot && '🔥'}
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
