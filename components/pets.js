import { PetsTemplate } from '../templates/pets-template.js'

const Pets = {
  template: PetsTemplate,
  methods: {
    scrollMeTo() {
      var scrollArea = document.getElementsByClassName("main")[0];
      scrollArea.focus();
      scrollArea.scrollTo(0, 0);
    }
  }
}

export { Pets }