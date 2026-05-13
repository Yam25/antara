import './Card.css'

function Card({ item }) {
  return (
    <div className="cards">
      <img src={item.image} alt="image" />
      <h2> {item.name} </h2>
      <p> {item.summary} </p>
    </div>
  )
}

export default Card
