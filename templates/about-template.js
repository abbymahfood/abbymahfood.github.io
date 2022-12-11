const AboutTemplate = `
<div class="main">
<section>
  <video class="video-center" controls="controls">
    <source src="videos/newyork_kayaking_encoded.mp4">
  </video>
  <h3 id="top">About Me</h3>
  <p>Hello!</p>
  <p>My name is Abby Mahfood and this webpage is for BUMET CS601.</p>
  <p>
    I grew up in central Florida and received my Bachelor's of Science
    in Computer Science Engineering from the University of Florida. Go
    Gators!
  </p>
  <img class="main-sidebar-image" src="imgs/abby/Me.jpg" alt="Picture of Abby in Savannah, GA enjoying iced coffee.">
  <p>
    After graduating, I started working full time as a Software Engineer
    for
    <a href="https://www.l3harris.com/">L3 Harris Technologies</a>. I
    had the opportunity to work on embedded software applications,
    console applications, and ASP.NET Core web applications. After six
    years, I decided it was time for a change of pace.
  </p>
  <p>
    I currently work as a Senior Software Engineer for
    <a href="https://capitalone.com">Capital One</a>. I work mostly with
    node.js and Amazon Web Services. I am also pursing my Master's
    Degree in Software Development from
    <a
      href="https://www.bu.edu/met/degrees-certificates/ms-software-development/"
    >
      Boston University's Metropolitan College </a
    >.
  </p>
  <p>
    My hobbies include exercising, cooking/baking, playing video games,
    reading, and taking care of my pets. I enjoy traveling and have had
    the opportunity to travel to Colorado, New York, and Georgia this
    year. On this page you'll find a picture of me enjoying iced coffee
    in Savannah, Georgia and a video of me kayaking in upstate New York!
  </p>

  <a id="top-link" onclick="scrollMeTo()">Top</a>
</section>
</div>`

export { AboutTemplate }