import './Categories.css'

function Categories({
  title,
  icon,
  activeCategory,
  setActiveCategory,
  category,
}) {
  return (
    <div className="categories-wrapper">
      <div className="categories-container">
        <button
          type="button"
          className={`category-title ${
            activeCategory.title === category.title ? 'active' : ''
          }`}
          onClick={() => setActiveCategory(category)}
        >
          {icon} {title}
        </button>
      </div>
    </div>
  )
}

export default Categories
