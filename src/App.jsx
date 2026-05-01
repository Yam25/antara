import './App.css'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Footer from './components/Footer'

function App() {
  const categoriesList = [
    {
      title: 'Places',
      icon: <i class="fa-solid fa-location-dot"></i>
    },
    {
      title: 'Hobbies',
      icon: <i class="fa-solid fa-heart"></i>
    },
    {
      title: 'Career',
      icon: <i class="fa-solid fa-briefcase"></i>
    },
    {
      title: 'Moments',
      icon: <i class="fa-solid fa-clock"></i>
    }
  ]
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
          />
        )
      })}
      </div>
      <Footer />
    </>
  )
}

export default App
