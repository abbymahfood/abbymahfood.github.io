const ResumeTemplate = `
<div class="main">
    <section v-bind:resumeInfo = "resumeInfo">
        <h3 id="top">Software Skills</h3>
        <article>
            <h4>Languages</h4>
            <p v-for = "language in resumeInfo.Languages" :key = "resumeInfo.Languages">{{language}}</p>
        </article>
        <a id="top-link" @click="scrollMeTo()">Top</a>
    </section>
</div>
`

export { ResumeTemplate }