const NavBar = () => {

  const toggleNav = (event) => {
    const navLinks = document.querySelector("#nav-links");
    console.log(navLinks);
    if (navLinks.className === "hidden-links") {
      navLinks.classList.remove("hidden-links");
      navLinks.classList.add("display-links");
    } else {
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