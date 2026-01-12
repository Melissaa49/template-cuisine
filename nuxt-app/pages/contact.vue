<template>
  <!-- HERO -->
  <section class="hero">
    <div class="hero-inner">
      <h1>
        Demande de devis<br />
        <span>peinture & décoration</span>
      </h1>
      <p>
        Quelques informations suffisent pour étudier votre projet
        et vous proposer une estimation adaptée.
      </p>
    </div>
  </section>

  <!-- FORM -->
  <section class="section">
    <div class="card">
      <!-- PROGRESS -->
      <div class="progress">
        <span v-for="n in 4" :key="n" :class="{ active: step >= n }" />
      </div>

      <form class="form" @submit.prevent="next">
        <!-- STEP 1 -->
        <div v-if="step === 1" class="step">
          <h2>Votre projet</h2>
          <select v-model="form.type" required>
            <option disabled value="">Type de travaux</option>
            <option>Peinture intérieure</option>
            <option>Peinture extérieure</option>
            <option>Papier peint / décoratif</option>
            <option>Escalier / boiseries</option>
            <option>Rénovation complète</option>
          </select>
        </div>

        <!-- STEP 2 -->
        <div v-if="step === 2" class="step">
          <h2>Surface & état</h2>
          <select v-model="form.surface" required>
            <option disabled value="">Surface approximative</option>
            <option>&lt; 30 m²</option>
            <option>30 – 60 m²</option>
            <option>60 – 100 m²</option>
            <option>100 m² et +</option>
          </select>
          <select v-model="form.etat" required>
            <option disabled value="">État des supports</option>
            <option>Bon état</option>
            <option>À reprendre</option>
            <option>Très abîmé</option>
          </select>
        </div>

        <!-- STEP 3 -->
        <div v-if="step === 3" class="step">
          <h2>Budget & délai</h2>
          <select v-model="form.budget" required>
            <option disabled value="">Budget estimé</option>
            <option>&lt; 1 500 €</option>
            <option>1 500 – 3 000 €</option>
            <option>3 000 – 6 000 €</option>
            <option>6 000 € et +</option>
          </select>
          <select v-model="form.delai" required>
            <option disabled value="">Délai souhaité</option>
            <option>Urgent</option>
            <option>1 – 3 mois</option>
            <option>Flexible</option>
          </select>
        </div>

        <!-- STEP 4 -->
        <div v-if="step === 4" class="step">
          <h2>Coordonnées</h2>

          <p class="hint">
            Estimation indicative :
            <strong>{{ estimation }}</strong>
          </p>

          <input v-model="form.nom" placeholder="Nom & prénom" required />
          <input v-model="form.email" type="email" placeholder="Email" required />
          <input v-model="form.tel" type="tel" placeholder="Téléphone" required />

          <textarea
            rows="3"
            placeholder="Précisions complémentaires (facultatif)"
          />

          <!-- FILE UPLOAD ÉLÉGANT -->
          <div class="file-upload">
            <label for="files">
              Ajouter des photos du chantier
              <span>(facultatif)</span>
            </label>
            <input
              id="files"
              type="file"
              multiple
              accept="image/*"
              @change="handleFiles"
            />
            <p v-if="filesCount" class="file-info">
              {{ filesCount }} photo{{ filesCount > 1 ? 's' : '' }} ajoutée{{ filesCount > 1 ? 's' : '' }}
            </p>
          </div>
        </div>

        <!-- ACTION -->
        <button class="submit">
          {{ step < 4 ? 'Continuer' : 'Envoyer la demande' }}
        </button>
      </form>
    </div>
  </section>

  <!-- MAP -->
  <section class="section map-section">
    <div class="map-wrapper">
      <iframe
        src="https://www.google.com/maps?q=48.8566,2.3522&z=14&output=embed"
        loading="lazy"
      ></iframe>
    </div>
    <div class="infos">
      <h3>Notre showroom</h3>
      <p>12 rue de l’Exemple<br />75000 Paris</p>
      <p>01 23 45 67 89<br />contact@nomentreprise.fr</p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const step = ref(1)
const filesCount = ref(0)

const form = ref({
  type: '',
  surface: '',
  etat: '',
  budget: '',
  delai: '',
  nom: '',
  email: '',
  tel: ''
})

const next = () => {
  if (step.value < 4) step.value++
}

const handleFiles = (e) => {
  filesCount.value = e.target.files.length
}

const estimation = computed(() => {
  const map = {
    '< 30 m²': 'entre 1 200 € et 1 800 €',
    '30 – 60 m²': 'entre 2 500 € et 3 500 €',
    '60 – 100 m²': 'entre 4 000 € et 5 500 €',
    '100 m² et +': 'à partir de 6 500 €'
  }
  return map[form.value.surface] || 'à définir'
})
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* HERO */
.hero {
  height: 42vh;
  min-height: 300px;
  background: radial-gradient(circle at top, #ffffff, #f3eee9);
}
.hero-inner {
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
}
.hero p {
  font-size: 14px;
  color: #8a7a68;
  max-width: 360px;
  margin: 16px auto 0;
  line-height: 1.6;
}

/* LAYOUT */
.section {
  padding: 72px 24px;
  text-align: center;
}
.card {
  max-width: 420px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 32px;
  padding: 36px 28px;
  box-shadow: 0 24px 48px rgba(0,0,0,0.08);
}

/* PROGRESS */
.progress {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 28px;
}
.progress span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ddd;
}
.progress span.active {
  background: #b89a72;
}

/* FORM */
.form {
  display: grid;
  gap: 22px;
}
.step {
  display: grid;
  gap: 18px;
}
.step h2 {
  font-size: 20px;
  font-weight: 400;
  color: #4f4337;
}
.hint {
  font-size: 14px;
  color: #6f604f;
}

/* INPUTS */
input,
textarea,
select {
  width: 100%;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(0,0,0,0.12);
  font-size: 14px;
  font-family: inherit;
  color: #4f4337;
  background: #ffffff;
}
textarea {
  resize: none;
}

/* SELECT CUSTOM */
select {
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='%234f4337' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 16px;
  padding-right: 44px;
  color: #9b8a75;
}
select:valid {
  color: #4f4337;
}
input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: rgba(184,154,114,0.6);
  box-shadow: 0 0 0 3px rgba(184,154,114,0.18);
}

/* FILE UPLOAD */
.file-upload {
  text-align: center;
}
.file-upload label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 12px 22px;
  border-radius: 999px;
  border: 1px dashed rgba(0,0,0,0.25);
  font-size: 14px;
  color: #6f604f;
  cursor: pointer;
  transition: all 0.2s ease;
}
.file-upload label span {
  font-size: 12px;
  color: #9a8c7a;
}
.file-upload label:hover {
  border-color: #b89a72;
  background: rgba(184,154,114,0.08);
  color: #4f4337;
}
.file-upload input {
  display: none;
}
.file-info {
  margin-top: 8px;
  font-size: 13px;
  color: #7c6e5e;
}

/* BUTTON */
.submit {
  width: 100%;
  padding: 14px;
  border-radius: 999px;
  background: #b89a72;
  color: #ffffff;
  font-size: 15px;
  border: none;
  cursor: pointer;
}

/* MAP */
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
  color: #5a4a3b;
}
.infos p {
  font-size: 14px;
  color: #6d5c4b;
  line-height: 1.6;
}
</style>
