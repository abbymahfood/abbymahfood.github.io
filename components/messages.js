import { MessagesTemplate } from '../templates/messages-template.js'

const Messages = {
  template: MessagesTemplate,
  methods: {
    scrollMeTo() {
      var scrollArea = document.getElementsByClassName("main")[0];
      scrollArea.focus();
      scrollArea.scrollTo(0, 0);
    }
  }
}

export { Messages }