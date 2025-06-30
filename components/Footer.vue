<template>
  <!-- 
    - Fondo 'primary' para una integración perfecta.
    - El color de texto por defecto es un blanco semi-transparente para una legibilidad suave.
  -->
  <footer class="bg-primary text-white/70" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    
    <!-- 
      ANIMACIÓN: Contenedor principal.
      - Activa las animaciones cuando el footer se hace visible por primera vez.
      - 'stagger: 200' asegura que las columnas y la línea de copyright aparezcan una tras otra.
      - Añadimos un pequeño 'delay' para que la animación se sienta deliberada.
    -->
    <div 
      v-motion-visible-once
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { stagger: 200, delay: 200 } }"
      class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8"
    >
      
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        
        <!-- ANIMACIÓN: Columna 1 (Logo) -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 500, ease: 'easeOut' } }"
          class="space-y-4"
        >
          <a href="#" class="block">
            <img class="w-auto h-8" src="/logo-dada.png" alt="Logo de Dadá Media Design">
          </a>
          <p class="text-base">
            Transformando ideas en historias visuales impactantes.
          </p>
        </div>
        
        <!-- ANIMACIÓN: Contenedor de las columnas 2 y 3 -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 500, ease: 'easeOut' } }"
          class="grid grid-cols-1 gap-8 md:col-span-2 sm:grid-cols-2"
        >
          <!-- Columna 2: Enlaces Rápidos -->
          <div>
            <h3 class="text-sm font-semibold tracking-wider text-white uppercase">Enlaces Rápidos</h3>
            <ul role="list" class="mt-4 space-y-3">
              <li><a href="#portafolio" class="transition-colors duration-200 hover:text-accent">Portafolio</a></li>
              <li><a href="#faq" class="transition-colors duration-200 hover:text-accent">FAQs</a></li>
              <li><a href="#contacto" class="transition-colors duration-200 hover:text-accent">Contacto</a></li>
              <li><a href="#" class="transition-colors duration-200 hover:text-accent">Política de Privacidad</a></li>
            </ul>
          </div>
          
          <!-- Columna 3: Sígueme (Redes Sociales) -->
          <div>
            <h3 class="text-sm font-semibold tracking-wider text-white uppercase">Sígueme</h3>
            <div class="flex mt-4 space-x-4">
              <a href="#" class="transition-colors duration-200 hover:text-accent"><span class="sr-only">Instagram</span><font-awesome-icon :icon="['fab', 'instagram']" class="w-6 h-6" /></a>
              <a href="#" class="transition-colors duration-200 hover:text-accent"><span class="sr-only">YouTube</span><font-awesome-icon :icon="['fab', 'youtube']" class="w-6 h-6" /></a>
              <a href="#" class="transition-colors duration-200 hover:text-accent"><span class="sr-only">LinkedIn</span><font-awesome-icon :icon="['fab', 'linkedin']" class="w-6 h-6" /></a>
              <a href="#" class="transition-colors duration-200 hover:text-accent"><span class="sr-only">Twitter</span><font-awesome-icon :icon="['fab', 'twitter']" class="w-6 h-6" /></a>
            </div>
          </div>
        </div>

      </div>
      
      <!-- ANIMACIÓN: Línea de Copyright (el último elemento en animarse) -->
      <div 
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { duration: 500, ease: 'easeOut' } }"
        class="flex flex-col items-center pt-8 mt-12 border-t border-white/10"
      >
        <p class="text-base text-center">© {{ new Date().getFullYear() }} Dadá Media Design. Todos los derechos reservados.</p>
      </div>
      
    </div>
  </footer>
</template>

<script setup>
// No necesita lógica
</script>