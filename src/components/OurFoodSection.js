'use client';
import { Leaf, Clock, Flame, Users, ArrowRight, CheckCircle } from 'lucide-react';

export default function OurFoodSection({ orderUrl }) {
  const features = [
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description: "100% fresh, never frozen chicken from local farms",
      color: "secondary"
    },
    {
      icon: Clock,
      title: "24-Hour Marinade",
      description: "Marinated in our secret spice blend for ultimate flavor",
      color: "primary"
    },
    {
      icon: Flame,
      title: "Perfect Crispiness",
      description: "Fried to golden perfection at optimal temperature",
      color: "secondary"
    },
    {
      icon: Users,
      title: "Family Recipe",
      description: "Passed down through generations of master chefs",
      color: "primary"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-32 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      {/* Floating Food Icons */}
      <div className="absolute top-40 right-1/4 opacity-5 animate-float">
        <Flame className="w-24 h-24 text-primary" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-primary font-semibold mb-6">
            <Flame className="w-5 h-5" />
            Our Secret to Perfection
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
            How We Make Your
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
              Food Special
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            At FriTouch Chicken, we don't just cook - we craft culinary masterpieces.
            Every step is carefully executed to ensure maximum flavor and satisfaction.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/5 to-${feature.color}/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className={`inline-flex p-4 bg-${feature.color}/10 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <feature.icon className={`w-10 h-10 text-${feature.color}`} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner decoration */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-${feature.color}/10 to-transparent rounded-tr-3xl rounded-bl-full`}></div>
            </div>
          ))}
        </div>

        {/* Commitment Section - Futuristic Design */}
        <div className="relative">
          {/* Background gradient cards */}
          <div className="absolute inset-0 grid grid-cols-2 gap-4 opacity-20">
            <div className="bg-gradient-to-br from-primary/30 to-transparent rounded-3xl"></div>
            <div className="bg-gradient-to-bl from-secondary/30 to-transparent rounded-3xl"></div>
          </div>

          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl border-2 border-gray-100 overflow-hidden">
            {/* Animated corner accents */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-br-full animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/20 to-transparent rounded-tl-full animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Floating orbs */}
            <div className="absolute top-10 right-20 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.5s' }}></div>

            <div className="relative z-10">
              {/* Header with icon */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg mb-6 animate-pulse-glow">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl md:text-6xl font-black mb-4">
                  Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Commitment</span> to You
                </h3>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="h-1 w-16 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
                  <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                  <div className="h-1 w-16 bg-gradient-to-r from-secondary via-secondary to-transparent rounded-full"></div>
                </div>
              </div>

              {/* Commitment Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-black text-gray-900 mb-3">No Compromises</h4>
                      <p className="text-gray-600 leading-relaxed">We never cut corners on quality or taste</p>
                      <div className="mt-4 h-1 w-12 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-secondary/20">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Leaf className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="text-xl font-black text-gray-900 mb-3">Fresh Daily</h4>
                      <p className="text-gray-600 leading-relaxed">Everything prepared fresh every single day</p>
                      <div className="mt-4 h-1 w-12 bg-gradient-to-r from-secondary to-transparent rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-black text-gray-900 mb-3">Customer First</h4>
                      <p className="text-gray-600 leading-relaxed">Your satisfaction is our top priority</p>
                      <div className="mt-4 h-1 w-12 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA with futuristic design */}
              <div className="text-center">
                <a
                  href={orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-12 py-6 bg-gradient-to-r from-primary via-primary to-secondary text-white rounded-full text-xl font-black shadow-2xl hover:shadow-3xl transition-all duration-500 inline-flex items-center gap-3 overflow-hidden"
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative z-10">Order Now</span>
                  <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </a>

                {/* Decorative dots */}
                <div className="flex items-center justify-center gap-2 mt-6">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
