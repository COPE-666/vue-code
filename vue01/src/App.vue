<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" v-if="false">
    <div style="text-align: initial;">
      <HelloWorld msg="Welcome to Your Vue.js App" v-if="false" />
      <cyFirst></cyFirst>
      <cySec></cySec>
      <cy3></cy3>
    </div>
    <!-- <cyThree></cyThree> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import cyFirst from '@/lib/cytoscape/cy-first.vue'
import cySec from '@/lib/cytoscape/cy-sec.vue'
import cy
// import cyThree from '@/lib/cytoscape/cy-three.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    cyFirst,
    cySec,
    // cyThree
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
  margin-top: 60px;
}
</style>
