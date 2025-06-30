<!-- components/PortfolioCard.vue -->
<template>
  <!-- 
    ANIMACIÓN: Contenedor principal.
    - v-motion-visible-once: Activa la animación cuando la tarjeta es visible en pantalla por primera vez.
    - :initial: Empieza invisible (opacity: 0), ligeramente más abajo (y: 50) y un poco más pequeña (scale: 0.9).
    - :enter: Anima a su estado final: visible, en su posición y tamaño correctos.
    - La 'transition' con 'easeOut' le da una sensación de desaceleración natural al final.
  -->
  <div 
    v-motion-visible-once
    :initial="{ opacity: 0, y: 50, scale: 0.9 }"
    :enter="{ opacity: 1, y: 0, scale: 1, transition: { duration: 500, ease: 'easeOut' } }"
    class="group overflow-hidden rounded-lg bg-white/5 shadow-lg transition-all duration-300 hover:bg-white/10 hover:-translate-y-2"
  >
    <!-- La imagen con su efecto de zoom se mantiene, se verá genial. -->
    <div class="overflow-hidden">
      <img
        :src="project.thumbnail"
        :alt="`Miniatura del proyecto ${project.title}`"
        class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div class="p-6">
      <!-- Título en blanco para contraste -->
      <h3 class="font-primary font-bold text-xl text-white mb-2">{{ project.title }}</h3>
      <!-- Descripción con opacidad para jerarquía visual -->
      <p class="text-white/70 mb-4 text-sm">{{ project.description }}</p>
      <!-- 
        Etiqueta que usa el color 'secondary' para un toque de contraste cálido.
        El texto 'primary' asegura una legibilidad perfecta sobre el fondo amarillo.
      -->
      <span class="text-xs font-bold text-primary bg-secondary px-3 py-1 rounded-full">
        {{ project.tool }}
      </span>
    </div>
  </div>
</template>

<script setup>
// Este componente recibe la información del proyecto a través de 'props'
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>