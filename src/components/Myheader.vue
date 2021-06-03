<template>
  <div class="grid">
    <header id="showcase" class="grid__header">
      <div class="grid__header__bg-img">
        <h1 class="grid__header__logo">Travel Advisor</h1>
        <!-- <button :class="{'active': active}" @click="toggleActive" class="grid__header__hamburger" id="hamburger"> -->
        <button class="grid__header__hamburger" id="hamburger">  
          <i class="fas fa-bars"></i>
        </button>
        
        <!-- <ul v-if="imageShowing"  v-bind:src="imageSrc" class="grid__header__list" id="nav-ul"> -->
        <ul class="grid__header__list" id="nav-ul">
          <li class="grid__header__list--item1">
            <a class="grid__header__list--item1--anchor1" href="#home">Home</a>
          </li>
          <li class="grid__header__list--item2">
            <a class="grid__header__list--item2--anchor2" href="#About">About</a>
          </li>
          <li class="grid__header__list--item3">
            <a class="grid__header__list--item3--anchor3" href="#destinations">Destinations</a>
          </li>
          <li class="grid__header__list--item4">
            <a class="grid__header__list--item4--anchor4" href="#blog">Blog</a>
          </li>
          
        </ul>
      </div>
    </header>
  </div>
</template>
<script>

 window.onload = function () {
    const hamburger = document.getElementById("hamburger");
    const navUL = document.getElementById("nav-ul");

    hamburger.addEventListener("click", () => {
        navUL.classList.toggle("__show");
    });
    };
  

  // export default {
  //   name: 'burger',
  //   props: {
  //       active: {
  //         type: Boolean, 
  //         required: true,
  //         default: false
  //       }
  //   },
  //   methods: {
  //     toggleActive() {
  //       this.active = !this.active
  //       this.$emit('toggle-menu') 
  //     }
  //   }
  // }


</script>

<style lang="scss" scoped>
@import "../css/_color.palette.scss";
@import "../css/_fonts.scss";
@import "../css/_header.scss";
@import "../css/_grid.scss";
@import "../css/_responsive.layouts.scss";
@import "../css/_media.queries.scss";
@import "../css/_units.scss";

 
.grid { 
 
  &__header {
    // Media queries - full content _header.scss
    @include header-responsive;

    &__bg-img {
      @include header-bg;
    }

    &__logo {
      @include h1;
      &:hover {
        @include h1-hover;
      }
      
      @include logo-responsive;
    }

    &__hamburger {
      @include hamburger;
      
      @include h-menu-responsive;
    }

    // Ul - nav bar
    &__list {
      @include top-list;

    
      @include h-list-responsive;

      &.__show {
        @include hmenu-show-responsive;
      }


      &--item1 {
        @include top-navbar-item-1;
      }


      &--item2 {
        @include top-navbar-item-2;
      }


      &--item3 {
        @include top-navbar-item-3;
      }


      &--item4 {
        @include top-navbar-item-4;
      }
     
    }
 
  }
}
</style>
