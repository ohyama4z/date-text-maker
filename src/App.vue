<template>
  <div id="app">
    <text-maker />
  </div>
</template>

<script>
import TextMaker from './components/TextMaker.vue'

export default {
  name: 'App',
  components: {
    TextMaker: TextMaker
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
