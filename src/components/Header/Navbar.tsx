'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
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

export default function Navbar() {
  const [cartCount] = useState(1)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white z-50 shadow-sm">
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
            placeholder="oppo"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-red-600">
            🔍
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
            placeholder="oppo"
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
