import { useState } from 'react'
import './Card.css'

function Card({ item, isActive }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className={`card ${isActive ? 'card--active' : ''}`}>
      <img src={item.image} alt={item.name} />

      {/* Gradient overlay */}
      <div className="card__overlay" />

      {/* Top row: status badge + heart */}
      <div className="card__top">
        <span
          className={`card__badge ${item.status === 'Experienced' ? 'card__badge--experienced' : ''}`}
        >
          {item.status === 'Experienced' ? '✓ Experienced' : '○ Want to Visit'}
        </span>
        <button
          className={`card__heart ${liked ? 'card__heart--active' : ''}`}
          onClick={(e) => {
            e.stopPropagation()
            setLiked(!liked)
          }}
        >
          {liked ? '♥' : '♡'}
        </button>
      </div>

      {/* Bottom content */}
      <div className="card__bottom">
        {item.location && (
          <div className="card__location">
            <i className="fa-solid fa-location-dot card__location-icon"></i>
            <span>{item.location}</span>
          </div>
        )}
        <h2 className="card__name">{item.name}</h2>
        <p className="card__summary">{item.summary}</p>

        {isActive && <button className="card__cta">View Experience →</button>}
      </div>
    </div>
  )
}

export default Card
