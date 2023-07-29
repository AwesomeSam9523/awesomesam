<template>
  <div class="video-background">
    <video autoplay loop muted>
      <source src="@/assets/videos/bg.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <div class="coming-soon">
    <h1>
      <span>&lt;</span>AwesomeSam<span>/&gt;</span>
    </h1>
  </div>
</template>

<script>
export default {
  created() {
    console.log('HomePage created')
  }
}
</script>

<style scoped lang="scss">
.coming-soon {
  color: rgb(95, 239, 241);
  font-size: 2rem;
  font-family: 'PT Mono', monospace;
  text-shadow: -1px -1px 0 rgb(15, 15, 15), 1px -1px 0 rgb(15, 15, 15), -1px 1px 0 rgb(15, 15, 15),
    1px 1px 0 rgb(15, 15, 15), 0px 0.13rem 1px rgba(0, 0, 0, 0.486);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}

h1 {
  color: rgb(229, 255, 32);
  padding: 0;
  margin: 0;
}

h1 > span {
  color: rgb(95, 239, 241);
  //font-size: 2rem;
  font-family: 'PT Mono', monospace;
  text-shadow: -1px -1px 0 rgb(15, 15, 15), 1px -1px 0 rgb(15, 15, 15), -1px 1px 0 rgb(15, 15, 15),
    1px 1px 0 rgb(15, 15, 15), 0px 0.13rem 1px rgba(0, 0, 0, 0.486);
  padding: 0;
  margin: 0;
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
