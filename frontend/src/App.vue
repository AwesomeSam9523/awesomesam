<template>
  <router-view :key="$route.path"></router-view>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  name: 'App',
  components: {
    RouterView
  },
  created: function () {
    console.log('App created')
    console.log(this.$router.getRoutes())
  },
}
</script>

<style lang="scss">
@import "~@/assets/styles";
@import url('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}

</style>
