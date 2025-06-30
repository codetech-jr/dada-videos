<script setup>
import { ref } from 'vue';

const faqs = ref([
  { question: '¿Cuál es tu proceso de trabajo?', answer: 'Mi proceso comienza con una consulta inicial para entender tus objetivos. Luego, desarrollo un concepto creativo, recopilo los materiales necesarios, realizo la edición y finalmente entrego el proyecto con oportunidad para revisiones.' },
  { question: '¿Qué necesitas de mí para empezar un proyecto?', answer: 'Necesito una descripción clara del proyecto, el material audiovisual (o podemos discutir sobre su creación), referencias visuales si las tienes, y detalles sobre el público objetivo y los canales donde se publicará el contenido.' },
  { question: '¿Cuáles son tus tarifas?', answer: 'Las tarifas varían según la complejidad del proyecto, duración del video y tiempo de entrega. Contacta conmigo para recibir un presupuesto personalizado adaptado a tus necesidades específicas.' },
  { question: '¿Cuánto tardas en entregar un vídeo?', answer: 'Los tiempos de entrega dependen del tipo de proyecto. Un reel para redes sociales puede estar listo en 2-3 días, mientras que proyectos más complejos como videos corporativos pueden tomar entre 1-2 semanas.' }
]);

// REFACTOR: Controlamos qué FAQ está abierto con un índice. `null` significa que ninguno lo está.
// Esto nos permite crear un acordeón donde solo una pregunta puede estar abierta a la vez.
const openFaqIndex = ref(null);

// REFACTOR: Función para abrir/cerrar un FAQ.
const toggleFaq = (index) => {
  // Si el que se clickeó ya está abierto, lo cerramos.
  if (openFaqIndex.value === index) {
    openFaqIndex.value = null;
  } else {
    // Si no, cerramos el que estuviera abierto y abrimos el nuevo.
    openFaqIndex.value = index;
  }
};
</script>

<template>
  <section id="faq" class="bg-primary py-16 sm:py-20">
    <div 
      class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <!-- ANIMACIÓN: Título con entrada suave al ser visible -->
      <div 
        v-motion-visible-once
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
        class="text-center"
      >
        <h2 class="font-primary text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Preguntas <span class="text-accent">Frecuentes</span>
        </h2>
      </div>

      <!-- ANIMACIÓN: Contenedor para la lista, activa el 'stagger' -->
      <div 
        v-motion-visible-once
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { stagger: 150, delay: 300 } }"
        class="mt-12 space-y-4"
      >
        <!-- REFACTOR: Cambiamos de <details> a <div> para tener control total de la animación -->
        <div 
          v-for="(faq, index) in faqs" 
          :key="faq.question"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0 }"
          class="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-lg"
        >
          <!-- Encabezado clickeable -->
          <div 
            @click="toggleFaq(index)" 
            class="flex justify-between items-center cursor-pointer p-6 transition-colors duration-300 hover:bg-white/10 group"
          >
            <h3 class="text-lg font-semibold text-white group-hover:text-accent transition-colors duration-200">
              {{ faq.question }}
            </h3>
            <span class="transition-transform duration-300" :class="{ 'rotate-180': openFaqIndex === index }">
              <svg class="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
          
          <!-- ANIMACIÓN DE ACORDEÓN: <Transition> para la respuesta -->
          <Transition name="faq-slide">
            <div v-if="openFaqIndex === index" class="px-6 pb-6">
              <p class="text-base text-white/80 leading-relaxed">
                {{ faq.answer }}
              </p>
            </div>
          </Transition>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#faq {
  scroll-margin-top: 80px;
}

/* 
  Estilos para la animación de despliegue/colapso del acordeón.
  Vue aplica estas clases automáticamente durante la transición.
*/
.faq-slide-enter-active,
.faq-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.faq-slide-enter-from,
.faq-slide-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}
</style>