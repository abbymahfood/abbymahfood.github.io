const GalleryTemplate = `
<div class="main">
    <h3 id="formTitle">Gallery</h3>
    <form name="galleryForm" id="galleryForm" @submit.prevent="onSubmit"">
        <fieldset class="outerFieldset">
            <fieldset class="innerFieldset">
                <input class="textbox" type="text" name="gallerySearch" id="gallerySearch" placeholder="Search Gallery" required autofocus>
                <div id="gallerySearchValidationMsg" class="validationErrorMsg"></div>
            </fieldset>
            <input type="submit" id="submit" value="Submit">
        </fieldset>
    </form>

    <section class="gallery-section" v-bind:galleryImages = "galleryImages">
        <article class="gallery-image" v-for = "image in galleryImages" :key = "galleryImages">
            <img :src="'../imgs/' + image.Path" :alt="image.Description" >
        </article>
    </section>

    <a id="top-link" @click="scrollMeTo()">Top</a>
</div>
`
export { GalleryTemplate }