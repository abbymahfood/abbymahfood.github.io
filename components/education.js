import { EducationTemplate } from '../templates/education-template.js'

const Education = {
  template: EducationTemplate,
  data() {
    return {
      schoolInfo: null,
      errorMessage: null
    };
  },
  created() {
    // GET request using fetch with error handling
    fetch("https://abbymahfood.github.io/jsons/education.json")
    .then(async response => {
      const data = await response.json();

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response statusText
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      this.schoolInfo = data.data.Schools;
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

export { Education }