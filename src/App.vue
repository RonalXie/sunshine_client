<template>
  <div id="app">
    <component :is="layout">
    </component>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;

}


</style>
<script>
export default {
  computed: {
    layout() {
      return "layout-" + ( this.$route.meta.layout || "empty" ).toLowerCase() ;
    }
  },
}

</script>
