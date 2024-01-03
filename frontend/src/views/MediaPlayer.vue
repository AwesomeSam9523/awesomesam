<template>
  <div class="player">
    <video
      v-if="videoSrc"
      id="video"
      controls
      preload="auto"
      :src="videoSrc"
    >
      Sorry, your browser doesn't support embedded videos.
    </video>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoSrc: null
    }
  },

  mounted() {
    const api = process.env.NODE_ENV === 'production' ? 'https://awesomesam.dev/api' : 'http://localhost:5000';
    this.videoSrc = `${api}/media/${this.$route.params.id}`;
  }
}
</script>

<style scoped lang="scss">
.player {
  width: 100vw;
  height: 100vh;
}

#video {
  width: 100%;
  height: 100%;
}

</style>