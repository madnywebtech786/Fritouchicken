'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Phone, CheckCircle } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/fritou-logo.png"
                alt="Fritou Chicken and Pizza Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-black text-gray-900 leading-tight">
                FRITOU CHICKEN
              </h1>
              <p className="text-sm font-bold text-primary">AND PIZZA</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Halal Badge */}
            <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-gradient-to-r from-secondary to-secondary/90 text-white rounded-full shadow-lg font-black text-xs md:text-sm animate-pulse-glow">
              <CheckCircle className="w-4 h-4" />
              <span>100% HALAL</span>
            </div>

            <Link
              href="/"
              className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-sm"
            >
              <Home className="w-4 h-4" />
              <span className="hidden lg:inline">Home</span>
            </Link>

            <Link
              href="#contact"
              className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-primary text-white hover:bg-primary/90 hover:shadow-lg transition-all duration-300 font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
