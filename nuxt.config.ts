// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase', // Añade el módulo de Supabase
    '@nuxtjs/google-fonts', // Añade el módulo de Google Fonts
  ],
  // Añade la configuración de Supabase
  supabase: {
    // Redirección automática después de login/logout
    redirect: true, 
    // Puedes configurar las rutas aquí si quieres algo personalizado
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: [
        '/', // Excluye la ruta raíz
        // Aquí podrías añadir otras rutas públicas en el futuro,
        // por ejemplo: '/portafolio', '/contacto'
      ],
    }
  },
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css' // <--- AÑADE ESTA LÍNEA
  ],
  googleFonts: {
    // Aquí definimos las familias de fuentes que queremos usar
    families: {
      // Fuente para el cuerpo del texto
      Questrial: {
        wght: [400],
      },
      // Fuente para los títulos
      Montserrat: {
        wght: [400, 700], // Añadimos 700 para los pesos en negrita
      }
    },
    display: 'swap', // Mejora el rendimiento de carga de la fuente
    prefetch: true,
    preconnect: true,
  },
})