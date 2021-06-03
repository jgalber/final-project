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
            class="grid__main__section__art1--image"
            src="../images/mike-swigunski-travelers.jpg"
            alt="travelers united"
          />
          <h4 class="grid__main__section__art1--title"> Who We Are</h4>
          <p class="grid__main__section__art1--text">
            Travel Advisor is an open social website created by JGalber to share travel
            experiences and facts when you pack a trip elsewhere in this global world.
          </p>
        </article>
        <!-- content wrap -->
        <article class="grid__main__section__art2">
          <img
            class="grid__main__section__art2--image"
            src="../images/glenn-carstens-peters-laptop-unsplash.jpg"
            alt="laptop"
          />
          <h4 class="grid__main__section__art2--title">What We Do</h4>
          <p class="grid__main__section__art2--text">
            Every trip is a dream come true; this is our purpose. Going beyond all
            possibilities when planning your trip is essential to have memorable
            experiences.
          </p>
        </article>
        <!-- content wrap -->
        <article class="grid__main__section__art3">
          <img
            class="grid__main__section__art3--image"
            src="../images/tim-marshall-Wa-silhouettes-unsplash.jpg"
            alt="Piha Beach silhouettes"
          />
          <h4 class="grid__main__section__art3--title">Why Travel Advisor</h4>
          <p class="grid__main__section__art3--text">
            Depending on your type of trip, it does not matter if it is for business,
            pleasure or adventure, you will be able to learn more about the folklore, the
            demographics, the culture in general of the place of your destination.
          </p>
        </article>
        <!-- Sidebar -->
        <aside class="grid__main__section__sidebar">
          <h2 class="grid__main__section__sidebar--title"> {{ sidebarTitle }} </h2>      
          <img
            class="grid__main__section__sidebar--img1"
            src="../images/gabriel-silverio-testimonial1-unsplash.jpg"
            alt="first user testimonial"
          />
          <p class="grid__main__section__sidebar--text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <img
            class="grid__main__section__sidebar--img2"
            src="../images/ayo-ogunseinde-testimonial2-unsplash.jpg"
            alt="second user testimonial"
          />
          <p class="grid__main__section__sidebar--text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <img
            class="grid__main__section__sidebar--img3"
            src="../images/gantas-vaiciulenas-testimonial3-unsplash.jpg"
            alt="third user testimonial"
          />
          <p class="grid__main__section__sidebar--text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <img
            class="grid__main__section__sidebar--img4"
            src="../images/nathan-dumlao-testimonial4-unsplash.jpg"
            alt="fourth user testimonial"
          />
          <p class="grid__main__section__sidebar--text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <img
            class="grid__main__section__sidebar--img5"
            src="../images/sharon-mccutcheon-testimonial5-unsplash.jpg"
            alt="fifth user testimonial"
          />
          <p class="grid__main__section__sidebar--text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </aside>
      </section>
    </main>

    <!-- <Myfooter /> -->
  </div>
</template>

<script>

import Myheader from "../components/Myheader.vue";

export default {
  name: "App",
  components: {
    Myheader,
  },
  data() {
    return {
      sectionTitle: 'About Us',
      sidebarTitle: 'Testimonials'
    }
  }
};


</script>

<style lang="scss" scoped>
@import "../css/_base.normalize.scss";
@import "../css/_color.palette.scss";
@import "../css/_fonts.scss";
@import "../css/_footer.scss";
@import "../css/_grid.scss";
@import "../css/_header.scss";
@import "../css/_media.queries.scss";
@import "../css/_responsive.layouts.scss";
@import "../css/_sections.scss";
@import "../css/_units.scss";

.grid {
  @include container;

  // Main area
  &__main {
    @include responsive(phone) {
      @include main-mobile-tablet;
    }
    @include responsive(tablet) {
      @include main-mobile-tablet;
      width: 100%;
    }
    @include responsive(tabletLarge) {
      @include main-tabletL-desktop;
    }
    @include responsive(tabletXLarge) {
      @include main-tabletL-desktop;
      width: 100%;
    }
    @include responsive(desktop) {
      @include main-tabletL-desktop;
      width: 100%;
    }
    @include responsive(desktopLarge) {
      @include main-tabletL-desktop;
      width: 100%;
    }
    // background-color: darkgreen;

    // Section
    &__section {
      @include responsive(tablet) {
        @include section-tablet;
      }
      @include responsive(tabletLarge) {
        @include section-tabletLarge;
      }
      @include responsive(tabletXLarge) {
        @include section-tabletXLarge;
      }
      @include responsive(desktop) {
        @include section-desktop;
        width: 100%;
      }
      @include responsive(desktopLarge) {
        @include section-desktopL;
        width: 100%;
      }

      // h2 section title
      &__title {
        font-family: $quotes-font;
        margin: $m-rem 0;
        font-size: $m-rem;
        @include responsive(tablet) {
          grid-column: 4 / 7;
          grid-row: 1;
        }

        @include responsive(tabletLarge) {
          grid-column: 4 / span 3;
          grid-row: 1;
          @include txt-align-slf;
          margin: $l-rem 0 0 0;
        }
        @include responsive(tabletXLarge) {
          grid-column: 5 / span 3;
          grid-row: 1;
          @include txt-align-slf;
          margin: $l-rem 0 0 0;
        }
        @include responsive(desktop) {
          // grid-column: 6 / span 2;
          grid-column: 5 / span 4;
          grid-row: 1;
          @include txt-align-slf;
          margin: $l-rem 0 0 0;
        }
        @include responsive(desktopLarge) {
          grid-column: 6 / span 4;
          grid-row: 1;
          @include txt-align-slf;
          margin: $l-rem 0 0 0;
        }
      }
      // content wrap
      // First Article
      &__art1 {
        &--image {
          width: 100%;
          object-fit: fill;
          border-radius: $s-pxl;
        }

        @include responsive(phone) {
          @include article-mobile-tablet;
        }

        @include responsive(tablet) {
          @include article-mobile-tablet;
          grid-column: 2 / 6;
          grid-row: 2;
        }
        @include responsive(tabletLarge) {
          grid-column: 2 / 6;
          grid-row: 2;
        }
        @include responsive(tabletXLarge) {
          grid-column: 5 / 8;
          grid-row: 2;
        }
        @include responsive(desktop) {
          grid-column: 5 / 12;
          grid-row: 2;
        }
        @include responsive(desktopLarge) {
          grid-column: 7 / 14;
          grid-row: 2;
        }

        // h4 article title
        &--title {
          margin: $xxs-rem 0;
        }
        // Paragraph
        &--text {
          font-family: $p-font;
          line-height: $m-rem;
        }
        // first article ends here
      }

      // Second article
      &__art2 {
        &--image {
          width: 100%;
          object-fit: fill;
          border-radius: $s-pxl;
        }
        @include responsive(phone) {
          @include article-mobile-tablet;
        }
        @include responsive(tablet) {
          @include article-mobile-tablet;
          grid-column: 6 / 9;
          grid-row: 2;
        }
        @include responsive(tabletLarge) {
          grid-column: 6 / 9;
          grid-row: 2;
        }
        @include responsive(tabletXLarge) {
          grid-column: 8 / 11;
          grid-row: 2;
        }
        @include responsive(desktop) {
          grid-column: 5 / 8;
          grid-row: 3;
        }
        @include responsive(desktopLarge) {
          grid-column: 8 / 13;
          grid-row: 3;
        }

        // h4 article title
        &--title {
          margin: $xxs-rem 0;
        }
        // Paragraph
        &--text {
          font-family: $p-font;
          line-height: $m-rem;
        }
        // second article ends here
      }

      // Third article
      &__art3 {
        &--image {
          width: 100%;
          object-fit: fill;
          border-radius: $s-pxl;
        }
        @include responsive(phone) {
          @include article-mobile-tablet;
        }
        @include responsive(tablet) {
          @include article-mobile-tablet;
          grid-column: 2 / 9;
          grid-row: 3;
        }
        @include responsive(tabletLarge) {
          grid-column: 2 / 9;
          grid-row: 3;
        }
        @include responsive(tabletXLarge) {
          grid-column: 5 / 11;
          grid-row: 3;
        }
        @include responsive(desktop) {
          grid-column: 8 / 12;
          grid-row: 3;
        }
        @include responsive(desktopLarge) {
          grid-column: 7 / 14;
          grid-row: 4;
        }

        // h4 article title
        &--title {
          margin: $xxs-rem 0;
        }
        // Paragraph
        &--text {
          font-family: $p-font;
          line-height: $m-rem;
        }
        // third article ends here
      }

      // Sidebar
      // Aside
      &__sidebar {
        width: 100%;
        @include responsive(phone) {
          @include article-mobile-tablet;
        }
        @include responsive(tablet) {
          grid-column: 2 / 9;
          grid-row: 4;
        }
        @include responsive(tabletLarge) {
          grid-column: 2 / 9;
          grid-row: 4;
        }
        @include responsive(tabletXLarge) {
          grid-column: 2 / 5;
          grid-row: 2 / 4;
        }
        @include responsive(desktop) {
          grid-column: 2 / 5;
          grid-row: 2 / span 2;
        }
        @include responsive(desktopLarge) {
          grid-column: 2 / 6;
          grid-row: 2 / span 3;
        }
        // h3 sidebar title
        &--title {
          margin: $m-rem 0;
        }
        &--img1 {
          width: 50%;
          object-fit: fill;
          border-radius: 50%;
        }

        &--text {
          margin: $m-rem 0;
          font-family: $p-font;
          line-height: $m-rem;
          @include responsive(tabletXLarge) {
            &:last-child {
              display: none;
            }
          }
          @include responsive(desktop) {
            &:last-child {
              display: none;
            }
          }
        }
        &--img2 {
          width: 96%;
          object-fit: fill;
          border-radius: 50%;
          padding: 0 $m-rem;
        }
        &--img3 {
          width: 96%;
          object-fit: fill;
          border-radius: 50%;
          padding: 0 $m-rem;
        }
        &--img4 {
          width: 96%;
          object-fit: fill;
          border-radius: 50%;
          padding: 0 $m-rem;
        }
        &--img5 {
          width: 50%;
          object-fit: fill;
          border-radius: 50%;
          @include responsive(tabletXLarge) {
            display: none;
          }
          @include responsive(desktop) {
            display: none;
          }
        }

        // aside ends here
      }
      // section ends here
    }
    // Main ends here
  }
}
</style>
