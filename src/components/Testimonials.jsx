import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya & Rahul",
      service: "Wedding Photography",
      rating: 5,
      text: "PhotoPitara captured our wedding day perfectly! Every photo tells a story, and the album is a treasure. Their team was professional, creative, and a joy to work with. The attention to detail and ability to capture candid moments was exceptional.",
      image: "P&R"
    },
    {
      id: 2,
      name: "Marketing Director, TechCorp",
      service: "Commercial Photography",
      rating: 5,
      text: "The commercial shoot for our new product line was outstanding. PhotoPitara understood our vision and delivered images that truly elevated our brand. Highly recommend their expertise! The final images exceeded our expectations.",
      image: "TC"
    },
    {
      id: 3,
      name: "Sneha & Ankit",
      service: "Baby Photography",
      rating: 5,
      text: "Our baby's first photoshoot was handled with such care and creativity. The photos are adorable and will be cherished forever. Thank you, PhotoPitara, for the beautiful memories! The patience and skill with our little one was remarkable.",
      image: "S&A"
    },
    {
      id: 4,
      name: "Meera Sharma",
      service: "Maternity Shoot",
      rating: 5,
      text: "The maternity photoshoot was a magical experience. PhotoPitara made me feel comfortable and beautiful throughout the session. The photos perfectly captured this special time in our lives. Absolutely stunning work!",
      image: "MS"
    },
    {
      id: 5,
      name: "Rajesh Kumar",
      service: "Corporate Event",
      rating: 5,
      text: "PhotoPitara documented our annual corporate event flawlessly. They captured all the important moments, networking sessions, and presentations. The team was professional and unobtrusive. Excellent service!",
      image: "RK"
    },
    {
      id: 6,
      name: "Kavya & Arjun",
      service: "Pre-Wedding Shoot",
      rating: 5,
      text: "Our pre-wedding shoot was absolutely amazing! PhotoPitara helped us feel relaxed and natural in front of the camera. The locations, poses, and final editing were all perfect. We couldn't be happier with the results!",
      image: "K&A"
    },
    {
      id: 7,
      name: "Dr. Sunita Patel",
      service: "Family Portrait",
      rating: 5,
      text: "PhotoPitara created beautiful family portraits that we will treasure forever. They were patient with our children and managed to capture everyone's personality perfectly. The quality and creativity are outstanding!",
      image: "SP"
    },
    {
      id: 8,
      name: "Vikram Industries",
      service: "Product Photography",
      rating: 5,
      text: "The product photography for our catalog was exceptional. PhotoPitara understood our brand aesthetic and delivered high-quality images that showcase our products beautifully. Professional service from start to finish!",
      image: "VI"
    },
    {
      id: 9,
      name: "Ritu & Sameer",
      service: "Anniversary Shoot",
      rating: 5,
      text: "Celebrating our 10th anniversary with PhotoPitara was the perfect choice. They captured our love story beautifully and created memories we'll cherish forever. The creativity and attention to detail were remarkable!",
      image: "R&S"
    }
  ]

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-orange-800 mb-6">Client Testimonials</h1>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto leading-relaxed">
              Hear from our valued clients about their experience with PhotoPitara. 
              Their words inspire us to continue creating beautiful memories.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">500+</div>
              <div className="text-orange-700 font-medium">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">1000+</div>
              <div className="text-orange-700 font-medium">Events Captured</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">5.0</div>
              <div className="text-orange-700 font-medium">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">10+</div>
              <div className="text-orange-700 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-orange-700">
              Real experiences from real people who trusted us with their precious moments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-green-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">{testimonial.name}</h3>
                    <p className="text-sm text-orange-600">{testimonial.service}</p>
                  </div>
                </div>
                
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <div className="relative">
                  <Quote className="absolute top-0 left-0 w-6 h-6 text-green-200 -mt-2 -ml-2" />
                  <p className="text-orange-700 leading-relaxed italic pl-4">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Happy Clients?</h2>
          <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
            Let us create beautiful memories for you too. Contact us today to discuss your photography needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Book Your Session
            </a>
            <a 
              href="/portfolio" 
              className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              View Our Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials

