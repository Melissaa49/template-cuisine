<template>
  <!-- HERO -->
  <section class="hero">
    <div class="hero-overlay">
      <h1>
        Demander un devis<br />
        <span>sur-mesure</span>
      </h1>

      <p>
        Parlons de votre projet et concevons ensemble
        un aménagement parfaitement adapté à vos besoins.
      </p>
    </div>
  </section>

  <!-- FORMULAIRE -->
  <section class="section form-section">
    <h2 class="section-title">Votre projet</h2>

    <p class="section-subtitle">
      Remplissez ce formulaire, nous vous recontacterons rapidement.
    </p>

    <div class="form-wrapper">
      <form class="contact-form">
        <input type="text" placeholder="Nom & Prénom" />
        <input type="email" placeholder="Adresse email" />
        <input type="tel" placeholder="Téléphone" />
<select>
  <option value="" disabled selected>Type de projet</option>
  <option>Cuisine sur-mesure</option>
  <option>Dressing / Rangements</option>
  <option>Autre projet</option>
</select>


        <textarea
          rows="4"
          placeholder="Décrivez votre projet (dimensions, attentes, style...)"
        />

        <Button>Envoyer ma demande</Button>
      </form>
    </div>
  </section>

  <!-- MAP + INFOS -->
  <section class="section map-section">
    <div class="map-wrapper">
      <iframe
        src="https://www.google.com/maps?q=48.8566,2.3522&z=14&output=embed"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <div class="infos">
      <h3>Notre showroom</h3>

      <p>
        12 rue de l’Exemple<br />
        75000 Paris
      </p>

      <p>
        01 23 45 67 89<br />
        contact@nomentreprise.fr
      </p>
    </div>
  </section>

  <!-- CTA FINAL -->
  <section class="section cta-section">
    <h2>
      Un projet en tête&nbsp;?<br />
      <span>Parlons-en</span>
    </h2>

    <p>
      Chaque projet est unique. Nous vous accompagnons
      de la conception à l’installation.
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
  height: 42vh;
  min-height: 300px;
  background:
    radial-gradient(
      circle at top,
      rgba(255,255,255,0.9),
      rgba(245,240,235,0.95)
    );
}

.hero-overlay {
  height: 100%;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.hero h1 {
  font-size: 32px;
  font-weight: 400;
  color: #5a4a3b;
}

.hero span {
  font-style: italic;
  font-weight: 300;
}

.hero p {
  font-size: 14px;
  color: #8a7a68;
  max-width: 320px;
  margin: 16px auto 0;
  line-height: 1.6;
}

/* ===== STRUCTURE ===== */
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
  margin: 0 auto 40px;
  line-height: 1.6;
}

/* ===== FORMULAIRE ===== */
.form-wrapper {
  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(4px);
  border-radius: 28px;
  padding: 36px 28px;
  box-shadow: 0 24px 48px rgba(0,0,0,0.06);
  max-width: 420px;
  margin: 0 auto;
}

.contact-form {
  display: grid;
  gap: 18px;
}
.contact-form select {
  color: #9b8a75; /* couleur "placeholder" */
}

/* Quand une vraie option est choisie */
.contact-form select:valid {
  color: #5a4a3b;
}

/* Focus (tap / clic) */
.contact-form select:focus {
  border-color: rgba(184, 146, 90, 0.6);
  box-shadow: 0 0 0 3px rgba(184, 146, 90, 0.18);
  outline: none;
}

.contact-form input,
.contact-form textarea,
.contact-form select {
  width: 100%;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(0,0,0,0.08);
  font-size: 14px;
  font-family: inherit;
  background: white;
  color: #5a4a3b;
}

.contact-form textarea {
  resize: none;
}

/* SELECT élégant (pas bleu) */
.contact-form select {
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='%235a4a3b' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 16px;
  padding-right: 44px;
}

.contact-form button {
  margin-top: 12px;
}

/* ===== MAP ===== */
.map-section {
  padding-top: 48px;
}

.map-wrapper {
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 28px 56px rgba(0,0,0,0.1);
  margin-bottom: 32px;
}

.map-wrapper iframe {
  width: 100%;
  height: 220px;
  border: 0;
}

.infos h3 {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 12px;
  color: #5a4a3b;
}

.infos p {
  font-size: 14px;
  color: #6d5c4b;
  line-height: 1.6;
}

/* ===== CTA ===== */
.cta-section {
  background: linear-gradient(
    to bottom,
    rgba(255,255,255,0.6),
    rgba(245,240,235,0.9)
  );
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
@media (hover: hover) {
  .contact-form select:hover {
    border-color: rgba(184, 146, 90, 0.4);
  }
}
</style>
