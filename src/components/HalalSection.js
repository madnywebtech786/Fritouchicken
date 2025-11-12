'use client';
import { CheckCircle, Heart, Award, Sparkles, Shield, Leaf, Users, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HalalSection() {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse"></div>

      {/* Animated Halal Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, white 2px, transparent 2px)`,
          backgroundSize: '60px 60px',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-1/4 opacity-20 animate-float">
        <Shield className="w-16 h-16 text-white" />
      </div>
      <div className="absolute bottom-20 right-1/4 opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>
        <Leaf className="w-20 h-20 text-white" />
      </div>
      <div className="absolute top-1/2 right-10 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
        <Star className="w-12 h-12 text-white" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-in-up">
       

            {/* Main Badge with 3D Effect */}
            <div className="inline-block mb-10 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="relative">
                {/* 3D Shadow Layers */}
                <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl transform translate-y-4"></div>
                <div className="absolute inset-0 bg-white/30 rounded-full blur-xl transform translate-y-2"></div>

                {/* Main Badge */}
                <div className="relative flex items-center gap-4 px-10 py-6 bg-white rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <div className="relative">
                    <div className="absolute inset-0 bg-secondary/20 rounded-full blur-md"></div>
                    <CheckCircle className="relative w-10 h-10 md:w-12 md:h-12 text-secondary animate-pulse" />
                  </div>
                  <span className="text-3xl md:text-5xl font-black bg-gradient-to-r from-secondary to-secondary/70 bg-clip-text text-transparent">
                    100% HALAL
                  </span>
                  <div className="relative">
                    <div className="absolute inset-0 bg-secondary/20 rounded-full blur-md"></div>
                    <Shield className="relative w-10 h-10 md:w-12 md:h-12 text-secondary animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Heading with Gradient Animation */}
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              ENJOY HALAL
            </h2>

            {/* Animated Food Items */}
            <div className="text-4xl md:text-6xl lg:text-7xl font-black space-y-3 mb-8">
              {['CHICKEN,', 'PIZZA', 'AND', 'BURGERS'].map((text, idx) => (
                <div
                  key={idx}
                  className="inline-block mx-2 transform hover:scale-110 transition-transform duration-300 cursor-default animate-slide-in-up"
                  style={{
                    animationDelay: `${0.3 + idx * 0.1}s`,
                    textShadow: '0 0 40px rgba(255, 255, 255, 0.3)'
                  }}
                >
                  <span className="text-white/95 hover:text-white">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-white/90 font-semibold tracking-wide animate-slide-in-up" style={{ animationDelay: '0.7s' }}>
              Certified, Authentic & Delicious
            </p>
          </div>

          {/* Interactive Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Certified Halal",
                description: "All our meats are 100% halal certified and sourced from trusted suppliers",
                color: "secondary",
                delay: "0.8s"
              },
              {
                icon: Heart,
                title: "Prepared with Care",
                description: "Every dish is prepared following strict halal guidelines and practices",
                color: "primary",
                delay: "0.9s"
              },
              {
                icon: Award,
                title: "Quality Guaranteed",
                description: "Premium ingredients meeting the highest halal standards for your peace of mind",
                color: "secondary",
                delay: "1s"
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                onClick={() => setActiveCard(idx)}
                className={`group relative p-8 bg-white/10 backdrop-blur-md rounded-3xl border-2 transition-all duration-500 cursor-pointer animate-slide-in-up ${
                  activeCard === idx
                    ? 'bg-white/25 border-white/60 scale-105 shadow-2xl'
                    : 'border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-105'
                }`}
                style={{ animationDelay: feature.delay }}
              >
                {/* Active Indicator */}
                {activeCard === idx && (
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-xl animate-bounce">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                  </div>
                )}

                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-white/30 rounded-2xl blur-md transform group-hover:scale-125 transition-transform duration-500`}></div>
                    <div className="relative p-5 bg-white rounded-2xl shadow-2xl group-hover:rotate-12 transition-all duration-500">
                      <feature.icon className={`w-12 h-12 text-${feature.color}`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 leading-relaxed text-base">
                    {feature.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-bold">
                      <span>Learn More</span>
                      <CheckCircle className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators with Animation */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 animate-slide-in-up" style={{ animationDelay: '1.1s' }}>
            {[
              { icon: Users, value: "10K+", label: "Happy Muslim Families", color: "white" },
              { icon: Shield, value: "100%", label: "Halal Certified", color: "white" },
              { icon: Star, value: "5.0", label: "Customer Rating", color: "white" },
              { icon: Leaf, value: "Fresh", label: "Daily Ingredients", color: "white" }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group relative p-6 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-500 hover:scale-110 cursor-pointer"
              >
                <div className="absolute -inset-0.5 bg-white/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex flex-col items-center text-center">
                  <stat.icon className="w-8 h-8 text-white mb-3 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">
                    {stat.value}
                  </div>
                  <p className="text-xs md:text-sm text-white/80 font-semibold">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Statement with Enhanced Design */}
          <div className="text-center mt-16 space-y-6 animate-slide-in-up" style={{ animationDelay: '1.2s' }}>
            {/* Main Statement */}
            <div className="relative inline-block">
              <div className="absolute -inset-2 bg-white/20 rounded-full blur-xl"></div>
              <div className="relative inline-flex items-center gap-4 px-10 py-5 bg-white/15 backdrop-blur-md rounded-full border-2 border-white/30 shadow-2xl hover:bg-white/25 transition-all duration-500 group">
                <Sparkles className="w-7 h-7 text-white group-hover:rotate-180 transition-transform duration-500" />
                <p className="text-xl md:text-2xl font-black text-white">
                  Serving the Community with Authentic Halal Food
                </p>
                <Sparkles className="w-7 h-7 text-white group-hover:rotate-180 transition-transform duration-500" />
              </div>
            </div>

            {/* Additional Info */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-white/90">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Locally Sourced</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>No Preservatives</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Family Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}
