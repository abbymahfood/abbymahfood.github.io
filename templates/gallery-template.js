const GalleryTemplate = `
<div class="main">
    <h3 id="formTitle">Gallery</h3>
    <form name="galleryForm" id="galleryForm" class="gallery-form" @submit.prevent="onSubmit">
        <input class="textbox" type="text" name="gallerySearch" id="gallerySearch" placeholder="Search Gallery" autofocus>
        <input type="submit" id="submit" value="Submit">
    </form>

    <section class="gallery-section" v-bind:galleryImages = "galleryImages">
        <ul>
            <li v-for = "image in galleryImages" :key = "galleryImages">
                <picture>
                    <img :src="'../imgs/' + image.Path" :alt="image.Description" >
                </picture>
            </li>
        </ul>
    </section>

    <a id="top-link" @click="scrollMeTo()">Top</a>
</div>
`
export { GalleryTemplate }