import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Heart, Award, Users, Camera, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import logo from '../assets/photopitara_logo.jpeg'

// Wedding and pre-wedding photos for slideshow
import wedding1 from '../assets/20230217042713_IMG_1705.jpg'
import wedding2 from '../assets/TX9A3951_resized.jpg'
import wedding3 from '../assets/0C5A5517(2).jpg'
import wedding4 from '../assets/CN7B6242.JPG'
import wedding5 from '../assets/406A8788.jpg'
import wedding6 from '../assets/1X2A0098.JPG'
import wedding7 from '../assets/091A0057.jpg'
import wedding8 from '../assets/TX9A3990.JPG'
import wedding9 from '../assets/1X2A0091.JPG'
import wedding10 from '../assets/TX9A3988.JPG'

// Wedding photos for featured work
import featuredWedding1 from '../assets/1X2A0098.JPG'
import featuredWedding2 from '../assets/091A0057.jpg'
import featuredWedding3 from '../assets/TX9A3990.JPG'

// Ghibli images for team section
import ghibliFounder1 from '../assets/ghibli_founder1.png'
import ghibliFounder2 from '../assets/ghibli_founder2.png'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slideImages = [
    { src: wedding1, alt: "Beautiful Wedding Ceremony" },
    { src: wedding2, alt: "Romantic Couple Portrait" },
    { src: wedding3, alt: "Wedding Reception Moments" },
    { src: wedding4, alt: "Traditional Wedding Rituals" },
    { src: wedding5, alt: "Candid Wedding Photography" },
    { src: wedding6, alt: "Pre-Wedding Couple Shoot" },
    { src: wedding7, alt: "Elegant Wedding Portrait" },
    { src: wedding8, alt: "Wedding Day Celebrations" },
    { src: wedding9, alt: "Intimate Wedding Moments" },
    { src: wedding10, alt: "Pre-Wedding Romance" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slideImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length)
  }

  return (
    <div className="min-h-screen">
      {/* Dynamic Slideshow Hero Section */}
      <section className="relative slideshow-height h-screen overflow-hidden slideshow-container">
        <div className="absolute inset-0">
          {slideImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 slide-transition ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          ))}
        </div>
        
        {/* Slideshow Content */}
        <div className="relative z-10 flex items-center justify-center h-full mobile-padding">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8">
            <h1 className="hero-text text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-orange-300">Capturing</span>
              <br />
              <span className="text-green-300">Timeless</span>
              <br />
              <span className="text-pink-300">Moments</span>
            </h1>
            <p className="hero-subtitle text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Where every frame tells a story, and every story becomes a treasured memory. 
              Experience luxury photography that transcends the ordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portfolio">
                <Button className="mobile-button bg-green-700 hover:bg-green-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 btn-primary">
                  View Portfolio
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="mobile-button border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 btn-outline">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slideshow Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 focus-visible"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 focus-visible"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slideImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus-visible ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Us Section - Inspired by reference */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-8 tracking-wide">ABOUT US</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Step into the enchanting world of PhotoPitara, where love stories are woven into timeless tapestries through 
                the art of photography. Our journey began with an extraordinary moment, where destiny brought 
                together two kindred spirits. In that magical encounter, a spark was ignited, and PhotoPitara was born.
              </p>
              <p>
                At PhotoPitara, our belief in the essence of genuine connections and authentic emotions is at the very heart of 
                our craft. Our mantra is elegantly simple, yet it carries profound significance: "Real ties, real feelings, and magical 
                pictures". We take immense joy in forging personal bonds with our cherished clients, immersing ourselves in their 
                unique love stories and dreams for their special day.
              </p>
              <p>
                Within the realm of intimate weddings, we discover an intimate oasis that stirs our souls. These close-knit 
                celebrations cradle the true essence of love, and we set out to unveil the precious gems of genuine connections 
                tucked within. With an artist's touch and a playful spirit, we elevate the ordinary into extraordinary keepsakes, 
                brimming with authenticity and joy that will be treasured and adored throughout a lifetime.
              </p>
              <p>
                Our artistry extends beyond intimate affairs, as we've had the privilege of capturing unforgettable moments in 
                celebrity weddings. From star-studded celebrations to cherished private affairs, our lens weaves captivating 
                narratives that resonate with joy, love, and the magic of each couple's story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section - Inspired by reference */}
      <section className="mobile-spacing py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto mobile-padding px-4 sm:px-6 lg:px-8">
          <div className="text-center mobile-mb mb-16">
            <h2 className="section-title text-5xl font-bold text-gray-800 mb-4 tracking-wide elegant-text">MEET THE TEAM</h2>
            <p className="text-xl text-gray-600 italic">"Photography is a love affair with life"</p>
            <p className="text-lg text-gray-500 mt-2">- Burk Uzzle</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 mobile-gap gap-16 items-center">
            <div className="text-center mobile-text-center">
              <div className="relative mobile-mb mb-8">
                <div className="team-image w-80 h-80 mx-auto rounded-lg overflow-hidden shadow-2xl image-hover">
                  <img src={ghibliFounder1} alt="Kartik Patidar" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center hover-lift">
                  <Camera className="w-12 h-12 text-orange-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 modern-text">Kartik Patidar</h3>
              <p className="text-lg text-gray-600 mb-4">Founder | CEO</p>
              <p className="text-gray-600 max-w-sm mx-auto">
                Passionate about capturing authentic emotions and creating timeless memories through the lens.
              </p>
            </div>
            
            <div className="text-center mobile-text-center">
              <div className="relative mobile-mb mb-8">
                <div className="team-image w-80 h-80 mx-auto rounded-lg overflow-hidden shadow-2xl image-hover">
                  <img src={ghibliFounder2} alt="Kartik Patidar" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center hover-lift">
                  <Camera className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 modern-text">Kartik Patidar</h3>
              <p className="text-lg text-gray-600 mb-4">Team</p>
              <p className="text-gray-600 max-w-sm mx-auto">
                Expert in cinematic storytelling and creating visual narratives that touch hearts.
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
            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <Heart className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-2">Weddings</h3>
              <p className="text-orange-700">Capturing love stories with elegance and grace</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <Award className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-2">Commercial</h3>
              <p className="text-orange-700">Professional imagery that elevates your brand</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <Users className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-2">Events</h3>
              <p className="text-orange-700">Documenting celebrations with artistic vision</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <Camera className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-2">Filmmaking</h3>
              <p className="text-orange-700">Cinematic storytelling that moves hearts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Photo Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Behind the Photo Stories</h2>
            <p className="text-lg text-orange-700">
              Every photograph has a story. Here are some of our favorites.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="bg-green-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img src={featuredWedding1} alt="Wedding Story 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">The First Look</h3>
                <p className="text-orange-700 leading-relaxed">
                  This magical moment captured the groom's reaction when he first saw his bride. The pure joy and emotion 
                  in his eyes told a story that words could never express. It was one of those spontaneous moments that 
                  made our hearts skip a beat.
                </p>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img src={featuredWedding2} alt="Wedding Story 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Golden Hour Romance</h3>
                <p className="text-orange-700 leading-relaxed">
                  As the sun set behind the mountains, we captured this intimate moment between the couple. The golden 
                  light created a natural halo around them, symbolizing the beginning of their new journey together. 
                  Nature itself seemed to bless their union.
                </p>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img src={featuredWedding3} alt="Wedding Story 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Generations of Love</h3>
                <p className="text-orange-700 leading-relaxed">
                  This candid shot captured three generations celebrating together. The grandmother's tears of joy, 
                  the parents' proud smiles, and the couple's happiness created a beautiful tapestry of family love 
                  that will be treasured for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-orange-700">
              Hear from those who have experienced the PhotoPitara difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-orange-700 text-center mb-4 leading-relaxed">
                "PhotoPitara captured our wedding day perfectly! Every photo tells a story, and the album is a treasure. 
                Their team was professional, creative, and a joy to work with."
              </p>
              <p className="font-semibold text-orange-800 text-center">- Priya & Rahul</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-orange-700 text-center mb-4 leading-relaxed">
                "The commercial shoot for our new product line was outstanding. PhotoPitara understood our vision 
                and delivered images that truly elevated our brand. Highly recommend their expertise!"
              </p>
              <p className="font-semibold text-orange-800 text-center">- Marketing Director, TechCorp</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-orange-700 text-center mb-4 leading-relaxed">
                "Our engagement shoot was absolutely magical! PhotoPitara made us feel comfortable and captured 
                our love story beautifully. We couldn't be happier with the results!"
              </p>
              <p className="font-semibold text-orange-800 text-center">- Sneha & Ankit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Featured Work</h2>
            <p className="text-lg text-orange-700">
              A glimpse into our most treasured captures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img src={featuredWedding1} alt="Featured Wedding 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img src={featuredWedding2} alt="Featured Wedding 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img src={featuredWedding3} alt="Featured Wedding 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/portfolio">
              <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
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

