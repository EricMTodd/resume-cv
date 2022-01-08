const NavBar = () => {

  const toggleNav = () => {
    console.log("Hello world!");
  }

  return(
    <nav>
      <div id="nav-button-track">
        <button onClick={toggleNav} className="collapsed-nav-button">X</button>
      </div>
      <div id="nav-links" className="hidden-links">
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