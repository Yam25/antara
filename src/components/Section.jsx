import './Section.css'

function Section({ title, items }) {
  return (
    <div className="section-container">
      <h2 className="section-title"> {title} </h2>
      <div className="section-items">
        {items.map((item) => {
          return (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <img src={item.image} alt={item.name + ' photo'} />
              <p>{item.summary}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Section
