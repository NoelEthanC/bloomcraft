'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Flower } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Flower className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">BloomCraft</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-green-600 transition-colors">
                Products
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </Link>
              <Button variant="outline">Shop Now</Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">
              Home
            </Link>
            <Link href="/products" className="block px-3 py-2 text-gray-700 hover:text-green-600">
              Products
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-green-600">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-green-600">
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button variant="outline" className="w-full">Shop Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}