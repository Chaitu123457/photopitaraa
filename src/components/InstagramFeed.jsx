import React from 'react'
import { Instagram, ExternalLink } from 'lucide-react'

const InstagramFeed = () => {
  // Instagram posts data - replace with actual photopitaraa content
  const instagramPosts = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/300x300?text=Instagram+Post+1",
      caption: "Beautiful wedding photography session ✨ #PhotoPitara #WeddingPhotography",
      likes: 245,
      comments: 18,
      postUrl: "https://www.instagram.com/photopitaraa"
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/300x300?text=Instagram+Post+2",
      caption: "Behind the scenes of our latest commercial shoot 📸 #BTS #CommercialPhotography",
      likes: 189,
      comments: 12,
      postUrl: "https://www.instagram.com/photopitaraa"
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/300x300?text=Instagram+Post+3",
      caption: "Adorable baby photoshoot moments 👶💕 #BabyPhotography #PhotoPitara",
      likes: 312,
      comments: 25,
      postUrl: "https://www.instagram.com/photopitaraa"
    },
    {
      id: 4,
      imageUrl: "https://via.placeholder.com/300x300?text=Instagram+Post+4",
      caption: "Pre-wedding magic in the golden hour 🌅 #PreWedding #GoldenHour",
      likes: 278,
      comments: 21,
      postUrl: "https://www.instagram.com/photopitaraa"
    },
    {
      id: 5,
      imageUrl: "https://via.placeholder.com/300x300?text=Instagram+Post+5",
      caption: "Corporate headshots that make an impact 💼 #CorporatePhotography #Professional",
      likes: 156,
      comments: 8,
      postUrl: "https://www.instagram.com/photopitaraa"
    },
    {
      id: 6,
      imageUrl: "https://via.placeholder.com/300x300?text=Instagram+Post+6",
      caption: "Maternity photography celebrating new life 🤱 #MaternityPhotography #Expecting",
      likes: 234,
      comments: 16,
      postUrl: "https://www.instagram.com/photopitaraa"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Instagram className="w-16 h-16 text-pink-600" />
            </div>
            <h1 className="text-5xl font-bold text-orange-800 mb-6">Follow Us on Instagram</h1>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto leading-relaxed">
              Stay connected with PhotoPitara on Instagram for the latest updates, behind-the-scenes content, 
              and beautiful photography inspiration.
            </p>
            <div className="mt-8">
              <a 
                href="https://www.instagram.com/photopitaraa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 inline-flex items-center"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Follow @photopitaraa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Latest from Instagram</h2>
            <p className="text-lg text-orange-700">
              Check out our recent posts and see what we've been capturing lately.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instagramPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={post.imageUrl} 
                    alt={`Instagram post ${post.id}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <a 
                      href={post.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all"
                    >
                      <Instagram className="w-5 h-5 text-pink-600" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-orange-700 mb-4 leading-relaxed">{post.caption}</p>
                  
                  <div className="flex items-center justify-between text-sm text-orange-600">
                    <div className="flex items-center space-x-4">
                      <span>❤️ {post.likes}</span>
                      <span>💬 {post.comments}</span>
                    </div>
                    <a 
                      href={post.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-pink-600 hover:text-pink-700 transition-colors"
                    >
                      View Post
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Embed Section */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-orange-800 mb-6">Connect with PhotoPitara</h2>
          <p className="text-lg text-orange-700 mb-8">
            For the latest Instagram posts, visit our profile directly on Instagram.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-6">
              <Instagram className="w-12 h-12 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-orange-800 mb-4">@photopitaraa</h3>
            <p className="text-orange-700 mb-6">
              Professional Photography & Filmmaking<br/>
              📸 Weddings | Commercial | Events<br/>
              🎬 Cinematic Storytelling<br/>
              📍 Based in India
            </p>
            <a 
              href="https://www.instagram.com/photopitaraa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 inline-flex items-center"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Visit Our Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Beautiful Memories?</h2>
          <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
            Follow us on Instagram for inspiration, then contact us to book your own professional photography session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Book a Session
            </a>
            <a 
              href="/portfolio" 
              className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InstagramFeed

