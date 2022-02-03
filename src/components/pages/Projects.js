const Projects = () => {
  return(
    <div className="container alpha" id="projects">
      <h1>Projects</h1>
      <hr />
      <div className="projects-container">
        <h2>Forum</h2>
        <a href='https://dashsplash.herokuapp.com' target='_blank'><h2>dashsplash</h2></a>
        <i>Built with - React, openweathermap API and the Flickr API.</i>
        <p>Dashsplash is a simple application that was based on lock screens and screen savers for many popular devices like Google's chromecast. If you share your location, it will show you the current weather for latitude and longitude and the city name you're currently in. If you block the location, it will show you the weather from a major city somewhere in the world and updates every fifteen minutes. The clock updates in real time, and the slideshow is served from Flickr, which changes images every minute.</p>
      </div>
    </div>
  )
}

export default Projects