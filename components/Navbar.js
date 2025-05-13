"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          BitLinks
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 dark:text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links - Desktop */}
        <ul className="hidden md:flex gap-8 text-gray-900 dark:text-white text-sm font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/shorten">Shorten</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Actions - Desktop */}
        <div className="hidden md:flex gap-2">
          <Link href="/shorten">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Try Now
            </button>
          </Link>
          <Link href="https://github.com/rohan2621" target="_blank">
            <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">
              GitHub
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-3 text-gray-900 dark:text-white">
            <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link href="/shorten" onClick={() => setOpen(false)}>Shorten</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
          <div className="mt-4 space-y-2">
            <Link href="/shorten">
              <button className="w-full py-2 bg-blue-600 text-white rounded">Try Now</button>
            </Link>
            <Link href="https://github.com/rohan2621" target="_blank">
              <button className="w-full py-2 bg-gray-800 text-white rounded">GitHub</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
