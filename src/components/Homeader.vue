<template>
  <div class="grid">  
    <header id="showcase" class="grid__header">
      <div class="grid__header__bg-img">
        <Homeburger />
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <h1 class="grid__header__logo">Travel Advisor</h1>      
      </div>
    </header>
  </div>
</template>

<script>
import Homeburger from "../components/Homeburger.vue";

  export default {
    name: 'App',
    components: {
      Homeburger
    }
  }
</script>

<style lang="scss" scoped>

@import "../css/_color.palette.scss";
@import "../css/_fonts.scss";
@import "../css/_header.scss";
@import "../css/_grid.scss";
@import "../css/_responsive.layouts.scss";
@import "../css/_media.queries.scss";
@import "../css/_units.scss";

*,
html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  margin: 0;
  padding: 0;
  height: fit-content;
}

.grid { 
  margin: 0;
  padding: 0;
  &__header {
    width: 100%;
    height: 100%;
    height: fit-content;
    width: 100%;
    margin: 0;
    padding: 0;
    background: radial-gradient(ellipse at bottom, #1B2735 0%, #191F24 100%);
    overflow: hidden;

    &__bg-img {
      width: 100%;
      @include homeader-bg;
      @include homeader-bg-img-responsive;
    }

    &__logo {
      font-family: $logo-btn-font;
      font-size: $xl-font;
      margin: 0;
      color: $white;
      letter-spacing: $xl-pxl;
      text-align: center;
      transition: all 1s ease-in-out;
      &:hover {   
        letter-spacing: $xs-rem;
        color:  $hover-logo;
        text-shadow: $xxs-rem $xxxs-rem $xxs-rem $white;
      }     
      @include homeader-logo-responsive;
    }
  }

// Stars animation
  @mixin translate50 {
    -webkit-transform: translate(-50, -50%);
    -ms-transform: translate(-50, -50%);
    -o-transform: translate(-50, -50%);
    transform: translate(-50, -50%);
  }

  @mixin roundedCorners {
    -webkit-border-radius: 50%; 
    -moz-border-radius: 50%; 
    border-radius: 50%;
  }

  @mixin rotateBase {
    -webkit-transform: rotate3d(-1, 1, 0, 0deg);
    -ms-transform: rotate3d(-1, 1, 0, 0deg);
    -o-transform: rotate3d(-1, 1, 0, 0deg);
    transform: rotate3d(-1, 1, 0, 0deg);
  }

  @mixin rotateRight {
    -webkit-transform: rotate3d(-1, 1, 0, 30deg);
    -ms-transform: rotate3d(-1, 1, 0, 30deg);
    -o-transform: rotate3d(-1, 1, 0, 30deg);
    transform: rotate3d(-1, 1, 0, 30deg);
  }

  @mixin rotateLeft {
    -webkit-transform: rotate3d(-1, 1, 0, -30deg);
    -ms-transform: rotate3d(-1, 1, 0, -30deg);
    -o-transform: rotate3d(-1, 1, 0, -30deg);
    transform: rotate3d(-1, 1, 0, -30deg);
  }

  // n is number of stars generated
  @function generateStars ($n) { 
    $value: '#{0} #{random(2000)}px #{random(2000)}px #FFF';
    @for $i from 2 through $n {
      $value: '#{$value} , #{random(2000)}px #{random(2000)}px #FFF';
    }
    @return unquote($value);
  }

  $stars-small:  generateStars(700);
  $stars-medium: generateStars(200);
  $stars-big:    generateStars(100);

  #stars {
    width: $xxxs-pxl;
    height: $xxxs-pxl;
    background: transparent;
    box-shadow: $stars-small;
    animation : animateStars 15s ease-in-out infinite;
    @include roundedCorners;

    &::after {
      content: " ";
      position: absolute;
      margin: auto;
      top: 0; 
      left: 0; 
      right: 0; 
      bottom: 0;
      width: $xxxs-pxl;
      height: $xxxs-pxl;
      background: transparent;
      box-shadow: $stars-small;
      @include roundedCorners;
    }
  }
    
  #stars2 {
    width: $xxs-pxl;
    height: $xxs-pxl;
    background: transparent;
    box-shadow: $stars-medium;
    animation : animateStars 22s ease-in-out infinite;
    @include roundedCorners;
    &::after {
      content: " ";
      position: absolute;
      margin: auto;
      top: 0; 
      left: 0; 
      right: 0; 
      bottom: 0;
      width: $xxs-pxl;
      height: $xxs-pxl;
      background: transparent;
      box-shadow: $stars-medium;
      @include roundedCorners;
    }
  }
    
  #stars3 {
    width: $xs-pxl;
    height: $xs-pxl;
    background: transparent;
    box-shadow: $stars-big;
    animation : animateStars 25s ease-in-out infinite;
    @include roundedCorners;
    &:after {
      content: " ";
      position: absolute;
      margin: auto;
      top: 0; 
      left: 0; 
      right: 0; 
      bottom: 0;
      width: $xs-pxl;
      height: $xs-pxl;
      background: transparent;
      box-shadow: $stars-big;
      @include roundedCorners;
    }
  }

  @keyframes animateStars {
    0%{@include rotateBase;}
    25%{@include rotateRight;}
    50%{@include rotateBase;}
    75%{@include rotateLeft;}
    100%{@include rotateBase;}
  }

}
</style>