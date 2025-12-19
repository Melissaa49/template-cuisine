<template>
  <!-- HERO -->
  <section class="hero">
    <img src="/images/cuisine2.png" class="hero-img" />

    <div class="hero-overlay">
      <h1>
        Cuisines<br />
        <span>sur-mesure</span>
      </h1>

      <p>
        Créez la cuisine sur-mesure<br />
        de vos rêves
      </p>

      <Button>Demander un devis</Button>
    </div>
  </section>

  <!-- SERVICES -->
  <section class="section services">
    <h2 class="section-title">Nos services</h2>

    <p class="section-subtitle">
      Concevez une cuisine unique, parfaitement adaptée
      à votre espace et à votre style de vie.
    </p>

    <div class="services-grid">
      <div class="service">
        <i class="fa-solid fa-pencil-ruler"></i>
        <span>Conception personnalisée</span>
      </div>

      <div class="service">
        <i class="fa-solid fa-layer-group"></i>
        <span>Fabrication sur-mesure</span>
      </div>

      <div class="service">
        <i class="fa-solid fa-screwdriver-wrench"></i>
        <span>Installation clé en main</span>
      </div>
    </div>
  </section>

  <!-- REALISATIONS -->
  <section class="section realisations">
    <h2 class="section-title">Nos dernières réalisations</h2>

    <p class="section-subtitle">
      Découvrez nos cuisines sur-mesure conçues avec soin.
    </p>

    <div class="realisations-scroll">
      <div class="real-card">
        <img src="/images/cuisine2.png" />
        <span>Cuisine moderne</span>
      </div>

      <div class="real-card">
        <img src="/images/cuisine3.png" />
        <span>Cuisine contemporaine</span>
      </div>

      <div class="real-card">
        <img src="/images/cuisine1.png" />
        <span>Cuisine classique</span>
      </div>
    </div>

    <Button class="outline">Voir toutes les réalisations</Button>
  </section>

  <!-- CTA -->
  <section class="section cta-section">
    <h2>
      Un projet de cuisine<br />
      <span>sur-mesure&nbsp;?</span>
    </h2>

    <p>
      Contactez-nous pour un devis gratuit et commencez
      à concevoir la cuisine de vos rêves.
    </p>

    <Button>Demander un devis</Button>
  </section>
</template>

<script setup>
import Button from '~/components/ui/Button.vue'
</script>

<style scoped>
/* HERO identique */
.hero {
  position: relative;
  height: 60vh;
  min-height: 460px;
}

.hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  height: 100%;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.18),
    rgba(0,0,0,0.04)
  );
}

.hero h1 {
  font-size: 36px;
  color: white;
}

.hero span {
  font-style: italic;
}

.hero p {
  color: white;
  margin: 16px 0 28px;
}

/* STRUCTURE */
.section {
  padding: 72px 24px;
  text-align: center;
}

.section-title {
  font-size: 26px;
  font-weight: 400;
}

.section-subtitle {
  font-size: 14px;
  color: #8a7a68;
  max-width: 320px;
  margin: 0 auto 48px;
}

/* SERVICES */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.service {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

.service i {
  font-size: 22px;
  color: #6d5c4b;
  background: rgba(184,146,90,0.12);
  padding: 16px;
  border-radius: 50%;
}

.service span {
  font-size: 14px;
  color: #6d5c4b;
  max-width: 110px;
  text-align: center;
}

/* REALISATIONS */
.realisations-scroll {
  display: flex;
  gap: 18px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.real-card {
  min-width: 240px;
  background: white;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 18px 36px rgba(0,0,0,0.08);
  scroll-snap-align: center;
}

.real-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.real-card span {
  display: block;
  padding: 14px;
  font-size: 14px;
  color: #6d5c4b;
}
</style>
