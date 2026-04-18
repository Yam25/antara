import './Header.css'

function Header({ title, about, contact, projects, links }) {
  return (
    <div className="header-container">
      <h1 className="title">{title}</h1>
      <nav className="nav-links">
        <a className="about"> {about} </a>
        <a className="projects"> {projects} </a>
        <a className="links">{links}</a>
        <button className="contact">
          {' '}
          {contact}
          <i class="fa-solid fa-arrow-right"></i>{' '}
        </button>
      </nav>
    </div>
  )
}

export default Header
