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
      let searchText = document.getElementById("gallerySearch").value.toLowerCase();
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
        if (searchText != "" && searchText != null)
        {
          var newArray = data.Images.filter(function (el) {
            return el.Tags.includes(searchText) ||
                  el.Description.toLowerCase().includes(gallerySearch);
          });
          this.galleryImages = newArray;
        }
        else {
          this.galleryImages = data.Images;
        }
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