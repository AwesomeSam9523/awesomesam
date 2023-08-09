<template>
  <div class="cont" :class="{ 'mobile-cont': isMobileOrTablet }">
    <div class="left">
      <img :src="getImage(credits)" alt="Profile Picture" class="pfp" :class="{ 'mobile-pfp': isMobileOrTablet }" />
    </div>
    <div class="right">
      <div class="nr-holder">
        <div class="name" :class="{ 'mobile-name': isMobileOrTablet }">
          {{ credits.name }}
        </div>
        <div class="role">
          {{ credits.role }}
        </div>
      </div>
      <div class="desc" v-if="credits.desc">
        “{{ credits.desc }}”
      </div>
    </div>
  </div>
</template>

<script>
import UAParser from "ua-parser-js"

export default {
  data() {
    return {
      isMobileOrTablet: false
    }
  },
  props: {
    credits: {
      type: Object,
      required: true
    }
  },
  created() {
    this.checkMobile()
  },
  methods: {
    getImage(credits) {
      if (credits.img) {
        return require(`@/assets/img/${credits.img}`);
      } else {
        return require(`@/assets/img/placeholder.jpg`);
      }
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
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Delius&display=swap');
.cont {
  width: 30%;
  height: 10rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(183, 183, 183, 0.599);
  border-radius: 5px;
  margin: 1rem;
}

.left {
  max-width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 0.75rem;
}

.right {
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.5rem 1rem;
}

.pfp {
  width: auto;
  height: calc(100% - 1.5rem);
  border-radius: 50%;
  border: 0.2rem solid #fff;
  box-shadow: 0 0 0.5rem #fff;
}

.nr-holder {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.name {
  font-size: 1.50rem;
  font-weight: 700;
  color: #000000;
  // text-shadow: 0 0 0.5rem #fff;
}

.desc {
  font-size: 1rem;
  font-weight: 400;
  color: #000000;
  font-family: 'Delius', sans-serif;
  margin-top: 0.5rem;
  text-align: left;
}

.mobile-cont {
  width: 45%;
  height: 9rem;
}

.mobile-name {
  font-size: 1.25rem;
}

.mobile-pfp {
  height: calc(100% - 3rem);
}
</style>