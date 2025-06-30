<template>
  <!-- Cambiamos el fondo a 'bg-white' para que coincida con la sección de Servicios -->
  <section id="contacto" class="bg-white">
    <!-- 
        ANIMACIÓN: Contenedor principal. 
        - Activa la animación cuando la sección es visible.
        - 'stagger: 250' orquesta la aparición secuencial del título, el párrafo y el botón.
    -->
    <div 
      v-motion-visible-once
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { stagger: 250 } }"
      class="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
    >
      
      <!-- ANIMACIÓN: Título (Primer elemento de la secuencia) -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
      >
        <h2 class="text-3xl font-extrabold text-primary sm:text-4xl">
          <span class="block">¿Listo para crear algo increíble?</span>
          <span class="block text-accent">Transformemos tus ideas en videos que impactan.</span>
        </h2>
      </div>
      
      <!-- ANIMACIÓN: Párrafo (Segundo elemento) -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
      >
        <p class="mt-4 text-lg leading-6 text-black-70">
          Haz clic aquí y hablemos directamente. Sin formularios, sin esperas.
        </p>
      </div>
      
      <!-- ANIMACIÓN: Botón (El gran final) -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30, scale: 0.8 }"
        :enter="{ 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          transition: { 
            type: 'spring', 
            stiffness: 180, 
            damping: 12,
            mass: 1
          } 
        }"
        class="mt-8"
      >
        <a 
          href="https://wa.me/584125411581?text=Hola,%20vengo%20de%20tu%20página%20web%20y%20estoy%20interesado%20en%20tus%20servicios." 
          target="_blank" 
          rel="noopener noreferrer"
          class="w-full inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-full shadow-lg text-base font-bold text-primary bg-accent hover:opacity-90 transition-opacity duration-300 sm:w-auto"
        >
          <font-awesome-icon icon="fa-brands fa-whatsapp" class="mr-3 h-5 w-5" />
          Hablemos por WhatsApp
        </a>
      </div>
      
    </div>
  </section>
</template>

<script setup>
// No necesita lógica, es puramente visual
</script>

<style scoped>
#contacto {
  scroll-margin-top: 80px; /* Para el anclaje del menú */
}
</style>