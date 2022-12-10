const ResumeTemplate = `
<div class="main">
    <section v-bind:resumeInfo = "resumeInfo">
        <h3 id="top">Software Skills</h3>
        <article v-if="resumeInfo.Languages">
            <h4>Languages</h4>
            <div class="skillset">
                <ul>
                    <li v-for = "language in resumeInfo.Languages" :key = "resumeInfo.Languages">{{language}}</li>
                </ul>
            </div>
        </article>
        <article v-if="resumeInfo.Platforms">
            <h4>Platforms</h4>
            <div class="skillset">
                <ul>
                    <li v-for = "platform in resumeInfo.Platforms" :key = "resumeInfo.Platforms">{{platform}}</li>
                </ul>
            </div>
        </article>
        <article v-if="resumeInfo.Frameworks">
            <h4>Frameworks</h4>
            <div class="skillset">
                <ul>
                    <li v-for = "framework in resumeInfo.Frameworks" :key = "resumeInfo.Frameworks">{{framework}}</li>
                </ul>
            </div>
        </article>
        <article v-if="resumeInfo.Programs"> 
            <h4>Programs</h4>
            <div class="skillset">
                <ul>
                    <li v-for = "program in resumeInfo.Programs" :key = "resumeInfo.Programs">{{program}}</li>
                </ul>
            </div>
        </article>
    </section>
    <section v-bind:resumeInfo = "resumeInfo">
        <h3 id="top">Experience</h3>
        <article v-if="resumeInfo.Experience" v-for = "experience in resumeInfo.Experience" :key = "resumeInfo.Experience">
            <div class="experience-header">
                <h4 style="width: 50%;">{{experience.Company}}</h4>
                <p style="width: 50%; font-style: italic; margin: 0px; text-align: right;">{{experience.Period}}</p>
            </div>
            <p style="font-style:italic; margin: 0px;">{{experience.Title}}</p>
            <ul>
                <li v-for = "resp in experience.Responsibilities" :key = "experience.Responsibilities">{{resp}}</li>
            </ul>
        </article> 
    </section>
    <a id="top-link" @click="scrollMeTo()">Top</a>
</div>
`

export { ResumeTemplate }