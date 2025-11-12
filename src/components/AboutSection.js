'use client';
import { Heart, Award, Sparkles, ChefHat, Truck, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection({ locationId = "saddletowne", showDelivery = false }) {
  const hasDelivery = showDelivery;
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-52 h-52 bg-secondary/5 rounded-full blur-3xl"></div>

      {/* Floating Icons */}
      <div className="absolute top-32 right-1/4 opacity-5 animate-float">
        <ChefHat className="w-32 h-32 text-primary" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative group">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-20"></div>

            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              {/* Image */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src="/images/about-side.png"
                  alt="Fritou Chicken and Pizza - Fresh Fried Chicken and Delicious Food"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Overlay Gradient for better text visibility on badges */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-6 -right-6 bg-secondary text-white rounded-2xl p-6 shadow-2xl animate-float z-10">
              <Award className="w-12 h-12 mb-2" />
              <p className="font-bold text-sm">Award<br/>Winning</p>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-2xl p-6 shadow-2xl animate-float z-10" style={{ animationDelay: '1s' }}>
              <Heart className="w-12 h-12 mb-2" />
              <p className="font-bold text-sm">Made with<br/>Love</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full text-primary font-semibold">
              <Sparkles className="w-5 h-5" />
              About Us
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              Crafting Memories,
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">One Bite at a Time</span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              At FriTouch Chicken, we believe in the perfect blend of tradition and innovation.
              Our chefs use time-honored techniques combined with modern flavors to create an
              unforgettable culinary experience.
            </p>

            <p className="text-xl text-gray-600 leading-relaxed">
              Every piece of chicken is carefully selected, marinated for 24 hours in our secret
              spice blend, and fried to golden perfection. We don't just serve food - we serve
              happiness on a plate.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Heart className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Made with Love</h3>
                  <p className="text-gray-600">Fresh ingredients, prepared daily</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <Award className="w-6 h-6 text-secondary group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Quality First</h3>
                  <p className="text-gray-600">Premium quality guaranteed</p>
                </div>
              </div>
            </div>

            {/* Delivery Platforms - Only for Location 2 */}
            {hasDelivery && (
              <div className="pt-8">
                <div className="bg-gradient-to-br from-secondary/10 via-primary/5 to-secondary/5 rounded-3xl p-8 border-2 border-secondary/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-secondary rounded-xl">
                      <Truck className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900">Order Delivery</h3>
                      <p className="text-gray-600">Get your favorite chicken delivered to your door</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <a
                      href="https://www.ubereats.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/platform relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-secondary/30 overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full"></div>
                      <div className="relative z-10 flex items-center gap-4">
                        <div className="p-4 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl group-hover/platform:scale-110 transition-transform duration-300">
                          <ShoppingBag className="w-8 h-8 text-secondary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-black text-gray-900 mb-1 group-hover/platform:text-secondary transition-colors">Uber Eats</h4>
                          <p className="text-sm text-gray-600">Fast & reliable delivery</p>
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://www.doordash.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/platform relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary/30 overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
                      <div className="relative z-10 flex items-center gap-4">
                        <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover/platform:scale-110 transition-transform duration-300">
                          <Truck className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-black text-gray-900 mb-1 group-hover/platform:text-primary transition-colors">DoorDash</h4>
                          <p className="text-sm text-gray-600">Quick delivery service</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 pt-8">
              <button className="group px-8 py-4 bg-primary text-white rounded-full text-lg font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
                Discover Our Story
                <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-800 rounded-full text-lg font-bold hover:border-secondary hover:text-secondary hover:scale-105 transition-all duration-300">
                Our Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
