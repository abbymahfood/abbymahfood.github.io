import { GalleryTemplate } from '../templates/gallery-template.js'

const Gallery = {
  template: GalleryTemplate,
  data() {
    return {
      galleryImages: null,
      errorMessage: null
    };
  },
  created() {
    // GET request using fetch with error handling
    fetch("https://abbymahfood.github.io/jsons/images.json")
    .then(async response => {
      const data = await response.json();

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response statusText
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      this.galleryImages = data.Images;
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
    },
    processForm() {
      console.log("In process form");
      return true;
    }
  }
}

export { Gallery }