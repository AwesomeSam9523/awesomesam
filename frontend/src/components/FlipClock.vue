<template>
  <div class="flip-clock" ref="clock">
    <span class="flip-clock__piece flip" ref="daysTracker">
      <b class="flip-clock__card card">
        <b class="card__top">11</b>
        <b class="card__bottom" data-value="00"></b>
        <b class="card__back" data-value="00">
          <b class="card__bottom" data-value="00"></b>
        </b>
      </b>
      <span class="flip-clock__slot">Days</span>
    </span>
    <span class="flip-clock__piece flip" ref="hoursTracker">
      <b class="flip-clock__card card">
        <b class="card__top">23</b>
        <b class="card__bottom" data-value="00"></b>
        <b class="card__back" data-value="00">
          <b class="card__bottom" data-value="00"></b>
        </b>
      </b>
      <span class="flip-clock__slot">Hours</span>
    </span>
    <span class="flip-clock__piece flip" ref="minutesTracker">
      <b class="flip-clock__card card">
        <b class="card__top">59</b>
        <b class="card__bottom" data-value="00"></b>
        <b class="card__back" data-value="00">
          <b class="card__bottom" data-value="00"></b>
        </b>
      </b>
      <span class="flip-clock__slot">Minutes</span>
    </span>
    <span class="flip-clock__piece flip" ref="secondsTracker">
      <b class="flip-clock__card card">
        <b class="card__top">09</b>
        <b class="card__bottom" data-value="00"></b>
        <b class="card__back" data-value="00">
          <b class="card__bottom" data-value="00"></b>
        </b>
      </b>
      <span class="flip-clock__slot">Seconds</span>
    </span>
  </div>
</template>

<script>
import Clock from "@/assets/scripts/clock.ts"

export default {
  async mounted() {
    // deadline is 10th August, 2023 at 9:00 PM IST
    const deadline = new Date(Date.UTC(2023, 7, 10, 15, 30, 0));
    // const deadline = new Date(Date.now() + 10000);
    new Clock(deadline, function () {}, this.$refs);
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
html {
  height: 100%;
}

body {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #EEE;
}

.flip-clock {
  display: flex;
  flex-direction: row;
  text-align: center;
  perspective: 400px;

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
}

.flip-clock__piece {
  display: flex;
  flex-direction: column;
  margin: 0 0.75rem;
}

.flip-clock__slot {
  font-size: 2vw;
}

@halfHeight: 0.72em;
@borderRadius: 0.15em;

.card {
  display: block;
  position: relative;
  padding-bottom: @halfHeight;
  font-size: 9vw;
  line-height: 0.95;
}

.card__top,
.card__bottom,
.card__back::before,
.card__back::after {
  display: block;
  height: @halfHeight;
  color: #ccc;
  background: #222;
  padding: 0.25em 0.25em;
  border-radius: @borderRadius @borderRadius 0 0;
  backface-visiblity: hidden;
  transform-style: preserve-3d;
  width: 1.8em;
  transform: translateZ(0);
}

.card__bottom {
  color: #FFF;
  position: absolute;
  top: 50%;
  left: 0;
  border-top: solid 1px #000;
  background: #393939;
  border-radius: 0 0 @borderRadius @borderRadius;
  pointer-events: none;
  overflow: hidden;
}

.card__bottom::after {
  display: block;
  margin-top: -@halfHeight;
}

.card__back::before,
.card__bottom::after {
  content: attr(data-value);
}

.card__back {
  position: absolute;
  top: 0;
  height: 100%;
  left: 0%;
  pointer-events: none;
}

.card__back::before {
  position: relative;
  z-index: -1;
  overflow: hidden;
}

.flip .card__back::before {
  animation: flipTop 0.3s cubic-bezier(.37, .01, .94, .35);
  animation-fill-mode: both;
  transform-origin: center bottom;
}

.flip .card__back .card__bottom {
  transform-origin: center top;
  animation-fill-mode: both;
  animation: flipBottom 0.6s cubic-bezier(.15, .45, .28, 1); // 0.3s; 
}

@keyframes flipTop {
  0% {
    transform: rotateX(0deg);
    z-index: 2;
  }

  0%,
  99% {
    opacity: 0.99;
  }

  100% {
    transform: rotateX(-90deg);
    opacity: 0;
  }
}

@keyframes flipBottom {

  0%,
  50% {
    z-index: -1;
    transform: rotateX(90deg);
    opacity: 0;
  }

  51% {
    opacity: 0.99;
  }

  100% {
    opacity: 0.99;
    transform: rotateX(0deg);
    z-index: 5;
  }
}
</style>