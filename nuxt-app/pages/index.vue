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
  gap: 12px;
}

.service img {
  width: 56px;
  height: 56px;
  filter: drop-shadow(0 6px 12px rgba(180, 150, 100, 0.25));
}


.service span {
  font-size: 14px;
  color: #6d5c4b;
  max-width: 90px;
  text-align: center;
  line-height: 1.4;
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

/* CAROUSEL */
.testimonials-carousel {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 85%;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 12px;
}

.testimonials-carousel::-webkit-scrollbar {
  display: none;
}

/* CARTE AVIS */
.testimonial-card {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.95),
    rgba(250, 248, 246, 0.95)
  );

  border-radius: 28px;
  padding: 38px 30px;

  border: 1px solid rgba(210, 190, 160, 0.35);

  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.06),
    0 2px 6px rgba(0, 0, 0, 0.03);

  scroll-snap-align: center;
  transition: transform 0.25s ease;
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
  color: #9b8a75;
  letter-spacing: 0.3px;
}

/* ===== RESPONSIVE ===== */

@media (min-width: 768px) {
  .testimonials-carousel {
    grid-auto-columns: 45%;
  }
}

@media (min-width: 1024px) {
  .testimonials-carousel {
    grid-auto-columns: 30%;
  }
}


@media (max-width: 360px) {
  .cards {
    grid-template-columns: 1fr;
  }
}

</style>
