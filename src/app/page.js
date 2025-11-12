'use client';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Sparkles, ChevronRight, Truck, ShoppingBag } from 'lucide-react';
import DessertsSection from '@/components/DessertsSection';
import HalalSection from '@/components/HalalSection';

export default function Home() {
  return (
    <div className="relative bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        {/* Logo/Brand Section */}
        <div className="text-center mb-12 animate-slide-in-up">
          {/* Fritou Logo */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <Image
                src="/images/fritou-logo.png"
                alt="Fritou Chicken and Pizza Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent animate-gradient">
            FRITOU CHICKEN AND PIZZA
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide">
            Experience The Future of Fast Food
          </p>
        </div>

        {/* Location Selection */}
        <div className="w-full max-w-5xl mt-12 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 flex items-center justify-center gap-3">
              <MapPin className="w-8 h-8 text-primary" />
              Choose Your Location
            </h2>
            <p className="text-gray-600 text-lg">Select the nearest branch to start your culinary journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Location 1 - Saddletowne */}
            <Link href="/location/saddletowne" className="group flex">
              <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-4 border-transparent hover:border-primary/20 w-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative p-8 md:p-12 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <ChevronRight className="w-8 h-8 text-gray-400 group-hover:text-primary group-hover:translate-x-2 transition-all duration-500" />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
                    Saddletowne
                  </h3>
                  <p className="text-gray-600 text-lg mb-4">North East Calgary</p>

                  <div className="space-y-3 text-gray-700 flex-grow">
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      216 Saddletowne Circle NE
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      Open Daily: 10:00 AM - 11:00 PM
                    </p>
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 text-primary font-semibold text-lg group-hover:gap-4 transition-all duration-300">
                    Explore Menu
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
              </div>
            </Link>

            {/* Location 2 - Fritou130 */}
            <Link href="/location/fritou130" className="group flex">
              <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-4 border-transparent hover:border-primary/20 w-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative p-8 md:p-12 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <ChevronRight className="w-8 h-8 text-gray-400 group-hover:text-secondary group-hover:translate-x-2 transition-all duration-500" />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-800 mb-3 group-hover:text-secondary transition-colors duration-300">
                    Fritou 130
                  </h3>
                  <p className="text-gray-600 text-lg mb-4">South East Calgary</p>

                  <div className="space-y-3 text-gray-700 flex-grow">
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      4307 130 Ave SE, Unit 33
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Open Daily: 10:00 AM - 11:00 PM
                    </p>

                    {/* Delivery Platforms */}
                    <div className="pt-3">
                      <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Delivery Available</p>
                      <div className="flex gap-2">
                        <div className="flex-1 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-3 border border-secondary/20 group-hover:border-secondary/40 transition-colors">
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-secondary/20 rounded-lg">
                              <ShoppingBag className="w-4 h-4 text-secondary" />
                            </div>
                            <span className="text-xs font-bold text-gray-800">Uber Eats</span>
                          </div>
                        </div>
                        <div className="flex-1 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-3 border border-primary/20 group-hover:border-primary/40 transition-colors">
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-primary/20 rounded-lg">
                              <Truck className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-xs font-bold text-gray-800">DoorDash</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 text-secondary font-semibold text-lg group-hover:gap-4 transition-all duration-300">
                    Explore Menu
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full"></div>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-20 text-center animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-gray-500 text-lg font-light flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-secondary" />
            Crafted with passion, served with excellence
            <Sparkles className="w-5 h-5 text-primary" />
          </p>
        </div>
      </main>

      {/* Halal Section */}
      <HalalSection />

      {/* Desserts Section */}
      <DessertsSection />
    </div>
  );
}
