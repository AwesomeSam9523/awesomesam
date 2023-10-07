<template>
  <div class="header" v-if="!searchActive">
    <div class="right">
      <div class="menu-icon">
        <i class="fa-solid fa-bars"></i>
      </div>
      <label class="text text-1">Food Order MUJ</label>
    </div>
    <div class="left">
      <div class="search icon app-icon" @click="activateSearchBar()" v-if="!searchActive">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  </div>
  <div class="header" v-else>
    <div class="right" :style="{ width: '100%', paddingLeft: '0' }">
      <div class="search icon app-icon">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <input type="text" class="search-bar" placeholder="So what are we eating today...?" ref="foodSearchBar" />
    </div>
    <div class="left" :style="{ width: 'unset' }">
      <div class="search icon app-icon" @click="deactivateSearchBar()">
        <i class="fa-solid fa-times"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchActive: false,
    }
  },
  methods: {
    activateSearchBar() {
      console.log("Search bar activated");
      this.searchActive = true;
      console.log(this.$refs);
      console.log(this.$refs.foodSearchBar);
      setTimeout(() => {
        this.$refs.foodSearchBar.focus();
      }, 50);
    },

    deactivateSearchBar() {
      console.log("Search bar deactivated");
      this.searchActive = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 4rem;
  background: var(--primary-1);
  display: flex;
  color: white;
}

.right {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1.25rem;
}

.menu-icon {
  width: 2rem;
  height: 2rem;
  background: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-right: 1rem;
}

.left {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.text {
  color: var(--white);
  font-size: 1.5rem;
  font-weight: 500;
}

.text-1 {
  font-size: 2rem;
  font-weight: 700;
}

.search {
  width: 2rem;
  height: 2rem;
  background: var(--white);
  border-radius: 50%;
}

.icon {
  font-size: 1.5rem;
  margin: 0 1.25rem;
  cursor: pointer;
}

.search-bar {
  width: 100%;
  height: 100%;
  background: #00000042;
  border: none;
  outline: none;
  font-size: 1.5rem;
  padding-left: 1rem;
  color: white;
  font-weight: 500;  
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgba(255, 255, 255, 0.75);
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: rgba(255, 255, 255, 0.75);
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: rgba(255, 255, 255, 0.75);
}
</style>