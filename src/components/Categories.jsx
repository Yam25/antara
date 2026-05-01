import './Categories.css'

function Categories({ title, icon }) {
  return (
    <div className="categories-container">
      <button type="button" className="category-title">
        {icon} {title}
      </button>
    </div>
  )
}

export default Categories
