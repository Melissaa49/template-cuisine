<template>
  <!-- HERO DRESSINGS -->
  <section class="hero">
    <img src="/images/dressing.png" class="hero-img" />

    <div class="hero-overlay">
      <h1>
        Dressings<br />
        <span>sur-mesure</span>
      </h1>

      <p>
        Créez un dressing fonctionnel<br />
        et élégant, pensé pour vous
      </p>

      <Button>Demander un devis</Button>
    </div>
  </section>

  <!-- SERVICES -->
  <section class="section services">
    <h2 class="section-title">
      Nos services
    </h2>

    <p class="section-subtitle">
      Des solutions de rangement sur-mesure,
      conçues pour optimiser chaque espace.
    </p>

    <div class="services-grid">
      <div class="service">
        <img src="/images/icone-cuisine.png" alt="" />
        <span>Conception personnalisée</span>
      </div>

      <div class="service">
        <img src="/images/icone-cuisine2.png" alt="" />
        <span>Fabrication sur-mesure</span>
      </div>

      <div class="service">
        <img src="/images/icone-cuisine3.png" alt="" />
        <span>Installation clé en main</span>
      </div>
    </div>
  </section>

  <!-- REALISATIONS -->
  <section class="section realisations">
    <h2 class="section-title">
      Nos dernières réalisations
    </h2>

    <p class="section-subtitle">
      Découvrez nos dressings et rangements
      réalisés sur-mesure.
    </p>

    <div class="realisations-scroll">
      <div class="real-card">
        <img src="/images/dressing.png" />
        <span>Dressing moderne</span>
      </div>

      <div class="real-card">
        <img src="/images/dressing2.png" />
        <span>Dressing contemporain</span>
      </div>

      <div class="real-card">
        <img src="/images/dressing3.png" />
        <span>Dressing élégant</span>
      </div>
    </div>

    <Button class="outline">
      Voir toutes les réalisations
    </Button>
  </section>

  <!-- CTA FINAL -->
  <section class="section cta-section">
    <h2>
      Un projet de dressing<br />
      <span>sur-mesure&nbsp;?</span>
    </h2>

    <p>
      Contactez-nous pour un devis gratuit et
      concevons ensemble un rangement
      parfaitement adapté à votre intérieur.
    </p>

    <Button>Demander un devis</Button>
  </section>
</template>

<script setup>
import Button from '~/components/ui/Button.vue'
</script>

<style scoped>
/* ===== HERO ===== */
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
  position: relative;
  z-index: 2;
  height: 100%;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.18),
    rgba(0, 0, 0, 0.04)
  );
}

.hero h1 {
  font-size: 36px;
  color: white;
  font-weight: 400;
}

.hero span {
  font-style: italic;
  font-weight: 300;
}

.hero p {
  color: white;
  margin: 16px 0 28px;
  line-height: 1.5;
}

/* ===== SECTIONS ===== */
.section {
  padding: 72px 24px;
  text-align: center;
}

.section-title {
  font-size: 26px;
  font-weight: 400;
  margin-bottom: 12px;
}

.section-subtitle {
  font-size: 14px;
  color: #8a7a68;
  max-width: 320px;
  margin: 0 auto 48px;
  line-height: 1.6;
}

/* ===== SERVICES ===== */
.services {
  background: transparent;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.service img {
  width: 56px;
  height: 56px;
  margin-bottom: 12px;
  filter: drop-shadow(0 6px 12px rgba(180,150,100,0.25));
}

.service span {
  font-size: 14px;
  color: #6d5c4b;
  line-height: 1.4;
}

/* ===== REALISATIONS ===== */
.realisations {
  background: transparent;
}

.realisations-scroll {
  display: flex;
  gap: 18px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 24px;
  margin-bottom: 32px;
}

.real-card {
  min-width: 240px;
  scroll-snap-align: center;
  background: white;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 18px 36px rgba(0,0,0,0.08);
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

/* ===== CTA ===== */
.cta-section {
  background: transparent;
  padding-bottom: 96px;
}

.cta-section h2 {
  font-size: 28px;
  font-weight: 400;
}

.cta-section span {
  font-style: italic;
  font-weight: 300;
}

.cta-section p {
  font-size: 14px;
  color: #8a7a68;
  max-width: 320px;
  margin: 16px auto 32px;
  line-height: 1.6;
}
</style>
