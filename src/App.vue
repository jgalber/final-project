<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/destinations">Destinations</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
    <Myfooter />
  </div> 
</template>

<script>
import Myfooter from './components/Myfooter.vue';

  export default {
    name: 'App',
    components: {
        Myfooter
    }
  }
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
