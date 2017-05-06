<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>

    <input v-my-focus>
    <div id="hook-arguments-example" v-my-directive:red="message"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: {
    message: 'hello!'
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
