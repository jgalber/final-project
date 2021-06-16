<template>
  <Myheader />
    <main class="main">
      <h2 class="main--h2">Blog's page</h2>
      <div class="main__container" v-for="blog in blogs" :key="blog">
        <img class="main__container--img" v-bind:alt="imgDescription" v-bind:src="blog.image" :key="blogs">
        <h3 class="main__container--h3">{{blog.blogHeading}}</h3>
        <p class="main__container--p">{{blog.blogText}}</p>
      </div>
    </main>
  <Myfooter />
</template>

<script>
import Myheader from '@/components/Myheader.vue';
import Myfooter from '@/components/Myfooter.vue';

export default {
    name: 'App',
    components: {
        Myheader,
        Myfooter,
    },
    data() {
    return  {
      blogs : [
        {
          image: require("../images/cdoncel-consuegra-unsplash.jpg"),
          blogHeading: "Consuegra",
          blogText: 'Just about two hours from Madrid. Consuegra is located on the heart of Castile-La Mancha, where the typical Spanish "Manchego" windmills inspired to the notable novel of Miguel de Cervantes called "Don Quixote of La Mancha". This beautiful town is wellknown producing saffron and wine.', 
          imgDescription: "Consuegra's landscape; Windmills and its castle"
        },
        {          
          image: require("../images/maddie-granada-unsplash.jpg"),
          blogHeading: "Granada",
          blogText: 'The next stop is the city of Granada, an ancient cosmopolitan city where heritage resides in the culture of the Andalusian spirit. Diversity is the "motto" of this city, from the first Iberian, Roman, Phoenician, Visigoth, Jewish and Berber tribes that contributed the mixture of ethnic groups. During Moorish rule, Christians were not allowed to live there. On the other hand, the legacy of the Arab occupation provided a rich mix of art, lifestyle and beauty. The prominent castle called "La Alhambra" is a must see.',
          imgDescription: "La Alhambra castle in Granada, Spain"
        },
         {     
          image: require("../images/manuel-torres-garcia--burgos-unsplash.jpg"),     
          blogHeading: "Burgos",
          blogText: 'Driving north, Burgos is a province close to the Basque Country, which belongs to Castilla y León. Its homonymous city houses the pure Castilian language. Place where Iberians, Celts, Visigoths lived together at different stages of history. Its outstanding cathedral and the ancient gates that surround the city transport you back to the Middle Ages. It should be noted that Burgos is one of the stops on the "Camino de Santiago."',
          imgDescription: "View from the city of Burgos and its one of the oldest gates"
        }   
        ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../css/_base.normalize.scss";
@import "../css/_color.palette.scss";
@import "../css/_fonts.scss";
@import "../css/_grid.scss";
@import "../css/_media.queries.scss";
@import "../css/_responsive.layouts.scss";
@import "../css/_units.scss";

*,
body,
html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: $l-rem;
  padding-bottom: $v-rem;
  background: $blog-main-bg-color;
  background: $blog-main-bg-moz-linear;
  background: $blog-main-bg-webkit-linear;
  background: $blog-main-bg-linear;
  filter: $blog-main-filter;
  @include blog-main-responsive;


  &--h2 {
    font-family: $quotes-font;
    font-size: $l-font;
    color: $white;
    text-shadow: $xs-pxl $s-pxl $xv-pxl $pinterest;
    letter-spacing: $xxs-rem;
    margin-bottom: $l-rem;
    transition: all 0.4s ease-in-out;
    &:hover {
        text-shadow: 0 $xs-pxl $xl-pxl $shadow-logo;
    }
    @include blog-h2-responsive;
  }

  &__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    @include blog-container-responsive;

    &--img {
      width: 75%;
      margin: 0 auto;
      clip-path: polygon(8% 12%, 93% 5%, 95% 100%, 6% 95%);
      transition: filter .75s ease-in-out;
      &:hover {
        filter: hue-rotate(320deg);
      }
      @include blog-images-responsive; 
    }
      
      &--h3 {
        font-family: $nav-list-font;
        color: $platinum;
        font-size: $m-font;
        margin-bottom: $xs-rem;
        text-shadow: $xxs-pxl $xxs-pxl $xs-pxl $instagram;
        transition: all 0.4s ease-in-out;
        &:hover {
          text-shadow: 0 $xs-pxl $xl-pxl $shadow-logo;
        }
        @include blog-h3-responsive; 
      }

      &--p {
        font-family: $p-font;
        line-height: $m-rem;
        font-size: $xs-font;
        letter-spacing: $xxxxs-rem;
        color: $white;
        text-shadow: $xxxs-pxl $xxxs-pxl $xxs-pxl $black;
        margin: 0 $m-rem $s-rem $m-rem;
        text-align: initial;
        transition: all .3s ease-in-out;
        &:hover {
          color: $blog-text-hover;
        }
        @include blog-p-responsive; 
      }
    }
  }

</style>