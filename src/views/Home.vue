<template>
  <div class="grid">
    <Homeader />
      <header id="showcase" class="grid__header">
        <div class="grid__header__bg-img"></div>
      </header>
  </div>
  <Myfooter />
</template>

<script>
import Homeader from '@/components/Homeader.vue';
import Myfooter from '@/components/Myfooter.vue';

export default {
  name: 'App',
  components: {
    Homeader,
    Myfooter  
  }
}
</script>

