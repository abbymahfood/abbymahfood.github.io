const CookingTemplate = `
<!-- Cooking Page Intro Section -->
<section>
  <h3 id="top">Recipes</h3>
  <p>
    On this page you'll find recipes I've tried! You'll see that I love
    cooking and baking. I often use my air-fryer, stand-mixer, and
    pressure cooker to experiment with. My partner is a diabetic so
    we're always trying to find new and healthier ways to create
    delicious food!
  </p>
</section>
<section class="main-flex">
  <!-- Salmon Wellington Article -->
  <article class="article-flex">
    <div class="article-grid">
      <h4 class="article-title">Salmon Wellington</h4>
      <div class="article-contents">
        <img class="article-photo" src="../imgs/cooking/salmon_wellington.jpeg" alt="Abby's attempt at Salmon Wellington.">
        <ul class="article-comments">
          <li>
            I was inspired to make this recipe when a co-worker said she
            had tried it and enjoyed it. I also enjoy anything with puff
            pastry and butter.
          </li>
          <li>
            This recipe was a little complicated but tasted alright in
            the end. I think the puff pastry may have been too thin.
          </li>
          <li>
            <a class="article-source" href="https://www.wellplated.com/salmon-wellington/">
              Well Plated
            </a>                   
          </li>
        </ul>
      </div>
    </div>
  </article>
  <!-- Shrimp Stir-fry Article -->
  <article class="article-flex">
    <div class="article-grid">
      <h4 class="article-title">Shrimp Stir-fry</h4>
      <div class="article-contents">
        <img class="article-photo" src="../imgs/cooking/ShrimStirFry.jpg" alt="Abby's attempt at Shrimp Stir-fry.">
        <ul class="article-comments">
          <li>
            This recipe was delicious! But I had a lot of help from
            other people at The Gathering Table.
          </li>
          <li>
            We also prepared a really good Thai Chicken Soup. There was
            a lot of waiting around while food cooked but otherwise the
            experience was enjoyable.
          </li>
          <li>
            <a class="article-source" href="https://gatheringtablefl.com/">
              The Gathering Table
            </a>
          </li>
        </ul>
      </div>
    </div>
  </article>
  <!-- Sugar Free Cake Article -->
  <article class="article-flex">
    <div class="article-grid">
      <h4 class="article-title">Sugar Free Vanilla Cake</h4>
      <div class="article-contents">
        <img class="article-photo" src="../imgs/cooking/GolfCake.jpeg" alt="Abby's attempt at sugar free cake.">
        <ul class="article-comments">
          <li>
            I made this cake for my partner's birthday. He likes golf so
            I made it golf-themed.
          </li>
          <li>
            This actually tasted pretty terrible and I wouldn't bake it
            again.
          </li>
          <li>But it looked nice!</li>
          <li>
            <a class="article-source" href="https://birchbenders.com/products/keto-classic-yellow-cake">
              Birch Benders
            </a>
          </li>
        </ul>
      </div>
    </div>
  </article>
</section>
<a href="#top">Top</a>
</div>`

export { CookingTemplate }