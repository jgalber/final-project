<template>
  <div class="grid">
    <Myheader />
    <!-- Main area -->
    <main class="grid__main" id="main">
      <section class="grid__main__section">
        <h2 class="grid__main__section__title"> {{ sectionTitle }}</h2>
        <!-- content wrap -->
        <article class="grid__main__section__art1">
          <img
            class="grid__main__section__art1--image1"
            :src="art1src"
            :alt="art1alt"
          />
          <h4 class="grid__main__section__art1--title1">{{ art1title }}</h4>
          <p class="grid__main__section__art1--text1">{{ art1p }}</p>
        </article>
        <!-- content wrap -->
        <article class="grid__main__section__art2">
          <img
            class="grid__main__section__art2--image2"
            :src="art2src"
            :alt="art2alt"
          />
          <h4 class="grid__main__section__art2--title2">{{ art2title }}</h4>
          <p class="grid__main__section__art2--text2">{{ art2p }}</p>
        </article>
        <!-- content wrap -->
        <article class="grid__main__section__art3">
          <img
            class="grid__main__section__art3--image3"
            :src="art3src"
            alt="art3alt"
          />
          <h4 class="grid__main__section__art3--title3">{{ art3title }}</h4>
          <p class="grid__main__section__art3--text3">{{ art3p }}</p>
        </article>
        <!-- Sidebar -->
        <aside class="grid__main__section__sidebar">
          <h2 class="grid__main__section__sidebar--title"> {{ sidebarTitle }} </h2>      
          <img
            class="grid__main__section__sidebar--img1"
            :src="as1src"
            :alt="as1alt"
          />
          <p class="grid__main__section__sidebar--text">{{firstTest}}</p>
          <img
            class="grid__main__section__sidebar--img2"
            :src="as2src"
            :alt="as2alt"
          />
          <p class="grid__main__section__sidebar--text" > {{secondTest}}</p>
          <img
            class="grid__main__section__sidebar--img3"
            :src="as3src"
            :alt="as3alt"
          />
          <p class="grid__main__section__sidebar--text">{{thirdTest}}</p>
          <img
            class="grid__main__section__sidebar--img4"
            :src="as4src"
            :alt="as4alt"
          />
          <p class="grid__main__section__sidebar--text">{{fourthTest}}</p>
          <img
            class="grid__main__section__sidebar--img5"
            :src="as5src"
            :alt="as5alt"
          />
          <p class="grid__main__section__sidebar--text">{{fifthTest}}</p>
        </aside>
      </section>
    </main>
    <Myfooter />
  </div>
</template>

<script>

import Myheader from "@/components/Myheader.vue";
import Myfooter from "@/components/Myfooter.vue";

export default {
  name: "App",
 
  components: {
    Myheader,
    Myfooter
  },
  data() {
    return {
      sectionTitle: 'About Us',
      sidebarTitle: 'Testimonials',
      art1title:'Who We Are',
      art2title:'What We Do',
      art3title:'Why Travel Advisor',
      art1p: 'Travel Advisor is an open social website created by JGalber to share travel experiences and facts when you pack a trip elsewhere in this global world.',
      art2p: 'Every trip is a dream come true; this is our purpose. Going beyond all possibilities when planning your trip is essential to have memorable experiences.',
      art3p: 'Depending on your type of trip, it does not matter if it is for business, pleasure or adventure you will be able to learn more about the folklore, the demographics, the culture in general of the place of your destination.',
      firstTest: 'My vacation for this summer was already planned.',
      secondTest: 'I missed the good times I had in Vegas.',
      thirdTest: 'After being vaccinated I feel more comfortable to travel.',
      fourthTest: 'Orlando Advisors we are coming!!',
      fifthTest: 'Looking forward to planning our honeymoon.',

      // article (main section)
      art1src: require('../images/mike-swigunski-travelers.jpg'),
      art1alt: "travelers united",
      art2src: require('../images/glenn-carstens-peters-laptop-unsplash.jpg'),
      art2alt: "coding in a laptop",
      art3src: require('../images/tim-marshall-Wa-silhouettes-unsplash.jpg'),
      art3alt: 'Piha Beach silhouettes',
      
      // sidebar
      as1src: require('../images/gabriel-silverio-testimonial1-unsplash.jpg'),
      as1alt: 'first traveler testimonial',
      as2src: require('../images/ayo-ogunseinde-testimonial2-unsplash.jpg'),
      as2alt: 'second user testimonial',
      as3src: require('../images/gantas-vaiciulenas-testimonial3-unsplash.jpg'),
      as3alt: 'third traveler testimonial',
      as4src: require('../images/nathan-dumlao-testimonial4-unsplash.jpg'),
      as4alt: 'fourth traveler testimonial',
      as5src: require('../images/sharon-mccutcheon-testimonial5-unsplash.jpg'),
      as5alt: 'recent user testimonial',
    }
  },
};


</script>

<style lang="scss" scoped>

@import "../css/_color.palette.scss";
@import "../css/_fonts.scss";
@import "../css/_footer.scss";
@import "../css/_grid.scss";
@import "../css/_header.scss";
@import "../css/_media.queries.scss";
@import "../css/_responsive.layouts.scss";
@import "../css/_units.scss";

*,
html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.grid {
  @include container;

  // Main area
  &__main {
    background: $about-main-bg-color;
    background: $about-main-bg-linear;
    @include about-main-responsive; 

    // Section
    &__section {
      text-align: initial;
      @include about-section-responsive; 
     
      // h2 section title
      &__title {
        font-family: $quotes-font;
        margin: $xs-rem 0;
        font-size: $m-rem;
        color: $platinum; 
        transition: all 0.4s ease-in-out;
        &:hover {
          letter-spacing: $xxxxs-rem;
          text-shadow: 0 $xs-pxl $xl-pxl $max-blue;
        }
        @include about-title-responsive;
      }
  
      &__art1 {
        @include about-page-article;
        height: fit-content;
        @include about-first-article-responsive;
        
        // article image
        &--image1 {
          width: 100%;
          object-fit: fill;
          border-radius: $s-pxl;
          transition: opacity .5s ease-in-out;
          &:hover {
              opacity: .7;
          }
          @include about-article-first-img-responsive;
        }
        // h4 article title
        &--title1 {
          margin:$s-rem 0 $xs-rem 0;
          text-align: center;
          color: $platinum;
          transition: all .3s ease-in;
          &:hover {
            letter-spacing: $xxs-rem;
          }
        }
        // Paragraph
        &--text1 {
          font-family: $p-font;
          line-height: $m-rem;
          color: $white;
          letter-spacing: $last-positive-rem-value;
        }
      }

      &__art2 {        
        @include about-page-article;
        height: fit-content;
        @include about-scnd-article-responsive; 
     
        // article image
        &--image2 {
          width: 75%;
          object-fit: fill;
          border-radius: $s-pxl;
          transition: opacity .5s ease-in-out;
          &:hover {
            opacity: .7;
          }
        }
        // h4 article title
        &--title2 {
          margin:$s-rem 0 $xs-rem 0;
          text-align: center;
          color: $platinum;
          transition: all .3s ease-in;
          &:hover {
            letter-spacing: $xxs-rem;
          }
        }
        // Paragraph
        &--text2 {
          font-family: $p-font;
          line-height: $m-rem;
          color: $white;
          letter-spacing: $last-positive-rem-value;
        }
      }

      &__art3 {
        @include about-page-article;
        height: fit-content;
        @include about-thrd-article-responsive;
    
        // article image
        &--image3 {
          width: 85%;
          object-fit: fill;
          border-radius: $s-pxl;
          transition: opacity .5s ease-in-out;
          &:hover {
            opacity: .7;
          }
          @include about-article-thrd-img-responsive;
        }
        // h4 article title
        &--title3 {
          margin: $xxs-rem 0;
          margin:$s-rem 0 $xs-rem 0;
          color: $platinum;
          text-align: center;
          transition: all .3s ease-in;
          &:hover {
            letter-spacing: $xxs-rem;
          }
        }
        // Paragraph
        &--text3 {
          font-family: $p-font;
          line-height: $m-rem;
          color: $white;
          letter-spacing: $last-positive-rem-value;
        }
      }

      // Sidebar
      &__sidebar {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        border: $xs-pxl solid $silver;
        text-align: center;
        margin: 0 auto;
        @include about-sidebar-responsive;
  
        // h3 sidebar title
        &--title {
          margin: $m-rem 0;
          color: $platinum;
          transition: all 0.3s ease-in-out;
          &:hover {
            text-shadow: $neg-three-px $xs-pxl $vii-pxl $mantis;
          }
        }
        // First sidebar image
        &--img1 {
          width: 50%;
          object-fit: fill;
          border-radius: 50%;
          transition: filter .25s ease-in;
          &:hover {
            filter: hue-rotate(50deg);
          }
        }
        // Sidebar images
        &--img2 {
          width: 96%;
          object-fit: fill;
          border-radius: 50%;
          transition: filter .25s ease-in;
          &:hover {
            filter: hue-rotate(75deg);
          }
        }
        &--img3 {
          width: 96%;
          object-fit: fill;
          border-radius: 50%;
          transition: filter .25s ease-in;
          &:hover {
            filter: hue-rotate(100deg);
          }
        }
        &--img4 {
          width: 96%;
          object-fit: fill;
          border-radius: 50%;
          transition: filter .25s ease-in;
          &:hover {
            filter: hue-rotate(125deg);
          }
        }
        &--img5 {
          width: 50%;
          object-fit: fill;
          border-radius: 50%;
          transition: filter .25s ease-in;
          &:hover {
            filter: hue-rotate(150deg);
          }
        }
        &--text {
          margin: $m-rem $s-rem;
          font-family: $p-font;
          line-height: $m-rem;
          color: $platinum;
          text-shadow: $xxxs-pxl $xxxs-pxl $xs-pxl $mantis;
        }
      }
    }
  }
}
</style>
