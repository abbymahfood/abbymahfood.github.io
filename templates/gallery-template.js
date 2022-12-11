const GalleryTemplate = `
<div class="main">
    <h3 id="formTitle">Gallery</h3>
    <form name="galleryForm" id="galleryForm" action="javascript:void(0);" novalidate @onsubmit="return processForm();">
    <fieldset class="outerFieldset">
        <fieldset class="innerFieldset">
            <input class="textbox" type="text" name="gallerySearch" id="gallerySearch" placeholder="Search Gallery" required autofocus>
            <div id="gallerySearchValidationMsg" class="validationErrorMsg"></div>
        </fieldset>
        <input type="submit" id="submit" value="Submit">
    </fieldset>

    <section v-bind:galleryImages = "galleryImages">
        <article class="gallery-image" v-for = "image in galleryImages" :key = "galleryImages">
            <img :src="../image.Path" :alt="image.Description" />
        </article>
    </section>
</div>
`
export { GalleryTemplate }