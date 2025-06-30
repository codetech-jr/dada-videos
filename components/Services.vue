<script setup>
import { ref } from 'vue';

const services = ref([
  {
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'Edición para Redes Sociales',
    description: 'Videos cortos y dinámicos (Reels, TikToks, Shorts) optimizados para enganchar a tu audiencia. Ideal para contenido rápido y viral.',
    tool: 'Herramienta destacada: CapCut'
  },
  {
    icon: 'fa-solid fa-video',
    title: 'Edición de Contenido',
    description: 'Edición profesional para vlogs, tutoriales, entrevistas o videos corporativos. Narrativa cuidada, corrección de color y audio limpio.',
    tool: 'Herramienta destacada: Adobe Premiere Pro'
  },
  {
    icon: 'fa-solid fa-wand-magic-sparkles',
    title: 'Motion Graphics y Postproducción',
    description: 'Añade un plus de calidad con textos animados, logos, intros/outros y efectos visuales que harán destacar tu marca.',
    tool: 'Herramienta destacada: Adobe After Effects'
  }
]);
</script>

<template>
  <!-- Usamos un fondo blanco para crear un "respiro visual" en la página -->
  <section id="servicios" class="py-16 sm:py-20 bg-white">
    <!-- 
        ANIMACIÓN: Contenedor que activa la animación cuando es visible una vez.
        'stagger: 250' crea un retraso de 250ms entre la animación de cada hijo
        (primero el título, luego la primera tarjeta, luego la segunda, etc.).
    -->
    <div 
      v-motion-visible-once
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { stagger: 250 } }"
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      
      <!-- ANIMACIÓN: El título es el primer hijo en animarse. -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
        class="text-center"
      >
        <!-- El título usa el color 'primary' de tu paleta, y el 'accent' para destacar -->
        <h2 class="font-primary text-3xl font-extrabold text-primary sm:text-4xl">
          ¿Cómo puedo <span class="text-accent">ayudarte</span>?
        </h2>
      </div>

      <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        <!-- 
            ANIMACIÓN: Cada tarjeta es un hijo que se animará secuencialmente.
            - Aparecerá deslizándose desde abajo.
            - La animación no interfiere con la transición de 'hover' existente.
        -->
        <div 
          v-for="service in services" 
          :key="service.title"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 500, ease: 'easeOut' } }"
          class="p-8 text-center rounded-xl border border-primary/10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          <!-- El icono usa el color 'accent' para ser el punto focal visual -->
          <font-awesome-icon :icon="service.icon" class="h-16 w-16 text-accent mb-6" />

          <!-- El título de la tarjeta también usa tu color 'primary' -->
          <h3 class="text-xl font-bold text-primary mb-2">{{ service.title }}</h3>

          <!-- Usamos 'black-70' de tu paleta para un gris suave y consistente -->
          <p class="text-base text-black-70 mb-6">{{ service.description }}</p>

          <!-- Usamos el color 'enfasis' para un detalle de color sutil pero distintivo -->
          <p class="text-sm font-semibold text-enfasis">{{ service.tool }}</p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
#servicios {
  scroll-margin-top: 80px; /* Para el anclaje del menú */
}
</style>