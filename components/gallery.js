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
    onSubmit() {
      console.log("In process form");
      let searchText = document.getElementById("gallerySearch").value;
      console.log(searchText);
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

        var newArray = data.Images.filter(function (el) {
          return el.Tags.includes(searchText) ||
                el.Description.includes(gallerySearch);
        });

        this.galleryImages = newArray;
        console.log(data.galleryImages);
      })
      .catch(error => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
      return true;
    }
  }
}

export { Gallery }