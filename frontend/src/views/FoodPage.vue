<template>
  <div id="main-cont">
    <div class="panel">
      <order-panel />
    </div>
    <div class="content">

    </div>
    <div class="panel">
      <bottom-panel />
    </div>
  </div>
</template>

<script>
import OrderPanel from "@/components/food/OrderPanel.vue";
import BottomPanel from "@/components/food/BottomPanel.vue";

export default {
  name: "FoodPage",
  components: {
    OrderPanel,
    BottomPanel,
  }
};
</script>

<style lang="scss" scoped>
@import url('../assets/styles/food.scss');

#main-cont {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.content {
  width: 100%;
  height: calc(100% - 8rem);
}

.panel {
  width: 100%;
}
</style>