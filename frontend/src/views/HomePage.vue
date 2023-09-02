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
        <a
          class="tooltip"
          :href="sendTo('github')"
          target="_blank"
          @mouseenter="mouseenter('github', $event)"
          @mouseleave="mouseleave('github', $event)"
        >
          <i class="fa fa-github"></i>
          <span class="tooltiptext">Github</span>
        </a>
        <a
          class="tooltip"
          :href="sendTo('linkedin')"
          target="_blank"
          @mouseenter="mouseenter('linkedin', $event)"
          @mouseleave="mouseleave('linkedin', $event)"
        >
          <i class="fa fa-linkedin"></i>
          <span class="tooltiptext">LinkedIn</span>
        </a>
        <a
          class="tooltip"
          :href="sendTo('discord')"
          target="_blank"
          @mouseenter="mouseenter('discord', $event)"
          @mouseleave="mouseleave('discord', $event)"
        >
          <i class="fa-brands fa-discord"></i>
          <span class="tooltiptext">Discord</span>
        </a>
        <a
          class="tooltip"
          :href="sendTo('twitter')"
          target="_blank"
          @mouseenter="mouseenter('twitter', $event)"
          @mouseleave="mouseleave('twitter', $event)"
        >
        <i class="fa-brands fa-x-twitter"></i>
          <span class="tooltiptext">X (Twitter)</span>
        </a>
        <a
          class="tooltip"
          :href="sendTo('reddit')"
          target="_blank"
          @mouseenter="mouseenter('reddit', $event)"
          @mouseleave="mouseleave('reddit', $event)"
        >
          <i class="fa-brands fa-reddit"></i>
          <span class="tooltiptext">Reddit</span>
        </a>
        <a
          class="tooltip"
          :href="sendTo('stackoverflow')"
          target="_blank"
          @mouseenter="mouseenter('stackoverflow', $event)"
          @mouseleave="mouseleave('stackoverflow', $event)"
        >
          <i class="fa-brands fa-stack-overflow"></i>
          <span class="tooltiptext">Stack Overflow</span>
        </a>
        <a
          class="tooltip"
          :href="sendTo('spotify')"
          target="_blank"
          @mouseenter="mouseenter('spotify', $event)"
          @mouseleave="mouseleave('spotify', $event)"
        >
          <i class="fa-brands fa-spotify"></i>
          <span class="tooltiptext">Spotify</span>
        </a>
        <a
          class="tooltip"
          :href="sendTo('email')"
          target="_blank"
          @mouseenter="mouseenter('email', $event)"
          @mouseleave="mouseleave('email', $event)"
        >
          <i class="fa-regular fa-envelope"></i>
          <span class="tooltiptext">Email me</span>
        </a>
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
        linkedin: 'https://www.linkedin.com/in/samakshgupta04/',
        spotify: 'https://open.spotify.com/user/arfu4gxiomfgdde3adimpijzx?si=14e7b8eb52254dbb',
        discord: 'https://discordapp.com/users/771601176155783198',
        stackoverflow: 'https://stackoverflow.com/users/14273514/awesomesam',
        reddit: 'https://www.reddit.com/user/Awesome_Sam_',
        twitter: 'https://twitter.com/samakshgupta04',
        email: 'mailto:contact@awesomesam.dev'
      },
      hoverColor: {
        github: '#6e5494',
        linkedin: '#0077b5',
        spotify: '#1db954',
        discord: '#7289da',
        stackoverflow: '#f48024',
        reddit: '#ff4500',
        twitter: '#1e3050',
        email: '#ea4335'
      }
    }
  },
  created() {
    console.log('HomePage created')
  },
  methods: {
    sendTo(location) {
      return this.urlMap[location];
    },
    mouseenter(location, event) {
      const target = event.target;
      target.children[0].style.color = this.hoverColor[location];
    },
    mouseleave(location, event) {
      const target = event.target;
      target.children[0].style.color = 'unset';
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
  width: 100%;
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

a {
  background-color: rgb(22, 22, 22);
  border: 0;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  margin: 0.25rem;
  border: 2px solid white;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: inherit;
  justify-content: center;
  text-transform: none;
  text-decoration: none;
}

a:hover {
  background-color: bisque;
  color: black;
  border: 2px solid black;
}

.tooltip {
  position: relative;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  background-color: transparent;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  font-size: 1rem;
  font-family: 'PT Mono', monospace;
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

.tooltip .tooltiptext {
  top: 105%;
  width: 10rem;
  right: 50%;
  transform: translateX(50%);
}
</style>
