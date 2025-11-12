"use client";
import { ArrowRight, Sparkles, Star, Check, Drumstick, Package, Users } from "lucide-react";

export default function CombosSection({ orderUrl }) {
  const combos = [
    {
      name: "Mix 1",
      description: "Perfect for family gatherings and celebrations",
      items: [
        "9 pc Chicken",
        "5 Strips",
        "Fries",
        "Med Gravy",
        "Large Coleslaw or Macaroni Salad",
        "2L Drink",
      ],
      gradient: "from-primary to-primary/80",
      badge: "Family Size",
      icon: Users,
    },
    {
      name: "Mix 2",
      description: "Ultimate feast for the biggest appetites",
      items: [
        "18 pc Chicken",
        "10 Strips",
        "Large Fries",
        "Large Gravy",
        "Jumbo Coleslaw or Macaroni",
        "(2) 2L Drink",
      ],
      gradient: "from-secondary to-secondary/80",
      badge: "Party Size",
      icon: Package,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Floating Icons */}
      <div className="absolute top-32 right-20 opacity-5 animate-float">
        <Star className="w-24 h-24 text-primary" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-primary font-semibold mb-6">
            <Sparkles className="w-5 h-5" />
            Special Combos
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
            Unbeatable
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
              Combo Deals
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            More food, more flavor, more value - specially curated for you
          </p>
        </div>

        {/* Combos Grid */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {combos.map((combo, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Badge */}
              <div className="absolute top-6 right-6 z-20 px-5 py-2 bg-white rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                <Star className="w-4 h-4 text-secondary fill-secondary" />
                {combo.badge}
              </div>

              {/* Header Section */}
              <div
                className={`relative bg-gradient-to-br ${combo.gradient} p-10 pb-20 text-white`}
              >
                {/* Pattern overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                ></div>

                <div className="relative z-10">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                    <div className="inline-flex p-5 bg-white/20 backdrop-blur-sm rounded-2xl">
                      <combo.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-4xl font-black mb-3">{combo.name}</h3>
                  <p className="text-white/90 text-lg mb-6">
                    {combo.description}
                  </p>
                </div>

                {/* Wave decoration */}
                <div className="absolute bottom-[-1px] left-0 right-0">
                  <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="w-full h-16 fill-white block"
                  >
                    <path
                      d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
                      opacity=".25"
                    ></path>
                    <path
                      d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V120H0Z"
                      opacity=".5"
                    ></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V120H0Z"></path>
                  </svg>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-secondary" />
                  What's Included:
                </h4>

                <ul className="space-y-4 mb-10">
                  {combo.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <div className="p-1 bg-secondary/10 rounded-full mt-0.5 group-hover/item:bg-secondary group-hover/item:scale-110 transition-all duration-300">
                        <Check className="w-5 h-5 text-secondary group-hover/item:text-white" />
                      </div>
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-5 bg-gradient-to-r ${combo.gradient} text-white rounded-full text-xl font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group/btn`}
                >
                  Order Now
                  <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                </a>
              </div>

              {/* Corner decoration */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gray-100 to-transparent rounded-tr-full opacity-50"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="w-full flex justify-center">
        <a
          href={orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-14 group relative px-12 py-6 bg-gradient-to-r from-primary via-primary to-secondary text-white rounded-full text-xl font-black shadow-2xl hover:shadow-3xl transition-all duration-500 inline-flex items-center gap-3 overflow-hidden"
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <span className="relative z-10">Order Our Combos</span>
          <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </a>
        </div>
      </div>
    </section>
  );
}
