<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  background: var(--gold);
  color: white;
  border: none;
  border-radius: 999px;
  padding: 14px 28px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}
</style>
