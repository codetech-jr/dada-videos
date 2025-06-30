// plugins/fontawesome.js

import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Iconos sólidos que ya teníamos
import { faMobileScreenButton, faVideo, faWandMagicSparkles, faFilm } from '@fortawesome/free-solid-svg-icons';

// Iconos de marcas que ya teníamos y los nuevos
import { faWhatsapp, faInstagram, faYoutube, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

// Añadimos TODOS los iconos a la librería
library.add(
  // Sólidos
  faMobileScreenButton, 
  faVideo, 
  faWandMagicSparkles,
  faFilm, // Este lo usamos en el logo del footer
  // Marcas
  faWhatsapp,
  faInstagram,
  faYoutube,
  faLinkedin,
  faTwitter
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {});
});