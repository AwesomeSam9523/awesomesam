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
        <section :style="{ 'background': 'url(' + require('@/assets/backgrounds/timer.jpg') + ')' }"></section>
      </div>
      <div class="clock" v-if="true">
        <div class="heading2">
          🥳 Event Ended
        </div>
        <div class="heading3" style="font-size: 1.5rem; margin: 0;">
          Meet you all at the campus soon!
        </div>
        <!-- <FlipClock /> -->
      </div>
      <div class="links-cont" v-else :class="{ 'links-mobile': isMobileOrTablet }">
        <div class="direct-link">
          <a href="https://meet.google.com/qik-zonp-hue" target="_blank">
            <img :src="require('@/assets/img/gmeet.png')" class="gmeet">
            Google Meet
          </a>
        </div>
        <div class="or">or</div>
        <div class="meeting-code" @click="copyCodeToClipboard()">
          <div></div>
          qik-zonp-hue
          <i class="fa-regular fa-copy icon-copy"></i>
        </div>
      </div>
      <div class="field field2">
        <div class="text2" @click="scrollToPage3">Scroll</div>
        <div class="scroll scroll2" @click="scrollToPage3"></div>
      </div>
    </div>
    
    <div class="container page3">
      <div class="background3">
        <section :style="{ 'background': 'url(' + require('@/assets/backgrounds/credits.jpg') + ')' }"></section>
      </div>
      <div class="heading3">
        Organized By
      </div>
      <div class="credits">
        <IndividualCredits v-for="credit in credits" :credits="credit" :is-mobile-or-tablet="isMobileOrTablet" :key="credit.name" />
      </div>
    </div>
  </div>
</template>
  
<script>
import '@/assets/scripts/particles.js';
import FlipClock from '@/components/FlipClock.vue';
import IndividualCredits from '@/components/IndividualCredits.vue';
import UAParser from "ua-parser-js"

export default {
  components: {
    FlipClock,
    IndividualCredits,
  },
  data() {
    return {
      // show clock only if time is less than 9pm IST, 10th August 2023 
      showClock: Date.now() < new Date('2023-08-10T15:30:00.000Z').getTime(),
      isMobileOrTablet: false,
      credits: [
        {
          name: 'Samaksh Gupta',
          role: 'Host & Technical Team',
          desc: 'Yeah I made this all lol',
          img: 'samaksh.jpg'
        },
        {
          name: 'Sanjit Chitturi',
          role: 'Team Head',
        },
        {
          name: 'Akhil',
          role: 'Team Head',
        },
        {
          name: 'Ashwika',
          role: 'Designing Team',
        },
        {
          name: 'Piyush Varma',
          role: 'Designing Team',
          desc: 'umm, I make the best alfredos',
          img: 'piyush.jpg'
        },
        {
          name: 'Pranav',
          role: 'Marketing Team',
          desc: 'Heyy everyone, my names Pranav!',
          img: 'pranav.jpg'
        },
        {
          name: 'Hitesh Soni',
          role: 'Marketing Team',
          desc: 'Normal is overrated. Embrace your extraordinary.',
          img: 'hitesh.jpg'
        },
        {
          name: 'Mahi Sachdeva',
          role: 'Links Manager',
        }
      ]
    }
  },
  async created() {
    setInterval(this.updateClock, 100);
    await this.checkMobile();
  },
  methods: {
    scrollToPage2() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    },
    scrollToPage3() {
      window.scrollTo({
        top: window.innerHeight * 2,
        behavior: 'smooth'
      })
    },
    async checkMobile() {
      const uaparser = await new UAParser()

      try {
        const deviceType = uaparser.getDevice().type
        if (deviceType === "mobile" || deviceType === "tablet")
          this.isMobileOrTablet = true
      } catch (e) {
        console.error(e)
      }
    },
    copyCodeToClipboard() {
      const el = document.createElement('textarea');
      el.value = 'qik-zonp-hue';
      el.style.display = 'none';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      alert('Copied to clipboard!');
    },
    updateClock() {
      if (Date.now() < new Date('2023-08-10T15:30:00.000Z').getTime()) {
        this.showClock = true;
      } else {
        this.showClock = false;
      }
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
  position: absolute;
  top: 33.333%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background3 {
  background-color: black;
  position: absolute;
  top: 67%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(5px);
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

.heading2 {
  display: flex;
  font-family: 'Patua One', sans-serif;
  font-size: 4rem;
  color: rgb(255, 255, 255);
  margin-bottom: 1rem;
}

.heading3 {
  display: flex;
  font-family: 'Patua One', sans-serif;
  font-size: 4rem;
  color: rgb(255, 255, 255);
  margin: 2rem 0;
  filter: drop-shadow(0 0 1px #000000);
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

.field2 {
  margin-top: 8rem;
}
.text {
  font-family: 'Arial';
  cursor: pointer;
  color: white;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #01e1ff, 0 0 70px #01e1ff, 0 0 80px #01e1ff, 0 0 100px #01e1ff, 0 0 150px #01e1ff;
}

.text2 {
  font-family: 'Arial';
  cursor: pointer;
  color: white;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  //text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #1a1a1a, 0 0 70px #1a1a1a, 0 0 80px #1a1a1a, 0 0 100px #1a1a1a, 0 0 150px #1a1a1a;
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

.scroll2 {
  border: 2px solid #01e1ff;
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
.page3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  // background-color: #000000;
}
.links-cont {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.clock {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.credits {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 1rem;
}

.links-cont {
  width: 40%;
  margin-top: 10%;
}

.links-mobile {
  width: 70%;
}

.direct-link, .meeting-code {
  width: 100%;
  height: 5rem;
  background-color: #ffffff3c;
  border-radius: 10px;
}

.direct-link > a {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-family: 'Patua One', sans-serif;
  color: white;
  text-decoration: none;
}

.gmeet {
  width: 5rem;
  margin-right: 1rem;
}

.or {
  font-size: 2rem;
  font-family: 'Patua One', sans-serif;
  color: rgba(255, 255, 255, 0.716);
  margin: 1rem 0;
}

.meeting-code {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 2.5rem;
  font-family: 'Patua One', sans-serif;
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.icon-copy {
  width: 5rem;
  height: 100%;
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.648);
  justify-content: center;
  // border-top-left-radius: 10px;
  border-radius: 10px;
}
</style>
  