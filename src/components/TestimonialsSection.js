"use client";
import { Star } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Food Blogger",
      rating: 5,
      text: "The best fried chicken I've ever had! The coating is incredibly crispy, and the meat is so juicy. Every bite is a delightful experience that keeps me coming back for more.",
      image: "/images/person.jpg",
    },
    {
      name: "Michael Chen",
      role: "Regular Customer",
      rating: 5,
      text: "FriTouch Chicken has become our family's favorite spot. The quality is always consistent and the service is exceptional. We can't get enough of their amazing flavors!",
      image: "/images/person.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "Local Foodie",
      rating: 5,
      text: "I'm impressed by how fresh everything is. The spicy wings are absolutely phenomenal! The perfect blend of heat and flavor makes this place stand out from the rest.",
      image: "/images/person.jpg",
    },
    {
      name: "James Williams",
      role: "Food Critic",
      rating: 5,
      text: "A game-changer in the fast food industry. The 24-hour marinade makes all the difference! The attention to detail and quality ingredients truly shine through.",
      image: "/images/person.jpg",
    },
    {
      name: "Lisa Anderson",
      role: "Happy Customer",
      rating: 5,
      text: "Amazing taste and great service! The chicken is always fresh and perfectly seasoned. This is hands down the best fried chicken spot in town!",
      image: "/images/person.jpg",
    },
    {
      name: "David Brown",
      role: "Local Resident",
      rating: 5,
      text: "Best fried chicken in town! The crispy coating and tender meat make every visit worthwhile. I highly recommend FriTouch Chicken to anyone who loves quality food.",
      image: "/images/person.jpg",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-gray-200 mb-6 animate-slide-in-up">
            <span className="font-bold text-gray-800">Customer Stories</span>
          </div>

          <h2
            className="text-5xl md:text-7xl font-black mb-6 leading-tight animate-slide-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-gray-900">What Our</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
              Customers Say
            </span>
          </h2>

          <p
            className="text-xl text-gray-600 leading-relaxed animate-slide-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Real experiences from people who love our food
          </p>
        </div>

        {/* Swiper Testimonials Slider */}
        <div
          className="max-w-6xl mx-auto animate-slide-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
              bulletClass: "swiper-pagination-bullet-custom",
              bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper w-full pb-16 "
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                {/* Testimonial Card - Exact Replica */}
                <div className="relative my-4 bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 h-full flex flex-col">
                  {/* Large Quote Mark - Left */}
                  <div className="absolute top-6 left-6 text-6xl font-serif text-primary/20 leading-none select-none">
                    "
                  </div>

                  {/* Large Quote Mark - Right */}
                  <div className="absolute top-6 right-6 text-6xl font-serif text-primary/20 leading-none select-none">
                    "
                  </div>

                  {/* Orange Wave Decoration - Left */}
                  <div className="absolute top-5 left-0 w-20 h-20 opacity-30">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M0,0 Q50,50 0,100 Z" fill="url(#gradient1)" />
                      <defs>
                        <linearGradient
                          id="gradient1"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            style={{ stopColor: "#ff0202", stopOpacity: 1 }}
                          />
                          <stop
                            offset="100%"
                            style={{ stopColor: "#ff8800", stopOpacity: 0.5 }}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Orange Wave Decoration - Right */}
                  <div className="absolute bottom-5 right-0 w-20 h-20 opacity-30 rotate-180">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M0,0 Q50,50 0,100 Z" fill="url(#gradient2)" />
                      <defs>
                        <linearGradient
                          id="gradient2"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            style={{ stopColor: "#ff0202", stopOpacity: 1 }}
                          />
                          <stop
                            offset="100%"
                            style={{ stopColor: "#ff8800", stopOpacity: 0.5 }}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Profile Image at Top */}
                  <div className="flex justify-center mb-6 relative z-10">
                    <div className="relative">
                      {/* Glow Ring */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30"></div>

                      {/* Profile Circle */}
                      <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Customer Name - Orange Color */}
                  <h3 className="text-2xl font-black text-primary text-center mb-2 relative z-10">
                    {testimonial.name}
                  </h3>

                  {/* Role/Title */}
                  <p className="text-sm text-gray-500 text-center mb-6 relative z-10">
                    {testimonial.role}
                  </p>

                  {/* Review Text */}
                  <p className="text-gray-600 text-center leading-relaxed mb-6 flex-grow relative z-10 px-4">
                    {testimonial.text}
                  </p>

                  {/* Star Rating at Bottom */}
                  <div className="flex justify-center gap-1 relative z-10 bg-primary w-max mx-auto px-2 py-1 rounded-xl">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-white text-white"
                      />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination - Centered */}
          <div className="flex items-center justify-center mt-8">
            <div className="swiper-pagination-custom flex gap-2"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { value: "10K+", label: "Happy Customers" },
            { value: "4.9", label: "Average Rating" },
            { value: "500+", label: "5-Star Reviews" },
            { value: "95%", label: "Return Rate" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group relative text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
              <div className="relative">
                <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-semibold text-sm">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper {
          padding-left: 4px;
          padding-right: 4px;
        }

        .swiper-pagination-custom {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }

        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          border-radius: 9999px;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-block;
          opacity: 1;
        }

        .swiper-pagination-bullet-active-custom {
          width: 40px;
          background: linear-gradient(to right, #ff0202, #97be0d);
        }

        .swiper-pagination-bullet-custom:hover {
          background: #9ca3af;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
