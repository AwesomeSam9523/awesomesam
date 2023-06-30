<template>
  <div class="coming-soon">
    <h1>
      <span>&lt;</span>Coming Soon<span>/&gt;</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon',
  props: {
    msg: String
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
</style>
