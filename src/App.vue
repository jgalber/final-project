<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
      <router-link to="/blog">Blog</router-link> 
      <router-link to="/advisors">Advisors</router-link> 
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view />
    <Home />
  </div> 
</template>

<script>
  export default {
    data() {
      return {
        active: 'Home'
      }
    },
    methods: {
      makeActive: function(item){
        this.active = item;
      }
    },
  }
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: fit-content;
}

#nav {
  margin: 0;
  padding: 0;
  
  a {
    display: none;
    font-weight: bold;
    color: #2c3e50;


    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
