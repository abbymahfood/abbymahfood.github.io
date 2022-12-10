import { EducationTemplate } from '../templates/education-template.js'

const Education = {
  template: EducationTemplate,
  methods: {
    scrollMeTo(refName) {
      console.log(refName);
      var element = this.$refs[refName];
      console.log(element);
      var top = element.offsetTop;
      console.log(top);
      window.scrollTo(0, top);
    }
  }
}

export { Education }