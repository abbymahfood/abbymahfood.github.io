import { GalleryTemplate } from '../templates/gallery-template.js'

const Gallery = {
  template: GalleryTemplate,
  data() {
    return {
      galleryImages: null,
      errorMessage: null
    };
  },
  methods: {
    scrollMeTo() {
      var scrollArea = document.getElementsByClassName("main")[0];
      scrollArea.focus();
      scrollArea.scrollTo(0, 0);
    },
    processForm() {
      return true;
    }
  }
}

export { Gallery }