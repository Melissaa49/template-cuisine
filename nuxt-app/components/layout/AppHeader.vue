<template>
  <header class="header">
    <div class="header-inner">
      <div class="logo">
        N E<br /><small>Nom Entreprise</small>
      </div>

      <button class="burger">☰</button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(247, 244, 241, 0.9);
  backdrop-filter: blur(6px);
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
}

.logo {
  font-size: 18px;
  letter-spacing: 4px;
  text-align: center;
}

.logo small {
  display: block;
  font-size: 12px;
  letter-spacing: 2px;
}

.burger {
  background: none;
  border: none;
  font-size: 22px;
}
</style>
