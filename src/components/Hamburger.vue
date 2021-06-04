<template>
  <div class="test-nav">
     <button v-on:click="toggleShow" class="toggle"  id="hamburger">  
        <i class="fas fa-bars"></i>
      </button>
        <ul v-show="navShowing" class="topNav" id="nav-ul">
          <li class="item1">
            <a class="item1__anchor1" href="#home">Home</a>
          </li>
          <li class="item2">
            <a class="item2__anchor2" href="#About">About</a>
          </li>
          <li class="item3">
            <a class="item3__anchor3" href="#destinations">Destinations</a>
          </li>
          <li class="item4">
            <a class="item4__anchor4" href="#blog">Blog</a>
          </li>
        </ul>

        <ul class="topNavWide">
          <li class="item1">
            <a class="item1__anchor1" href="#home">Home</a>
          </li>
          <li class="item2">
            <a class="item2__anchor2" href="#About">About</a>
          </li>
          <li class="item3">
            <a class="item3__anchor3" href="#destinations">Destinations</a>
          </li>
          <li class="item4">
            <a class="item4__anchor4" href="#blog">Blog</a>
          </li>
        </ul>
  </div>
</template>

<script>
  export default {
    name: 'Hamburger',
    data() {
      return  {
        navShowing: false
      }
    },
    methods : {
      toggleShow(){
        this.navShowing = !this.navShowing 
      },  
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

.test-nav { 
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

// Button 
.toggle {
  display: block;
  @include hamburger;
  @include h-menu-responsive;
}

// This Navigation is displayed only on small screen viewports
.topNav {
  margin: 0;
  @include top-list;
  @include responsive(tabletLarge) {
    @include navbar-tabletL-desktop;
    display: none;
  }
  @include responsive(tabletXLarge) {
    @include navbar-tabletL-desktop;
    display: none;
  }
  @include responsive(desktop) {
    @include navbar-tabletL-desktop;
    display: none;
  }
  @include responsive(desktopLarge) {
    @include navbar-tabletL-desktop;
    display: none;
  } 
}

// This Navigation is displayed only on large tables, desktops and other large screen viewports
.topNavWide {
  margin: 0;
  @include top-list;
  @include responsive(phone) {
    @include navbar-mobile;
    display: none;
  }
  @include responsive(tablet) {
    @include navbar-tablet;
    display: none;
  }
  @include responsive(tabletLarge) {
    @include navbar-tabletL-desktop;
    display: none;
  }
  @include responsive(tabletXLarge) {
    @include navbar-tabletL-desktop;
  }
  @include responsive(desktop) {
    @include navbar-tabletL-desktop;
  }
  @include responsive(desktopLarge) {
    @include navbar-tabletL-desktop;
    justify-content: space-evenly;
  }
}

// Lists items and their anchors
.item1{
  @include top-navbar-item-1;
  &__anchor1{
    @include navbar-item;    
      &:hover {
        letter-spacing: $m-pxl;
        text-transform: uppercase;
      }
  }
}
.item2{
  @include top-navbar-item-2;
  &__anchor2 {
    @include navbar-item;
      &:hover {
        letter-spacing: $s-pxl;
        font-style: italic;
      }
  }
}
.item3{
  @include top-navbar-item-3;
  &__anchor3 {
    @include navbar-item;
      &:hover {
        letter-spacing: $xl-pxl;
      }
  }
}
.item4{
  @include top-navbar-item-4;
  &__anchor4 {
    @include navbar-item;
      &:hover {
        letter-spacing: $s-pxl;
        text-transform: uppercase;
      }
  }
}
         

</style>