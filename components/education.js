import { EducationTemplate } from '../templates/education-template.js'

const Education = {
  data() {
    return {
      name: "test!",
      schoolInfo: processLoad()
    };
  },
  template: EducationTemplate,
  methods: {
    scrollMeTo() {
      var scrollArea = document.getElementsByClassName("main")[0];
      scrollArea.focus();
      scrollArea.scrollTo(0, 0);
    },
    async processLoad() {
      const jsonObject = await fetch("https://abbymahfood.github.io/jsons/education.json")
      .then((response) => {
          if (response.ok && response.status == OK) {
              return response.json();
          }
          alert(`Fetch Failed: ${response.status}`);
      })
      .then((json) => {
          return json;
      })
      schoolInfo = jsonObject.Schools[0];
      return schoolInfo;
    }
  },
  mounted(){
    window.addEventListener("load", () => this.methods.processLoad());
  }
}

export { Education }