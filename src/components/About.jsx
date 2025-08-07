import React from 'react'
import { Camera, Award, Users, Heart, Star, CheckCircle } from 'lucide-react'
import img1 from '../assets/IMG-20210905-WA0005.jpg'
import img2 from '../assets/IMG_20220109_025328_920.jpg'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-orange-800 mb-6">About PhotoPitara</h1>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto leading-relaxed">
              Where passion meets artistry, and every moment becomes a timeless treasure. 
              We are storytellers with cameras, capturing the essence of life's most precious moments.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-orange-800 mb-6">Our Story</h2>
              <p className="text-lg text-orange-700 mb-6 leading-relaxed">
                PhotoPitara was born from a simple belief: every moment has a story worth telling. 
                Founded with a passion for visual storytelling, we have dedicated ourselves to capturing 
                the authentic emotions, genuine connections, and beautiful details that make each 
                occasion unique.
              </p>
              <p className="text-lg text-orange-700 mb-6 leading-relaxed">
                With over a decade of experience in photography and filmmaking, our team has had the 
                privilege of documenting countless love stories, family milestones, and corporate 
                achievements. Each project is approached with fresh eyes, creative vision, and an 
                unwavering commitment to excellence.
              </p>
              <p className="text-lg text-orange-700 leading-relaxed">
                We believe that photography is not just about taking pictures – it's about preserving 
                memories, emotions, and stories that will be cherished for generations to come.
              </p>
            </div>
            <div className="flex justify-center">
              <img src={img1} alt="Our Story" className="w-full max-w-md rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-green-700 mr-3" />
                <h3 className="text-2xl font-bold text-orange-800">Our Mission</h3>
              </div>
              <p className="text-orange-700 leading-relaxed">
                To create timeless visual narratives that capture the true essence of every moment. 
                We strive to provide our clients with exceptional photography and filmmaking services 
                that exceed expectations and preserve their most cherished memories with artistic 
                excellence and professional integrity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Star className="w-8 h-8 text-green-700 mr-3" />
                <h3 className="text-2xl font-bold text-orange-800">Our Vision</h3>
              </div>
              <p className="text-orange-700 leading-relaxed">
                To be recognized as the premier photography and filmmaking studio that transforms 
                ordinary moments into extraordinary memories. We envision a world where every story 
                is beautifully told through our lens, creating a lasting legacy for families and 
                businesses alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Why Choose PhotoPitara?</h2>
            <p className="text-lg text-orange-700">
              Discover what sets us apart in the world of photography and filmmaking.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Professional Excellence</h3>
              <p className="text-orange-700">
                State-of-the-art equipment and cutting-edge techniques ensure every shot is perfect.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Award-Winning Team</h3>
              <p className="text-orange-700">
                Our talented photographers and filmmakers have received recognition for their artistic vision.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Personalized Service</h3>
              <p className="text-orange-700">
                Every client receives individual attention and customized solutions for their unique needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Timely Delivery</h3>
              <p className="text-orange-700">
                We understand the importance of deadlines and always deliver your memories on time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Emotional Connection</h3>
              <p className="text-orange-700">
                We capture not just images, but the emotions and stories behind every moment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Lifetime Memories</h3>
              <p className="text-orange-700">
                Our work creates lasting treasures that you and your family will cherish forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-orange-700">
              The creative minds behind every beautiful capture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img src={img2} alt="Our Team" className="w-full max-w-md rounded-lg shadow-lg" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-orange-800 mb-4">Passionate Professionals</h3>
              <p className="text-lg text-orange-700 mb-6 leading-relaxed">
                Our team consists of experienced photographers, skilled filmmakers, and creative 
                professionals who share a common passion for visual storytelling. Each member brings 
                unique expertise and artistic vision to every project.
              </p>
              <p className="text-lg text-orange-700 leading-relaxed">
                From intimate family portraits to grand wedding celebrations, from corporate events 
                to commercial productions, our team works collaboratively to ensure every client 
                receives the highest quality service and stunning results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Story?</h2>
          <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
            Let's work together to capture your special moments and create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Get In Touch
            </a>
            <a 
              href="/portfolio" 
              className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

