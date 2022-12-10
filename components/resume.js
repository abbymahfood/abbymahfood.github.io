import { ResumeTemplate } from '../templates/resume-template.js'

const Resume = {
  template: ResumeTemplate,
  data() {
    return {
      experience: null,
      education: null,
      languages: null,
      programs: null,
      platforms: null,
      frameworks: null,
      errorMessage: null
    };
  },
  created() {
    // GET request using fetch with error handling
    fetch("https://abbymahfood.github.io/jsons/resume.json")
    .then(async response => {
      const data = await response.json();

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response statusText
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      this.experience = data.Experience;
      this.education = data.Education;
      this.languages = data.Languages;
      this.programs = data.Programs;
      this.platforms = data.Platforms;
      this.frameworks = data.Frameworks;
      console.log(data.Experience);
    })
    .catch(error => {
      this.errorMessage = error;
      console.error("There was an error!", error);
    });
  },
  methods: {
    scrollMeTo() {
      var scrollArea = document.getElementsByClassName("main")[0];
      scrollArea.focus();
      scrollArea.scrollTo(0, 0);
    }
  }
}

export { Resume }