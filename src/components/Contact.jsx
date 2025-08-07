import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Phone, Mail, MapPin, Clock, MessageCircle, Star, Camera, Zap, Heart } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    eventDate: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const message = `Hello PhotoPitara! I'm interested in your services.

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Event Date: ${formData.eventDate}
Message: ${formData.message}`

    const whatsappUrl = `https://wa.me/919039019193?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      service: value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-800 mb-4">Let's Create Together</h1>
          <p className="text-lg text-orange-700">
            Ready to turn your vision into timeless memories? We'd love to hear about your story and how we can capture it beautifully.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Camera className="w-6 h-6 text-orange-600 mr-2" />
              <h2 className="text-2xl font-bold text-orange-800">Get In Touch</h2>
            </div>
            <p className="text-orange-700 mb-8">Tell us about your vision and let's make it happen.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-teal-600 font-medium">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-1 border-pink-200 focus:border-pink-400"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-purple-600 font-medium">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-1 border-orange-200 focus:border-orange-400"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-green-600 font-medium">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 border-red-200 focus:border-red-400"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-blue-600 font-medium">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 border-red-200 focus:border-red-400"
                  required
                />
              </div>

              <div>
                <Label htmlFor="service" className="text-green-600 font-medium">Service Interested In</Label>
                <Select onValueChange={handleSelectChange} required>
                  <SelectTrigger className="mt-1 border-purple-200 focus:border-purple-400">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Wedding Photography">Wedding Photography</SelectItem>
                    <SelectItem value="Pre-Wedding Shoot">Pre-Wedding Shoot</SelectItem>
                    <SelectItem value="Maternity Shoot">Maternity Shoot</SelectItem>
                    <SelectItem value="Baby Shoot">Baby Shoot</SelectItem>
                    <SelectItem value="Cinematic Films">Cinematic Films</SelectItem>
                    <SelectItem value="Commercial Photography">Commercial Photography</SelectItem>
                    <SelectItem value="Event Photography">Event Photography</SelectItem>
                    <SelectItem value="Product Shoots">Product Shoots</SelectItem>
                    <SelectItem value="Fashion Shoots">Fashion Shoots</SelectItem>
                    <SelectItem value="Food Photography">Food Photography</SelectItem>
                    <SelectItem value="Documentary Filmmaking">Documentary Filmmaking</SelectItem>
                    <SelectItem value="Advertisement Films">Advertisement Films</SelectItem>
                    <SelectItem value="Short Films">Short Films</SelectItem>
                    <SelectItem value="Music Videos">Music Videos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="eventDate" className="text-orange-600 font-medium">Event Date</Label>
                <Input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-700 font-medium">Tell us about your vision</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="mt-1"
                  placeholder="Share your ideas, preferences, and any special requirements..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Send Message via WhatsApp
              </Button>
            </form>
          </div>

          {/* Why Choose PhotoPitara */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-orange-800 to-orange-900 text-white rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Heart className="w-6 h-6 mr-2" />
                <h2 className="text-2xl font-bold">Why Choose PhotoPitara?</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Award-winning photography with 10+ years of experience</span>
                </div>
                <div className="flex items-start">
                  <Camera className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>State-of-the-art equipment and latest techniques</span>
                </div>
                <div className="flex items-start">
                  <Heart className="w-5 h-5 text-pink-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Personalized approach to every project</span>
                </div>
                <div className="flex items-start">
                  <Zap className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Quick turnaround without compromising quality</span>
                </div>
                <div className="flex items-start">
                  <Heart className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Lifetime support and memories preservation</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Phone className="w-6 h-6 text-orange-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-orange-600 font-medium">+91 90390 19193</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Mail className="w-6 h-6 text-orange-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-orange-600 font-medium">hello@photopitara.com</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-orange-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Studio Location</h3>
                    <p className="text-gray-600">123 Creative Street, Photography District, Mumbai</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Working Hours</h3>
                    <p className="text-gray-600">Mon-Sat: 9AM-8PM<br />Sun: By Appointment</p>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button 
                    onClick={() => window.open('https://wa.me/919039019193', '_blank')}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-lg shadow-lg p-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-lg text-orange-700">
            Every great story starts with a single conversation. Let's start yours today.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact

