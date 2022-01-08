const NavBar = () => {

  const toggleNav = () => {
    const navLinks = document.querySelector("#nav-links");
    const { body } = document;
    if (navLinks.className === "hidden-links") {
      body.classList.add('restrict-scroll');
      navLinks.classList.remove("hidden-links");
      navLinks.classList.add("display-links");
    } else {
      body.classList.remove('restrict-scroll');
      navLinks.classList.remove("display-links");
      navLinks.classList.add("hidden-links");
    }
  }

  return(
    <nav>
      <div id="nav-button-track">
        <button onClick={toggleNav} id="nav-button" className="hidden-button">X</button>
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