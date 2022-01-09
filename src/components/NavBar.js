const NavBar = () => {

  const toggleNav = () => {
    const navLinks = document.querySelector("#nav-links");
    const navIcon = document.querySelector("#nav-icon");
    const { body } = document;
    if (navLinks.className === "hidden-links") {
      body.classList.add("restrict-scroll");
      navIcon.classList.remove("collapsed-icon");
      navIcon.classList.add("expanded-icon");
      navLinks.classList.remove("hidden-links");
      navLinks.classList.add("display-links");
    } else {
      body.classList.remove("restrict-scroll");
      navIcon.classList.remove("expanded-icon");
      navIcon.classList.add("collapsed-icon");
      navLinks.classList.remove("display-links");
      navLinks.classList.add("hidden-links");
    }
  }

  return(
    <nav>
      <div id="nav-button-track">
        <img onClick={toggleNav} id="nav-icon" className="collapsed-icon" src="nav-icon.png" alt="nav-icon"/>
      </div>
      <div id="nav-links" className="hidden-links">
        <a href="#about" onClick={toggleNav}>About</a>
        <a href="#skills" onClick={toggleNav}>Skills</a>
        <a href="#projects" onClick={toggleNav}>Projects</a>
        <a href="#education" onClick={toggleNav}>Education</a>
        <a href="#employment" onClick={toggleNav}>Employment</a>
        <a href="#contact" onClick={toggleNav}>Contact</a>
      </div>
    </nav>
  )
}

export default NavBar