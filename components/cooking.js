import { CookingTemplate } from '../templates/cooking-template.js'

const Cooking = {
  template: CookingTemplate,
  methods: {
    scrollMeTo() {
      var scrollArea = document.getElementsByClassName("main")[0];
      scrollArea.focus();
      scrollArea.scrollTo(0, 0);
    }
  }
}

export { Cooking }