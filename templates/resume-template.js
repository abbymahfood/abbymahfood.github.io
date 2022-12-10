const ResumeTemplate = `
<div class="main">
    <section v-bind:resumeInfo = "resumeInfo">
        <h3 id="top">Software Skills</h3>
        <article>
            <h4>Languages</h4>
            <div class="skillset">
                <p v-for = "language in resumeInfo.Languages" :key = "resumeInfo.Languages">{{language}} </p>
            </div>
        </article>
        <article>
            <h4>Platforms</h4>
            <div class="skillset">
                <p v-for = "platform in resumeInfo.Platforms" :key = "resumeInfo.Platforms">{{platform}} </p>
            </div>
        </article>
        <article>
            <h4>Frameworks</h4>
            <div class="skillset">
                <p v-for = "framework in resumeInfo.Frameworks" :key = "resumeInfo.Frameworks">{{framework}} </p>
            </div>
        </article>
        <article>
            <h4>Programs</h4>
            <div class="skillset">
                <p v-for = "program in resumeInfo.Programs" :key = "resumeInfo.Programs">{{program}} </p>
            </div>
        </article>
    </section>
    <section v-bind:resumeInfo = "resumeInfo">
        <h3 id="top">Experience</h3>
        <article v-for = "experience in resumeInfo.Experience" :key = "resumeInfo.Experience">
            <div class="experience-header">
                <h4 style="float: left;">{{experience.Company}}</h4>
                <p style="font-style:italic; float: right;">{{experience.Period}}</p>
            </div>
            <p style="font-style:italic;">{{experience.Title}}</p>
            <ul>
                <li v-for = "resp in experience.Responsibilities" :key = "experience.Responsibilities">{{resp}}</li>
            </ul>
        </article> 
    </section>
    <a id="top-link" @click="scrollMeTo()">Top</a>
</div>
`

export { ResumeTemplate }