import { EducationTemplate } from '../templates/education-template.js'

const Education = {
  data: {
    schoolInfo : []
  },
  template: EducationTemplate,
  methods: {
    scrollMeTo() {
      var scrollArea = document.getElementsByClassName("main")[0];
      scrollArea.focus();
      scrollArea.scrollTo(0, 0);
    },
    /** Fetches a JSON doc from URL and returns JSON object */
    async fetchJson(url = ''){
      return await fetch(url)
      .then((response) => {
          if (response.ok && response.status == OK) {
              return response.json();
          }
          alert(`Fetch Failed: ${response.status}`);
      })
      .then((json) => {
          return json;
      })
    },
    async processLoad() {
      const jsonObject = await fetchJson("https://abbymahfood.github.io/jsons/education.json");
      schoolInfo = jsonObject.Schools[0];
    }
  },
  mounted(){
    window.addEventListener("load", () => this.processLoad());
  }
}

export { Education }