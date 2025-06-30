<!-- components/PortfolioGrid.vue -->
<template>
  <!-- Cambiamos el fondo a 'primary' para un look más premium y oscuro -->
  <section class="bg-primary py-16 sm:py-20" id="portafolio">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Título de la Sección -->
      <h2 class="text-center font-primary text-3xl sm:text-4xl font-bold text-white mb-4">
        Mi Portafolio
      </h2>
      <p class="text-center text-white/80 max-w-2xl mx-auto mb-10">
        Aquí tienes una selección de mis trabajos recientes. Usa los filtros para navegar entre los diferentes tipos de proyectos.
      </p>

      <!-- Botones de Filtro -->
      <div class="flex justify-center flex-wrap gap-2 sm:gap-4 mb-12">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="selectedCategory = category.id"
          :class="[
            'px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300',
            selectedCategory === category.id
              // Estado Activo: Usa 'accent' para destacar, con texto 'primary' para contraste y consistencia.
              ? 'bg-accent text-primary shadow-lg'
              // Estado Inactivo: Un fondo sutil sobre 'primary' que se ilumina en el hover.
              : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
          ]"
        >
          {{ category.name }}
        </button>
      </div>

      <!-- Cuadrícula de Proyectos -->
      <!-- El fondo oscuro de la sección hará que las tarjetas del portafolio resalten -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PortfolioCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import PortfolioCard from '~/components/PortfolioCard.vue';

// --- GESTIÓN DE DATOS ---
const projects = ref([
  {
    id: 1,
    title: 'Campaña Verano 2023',
    description: 'Reel dinámico para promocionar la colección de verano con transiciones fluidas y ritmo acelerado.',
    thumbnail: '/images/portfolio/campana-verano.jpg',
    tool: 'CapCut',
    category: 'reels',
  },
  {
    id: 2,
    title: 'Tutorial Gastronómico',
    description: 'Serie de videos educativos con grafismo dinámico y transiciones suaves para un canal de YouTube.',
    thumbnail: '/images/portfolio/tutorial-gastronomico.jpg',
    tool: 'Premiere Pro',
    category: 'youtube',
  },
  {
    id: 3,
    title: 'Presentación Corporativa',
    description: 'Video motivacional con narrativa cuidada y estética profesional para una empresa tecnológica.',
    thumbnail: '/images/portfolio/presentacion-corporativa.jpg',
    tool: 'After Effects',
    category: 'corporate',
  },
  {
    id: 4,
    title: 'Intro Animada para Canal',
    description: 'Animación de logo con efectos de partículas y transiciones dinámicas para canal de YouTube.',
    thumbnail: '/images/portfolio/intro-animada.jpg',
    tool: 'After Effects',
    category: 'animation',
  },
  {
    id: 5,
    title: 'Videoclip Musical',
    description: 'Edición de videoclip con efectos visuales, sincronización al ritmo y corrección de color cinematográfica.',
    thumbnail: '/images/portfolio/video-musical.jpg',
    tool: 'DaVinci Resolve',
    category: 'youtube',
  },
  {
    id: 6,
    title: 'Anuncio Deportivo',
    description: 'Spot publicitario con tomas dinámicas, efectos de cámara lenta y una narrativa motivacional.',
    thumbnail: '/images/portfolio/anuncio-deportivo.jpg',
    tool: 'Premiere Pro',
    category: 'corporate',
  },
]);

// --- LÓGICA DE FILTRADO ---
const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'reels', name: 'Reels / TikToks' },
  { id: 'youtube', name: 'Videos para YouTube' },
  { id: 'corporate', name: 'Corporativos / Anuncios' },
  { id: 'animation', name: 'Animaciones' },
];

const selectedCategory = ref('all');

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') {
    return projects.value;
  }
  return projects.value.filter(project => project.category === selectedCategory.value);
});
</script>