'use client';
import { Star, ArrowRight, Flame, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function BestDishesSection({ orderUrl }) {
  const dishes = [
    {
      name: "Classic Chicken Burger",
      description: "Crispy chicken patty with fresh lettuce, tomatoes, and our special sauce",
      category: "Burgers",
      spicy: 2,
      image: "/images/food-items/menu-items/burger.png"
    },
    {
      name: "Crispy Chicken Wings",
      description: "Perfectly fried wings with your choice of signature sauces",
      category: "Hot & Spicy",
      spicy: 3,
      image: "/images/food-items/menu-items/wings.png"
    },
    {
      name: "Golden Chicken Strips",
      description: "Hand-breaded chicken tenders fried to golden perfection",
      category: "Signature",
      spicy: 2,
      image: "/images/food-items/menu-items/strips.png"
    },
    {
      name: "Fried Chicken Pieces",
      description: "Our signature golden-fried chicken with the perfect crunch and juicy interior",
      category: "Signature",
      spicy: 2,
      image: "/images/food-items/menu-items/chicken-pieces.png"
    },
    {
      name: "Crispy Golden Fries",
      description: "Perfectly seasoned fries, crispy on the outside and fluffy on the inside",
      category: "Sides",
      spicy: 0,
      image: "/images/food-items/menu-items/fries.png"
    },
    {
      name: "Chicken Popcorn",
      description: "Bite-sized chicken pieces, perfectly seasoned and fried until crispy",
      category: "Signature",
      spicy: 2,
      image: "/images/food-items/menu-items/chicken-popcorns.png"
    },
    {
      name: "Chicken Popcorn Poutine",
      description: "Golden fries topped with gravy, cheese curds, and crispy chicken popcorn",
      category: "Loaded",
      spicy: 2,
      image: "/images/food-items/menu-items/chicken-popcorn-poutine.png"
    },
    {
      name: "New York Style Cheesecake",
      description: "Authentic creamy cheesecake with a graham cracker crust",
      category: "Desserts",
      spicy: 0,
      image: "/images/food-items/menu-items/cheese-cake.png"
    }
  ];

  return (
    <section id="menu" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-32 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>

      {/* Floating decorative icons */}
      <div className="absolute top-40 left-1/4 opacity-5 animate-float">
        <Star className="w-20 h-20 text-secondary" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full text-secondary font-semibold mb-6">
            <Star className="w-5 h-5" />
            Fan Favorites
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
            Our Best
            <span className="block bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent animate-gradient">
              Selling Dishes
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Handpicked favorites that keep our customers coming back for more
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Category Badge */}
              <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold text-primary shadow-lg">
                {dish.category}
              </div>

              {/* Spicy Level */}
              {dish.spicy > 0 && (
                <div className="absolute top-6 right-6 z-20 flex gap-1">
                  {[...Array(dish.spicy)].map((_, i) => (
                    <Flame key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
              )}

              {/* Image Area */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M0 0h40v40H0V0z'/%3E%3C/g%3E%3C/svg%3E")`
                }}></div>

                <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {dish.name}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {dish.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-gray-700">5.0</span>
                </div>

                {/* CTA */}
                <a
                  href={orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-gradient-to-r from-primary to-primary/90 text-white rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  Order Now
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </a>
              </div>

              {/* Corner decoration */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-secondary/10 to-transparent rounded-tl-full"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-12 py-5 bg-gradient-to-r from-secondary to-secondary/90 text-white rounded-full text-xl font-bold shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 inline-flex items-center gap-3"
          >
            <Sparkles className="w-6 h-6" />
            View Full Menu
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
