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

  return (
    <header className="w-full bg-white z-50">
      <div className="flex items-center justify-between px-44 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Mobixpress Logo" width={200} height={200} />
        </Link>

        {/* Search */}
        <div className="flex-1 mx-6 max-w-xl relative">
          <input
            type="text"
            placeholder="oppo"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-red-600">
            🔍
          </button>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
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
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md">
              <LogIn className="inline-block mr-2 w-4 h-4" />
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex justify-center gap-6 py-2 ">
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
    </header>
  )
}
