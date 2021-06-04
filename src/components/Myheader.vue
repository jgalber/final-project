<template>
  <div class="grid">
    <header id="showcase" class="grid__header">
      <div class="grid__header__bg-img">
        <h1 class="grid__header__logo">Travel Advisor</h1>
        <Hamburger />
      </div>
    </header>
  </div>
</template>

<script>
import Hamburger from "../components/Hamburger.vue";

  export default {
    name: 'App',
    components: {
      Hamburger
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
  }
}
</style>