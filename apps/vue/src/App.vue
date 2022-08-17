
<template>
  <div>

    <div id="app">
        <ParcelPage />
      <img alt="Vue logo" src="./assets/logo.png">
      <br>

      <button @click="increment">+1</button>
      <HelloWorld msg="Welcome to Your Vue.js v3 App" />

    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ParcelPage from './components/ParcelPage.vue'
import {getState} from "@org/root-config";

export default {
  name: 'App',
  components: {
    HelloWorld,
    ParcelPage
},
methods: {
  increment() {
    getState().increment();
  }
}
}
</script>

<style>
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  border: 4px dashed green;
}
#app > button{
  font-size: xx-large;
}

</style>
