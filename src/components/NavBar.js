const NavBar = () => {

  const toggleNav = () => {
    console.log("Hello world!");
  }

  return(
    <nav className="collapsed-nav">
      <button onClick={toggleNav}>Click me!</button>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#employment">Employment</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default NavBar