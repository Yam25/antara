import './Categories.css'

function Categories({ title, icon }) {
  return (
    <div className="categories-container">
      <h2 className="category-title"> {icon} {title} </h2>
    </div>
  )
}

export default Categories
