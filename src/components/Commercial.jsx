import React from 'react'
import { Camera, Briefcase, TrendingUp, Users, CheckCircle, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const Commercial = () => {
  const services = [
    {
      icon: Camera,
      title: "Product Photography",
      description: "High-quality product images that showcase your items in the best light for e-commerce and marketing."
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description: "Professional documentation of conferences, seminars, and corporate gatherings."
    },
    {
      icon: TrendingUp,
      title: "Brand Photography",
      description: "Lifestyle and brand imagery that tells your company's story and connects with your audience."
    },
    {
      icon: Users,
      title: "Team Portraits",
      description: "Professional headshots and team photos that represent your company's professionalism."
    }
  ]

  const packages = [
    {
      name: "Startup",
      price: "₹15,000",
      duration: "Half Day",
      features: [
        "4 hours of photography",
        "50+ edited high-resolution images",
        "Basic product photography setup",
        "Online gallery for downloads",
        "Commercial usage rights",
        "1 photographer"
      ]
    },
    {
      name: "Business",
      price: "₹30,000",
      duration: "Full Day",
      features: [
        "8 hours of photography",
        "100+ edited high-resolution images",
        "Advanced lighting setup",
        "Multiple product categories",
        "Team headshots (up to 10 people)",
        "Online gallery with branding",
        "Extended commercial usage rights",
        "2 photographers"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹50,000",
      duration: "2 Days",
      features: [
        "16 hours of photography (2 days)",
        "200+ edited high-resolution images",
        "Professional studio setup",
        "Complete product catalog",
        "Unlimited team headshots",
        "Branded online gallery",
        "Full commercial usage rights",
        "3 photographers",
        "Video content creation",
        "Rush delivery available"
      ]
    }
  ]

  const industries = [
    "Fashion & Apparel",
    "Food & Beverage",
    "Technology",
    "Healthcare",
    "Real Estate",
    "Automotive",
    "Beauty & Cosmetics",
    "Manufacturing",
    "Hospitality",
    "Education",
    "Finance",
    "Retail"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-orange-800 mb-6">Commercial Photography</h1>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto leading-relaxed">
              Elevate your brand with professional commercial photography that captures the essence 
              of your business and connects with your target audience.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Our Commercial Services</h2>
            <p className="text-lg text-orange-700">
              Comprehensive photography solutions for businesses of all sizes and industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-orange-800 mb-3">{service.title}</h3>
                <p className="text-orange-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Industries We Serve</h2>
            <p className="text-lg text-orange-700">
              We have experience working with diverse industries and understand their unique requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <span className="text-orange-800 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Commercial Packages</h2>
            <p className="text-lg text-orange-700">
              Flexible packages designed to meet your business photography needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden ${pkg.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-orange-800 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{pkg.price}</div>
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
                        ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                        : 'bg-orange-100 hover:bg-orange-200 text-orange-800'
                    }`}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Our Process</h2>
            <p className="text-lg text-orange-700">
              A streamlined approach to deliver exceptional commercial photography results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Discovery</h3>
              <p className="text-orange-700">We understand your brand, goals, and specific photography requirements.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Planning</h3>
              <p className="text-orange-700">Detailed planning of the shoot including location, styling, and equipment setup.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Production</h3>
              <p className="text-orange-700">Professional photography session with attention to detail and brand consistency.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Delivery</h3>
              <p className="text-orange-700">Edited images delivered on time with full commercial usage rights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Why Choose Our Commercial Photography?</h2>
            <p className="text-lg text-orange-700">
              Professional imagery that drives business results and enhances your brand presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Increase Sales</h3>
              <p className="text-orange-700">High-quality product images can increase conversion rates by up to 30%.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Build Trust</h3>
              <p className="text-orange-700">Professional imagery builds credibility and trust with your customers.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Brand Consistency</h3>
              <p className="text-orange-700">Consistent visual style across all your marketing materials and platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />)}
            </div>
            <blockquote className="text-xl text-orange-700 mb-6 leading-relaxed italic">
              "PhotoPitara transformed our product catalog with stunning photography. The images perfectly 
              captured our brand aesthetic and significantly improved our online sales. Their professionalism 
              and attention to detail are unmatched."
            </blockquote>
            <cite className="text-orange-800 font-semibold">- Marketing Director, TechCorp</cite>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
            Let's discuss your commercial photography needs and create compelling visuals that drive business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Get Quote
            </Link>
            <Link 
              to="/portfolio" 
              className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              View Commercial Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Commercial

