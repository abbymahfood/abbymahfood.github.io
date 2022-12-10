const EducationTemplate = `
<div class="main">
<section>
  <img class="education-img" src="imgs/sammy/SammyWatchingLecture.jpeg" alt="Picture of my dog Sammy watching a BU MET Lecture with me.">
  <h3 id="top">Current and Past Studies</h3>
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
  <p>
    Below you'll find a all the schools I've attended along with past,
    current, and future courses. 
  </p>
  <section v-bind:schoolInfo = "schoolInfo">
      <article v-for = "school in schoolInfo" :key = "schoolInfo">
        <h4>{{school.Name}}</h4>
        <p>Major: {{school.Major}}</p>
        <p>Type: {{school.DegreeType}}</p>
        <p>Graduation: {{school.Year}}</p>
        <h5>Past Courses</h5>
        <section>
          <table v-bind:school.PastCourses = "school.PastCourses">
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Completed</th>
                <th>Type</th>
            </tr>
            <tr v-for = "pastCourse in school.PastCourses" :key = "school.PastCourses">
                <td>{{ pastCourse.Code }} </td>
                <td>{{ pastCourse.Name }} </td>
                <td>{{ pastCourse.Completed}} </td>
                <td>{{ pastCourse.Type }} </td>
            </tr>
          </table>
        </section>
        <section v-if="school.CurrentCourses.length > 0">
          <h5>Current Courses</h5>
          <table v-bind:school.CurrentCourses = "school.CurrentCourses">
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Completed</th>
                <th>Type</th>
            </tr>
            <tr v-for = "currentCourse in school.CurrentCourses" :key = "school.CurrentCourses">
                <td>{{ currentCourse.Code }} </td>
                <td>{{ currentCourse.Name }} </td>
                <td>{{ currentCourse.Completed}} </td>
                <td>{{ currentCourse.Type }} </td>
            </tr>
          </table>
        </section>
        <section v-if="school.FutureCourses.length > 0">
          <h5>Future Courses</h5>
          <table v-bind:school.FutureCourses = "school.FutureCourses">
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Completed</th>
                <th>Type</th>
            </tr>
            <tr v-for = "futureCourse in school.FutureCourses" :key = "school.FutureCourses">
                <td>{{ futureCourse.Code }} </td>
                <td>{{ futureCourse.Name }} </td>
                <td>{{ futureCourse.Completed}} </td>
                <td>{{ futureCourse.Type }} </td>
            </tr>
          </table>
        </section>
      </article>
    </section>
  <a id="top-link" @click="scrollMeTo()">Top</a>
</section>
</div>
`

export { EducationTemplate }