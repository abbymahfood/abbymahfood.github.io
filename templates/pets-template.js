const PetsTemplate = `
<div class="main">
<!-- Pet Summary Section -->
<section>
    <h3 id="top">Hello from my Pets!</h3>
    <p>
        I have adopted four animals! 
    </p>
    <p>
        The first was Patch. He is a black cat who I adopted when he was one year old.
        He loves to cuddle and explore. 
    </p>
    <p>
        The next to join the family was Sammy. He was about seven years old when
        he was adopted. He loves to gather toys and cuddle with them. 
        He takes breakfast and dinner very seriously.
    </p>
    <p>
        Next up was Nea. She was adopted by my partner as a puppy and 
        I've had the joy of adopting her as well. She
        loves to catch a ball and rip up toys much to Sammy's dismay.
    </p>
    <p>
        Lastly is Winston. He was adopted as a kitten
        and is more cautious than Patch. He loves finding places to nap and is 
        first up when it comes to feeding time. 
    </p>
    <section class="pet-flex">
        <article class="article-grid pet">
            <h4 class="article-title">Patch - Adopted 2017</h4>
            <img class="article-photo" src="../imgs/patch/Patch.jpeg" alt="Picture of Patch the cat sitting.">
            <div class="article-comments">
                <div class="article-line">
                    <p class="pet-field">Breed: </p>
                    <p class="pet-value">Black Cat</p>
                </div>
            </div>
        </article>
        <article class="article-grid pet">
            <h4 class="article-title">Sammy - Adopted 2018</h4>
            <img class="article-photo" src="../imgs/sammy/Sammy.jpeg" alt="Picture of Sammy the dog sleeping.">
            <div class="article-comments">
                <div class="article-line">
                    <p class="pet-field">Breed: </p>
                    <p class="pet-value">German Shepard/Akita Mix</p>
                </div>
            </div>
        </article>
        <article class="article-grid pet">
            <h4 class="article-title">Nea - Adopted 2018</h4>
            <img class="article-photo" src="../imgs/nea/Nea.jpeg" alt="Picture of Sammy the dog sleeping.">
            <div class="article-comments">
                <div class="article-line">
                    <p class="pet-field">Breed: </p>
                    <p class="pet-value">Black Mouth Cur</p>
                </div>
            </div>
        </article>
        <article class="article-grid pet">
            <h4 class="article-title">Winston - Adopted 2019</h4>
            <img class="article-photo" src="../imgs/winston/Winston.jpeg" alt="Picture of Sammy the dog sleeping.">
            <div class="article-comments">
                <div class="article-line">
                    <p class="pet-field">Breed: </p>
                    <p class="pet-value">Maine Coon Mix</p>
                </div>
            </div>
        </article>
    </section>
    <a href="#top">Top</a>
</section>
</div>
`

export { PetsTemplate }