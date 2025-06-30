<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { NuxtLink } from '#components';

// Estado para controlar el menú móvil
const isMobileMenuOpen = ref(false);

// Estado para detectar si el usuario ha hecho scroll
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

// Añadimos y quitamos el listener de scroll para optimizar el rendimiento
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-enter"
    :class="{ 'bg-primary/95 backdrop-blur-md shadow-lg': isScrolled, 'bg-transparent': !isScrolled }"
  >
    <nav class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        
        <div class="flex-shrink-0">
          <NuxtLink to="/">
            <img 
              class="w-auto h-10" 
              src="/logo-dada.png" 
              alt="Logo de Dadá Media Design"
            >
          </NuxtLink>
        </div>
        
        <!-- 2. Enlaces de Navegación (Desktop) -->
        <div class="hidden md:flex md:items-center md:space-x-8">
          <!-- CAMBIO 1: Se añade una clase para mejorar la animación de hover -->
          <NuxtLink to="#servicios" class="desktop-nav-link">Servicios</NuxtLink>
          <NuxtLink to="#portafolio" class="desktop-nav-link">Portafolio</NuxtLink>
          <NuxtLink to="#faq" class="desktop-nav-link">FAQ</NuxtLink>
        </div>
        
        <!-- 3. Botón CTA (Desktop) -->
        <div class="hidden md:block">
          <NuxtLink to="#contacto" class="inline-flex items-center px-6 py-2 text-base font-bold transition-transform duration-200 rounded-full text-primary bg-accent hover:opacity-90 hover:scale-105">
            Contáctame
          </NuxtLink>
        </div>
        
        <!-- 4. Botón de Menú Móvil (Hamburguesa) con animación -->
        <div class="flex items-center md:hidden">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="relative z-50 w-8 h-8 text-white focus:outline-none">
            <span class="sr-only">Abrir menú principal</span>
            <div class="absolute block w-8 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <span aria-hidden="true" class="block absolute h-0.5 w-8 bg-current transform transition duration-300 ease-in-out" :class="{'rotate-45': isMobileMenuOpen, '-translate-y-2.5': !isMobileMenuOpen }"></span>
              <span aria-hidden="true" class="block absolute h-0.5 w-8 bg-current transform transition duration-300 ease-in-out" :class="{'opacity-0': isMobileMenuOpen }"></span>
              <span aria-hidden="true" class="block absolute h-0.5 w-8 bg-current transform transition duration-300 ease-in-out" :class="{'-rotate-45': isMobileMenuOpen, 'translate-y-2.5': !isMobileMenuOpen }"></span>
            </div>
          </button>
        </div>

      </div>
    </nav>
    
    <!-- 5. Panel del Menú Móvil -->
    <!-- CAMBIO 2: Usamos el componente <Transition> de Vue para animar la entrada/salida -->
    <Transition name="slide-fade">
      <div v-if="isMobileMenuOpen" class="md:hidden bg-primary/95 backdrop-blur-md">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NuxtLink @click="isMobileMenuOpen = false" to="#servicios" class="block px-3 py-2 text-base font-medium rounded-md text-white/90 hover:text-accent hover:bg-white/5">Servicios</NuxtLink>
          <NuxtLink @click="isMobileMenuOpen = false" to="#portafolio" class="block px-3 py-2 text-base font-medium rounded-md text-white/90 hover:text-accent hover:bg-white/5">Portafolio</NuxtLink>
          <NuxtLink @click="isMobileMenuOpen = false" to="#sobre-mi" class="block px-3 py-2 text-base font-medium rounded-md text-white/90 hover:text-accent hover:bg-white/5">Sobre Mí</NuxtLink>
          <NuxtLink @click="isMobileMenuOpen = false" to="#faq" class="block px-3 py-2 text-base font-medium rounded-md text-white/90 hover:text-accent hover:bg-white/5">FAQ</NuxtLink>
          <NuxtLink @click="isMobileMenuOpen = false" to="#contacto" class="block w-full px-3 py-2 text-base font-medium text-left rounded-md text-white/90 hover:text-accent hover:bg-white/5">Contacto</NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* Esto asegura que el scroll a las anclas sea suave */
html {
  scroll-behavior: smooth;
}

/* CAMBIO 3: Animación de entrada para el Header */
@keyframes slide-down {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.header-enter {
  animation: slide-down 0.6s ease-out;
}

/* CAMBIO 4: Animación para los enlaces del menú de escritorio */
.desktop-nav-link {
  position: relative;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease, transform 0.3s ease;
  padding-bottom: 4px; /* Espacio para la línea */
}

.desktop-nav-link:hover {
  color: #03d3b0; /* Tu color accent */
  transform: translateY(-2px);
}

/* Creamos un pseudo-elemento para la línea de abajo */
.desktop-nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #03d3b0; /* Tu color accent */
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease-out;
}

.desktop-nav-link:hover::after {
  transform: scaleX(1);
}

/* CAMBIO 5: Clases de transición de Vue para el menú móvil */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>