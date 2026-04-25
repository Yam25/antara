import './Hero.css'
import Header from './Header'

function Hero() {
  return (
    <div className="hero">
      <Header
        title="Antara"
        about="About"
        contact="Get in Touch"
        projects="Projects"
        links="Links"
      />

      <div className="hero-contents">
        <h2 className="hero-title">I collect moments.</h2>
        <h2 className="hero-second">
          I <span className="accent">design a life around them.</span>
        </h2>
        <p className="hero-text">
          Places that inspire me. Things that bring me joy.
        </p>
        <p className="hero-texts">Dreams I'm chasing — all in one place.</p>
        <p className="hero-explore">Explore my world ↓</p>
      </div>
    </div>
  )
}

export default Hero
