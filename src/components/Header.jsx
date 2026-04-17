import './Header.css'

function Header({title}) {
  return (
    <header className="header-container">
      {/* <img className = "header-img" src="antara.png" alt="antara logo" width="70" /> */}
      <h1 className="header-title">{title}</h1>
    </header>
  )
}

export default Header
