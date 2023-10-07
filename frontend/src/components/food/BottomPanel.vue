<template>
  <div class="header">
    <div class="cart icon app-icon">
      <i class="fa-solid fa-cart-shopping"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 6rem;
  background: var(--primary-1);
  display: flex;
  align-items: center;
  color: white;
}
.cart {
  width: 2rem;
  height: 2rem;
  background: var(--white);
  border-radius: 50%;
}

.icon {
  font-size: 2.5rem;
  margin-left: 1.25rem;
}
</style>