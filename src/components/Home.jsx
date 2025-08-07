import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Heart, Award, Users, Camera, Star } from 'lucide-react'
import logo from '../assets/photopitara_logo.jpeg'
import img1 from '../assets/IMG_20220109_025328_920.jpg'
import img2 from '../assets/IMG-20210905-WA0005.jpg'
import img3 from '../assets/IMG-20250112-WA0010.jpg'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-orange-800">Capturing</span>
                <br />
                <span className="text-green-700">Timeless</span>
                <br />
                <span className="text-orange-800">Moments</span>
              </h1>
              <p className="text-lg text-orange-700 mb-8 leading-relaxed">
                Where every frame tells a story, and every story becomes a treasured memory. 
                Experience luxury photography that transcends the ordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/portfolio">
                  <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 text-lg">
                    View Portfolio
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-pink-400 text-pink-600 hover:bg-pink-50 px-8 py-3 text-lg">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-80 h-60 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img src={img1} alt="Featured Image 1" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img src={img2} alt="About Us" className="w-full max-w-md rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-orange-800 mb-4">About PhotoPitara</h2>
              <p className="text-lg text-orange-700 mb-6 leading-relaxed">
                At PhotoPitara, we believe in the power of visual storytelling. With over a decade of experience, 
                our passion lies in transforming fleeting moments into timeless memories. We are a team of dedicated 
                photographers and filmmakers committed to delivering excellence and capturing the true essence of 
                every occasion.
              </p>
              <p className="text-lg text-orange-700 leading-relaxed">
                Our approach is personalized, ensuring that your unique story is told with creativity, precision, 
                and a touch of magic. From the grandest celebrations to the most intimate moments, we are here to 
                preserve your cherished memories for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Specializations */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Our Specializations</h2>
            <p className="text-lg text-orange-700">
              From intimate weddings to grand commercial productions, we craft visual narratives that resonate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-2">Weddings</h3>
              <p className="text-orange-700">Capturing love stories with elegance and grace</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-2">Commercial</h3>
              <p className="text-orange-700">Professional imagery that elevates your brand</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-2">Events</h3>
              <p className="text-orange-700">Documenting celebrations with artistic vision</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-2">Filmmaking</h3>
              <p className="text-orange-700">Cinematic storytelling that moves hearts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-orange-700">
              Hear from those who have experienced the PhotoPitara difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-orange-700 text-center mb-4 leading-relaxed">
                "PhotoPitara captured our wedding day perfectly! Every photo tells a story, and the album is a treasure. 
                Their team was professional, creative, and a joy to work with."
              </p>
              <p className="font-semibold text-orange-800 text-center">- Priya & Rahul</p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-orange-700 text-center mb-4 leading-relaxed">
                "The commercial shoot for our new product line was outstanding. PhotoPitara understood our vision 
                and delivered images that truly elevated our brand. Highly recommend their expertise!"
              </p>
              <p className="font-semibold text-orange-800 text-center">- Marketing Director, TechCorp</p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-orange-700 text-center mb-4 leading-relaxed">
                "Our baby's first photoshoot was handled with such care and creativity. The photos are adorable 
                and will be cherished forever. Thank you, PhotoPitara, for the beautiful memories!"
              </p>
              <p className="font-semibold text-orange-800 text-center">- Sneha & Ankit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Featured Work</h2>
            <p className="text-lg text-orange-700">
              A glimpse into our most treasured captures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img src={img1} alt="Featured Image 1" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img src={img2} alt="Featured Image 2" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img src={img3} alt="Featured Image 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/portfolio">
              <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 text-lg">
                Explore Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img src={logo} alt="PhotoPitara" className="h-16 w-auto mx-auto mb-4" />
            <p className="text-orange-200 mb-8">
              Crafting visual stories that last a lifetime
            </p>
            <div className="flex justify-center space-x-8">
              <Link to="/" className="text-orange-200 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/portfolio" className="text-orange-200 hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link to="/contact" className="text-orange-200 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home


