const ResumeTemplate = `
<div class="main">
    <section v-bind:experience = "experience">
        <h3 id="top">Experience</h3>
        <article v-if="experience" v-for = "exp in experience" :key = "experience">
            <div class="experience-header">
                <h4 style="width: 50%;">{{exp.Company}}</h4>
                <p style="width: 50%; font-style: italic; margin: 0px; text-align: right;">{{exp.Period}}</p>
            </div>
            <p style="font-style:italic; margin: 0px;">{{exp.Title}}</p>
            <ul>
                <li v-for = "resp in exp.Responsibilities" :key = "exp.Responsibilities">{{resp}}</li>
            </ul>
        </article> 
    </section>
    <section v-bind:education = "education">
        <h3 id="top">Education</h3>
        <div style="display: flex;">
            <article class="education-article" v-if="education" v-for = "edu in education" :key = "education">
                <div class="education-header">
                    <h4>{{edu.Name}}</h4>
                    <p style="font-style: italic;"> ({{edu.Graduation}})</p>
                </div>
                <p style="font-style:italic;">{{edu.Major}}</p>
                <p>{{edu.DegreeType}}</p>
            </article> 
        </div>
    </section>
    <section>
    <h3 id="top">Software Skills</h3>
    <article v-if="languages">
        <h4 class="skills-header">Languages</h4>
        <div class="skillset">
            <ul>
                <li v-for = "lang in languages" :key = "languages">{{lang}}</li>
            </ul>
        </div>
    </article>
    <article v-if="platforms">
        <h4 class="skills-header">Platforms</h4>
        <div class="skillset">
            <ul>
                <li v-for = "plat in platforms" :key = "platforms">{{plat}}</li>
            </ul>
        </div>
    </article>
    <article v-if="frameworks">
        <h4 class="skills-header">Frameworks</h4>
        <div class="skillset">
            <ul>
                <li v-for = "fw in frameworks" :key = "frameworks">{{fw}}</li>
            </ul>
        </div>
    </article>
    <article v-if="programs"> 
        <h4 class="skills-header">Programs</h4>
        <div class="skillset">
            <ul>
                <li v-for = "prog in programs" :key = "programs">{{prog}}</li>
            </ul>
        </div>
    </article>
</section>
    <a id="top-link" @click="scrollMeTo()">Top</a>
</div>
`

export { ResumeTemplate }