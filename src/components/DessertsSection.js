'use client';
import { Sparkles, IceCream, Cake, ArrowRight, Star, Heart } from 'lucide-react';
import Image from 'next/image';

export default function DessertsSection() {
  const desserts = [
    {
      name: "New York Style Cheesecake",
      description: "Authentic creamy cheesecake with a graham cracker crust",
      icon: Cake,
      color: "primary"
    },
    {
      name: "Premium Milkshakes",
      description: "Your choice of rich, creamy milkshakes in various flavors",
      icon: IceCream,
      color: "secondary"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      {/* Floating Icons */}
      <div className="absolute top-32 left-1/4 opacity-5 animate-float">
        <IceCream className="w-24 h-24 text-secondary" />
      </div>
      <div className="absolute bottom-32 right-1/3 opacity-5 animate-float" style={{ animationDelay: '1.5s' }}>
        <Cake className="w-20 h-20 text-primary" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-slide-in-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-gray-200 mb-6">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="font-bold text-gray-800">Sweet Indulgence</span>
            <Heart className="w-5 h-5 text-secondary animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-gray-900">Milkshakes &</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
              Delicious Desserts
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Sweet, Delicious Goodness Now Available
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Image */}
          <div className="relative animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-2xl opacity-60 animate-pulse-glow"></div>

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-gray-100 to-gray-50">
                  <Image
                    src="/images/dessert.png"
                    alt="Fritou Chicken and Pizza - Premium Milkshakes and New York Style Cheesecake"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

             
                </div>
              </div>

              {/* Floating Decorative Cards */}
              <div className="absolute -bottom-6 -left-6 p-4 bg-white rounded-2xl shadow-2xl animate-float border-2 border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Cake className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold">Featured</p>
                    <p className="text-sm font-black text-gray-900">Cheesecake</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 p-4 bg-white rounded-2xl shadow-2xl animate-float border-2 border-secondary/20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-secondary/10 rounded-xl">
                    <IceCream className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold">Fresh</p>
                    <p className="text-sm font-black text-gray-900">Milkshakes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            {/* Intro Text */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-gray-800">Now Serving</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                Indulge in Our Sweet
                <span className="block text-primary">Delicious Treats</span>
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                We're now offering sweet, delicious goodness in the form of two irresistible new items. Perfect for satisfying your cravings!
              </p>
            </div>

            {/* Dessert Items */}
            <div className="space-y-4">
              {desserts.map((dessert, idx) => (
                <div
                  key={idx}
                  className="group relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary/20"
                >
                  {/* Hover Glow */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r from-${dessert.color} to-${dessert.color}/50 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500`}></div>

                  <div className="relative flex items-start gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 p-4 bg-${dessert.color}/10 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <dessert.icon className={`w-8 h-8 text-${dessert.color}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-xl font-black text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {dessert.name}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {dessert.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className={`w-6 h-6 text-${dessert.color} opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Options */}
            <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-lg font-black text-gray-900">Available Options</h4>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 p-3 bg-white rounded-xl shadow-sm">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="font-semibold text-gray-700">Take It To Go</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded-xl shadow-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-semibold text-gray-700">Dine-In Service</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                <Star className="w-4 h-4 text-secondary fill-secondary" />
                Available at both Calgary locations
              </p>

              <div className="text-2xl font-black text-gray-900">
                Complete Your Meal with Something
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Sweet & Satisfying!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
          {[
            { label: "Fresh Daily", icon: Sparkles },
            { label: "Premium Quality", icon: Star },
            { label: "Multiple Flavors", icon: IceCream },
            { label: "Perfect Pairing", icon: Heart }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
            >
              <div className="inline-flex p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl mb-3">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-bold text-gray-800 text-sm">{feature.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
