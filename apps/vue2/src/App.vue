<template>
  <div id="app">
    <ParcelPage />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js v2 App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ParcelPage from './components/ParcelPage.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    ParcelPage
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
