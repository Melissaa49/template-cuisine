<template>
  <div class="section-title">
    <h2>{{ title }}</h2>
    <p v-if="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String
})
</script>

<style scoped>
.section-title {
  text-align: center;
  margin-bottom: 48px;
}

.section-title h2 {
  font-size: 28px;
  margin-bottom: 12px;
}

.section-title p {
  font-size: 15px;
  color: var(--muted);
}
</style>
