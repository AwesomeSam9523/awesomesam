<template>
  <div class="video-background">
    <video autoplay loop muted>
      <source src="@/assets/videos/bg.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <coming-soon msg="Something Awesome is Coming Soon..." class="soon"/>
</template>

<script>
import ComingSoon from "@/components/ComingSoon.vue"

export default {
  name: 'App',
  components: {
    ComingSoon
  }
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

.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.video-background video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.soon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 10rem;
}
</style>
