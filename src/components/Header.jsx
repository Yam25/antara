function Header(props) {
  const title = props.title
  return (
    <>
      <img src="antara.png" alt="antara logo" width="50" />
      <h1 className="head-title">{title}</h1>
    </>
  )
}

export default Header
