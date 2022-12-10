import { ResumeTemplate } from '../templates/resume-template.js'

const Resume = {
  template: ResumeTemplate,
  methods: {
    scrollMeTo() {
      var scrollArea = document.getElementsByClassName("main")[0];
      scrollArea.focus();
      scrollArea.scrollTo(0, 0);
    }
  }
}

export { Resume }