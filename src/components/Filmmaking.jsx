import React from 'react'
import { Video, Film, Play, Camera, CheckCircle, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const Filmmaking = () => {
  const services = [
    {
      icon: Video,
      title: "Wedding Films",
      description: "Cinematic wedding videos that capture the emotion and beauty of your special day."
    },
    {
      icon: Film,
      title: "Corporate Videos",
      description: "Professional corporate films for marketing, training, and brand storytelling."
    },
    {
      icon: Play,
      title: "Event Documentation",
      description: "Complete video coverage of conferences, seminars, and special events."
    },
    {
      icon: Camera,
      title: "Promotional Videos",
      description: "Engaging promotional content for products, services, and brand campaigns."
    }
  ]

  const packages = [
    {
      name: "Essential",
      price: "₹35,000",
      duration: "Half Day",
      features: [
        "4 hours of filming",
        "1 videographer + 1 assistant",
        "Basic equipment setup",
        "Highlight video (2-3 minutes)",
        "HD quality (1080p)",
        "Basic color correction",
        "Online delivery",
        "2 weeks delivery time"
      ]
    },
    {
      name: "Professional",
      price: "₹65,000",
      duration: "Full Day",
      features: [
        "8 hours of filming",
        "2 videographers + 2 assistants",
        "Professional equipment setup",
        "Highlight video (3-5 minutes)",
        "4K quality filming",
        "Advanced color grading",
        "Drone footage (if permitted)",
        "Online + USB delivery",
        "1 week delivery time"
      ],
      popular: true
    },
    {
      name: "Cinematic",
      price: "₹1,20,000",
      duration: "Multi-Day",
      features: [
        "12+ hours of filming (2-3 days)",
        "3 videographers + full crew",
        "Cinema-grade equipment",
        "Full-length video (15-20 minutes)",
        "Highlight reel (5-7 minutes)",
        "4K/6K quality with HDR",
        "Professional drone cinematography",
        "Custom music composition",
        "Premium packaging",
        "Rush delivery available"
      ]
    }
  ]

  const videoTypes = [
    {
      title: "Wedding Cinematography",
      description: "Romantic and emotional wedding films that tell your love story beautifully."
    },
    {
      title: "Corporate Documentaries",
      description: "Professional documentaries showcasing your company culture and achievements."
    },
    {
      title: "Product Launch Videos",
      description: "Dynamic videos to introduce new products and services to your audience."
    },
    {
      title: "Event Highlights",
      description: "Comprehensive coverage of conferences, seminars, and corporate events."
    },
    {
      title: "Brand Storytelling",
      description: "Compelling narratives that communicate your brand values and mission."
    },
    {
      title: "Training Videos",
      description: "Educational content for employee training and customer onboarding."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-orange-800 mb-6">Filmmaking & Videography</h1>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto leading-relaxed">
              Bringing stories to life through cinematic excellence. We create compelling videos 
              that engage, inspire, and leave lasting impressions on your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Our Filmmaking Services</h2>
            <p className="text-lg text-orange-700">
              Professional video production services for every occasion and business need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-orange-800 mb-3">{service.title}</h3>
                <p className="text-orange-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Types Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Types of Videos We Create</h2>
            <p className="text-lg text-orange-700">
              From intimate moments to grand productions, we handle diverse video projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">{type.title}</h3>
                <p className="text-orange-700">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Filmmaking Packages</h2>
            <p className="text-lg text-orange-700">
              Comprehensive video production packages tailored to your specific requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden ${pkg.popular ? 'ring-2 ring-purple-500 transform scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="bg-purple-500 text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-orange-800 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{pkg.price}</div>
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
                        ? 'bg-purple-500 hover:bg-purple-600 text-white' 
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
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Our Production Process</h2>
            <p className="text-lg text-orange-700">
              A systematic approach to create exceptional video content from concept to delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Concept</h3>
              <p className="text-orange-700">Understanding your vision and developing the creative concept.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Planning</h3>
              <p className="text-orange-700">Detailed pre-production planning including storyboarding and scheduling.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Production</h3>
              <p className="text-orange-700">Professional filming with state-of-the-art equipment and techniques.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Post-Production</h3>
              <p className="text-orange-700">Expert editing, color grading, and sound design to perfect your video.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">5</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Delivery</h3>
              <p className="text-orange-700">Final video delivered in your preferred format and resolution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Professional Equipment</h2>
            <p className="text-lg text-orange-700">
              We use industry-leading equipment to ensure the highest quality video production.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">Cameras</h3>
              <p className="text-orange-700">4K/6K cinema cameras, DSLRs, and action cameras</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">Audio</h3>
              <p className="text-orange-700">Professional microphones and recording equipment</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">Lighting</h3>
              <p className="text-orange-700">LED panels, softboxes, and professional lighting kits</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">Drones</h3>
              <p className="text-orange-700">Licensed drone operators for aerial cinematography</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />)}
            </div>
            <blockquote className="text-xl text-orange-700 mb-6 leading-relaxed italic">
              "PhotoPitara created an absolutely stunning wedding film for us. The cinematography was breathtaking, 
              and they captured every emotional moment perfectly. We watch it regularly and it brings tears to our 
              eyes every time. Truly exceptional work!"
            </blockquote>
            <cite className="text-orange-800 font-semibold">- Kavya & Arjun, Delhi</cite>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Cinematic Story?</h2>
          <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
            Let's discuss your video project and bring your vision to life with professional filmmaking expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Start Your Project
            </Link>
            <Link 
              to="/portfolio" 
              className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              View Our Films
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Filmmaking

