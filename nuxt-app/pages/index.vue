<template>
  <!-- HERO MOBILE -->
  <section class="hero">
    <img src="/images/heor-bg.png" class="hero-img" />

    <div class="hero-overlay">
      <h1>
        Aménagement<br />
        <span>sur-mesure</span>
      </h1>

      <p>
        Créez la cuisine ou le dressing<br />
        de vos rêves
      </p>

      <Button>Nos réalisations</Button>
    </div>
  </section>

 <!-- CATEGORIES -->
<section class="section">
  <div class="container cards">
    
    <div class="card">
      <img
        src="/images/cuisine1.png"
        alt="Cuisines sur mesure"
        class="card-img"
      />

      <h3>Cuisines & Espaces de Vie</h3>
      <Button>Voir les cuisines</Button>
    </div>

    <div class="card">
      <img
        src="/images/dressing.png"
        alt="Dressings sur mesure"
        class="card-img"
      />

      <h3>Dressings & Rangements</h3>
      <Button>Voir les dressings</Button>
    </div>

  </div>
</section>


 <section class="section services-section">
  <h2 class="services-title">
    Réalisez votre projet<br />
    <span>sur-mesure</span>
  </h2>

  <p class="services-subtitle">
    Spécialistes de l’aménagement sur-mesure, nous vous accompagnons
    de la conception jusqu’à l’installation.
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


  <Button class="cta">Demander un devis</Button>
</section>

<!-- AVIS CLIENTS -->
<section class="section testimonials-section">
  <h2 class="testimonials-title">
    Ce que disent<br />
    <span>nos clients</span>
  </h2>

  <div class="testimonials-carousel">
    <article class="testimonial-card">
      <p class="quote">
        Un accompagnement exceptionnel du début à la fin.
        Le résultat est au-delà de nos attentes.
      </p>
      <span class="author">Sophie M.</span>
    </article>

    <article class="testimonial-card">
      <p class="quote">
        Une cuisine sublime, pensée dans les moindres détails.
        Équipe très professionnelle.
      </p>
      <span class="author">Julien R.</span>
    </article>

    <article class="testimonial-card">
      <p class="quote">
        Notre dressing est magnifique et parfaitement optimisé.
        Nous recommandons sans hésiter.
      </p>
      <span class="author">Claire & Thomas</span>
    </article>
  </div>
</section>


</template>

<script setup>
import Button from '~/components/ui/Button.vue'
import SectionTitle from '~/components/ui/SectionTitle.vue'
</script>

<style scoped>
.hero {
  position: relative;
  height: 68vh; /* ✅ plus élégant */
  min-height: 520px;
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
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.05)
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
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr; /* ✅ 2 colonnes sur mobile */
  gap: 16px;
}

.card {
  background: white;
  border-radius: 18px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
  padding-bottom: 20px;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.card:active {
  transform: scale(0.98);
}

.card-img {
  width: 100%;
  height: 140px;
  object-fit: cover;
}

.card h3 {
  font-size: 15px;
  margin: 14px 12px 10px;
  font-weight: 500;
  color: #6d5c4b; /* ton brun chaud */
}

.services-section {
  background: transparent; /* laisse passer le fond body */
  padding: 64px 24px;
  text-align: center;
  padding-top: 1px;
}


.services-title {
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.services-title span {
  font-style: italic;
  font-weight: 300;
}

.services-subtitle {
  font-size: 14px;
  color: #8a7a68;
  max-width: 320px;
  margin: 0 auto 40px;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px; /* + d’air */
  margin-bottom: 48px;
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
  background: rgba(184, 146, 90, 0.12);
  padding: 16px;
  border-radius: 50%;
}

.service span {
  font-size: 14px;
  color: #6d5c4b;
  line-height: 1.4;
  text-align: center;
  max-width: 110px;
}


.cta {
  margin: 0 auto;
}
/* ===== AVIS CLIENTS (LUXE) ===== */

.testimonials-section {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  padding: 96px 24px;
  text-align: center;
  padding-top: 1px;
}

/* TITRE */
.testimonials-title {
  font-size: 28px;
  font-weight: 400;
  color: #5a4a3b;
  margin-bottom: 56px;
  letter-spacing: 0.4px;
}

.testimonials-title span {
  font-style: italic;
  font-weight: 300;
  color: #7b6a58;
}
/* ===== AVIS CLIENTS – MOBILE FIRST ===== */

.testimonials-carousel {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 16px;
}

.testimonials-carousel::-webkit-scrollbar {
  display: none;
}

.testimonial-card {
  min-width: 88%;
  max-width: 88%;
  scroll-snap-align: center;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.96),
    rgba(248, 246, 244, 0.96)
  );

  border-radius: 26px;
  padding: 28px 22px;

  border: 1px solid rgba(210, 190, 160, 0.35);

  box-shadow:
    0 16px 36px rgba(0, 0, 0, 0.08);
}


.testimonial-card:active {
  transform: scale(0.98);
}

/* TEXTE */
.quote {
  font-size: 15px;
  line-height: 1.8;
  color: #6d5c4b;
  margin-bottom: 20px;
  position: relative;
  font-weight: 300;
}

/* GUILLEMET LUXE */
.quote::before {
  content: "“";
  font-size: 42px;
  color: #d4b07a;
  position: absolute;
  top: -22px;
  left: -6px;
  font-family: serif;
}

/* AUTEUR */
.author {
  font-size: 13px;
  font-weight: 400;
}


/* ===== RESPONSIVE ===== */

@media (min-width: 768px) {
  .testimonials-carousel {
    gap: 24px;
  }

  .testimonial-card {
    min-width: 46%;
    max-width: 46%;
    padding: 36px 30px;
  }
}

@media (min-width: 1024px) {
   .testimonial-card {
    min-width: 30%;
    max-width: 30%;
  }
}


@media (max-width: 360px) {
  .cards {
    grid-template-columns: 1fr;
  }
}

</style>
