<template>
  <div class="pages">
    <div class="container page1">
      <div class="background">
        <section :style="{ 'background': 'url(' + require('@/assets/backgrounds/MUJ_night_sky.jpg') + ')' }">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </section>
      </div>
      <div class="heading">
        New Horizon
      </div>
      <div class="tagline">
        “A Fresher’s Fiesta”
      </div>
      <div class="field">
        <div class="text" @click="scrollToPage2">Scroll</div>
        <div class="scroll" @click="scrollToPage2"></div>
      </div>
    </div>
    <div class="container page2">
      <div class="background2">
        <!-- add particles.js -->
        <div id="particles-js" style="opacity: 0.75;"></div>
      </div>
      <div class="clock" v-if="showClock">
        <FlipClock />
      </div>
      <div class="links-cont" v-else>
        
      </div>
    </div>
  </div>
</template>
  
<script>
import '@/assets/scripts/particles.js';
import config from '@/assets/scripts/config.js';
import FlipClock from '@/components/FlipClock.vue';


export default {
  components: {
    FlipClock
  },
  data() {
    return {
      showClock: true,
    }
  },
  mounted() {
    window.particlesJS('particles-js', config);
  },
  methods: {
    scrollToPage2() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Borel&family=Patua+One&display=swap');

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background2 {
  background-color: black;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: blur(5px);
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.heading {
  display: flex;
  font-family: 'Patua One', sans-serif;
  font-size: 7rem;
  color: rgb(255, 255, 255);
}

.tagline {
  // margin-top: 0.5rem;
  font-family: 'Borel', sans-serif;
  font-size: 2rem;
  color: rgb(255, 255, 255);
  font-style: italic;
}

body {
  overflow-x: hidden;
}

section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  /* https://lh3.googleusercontent.com/ka_5IYJDRkXZnbptxq64LPuggGL5FM8gnpJlsuSiOQh4b39kMkiRbVfX8iK8bjMg5SLkdfoix09P60wyFjN2=w681-h614 */
  // background: url("https://i.postimg.cc/c1Q3njM0/bg2.jpg");
  /*   background-color:black; */
  background-size: cover !important;
  background-position: center !important;
  // animation: backgroundAnimation 50s linear infinite;
  z-index: -1;
}

@keyframes backgroundAnimation {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }
}

span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.1);
  animation: animate 3s linear infinite;
}

span::before {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 300px;
  height: 1px;
  background: linear-gradient(90deg, #fff, transparent);
}

@keyframes animate {
  0% {
    transform: rotate(315deg) translateX(0);
    opacity: 1;
  }

  70% {
    opacity: 1;
  }

  100% {
    transform: rotate(315deg) translateX(-1000px);
    opacity: 0;
  }
}

span:nth-child(1) {
  top: 0;
  right: 0;
  left: initial;
  animation-delay: 0s;
  animation-duration: 1s;
}

span:nth-child(2) {
  top: 0;
  right: 80px;
  left: initial;
  animation-delay: 0.2s;
  animation-duration: 3s;
}

span:nth-child(3) {
  top: 80;
  right: 0px;
  left: initial;
  animation-delay: 0.4s;
  animation-duration: 2s;
}

span:nth-child(4) {
  top: 0;
  right: 180px;
  left: initial;
  animation-delay: 0.6s;
  animation-duration: 1.5s;
}

span:nth-child(5) {
  top: 0;
  right: 400px;
  left: initial;
  animation-delay: 0.8s;
  animation-duration: 2.5s;
}

span:nth-child(6) {
  top: 0;
  right: 600px;
  left: initial;
  animation-delay: 1s;
  animation-duration: 3s;
}

span:nth-child(7) {
  top: 300px;
  right: 0px;
  left: initial;
  animation-delay: 1.2s;
  animation-duration: 1.75s;
}

span:nth-child(8) {
  top: 0px;
  right: 700px;
  left: initial;
  animation-delay: 1.4s;
  animation-duration: 1.25s;
}

span:nth-child(9) {
  top: 0px;
  right: 1000px;
  left: initial;
  animation-delay: 0.75s;
  animation-duration: 2.25s;
}

span:nth-child(9) {
  top: 0px;
  right: 450px;
  left: initial;
  animation-delay: 2.75s;
  animation-duration: 2.75s;
}

@media (max-width: 768px) {
  .heading {
    font-size: 5rem;
  }
}
.field {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 16rem;
  flex-direction: column;
  // width: 300px;
}
.text {
  font-family: 'Arial';
  cursor: pointer;
  color: white;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #01e1ff, 0 0 70px #01e1ff, 0 0 80px #01e1ff, 0 0 100px #01e1ff, 0 0 150px #01e1ff;
}
.scroll {
  width: 60px;
  height: 60px;
  border: 2px solid #01e1ff;
  border-radius: 50%;
  position: relative;
  animation: down 1.5s infinite;
  -webkit-animation: down 1.5s infinite;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 18px;
    width: 18px;
    height: 18px;
    border-left: 2px solid #dcdcdc;
    border-bottom: 2px solid #dcdcdc;
    transform: rotate(-45deg);
  }
}

@keyframes down {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translateY(15px);
  }

  40% {
    transform: translate(0);
  }
}

@-webkit-keyframes down {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translateY(15px);
  }

  40% {
    transform: translate(0);
  }
}
.pages {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  flex-wrap: wrap;
}
.page1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.page2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background-color: #000000;
}
.links-cont {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
  