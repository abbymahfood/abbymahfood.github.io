const EducationTemplate = `
<div class="main">
<section>
  <img class="education-img" src="imgs/sammy/SammyWatchingLecture.jpeg" alt="Picture of my dog Sammy watching a BU MET Lecture with me.">
  <h3 id="top" ref="top">Current Studies</h3>
  <p>
    I am studying Software Development at Boston University's
    Metropolitan College. I have completed 3 courses so far.
  </p>
  <p>
    I am currently taking Web Application Development with Professor
    Looper. Web development was the reason I decided to pursue my
    Masters. I started working on an ASP.NET Core web application while
    working at L3 Harris Technologies.
  </p>
  <p>
    There weren't many experienced web developers at the company so I
    figured getting a formal education in the subject matter couldn't
    hurt. Below you will see my current progress and possible classes
    for the future.
  </p>
  <table>
    <caption>
      Courses Completed
    </caption>
    <thead>
      <tr>
        <th>Number</th>
        <th>Description</th>
        <th>Completed</th>
        <th>Professor</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>MET CS 521</td>
        <td>Info Structures with Python</td>
        <td>Spring 1 2022</td>
        <td>Lu</td>
        <td>Required</td>
      </tr>
      <tr>
        <td>MET CS 526</td>
        <td>Data Structures and Algorithms</td>
        <td>Spring 2 2022</td>
        <td>Raghu</td>
        <td>Required</td>
      </tr>
      <tr>
        <td>MET CS 673</td>
        <td>Software Engineering</td>
        <td>Fall 1 2022</td>
        <td>Raghu</td>
        <td>Required</td>
      </tr>
      <tr>
        <td>MET CS 601</td>
        <td>Web Application Development</td>
        <td>Fall 2 2022 (In Progress)</td>
        <td>Looper</td>
        <td>Elective</td>
      </tr>
    </tbody>
  </table>
  <br>
  <table>
    <caption>
      Courses Left
    </caption>
    <thead>
      <tr>
        <th>Number</th>
        <th>Description</th>
        <th>Term</th>
        <th>Professor</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>MET CS 622</td>
        <td>Advanced Programming Techniques</td>
        <td>Spring 1 2023</td>
        <td>Rawassizadeh</td>
        <td>Required</td>
      </tr>
      <tr>
        <td>MET CS 665</td>
        <td>Software Design and Patterns</td>
        <td>Spring 2 2023</td>
        <td>Kalathur</td>
        <td>Required</td>
      </tr>
      <tr>
        <td>MET CS 602</td>
        <td>Server-Side Web Development</td>
        <td>Spring 1 2023</td>
        <td>Orsini</td>
        <td>Elective</td>
      </tr>
      <tr>
        <td>MET CS 701</td>
        <td>Rich Internet Application Dev</td>
        <td>Spring 2 2023</td>
        <td>Winderbaum</td>
        <td>Elective</td>
      </tr>
    </tbody>
  </table>
  <a @click="scrollMeTo('top')">Top</a>
</section>
</div>
`

export { EducationTemplate }