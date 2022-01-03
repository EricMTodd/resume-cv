const Skills = () => {
  return(
    <div className="container bravo" id="skills">
      <h1>Skills</h1>
      <hr />
      <ul>
        <div className="skills-container" id="skill-container-alpha">
          <h2><li>HTML</li></h2>
          <h2><li>CSS</li></h2>
          <h2><li>JavaScript</li></h2>
        </div>
        <div className="skills-container" id="skill-container-bravo">
          <h2><li>Rails</li></h2>
          <h2><li>Flexbox</li></h2>
          <h2><li>React</li></h2>
        </div>
        <div className="skills-container" id="skill-container-charlie">
          <h2><li>Graphic Design</li></h2>
          <h2><li>Print Production</li></h2>
          <h2><li>Screen Printing</li></h2>
        </div>
        <div className="skills-container" id="skill-container-delta">
          <h2><li>Linux</li></h2>
          <h2><li>Unix</li></h2>
          <h2><li>Windows</li></h2>
        </div>
      </ul>
    </div>
  )
}

export default Skills