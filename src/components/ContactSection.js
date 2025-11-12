'use client';
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter, Navigation } from 'lucide-react';

export default function ContactSection({ locationId = "saddletowne", locationName = "Saddletowne", address = "216 Saddletowne Circle NE" }) {
  const locations = {
    "saddletowne": {
      name: "Saddletowne",
      address: "216 Saddletowne Circle NE",
      phone: "+1 (403) 452-2235",
      hours: "10:00 AM - 11:00 PM",
      email: "info@fritouchickenpizza.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.7637892737405!2d-113.96898668438186!3d51.13738647956749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537164a3c3e3c3e3%3A0x3e3e3e3e3e3e3e3e!2s216%20Saddletowne%20Cir%20NE%2C%20Calgary%2C%20AB!5e0!3m2!1sen!2sca!4v1234567890"
    },
    "fritou130": {
      name: "Fritou 130",
      address: "4307 130 Ave SE, Unit 33",
      phone: "+1 (403) 452-2235",
      hours: "10:00 AM - 11:00 PM",
      email: "info@fritouchickenpizza.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.8637892737405!2d-113.96898668438186!3d51.03738647956749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537164a3c3e3c3e3%3A0x3e3e3e3e3e3e3e3e!2s4307%20130%20Ave%20SE%2C%20Calgary%2C%20AB!5e0!3m2!1sen!2sca!4v1234567890"
    }
  };

  const location = locations[locationId] || locations.saddletowne;

  const socialLinks = [
    { icon: Facebook, name: "Facebook", color: "hover:text-blue-600" },
    { icon: Instagram, name: "Instagram", color: "hover:text-pink-600" },
    { icon: Twitter, name: "Twitter", color: "hover:text-blue-400" }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-primary font-semibold mb-6">
            <MapPin className="w-5 h-5" />
            Visit Us
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
            Find Us &
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
              Get In Touch
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            We're always here to serve you the best experience
          </p>
        </div>

        {/* Location Info & Map */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
          {/* Location Details */}
          <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
            {/* Gradient corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-3xl rounded-bl-full"></div>

            <div className="relative z-10">
              {/* Location Icon */}
              <div className="inline-flex p-4 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500">
                <MapPin className="w-10 h-10 text-white" />
              </div>

              {/* Location Name */}
              <h3 className="text-3xl font-black text-gray-900 mb-6 group-hover:text-primary transition-colors duration-300">
                {location.name}
              </h3>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 group/item">
                  <div className="p-3 bg-gray-100 rounded-xl group-hover/item:bg-primary/10 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group/item">
                  <div className="p-3 bg-gray-100 rounded-xl group-hover/item:bg-secondary/10 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                    <a href={`tel:${location.phone}`} className="text-gray-600 hover:text-primary transition-colors">
                      {location.phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 group/item">
                  <div className="p-3 bg-gray-100 rounded-xl group-hover/item:bg-primary/10 transition-colors duration-300">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Opening Hours</h4>
                    <p className="text-gray-600">Daily: {location.hours}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group/item">
                  <div className="p-3 bg-gray-100 rounded-xl group-hover/item:bg-secondary/10 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <a href={`mailto:${location.email}`} className="text-gray-600 hover:text-secondary transition-colors">
                      {location.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-4 bg-gradient-to-r from-primary to-primary/90 text-white rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>
            </div>

            {/* Bottom corner decoration */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/10 to-transparent rounded-bl-3xl rounded-tr-full"></div>
          </div>

          {/* Map Section */}
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative h-full min-h-[500px]">
              <iframe
                src={location.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl"
              ></iframe>
            </div>

            {/* Map overlay label */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{location.name}</p>
                  <p className="text-xs text-gray-600">Click map for directions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            <div className="relative z-10 text-center">
              <h3 className="text-4xl font-black mb-4">Stay Connected</h3>
              <p className="text-white/90 text-lg mb-8">
                Follow us on social media for exclusive deals, updates, and mouthwatering content
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-6 mb-8">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className="group/social p-4 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-8 h-8 text-white group-hover/social:text-primary transition-colors" />
                  </button>
                ))}
              </div>

              <p className="text-white/80 text-sm">
                © 2024 FriTouch Chicken. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
