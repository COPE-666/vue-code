<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" v-if="false">
    <div class="png">

    </div>
    <div style="text-align: initial;">
      <HelloWorld msg="Welcome to Your Vue.js App" v-if="false" />
      <cyFirst></cyFirst>
      <cySec></cySec>
      <cyFour></cyFour>
    </div>
    <!-- <cyThree></cyThree> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import cyFirst from '@/lib/cytoscape/cy-first.vue'
import cySec from '@/lib/cytoscape/cy-sec.vue'
// import cyThree from '@/lib/cytoscape/cy-three.vue'
import cyFour from './lib/cytoscape/cy-four.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    cyFirst,
    cySec,
    cyFour
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
.png {
  width: 500px;
  height: 300px;
  background-image: url(./assets/logo.png);
}
</style>
