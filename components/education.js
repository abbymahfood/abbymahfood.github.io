import { EducationTemplate } from '../templates/education-template.js'

const Education = {
  template: EducationTemplate,
  data() {
    return {
      schoolInfo: null
    };
  },
  created() {
    fetch("https://abbymahfood.github.io/jsons/education.json")
      .then(response => response.json())
      .then(data => (this.schoolInfo = data.Schools[0]));
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