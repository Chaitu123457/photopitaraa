import React from 'react'
import { Heart, Camera, Users, Clock, CheckCircle, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const Wedding = () => {
  const packages = [
    {
      name: "Essential",
      price: "₹25,000",
      duration: "6 Hours",
      features: [
        "Pre-wedding consultation",
        "6 hours of wedding day coverage",
        "200+ edited high-resolution photos",
        "Online gallery for sharing",
        "Basic photo album (50 photos)",
        "1 photographer"
      ]
    },
    {
      name: "Premium",
      price: "₹45,000",
      duration: "8 Hours",
      features: [
        "Pre-wedding consultation & engagement shoot",
        "8 hours of wedding day coverage",
        "400+ edited high-resolution photos",
        "Online gallery with download rights",
        "Premium photo album (100 photos)",
        "2 photographers",
        "Drone photography (if permitted)",
        "Same-day preview (20 photos)"
      ],
      popular: true
    },
    {
      name: "Luxury",
      price: "₹75,000",
      duration: "Full Day",
      features: [
        "Pre-wedding consultation & engagement shoot",
        "Full day wedding coverage (12+ hours)",
        "600+ edited high-resolution photos",
        "Premium online gallery",
        "Luxury photo album (150 photos)",
        "3 photographers + videographer",
        "Drone photography & videography",
        "Same-day preview (50 photos)",
        "Wedding highlight video (3-5 minutes)",
        "Raw photo backup on USB"
      ]
    }
  ]

  const services = [
    {
      icon: Heart,
      title: "Pre-Wedding Shoots",
      description: "Romantic and creative pre-wedding photography sessions to capture your love story before the big day."
    },
    {
      icon: Camera,
      title: "Wedding Day Coverage",
      description: "Complete documentation of your special day from getting ready to the final celebration."
    },
    {
      icon: Users,
      title: "Family Portraits",
      description: "Beautiful family group photos and individual portraits during your wedding celebration."
    },
    {
      icon: Clock,
      title: "Reception Photography",
      description: "Capturing all the joy, laughter, and memorable moments during your wedding reception."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-orange-800 mb-6">Wedding Photography</h1>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto leading-relaxed">
              Your love story deserves to be told beautifully. We capture every precious moment, 
              emotion, and detail of your special day with artistic excellence and heartfelt dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Our Wedding Services</h2>
            <p className="text-lg text-orange-700">
              Comprehensive photography services to capture every aspect of your wedding celebration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-orange-800 mb-3">{service.title}</h3>
                <p className="text-orange-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Wedding Packages</h2>
            <p className="text-lg text-orange-700">
              Choose the perfect package for your special day. All packages include professional editing and online gallery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden ${pkg.popular ? 'ring-2 ring-pink-500 transform scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="bg-pink-500 text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-orange-800 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-pink-600 mb-2">{pkg.price}</div>
                  <div className="text-orange-600 mb-6">{pkg.duration}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-orange-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors block text-center ${
                      pkg.popular 
                        ? 'bg-pink-500 hover:bg-pink-600 text-white' 
                        : 'bg-orange-100 hover:bg-orange-200 text-orange-800'
                    }`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Our Process</h2>
            <p className="text-lg text-orange-700">
              From consultation to delivery, we ensure a smooth and enjoyable experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Consultation</h3>
              <p className="text-orange-700">We discuss your vision, preferences, and wedding details to plan the perfect shoot.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Pre-Wedding</h3>
              <p className="text-orange-700">Optional engagement or pre-wedding shoot to get comfortable with our team.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Wedding Day</h3>
              <p className="text-orange-700">Professional coverage of your special day with minimal intrusion and maximum creativity.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Delivery</h3>
              <p className="text-orange-700">Edited photos delivered within 2-3 weeks via online gallery and physical album.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />)}
            </div>
            <blockquote className="text-xl text-orange-700 mb-6 leading-relaxed italic">
              "PhotoPitara made our wedding day absolutely magical! They captured every emotion, every smile, 
              and every tear of joy. The photos are beyond beautiful, and we couldn't be happier with their 
              professionalism and creativity. Highly recommended!"
            </blockquote>
            <cite className="text-orange-800 font-semibold">- Priya & Rahul, Mumbai</cite>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Wedding Photography?</h2>
          <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
            Let's discuss your wedding plans and create a photography package that perfectly captures your love story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Get Quote
            </Link>
            <Link 
              to="/portfolio" 
              className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              View Wedding Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Wedding

