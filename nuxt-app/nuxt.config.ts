export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,500;1,600&display=swap'
        }
      ]
    }
  }
})
