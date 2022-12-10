import { EducationTemplate } from '../templates/education-template.js'

const Education = {
  template: EducationTemplate,
  methods: {
    scrollMeTo(refName) {
      //var element = this.$refs[refName];
      //var top = element.offsetTop;
      var scrollArea = document.getElementsByClassName("main")[0];
      scrollArea.focus();
      scrollArea.scrollTo(0, 0);
    }
  }
}

export { Education }