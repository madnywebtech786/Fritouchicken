"use client";
import {
  ArrowRight,
  Sparkles,
  Flame,
  Star,
  CheckCircle,
  Heart,
  Clock,
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection({ orderUrl }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const foodCards = [
    {
      id: 1,
      image: "/images/food-items/hero/burger.png",
      title: "Juicy Burger",
      color: "primary",
    },
    {
      id: 2,
      image: "/images/food-items/hero/wings.png",
      title: "Crispy Wings",
      color: "secondary",
    },
    {
      id: 3,
      image: "/images/food-items/hero/strips.png",
      title: "Chicken Strips",
      color: "primary",
    },
    {
      id: 4,
      image: "/images/food-items/hero/fries.png",
      title: "Golden Fries",
      color: "secondary",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentCardIndex((prev) => (prev + 1) % foodCards.length);
        setIsAnimating(false);
      }, 800);
    }, 3500);

    return () => clearInterval(interval);
  }, [foodCards.length]);

  return (
    <section className="relative min-h-[85vh] bg-white overflow-hidden pt-20 flex items-center">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute top-40 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-40 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Floating Food Icons */}
      <div className="absolute top-32 right-1/4 opacity-5 animate-float">
        <Flame className="w-24 h-24 text-primary" />
      </div>
      <div
        className="absolute bottom-1/4 left-1/4 opacity-5 animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <Star className="w-20 h-20 text-secondary" />
      </div>
      <div
        className="absolute top-1/3 left-20 opacity-5 animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <Heart className="w-16 h-16 text-primary" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content - Powerful Messaging */}
          <div className="text-center lg:text-left space-y-5 md:space-y-6 animate-slide-in-up">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full border-2 border-secondary/20 font-bold text-sm md:text-base">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                100% HALAL • PREMIUM QUALITY
              </span>
            </div>

            {/* Main Headline - Powerful & Attention-Grabbing */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1]">
              Calgary's Best
              <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
                Halal Fried Chicken
              </span>
            </h1>

            {/* Compelling Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Crispy, hand-breaded & marinated for 24 hours.
              <span className="font-bold text-gray-900"> Fresh daily, never frozen.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2 justify-center lg:justify-start">
              <a
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-primary to-primary/90 text-white rounded-full text-base md:text-lg font-black shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <span className="relative z-10">Order Now</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#menu"
                className="px-8 md:px-10 py-3 md:py-4 bg-white border-3 border-gray-900 text-gray-900 rounded-full text-base md:text-lg font-black hover:bg-gray-900 hover:text-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                View Menu
              </a>
            </div>

            {/* Social Proof - Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4">
              {/* 5 Star Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 text-secondary fill-secondary"
                    />
                  ))}
                </div>
                <span className="text-xs md:text-sm text-gray-700 font-bold">
                  5.0 (500+ Reviews)
                </span>
              </div>

              {/* Divider */}
              <div className="hidden sm:block h-8 w-px bg-gray-300"></div>

              {/* Customer Count */}
              <div className="flex items-center gap-2">
                <div className="text-2xl md:text-3xl font-black text-primary">
                  10K+
                </div>
                <span className="text-xs md:text-sm text-gray-700 font-bold">
                  Satisfied Customers
                </span>
              </div>
            </div>

            {/* Quick Features */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                <CheckCircle className="w-4 h-4 text-secondary" />
                <span className="text-sm font-bold text-gray-800">
                  100% Halal
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                <Flame className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-gray-800">
                  Fresh Daily
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
                <Clock className="w-4 h-4 text-secondary" />
                <span className="text-sm font-bold text-gray-800">
                  Fast Delivery
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual - Futuristic Card Stack */}
          <div className="relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] flex items-center justify-center mt-6 lg:mt-0">
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent rounded-full blur-3xl"></div>

            {/* Card Stack Container */}
            <div className="relative w-full max-w-[400px] lg:max-w-[500px] h-full flex items-center justify-center perspective-1000">
              {foodCards.map((card, index) => {
                const position =
                  (index - currentCardIndex + foodCards.length) %
                  foodCards.length;
                const isExiting = isAnimating && position === 0;

                if (position >= 4) return null;

                return (
                  <div
                    key={card.id}
                    className={`absolute card-stack-item ${
                      isExiting ? "card-exit" : ""
                    }`}
                    style={{
                      transform: `
                        translateY(${position * -15}px)
                        translateX(${position * 5}px)
                        scale(${1 - position * 0.05})
                        rotateY(${position * -2}deg)
                      `,
                      zIndex: 50 - position,
                      opacity: 1 - position * 0.15,
                      transition: isExiting
                        ? "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease"
                        : "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s ease",
                    }}
                  >
                    <div className="relative group">
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r from-${card.color} via-${card.color}/50 to-${card.color} rounded-3xl blur-sm opacity-20 group-hover:opacity-50 transition-opacity duration-500`}
                      ></div>

                      <div className="relative w-[320px] h-[420px] lg:w-[400px] lg:h-[540px] rounded-3xl overflow-hidden bg-white shadow-lg border-4 border-white">
                        <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200">
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 320px, 400px"
                          />

                          <div
                            className={`absolute inset-0 bg-gradient-to-t from-${card.color}/80 via-${card.color}/30 to-transparent`}
                          ></div>

                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                              <span className="text-sm font-bold uppercase tracking-wider opacity-90">
                                Featured
                              </span>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-black drop-shadow-lg">
                              {card.title}
                            </h3>
                          </div>

                          {position === 0 && (
                            <div className="absolute top-4 right-4 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-xl">
                              <div className="flex items-center gap-2">
                                <Star
                                  className={`w-4 h-4 text-${card.color} fill-${card.color}`}
                                />
                                <span className="font-black text-gray-900 text-sm">
                                  Hot
                                </span>
                              </div>
                            </div>
                          )}
                        </div>

                        <div
                          className={`absolute inset-0 rounded-3xl border-2 border-${card.color}/30 pointer-events-none`}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Floating Decorative Elements */}
              <div className="absolute top-10 -left-8 p-3 bg-white rounded-2xl shadow-md animate-float">
                <Flame className="w-6 h-6 text-primary" />
              </div>
              <div
                className="absolute bottom-10 -right-8 p-3 bg-white rounded-2xl shadow-md animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Card Stack Animations */
        .perspective-1000 {
          perspective: 1000px;
        }

        .card-stack-item {
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .card-exit {
          animation: cardSwipeExit 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }

        @keyframes cardSwipeExit {
          0% {
            transform: translateX(0) translateY(0) scale(1) rotateY(0deg)
              rotateZ(0deg);
            opacity: 1;
          }
          40% {
            transform: translateX(-80px) translateY(-10px) scale(0.98)
              rotateY(-8deg) rotateZ(-3deg);
            opacity: 0.8;
          }
          100% {
            transform: translateX(-350px) translateY(80px) scale(0.6)
              rotateY(-30deg) rotateZ(-15deg);
            opacity: 0;
          }
        }

        /* Smooth entrance for new cards */
        @keyframes cardEnter {
          from {
            transform: translateY(30px) scale(0.95);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
