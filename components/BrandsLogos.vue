<!-- components/BrandsLogos.vue -->
<template>
    <!--
      - Fondo cambiado a 'bg-white' para un look limpio y luminoso.
      - Esto crea un "respiro visual" en la secuencia de secciones de la página.
    -->
    <div class="bg-white py-12 sm:py-16">
        <!-- 
            ANIMACIÓN: Contenedor principal. 
            - v-motion-visible-once: Activa la animación una sola vez cuando el elemento es visible.
            - :initial: Define el estado inicial de los elementos hijos (invisibles).
            - :enter: Define el estado final y el escalonamiento (stagger).
              Cada hijo directo con 'v-motion' se animará con 200ms de diferencia.
        -->
        <div 
            v-motion-visible-once
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { stagger: 200 } }"
            class="max-w-7xl mx-auto px-6 lg:px-8"
        >
            <!-- 
                ANIMACIÓN (Hijo 1): Título
                Se desliza hacia arriba y aparece. La animación la dispara el 'v-motion-visible-once' del padre.
            -->
            <h2 
                v-motion
                :initial="{ opacity: 0, y: 40 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 500, ease: 'easeOut' } }"
                class="text-center text-lg font-semibold leading-8 text-primary font-primary"
            >
                Marcas y creadores que ya confían en mi trabajo
            </h2>

            <!-- 
                REFACTOR: Usamos un v-for para renderizar los logos de forma dinámica.
                Esto hace el código mucho más limpio y fácil de escalar.
            -->
            <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 items-center gap-x-8 gap-y-10">
                <!-- 
                    ANIMACIÓN (Hijos 2, 3, 4...): Logos individuales
                    Cada logo se anima con un efecto de "pop" (escala y opacidad).
                    Gracias al 'stagger' del contenedor padre, aparecen uno tras otro.
                -->
                <div 
                    v-for="logo in logos" 
                    :key="logo.name" 
                    v-motion
                    :initial="{ opacity: 0, scale: 0.8, y: 20 }"
                    :enter="{ opacity: 1, scale: 1, y: 0, transition: { duration: 400, ease: 'easeOut' } }"
                    class="flex justify-center"
                >
                    <img 
                        class="max-h-12 w-full object-contain opacity-80 hover:opacity-100 transition-opacity" 
                        :src="logo.src" 
                        :alt="logo.alt"
                        width="158" height="48" 
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// REFACTOR: Centralizamos la información de los logos en un array de objetos.
// Esto facilita la gestión (añadir, eliminar o modificar logos) y limpia el <template>.
const logos = [
    { name: 'Netflix', src: '/images/brands/netflix.png', alt: 'Netflix Logo' },
    { name: 'Spotify', src: '/images/brands/spotify.png', alt: 'Spotify Logo' },
    { name: 'Nestle', src: '/images/brands/nestle.png', alt: 'Logo de Nestle' },
]
</script>