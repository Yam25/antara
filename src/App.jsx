import './App.css'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Footer from './components/Footer'
import CategorySection from './components/CategorySection'

import { useState } from 'react'

function App() {
  const categoriesList = [
    {
      title: 'Places',
      icon: <i className="fa-solid fa-location-dot"></i>,
      sectionTitle: 'Places to Visit',
      sectionSubtitle: 'Destinations that inspire and stay with me.',
      items: [
        {
          name: 'Manali',
          summary:
            'I enjoyed the snow, Loved the weather, it makes dress up cozy and I love winters, nature',
          image: 'hero.jpeg',
          status: 'Experienced',
          location: 'Manali, India',
        },
        {
          name: 'Goa',
          summary:
            'The party, beach, cafes, dressing is amazing, weather is a bit no for me in summer',
          image: 'hero.jpeg',
          status: 'Experienced',
          location: 'Goa, India',
        },
        {
          name: 'Manali',
          summary:
            'I enjoyed the snow, Loved the weather, it makes dress up cozy and I love winters, nature',
          image: 'hero.jpeg',
          status: 'Experienced',
        },
        {
          name: 'Manali',
          summary:
            'I enjoyed the snow, Loved the weather, it makes dress up cozy and I love winters, nature',
          image: 'hero.jpeg',
          status: 'Experienced',
        },
      ],
    },

    {
      title: 'Hobbies',
      icon: <i className="fa-solid fa-heart"></i>,
      sectionTitle: 'Things I Love Doing',
      sectionSubtitle:
        'Little hobbies that make life feel lighter and happier.',
      items: [
        {
          name: 'Manali',
          summary:
            'I enjoyed the snow, Loved the weather, it makes dress up cozy and I love winters, nature',
          image: 'hero.jpeg',
        },
        {
          name: 'Goa',
          summary:
            'The party, beach, cafes, dressing is amazing, weather is a bit no for me in summer',
          image: 'hero.jpeg',
        },
        {
          name: 'Manali',
          summary:
            'I enjoyed the snow, Loved the weather, it makes dress up cozy and I love winters, nature',
          image: 'hero.jpeg',
        },
      ],
    },

    {
      title: 'Career',
      icon: <i className="fa-solid fa-briefcase"></i>,
      sectionTitle: 'Career & Growth',
      sectionSubtitle: 'Building skills, confidence, and the life I dream of.',
      items: [
        {
          name: 'Manali',
          summary:
            'I enjoyed the snow, Loved the weather, it makes dress up cozy and I love winters, nature',
          image: 'hero.jpeg',
        },
        {
          name: 'Goa',
          summary:
            'The party, beach, cafes, dressing is amazing, weather is a bit no for me in summer',
          image: 'hero.jpeg',
        },
        {
          name: 'Manali',
          summary:
            'I enjoyed the snow, Loved the weather, it makes dress up cozy and I love winters, nature',
          image: 'hero.jpeg',
        },
      ],
    },

    {
      title: 'Moments',
      icon: <i className="fa-solid fa-clock"></i>,
      sectionTitle: 'Moments I Want to Remember',
      sectionSubtitle: 'Memories, experiences, and phases that shaped me.',
      items: [
        {
          name: 'Manali',
          summary:
            'I enjoyed the snow, Loved the weather, it makes dress up cozy and I love winters, nature',
          image: 'hero.jpeg',
          location: 'Manali, India',
          status: 'Experienced',
        },
        {
          name: 'Goa',
          summary:
            'The party, beach, cafes, dressing is amazing, weather is a bit no for me in summer',
          image: 'hero.jpeg',
        },
        {
          name: 'Manali',
          summary:
            'I enjoyed the snow, Loved the weather, it makes dress up cozy and I love winters, nature',
          image: 'hero.jpeg',
        },
      ],
    },
  ]

  const [activeCategory, setActiveCategory] = useState(categoriesList[0])

  return (
    <>
      <Hero />
      <div className="categories-list">
        {categoriesList.map((category) => {
          return (
            <Categories
              icon={category.icon}
              title={category.title}
              key={category.title}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              category={category}
            />
          )
        })}
      </div>
      <CategorySection activeCategory={activeCategory} />
      <Footer />
    </>
  )
}

export default App
