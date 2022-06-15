<template>
  <div id="app">
    <div id="nav">
      <component :is="layout"/>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    computed: {
      layout() {
        const layoutName = this.$route.meta.layout || 'Default' ;
        return () => import('./components/layouts/'+layoutName+'.vue')
      }
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
