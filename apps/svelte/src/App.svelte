<script>
  export let name;
</script>

<div id="app">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/498px-Svelte_Logo.svg.png?20191219133350"
    alt=""
    width="100px"
  />
  <h1>Hello Svelte!</h1>
  <section>{name} is mounted!!</section>
</div>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
  }

  section {
    font-size: 1.5rem;
  }
</style>
