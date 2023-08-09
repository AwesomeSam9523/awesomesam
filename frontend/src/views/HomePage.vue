<template>
  <div class="video-background">
    <video autoplay loop muted>
      <source src="@/assets/videos/bg.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <div class="main-cont">
    <h1>
      <span>&lt;</span>AwesomeSam<span>/&gt;</span>
    </h1>
    <div class="connect-cont">
      <div class="heading">
        Connect with me on
      </div>
      <div class="links">
        <button class="btn" @click="sendTo('github')">
          <i class="fa fa-github"></i>
        </button>
        <button class="btn" @click="sendTo('spotify')">
          <i class="fa-brands fa-spotify"></i>
        </button>
        <button class="btn" @click="sendTo('discord')">
          <i class="fa-brands fa-discord"></i>
        </button>
        <button class="btn" @click="sendTo('twitter')">
          <i class="fa-brands fa-twitter"></i>
        </button>
        <button class="btn" @click="sendTo('reddit')">
          <i class="fa-brands fa-reddit"></i>
        </button>
        <button class="btn" @click="sendTo('stackoverflow')">
          <i class="fa-brands fa-stack-overflow"></i>
        </button>
        <button class="btn" @click="sendTo('email')">
          <i class="fa-regular fa-envelope"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlMap: {
        github: 'https://github.com/AwesomeSam9523',
        spotify: 'https://open.spotify.com/user/arfu4gxiomfgdde3adimpijzx?si=14e7b8eb52254dbb',
        discord: 'https://discordapp.com/users/771601176155783198',
        stackoverflow: 'https://stackoverflow.com/users/14273514/awesomesam',
        reddit: 'https://www.reddit.com/user/Awesome_Sam_',
        twitter: 'https://twitter.com/AwesomeSam_',
        email: 'mailto:contact@awesomesam.dev'
      }
    }
  },
  created() {
    console.log('HomePage created')
  },
  methods: {
    sendTo(location) {
      const url = this.urlMap[location];
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">
.main-cont {
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

.heading {
  font-size: 2rem;
  font-family: 'Borel', cursive;
  color: rgb(255, 32, 32);
  text-shadow: -1px -1px 0 rgb(15, 15, 15), 1px -1px 0 rgb(15, 15, 15), -1px 1px 0 rgb(15, 15, 15),
    1px 1px 0 rgb(15, 15, 15), 0px 0.13rem 1px rgba(0, 0, 0, 0.486);
  margin-top: 2rem;
}

h1 {
  color: rgb(229, 255, 32);
  padding: 0;
  margin: 0;
}

h1>span {
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

.links {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  // margin-top: 1rem;
}

.btn {
  background-color: rgb(22, 22, 22);
  border: 0;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  margin: 0.25rem;
  border: 2px solid white;
  // make it a circle
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
}

.btn:hover {
  background-color: bisque;
  color: black;
}

</style>
