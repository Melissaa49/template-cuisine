<template>
  <header class="header">
    <div class="header-inner">
      <NuxtLink to="/" class="logo">
        N E<br /><small>Nom Entreprise</small>
      </NuxtLink>

      <button class="burger" @click="open = !open" aria-label="Menu">
        ☰
      </button>
    </div>

    <!-- MENU MOBILE -->
    <transition name="slide">
      <nav v-if="open" class="mobile-nav">
        <NuxtLink to="/" @click="open = false">Accueil</NuxtLink>
        <NuxtLink to="/cuisines" @click="open = false">Cuisines</NuxtLink>
        <NuxtLink to="/dressings" @click="open = false">Dressings</NuxtLink>
        <NuxtLink to="/contact" @click="open = false" class="cta">
          Demander un devis
        </NuxtLink>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
/* HEADER */
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(247, 244, 241, 0.92);
  backdrop-filter: blur(8px);
}

/* BAR */
.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
}

/* LOGO */
.logo {
  font-size: 18px;
  letter-spacing: 4px;
  text-align: center;
  color: #2c2c2c;
  text-decoration: none;
}

.logo small {
  display: block;
  font-size: 12px;
  letter-spacing: 2px;
}

/* BURGER */
.burger {
  background: none;
  border: none;
  font-size: 22px;
  color: #000; /* ✅ noir garanti */
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

/* MENU */
.mobile-nav {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: rgba(247, 244, 241, 0.98);
}

.mobile-nav a {
  padding: 14px 0;
  font-size: 16px;
  color: #5a4a3b;
  text-decoration: none;
  text-align: center;
}

/* CTA */
.mobile-nav .cta {
  margin-top: 12px;
  background: #d2b27a;
  color: #fff;
  padding: 14px;
  border-radius: 999px;
}

/* ANIMATION */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
