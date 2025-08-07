import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Camera } from 'lucide-react'

// Baby Shoot Images
import img_20220109_025328_920 from '../assets/IMG_20220109_025328_920.jpg'
import img_20210905_WA0005 from '../assets/IMG-20210905-WA0005.jpg'
import img_20250112_WA0010 from '../assets/IMG-20250112-WA0010.jpg'
import img_20210905_WA0008 from '../assets/IMG-20210905-WA0008.jpg'
import img_20210905_WA0004 from '../assets/IMG-20210905-WA0004.jpg'
import img_20210905_WA0006_1 from '../assets/IMG-20210905-WA0006(1).jpg'
import screenshot_20210901_224618_33 from '../assets/Screenshot_2021-09-01-22-46-18-33_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg'
import img_0946 from '../assets/IMG_0946.JPG'
import mg_9695_1 from '../assets/_MG_9695-1.jpg'
import mg_9589 from '../assets/_MG_9589.jpg'
import dsc09258 from '../assets/DSC09258.jpg'
import mg_9668_1 from '../assets/_MG_9668(1).jpg'
import img_1746519611396 from '../assets/1746519611396.jpg'
import img_6 from '../assets/6.jpg'
import mg_9725_1 from '../assets/_MG_9725(1).jpg'
import mg_9756 from '../assets/_MG_9756.jpg'
import mg_9739_1 from '../assets/_MG_9739(1).jpg'
import img_6341 from '../assets/IMG_6341.jpg'
import mg_9770 from '../assets/_MG_9770.jpg'
import img_6380 from '../assets/IMG_6380.jpg'
import img_6857 from '../assets/IMG_6857.jpg'
import mg_9605_1 from '../assets/_MG_9605(1).jpg'
import img_1151 from '../assets/IMG_1151.JPG'
import img_1G5A0163 from '../assets/1G5A0163.jpg'
import img_1745391291221 from '../assets/1745391291221.jpg'
import img_0963 from '../assets/IMG_0963.JPG'

// Wedding Shoot Images
import img_20230630_181436_238 from '../assets/IMG_20230630_181436_238.jpg'
import img_20230630_190833_387 from '../assets/IMG_20230630_190833_387.jpg'
import img_20230728_133719_368 from '../assets/IMG_20230728_133719_368.jpg'
import img_20230521065525_IMG_3058 from '../assets/20230521065525_IMG_3058.jpg'
import img_20230529_025306_784 from '../assets/IMG_20230529_025306_784.jpg'
import img_20230706_213608_612 from '../assets/IMG_20230706_213608_612.jpg'
import img_20230529_025916_289 from '../assets/IMG_20230529_025916_289.jpg'
import img_20230630_040955_653 from '../assets/IMG_20230630_040955_653.jpg'
import img_20230523_095527 from '../assets/20230523_095527.jpg'
import img_20230630_043947_392 from '../assets/IMG_20230630_043947_392.jpg'
import img_20230706_212448_406 from '../assets/IMG_20230706_212448_406.jpg'
import img_15 from '../assets/15.jpg'
import img_679a41647c2859606aec9f1c from '../assets/679a41647c2859606aec9f1c.jpg'
import img_679a418f1f901eaafe85ba28_1 from '../assets/679a418f1f901eaafe85ba28(1).jpg'
import img_12 from '../assets/12.jpg'
import img_20230706_213020_697 from '../assets/IMG_20230706_213020_697.jpg'
import img_0C5A3888 from '../assets/0C5A3888.jpg'
import img_1G5A0310 from '../assets/1G5A0310.jpg'
import img_6copy from '../assets/6copy.jpg'
import img_091A0057 from '../assets/091A0057.jpg'
import img_1743847017955 from '../assets/1743847017955.jpg'
import img_1X2A0098 from '../assets/1X2A0098.JPG'
import img_1X2A0226 from '../assets/1X2A0226.JPG'
import img_1X2A0091 from '../assets/1X2A0091.JPG'
import img_1X2A0094 from '../assets/1X2A0094.JPG'
import img_091A9944 from '../assets/091A9944.jpg'

// New Wedding Subcategory Images
import img_20230217042713_IMG_1705 from '../assets/20230217042713_IMG_1705.jpg'
import tx9a3951_resized from '../assets/TX9A3951_resized.jpg'
import img_20230217055234_IMG_1753_1 from '../assets/20230217055234_IMG_1753(1).jpg'
import img_0C5A5517_2 from '../assets/0C5A5517(2).jpg'
import img_0C5A5524 from '../assets/0C5A5524.jpg'
import cn7b6242 from '../assets/CN7B6242.JPG'
import img_1740763191646 from '../assets/1740763191646.JPG'
import img_406A8788 from '../assets/406A8788.jpg'
import img_406A3112copy from '../assets/406A3112copy.jpg'
import tx9a3934_1 from '../assets/TX9A3934(1).jpg'
import img_1740763191650 from '../assets/1740763191650.JPG'
import img_1740763191939 from '../assets/1740763191939.JPG'
import img_20230217061151_IMG_1802 from '../assets/20230217061151_IMG_1802.jpg'
import img_20230217055931_IMG_1773 from '../assets/20230217055931_IMG_1773.jpg'
import img_1740763191687 from '../assets/1740763191687.jpg'
import cn7b6251 from '../assets/CN7B6251.JPG'
import tx9a3990 from '../assets/TX9A3990.JPG'
import tx9a3988 from '../assets/TX9A3988.JPG'
import img_1740763191672 from '../assets/1740763191672.JPG'
import tx9a3986 from '../assets/TX9A3986.JPG'
import img_20230217060122_IMG_1779 from '../assets/20230217060122_IMG_1779.jpg'
import img_1740763191659 from '../assets/1740763191659.JPG'
import img_1740763192157 from '../assets/1740763192157.JPG'
import img_1740763192046 from '../assets/1740763192046.JPG'
import img_1740763192036 from '../assets/1740763192036.JPG'
import img_1740763192137 from '../assets/1740763192137.JPG'
import img_311A0927copy from '../assets/311A0927copy.jpg'
import dsc07568_2 from '../assets/DSC07568(2).jpg'
import dsc07587 from '../assets/DSC07587.jpg'

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Wedding')
  const [activeSubCategory, setActiveSubCategory] = useState('Pre-Wedding')

  const categories = [
    { name: 'Wedding', color: 'bg-green-700' },
    { name: 'Commercial', color: 'bg-pink-500' },
    { name: 'Filmmaking', color: 'bg-purple-600' }
  ]

  const subCategories = {
    'Wedding': [
      'Pre-Wedding',
      'Maternity Shoot',
      'Baby Shoot',
      'Cinematic Films'
    ],
    'Commercial': [
      'Product Shoots',
      'Fashion Shoots',
      'Food Photography'
    ],
    'Filmmaking': [
      'Documentary Filmmaking',
      'Advertisement Films',
      'Short Films',
      'Music Videos'
    ]
  }

  const babyShootImages = [
    img_20220109_025328_920,
    img_20210905_WA0005,
    img_20250112_WA0010,
    img_20210905_WA0008,
    img_20210905_WA0004,
    img_20210905_WA0006_1,
    screenshot_20210901_224618_33,
    img_0946,
    mg_9695_1,
    mg_9589,
    dsc09258,
    mg_9668_1,
    img_1746519611396,
    img_6,
    mg_9725_1,
    mg_9756,
    mg_9739_1,
    img_6341,
    mg_9770,
    img_6380,
    img_6857,
    mg_9605_1,
    img_1151,
    img_1G5A0163,
    img_1745391291221,
    img_0963
  ]

  const weddingImages = [
    img_20230630_181436_238,
    img_20230630_190833_387,
    img_20230728_133719_368,
    img_20230521065525_IMG_3058,
    img_20230529_025306_784,
    img_20230706_213608_612,
    img_20230529_025916_289,
    img_20230630_040955_653,
    img_20230523_095527,
    img_20230630_043947_392,
    img_20230706_212448_406,
    img_15,
    img_679a41647c2859606aec9f1c,
    img_679a418f1f901eaafe85ba28_1,
    img_12,
    img_20230706_213020_697,
    img_0C5A3888,
    img_1G5A0310,
    img_6copy,
    img_091A0057,
    img_1743847017955,
    img_1X2A0098,
    img_1X2A0226,
    img_1X2A0091,
    img_1X2A0094,
    img_091A9944,
    img_20230217042713_IMG_1705,
    tx9a3951_resized,
    img_20230217055234_IMG_1753_1,
    img_0C5A5517_2,
    img_0C5A5524,
    cn7b6242,
    img_1740763191646,
    img_406A8788,
    img_406A3112copy,
    tx9a3934_1,
    img_1740763191650,
    img_1740763191939,
    img_20230217061151_IMG_1802,
    img_20230217055931_IMG_1773,
    img_1740763191687,
    cn7b6251,
    tx9a3990,
    tx9a3988,
    img_1740763191672,
    tx9a3986,
    img_20230217060122_IMG_1779,
    img_1740763191659,
    img_1740763192157,
    img_1740763192046,
    img_1740763192036,
    img_1740763192137,
    img_311A0927copy,
    dsc07568_2,
    dsc07587
  ]

  const getGalleryImages = () => {
    if (activeCategory === 'Wedding') {
      switch (activeSubCategory) {
        case 'Baby Shoot':
          return babyShootImages
        case 'Pre-Wedding':
        case 'Maternity Shoot':
        case 'Cinematic Films':
          return weddingImages // For now, all wedding subcategories show all wedding images
        default:
          return []
      }
    } else if (activeCategory === 'Commercial') {
      return [] // Add commercial images here later
    } else if (activeCategory === 'Filmmaking') {
      return [] // Add filmmaking images here later
    }
    return []
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-800 mb-4">Our Portfolio</h1>
          <p className="text-lg text-orange-700">
            Explore our collection of captured moments, each telling a unique story through our lens.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.name}
              onClick={() => {
                setActiveCategory(category.name)
                setActiveSubCategory(subCategories[category.name][0])
              }}
              className={`px-6 py-3 text-white ${
                activeCategory === category.name 
                  ? category.color 
                  : 'bg-gray-400 hover:bg-gray-500'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Sub Category Buttons (only show for active category) */}
        {activeCategory && subCategories[activeCategory] && (
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {subCategories[activeCategory].map((subCategory) => (
              <Button
                key={subCategory}
                onClick={() => setActiveSubCategory(subCategory)}
                className={`px-6 py-3 text-white ${
                  activeSubCategory === subCategory 
                    ? 'bg-blue-500' // Subcategory active color
                    : 'bg-gray-300 hover:bg-gray-400 text-gray-800' // Subcategory inactive color
                }`}
              >
                {subCategory}
              </Button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {getGalleryImages().map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-orange-900 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Story?</h2>
          <p className="text-lg text-orange-200 mb-8">
            Let's discuss how we can capture your special moments with the same passion and artistry.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio


