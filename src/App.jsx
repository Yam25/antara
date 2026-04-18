import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'

function App() {
  const sections = [
    {
      title: 'Places to Visit',
      items: [
        {
          name: 'Shimla',
          image: 'shimla.png',
          summary:
            'The place gave me london at night vibes and weather was amazing',
        },
        {
          name: 'Goa',
          image: 'goa.png',
          summary:
            'First trip out of degree college and made wonderful memories beach, party, travel and summer',
        },
        {
          name: 'Manali',
          image: 'manali.png',
          summary:
            'Ice, mountains, wonderful memories, I loved the weather, the experience, eating ice, making snowman!!',
        },
      ],
    },
    {
      title: 'Hobbies',
      items: [
        {
          name: 'Pottery',
          image: 'pottery.png',
          summary:
            'Always wanted to try it and I did it, first time it was imperfect, did not continue tho',
        },
        {
          name: 'Dance',
          image: 'dance.png',
          summary:
            "The music makes my body move, sometimes when I'm fully emerged I come up with wonderful dance steps and after that moment I would have forgotten those steps lol",
        },
      ],
    },
  ]
  return (
    <>
      <Header
        title="Antara"
        about="About"
        contact="Get in Touch"
        projects="Projects"
        links="Links"
      />
      <Hero />
      {sections.map((section) => {
        return (
          <Section
            title={section.title}
            items={section.items}
            key={section.title}
          />
        )
      })}
    </>
  )
}

export default App
