const GalleryTemplate = `
<div class="main">
    <h3 id="formTitle">Gallery</h3>
    <form name="galleryForm" id="galleryForm" method="post" novalidate onsubmit="return processForm();">
    <fieldset class="outerFieldset">
        <fieldset class="innerFieldset">
        <label class="textboxLabel" for="gallerySearch">Search Gallery</label>
        <br>
        <input class="textbox" type="text" name="gallerySearch" id="gallerySearch" required autofocus>
        <div id="gallerySearchValidationMsg" class="validationErrorMsg"></div>
        </fieldset>
        <input type="submit" id="submit" value="Submit">
    </fieldset>
</div>
`
export { GalleryTemplate }