<!-- components/HeroSection.vue -->
<template>
    <!--
      CAMBIO: Aumentamos la altura en móvil de 60vh a 75vh.
      Esto le da más espacio al contenido para "respirar" y crea un mayor impacto visual.
    -->
    <section class="relative bg-black text-white h-[75vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <!-- VIDEO de Fondo con superposición oscura -->
        <div class="absolute z-0 inset-0 w-full h-full">
            <video class="w-full h-full object-cover" src="/videos/hero-video.mp4" poster="/images/hero-poster.jpg" autoplay loop muted
                playsinline></video>
            
            <!-- ANIMACIÓN: Fundido de entrada suave para la superposición -->
            <!-- La superposición ahora empieza más opaca y se aclara, para ocultar el frame inicial del vídeo -->
            <div 
                v-motion
                :initial="{ opacity: 0.9 }"
                :enter="{ opacity: 0.6, transition: { duration: 1500, ease: 'easeInOut' } }"
                class="absolute inset-0 bg-black"
            ></div>
        </div>

        <!-- Contenido de Texto -->
        <!-- ANIMACIÓN: Contenedor principal para animaciones escalonadas (stagger) -->
        <!-- 
            Este div coordina la animación de sus hijos.
            `initial`: Define el estado inicial (invisible).
            `enter`: Define el estado final y un 'stagger' de 200ms entre cada hijo.
        -->
        <div 
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { stagger: 200 } }"
            class="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
            <!--
              AJUSTE: Hacemos la tipografía más adaptable a diferentes anchos de pantalla.
              Usamos más breakpoints (sm, md) para que el texto escale de forma más fluida y
              evitar los saltos de línea incómodos en móviles pequeños.
            -->

            <!-- ANIMACIÓN: El h1 se desliza hacia arriba y aparece -->
            <h1 
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 500, type: 'spring', stiffness: 100 } }"
                class="font-primary text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
            >
                Transformo tus ideas en vídeos que <span class="text-accent">cautivan y convierten</span>
            </h1>

            <!--
              AJUSTE: Reducimos ligeramente el tamaño del párrafo en la vista móvil base (a `text-base`)
              para mejorar la jerarquía visual con el título.
            -->
            
            <!-- ANIMACIÓN: El párrafo se desliza hacia arriba y aparece (después del h1) -->
            <p 
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 500, type: 'spring', stiffness: 100 } }"
                class="text-base md:text-xl text-white/80 mb-8"
            >
                Edición de vídeo profesional para redes sociales, YouTube y marcas. Experto en CapCut para contenido
                dinámico y en la Suite de Adobe para resultados cinematográficos.
            </p>

            <!--
              REFACTOR: Aplicamos los estilos de botón directamente al <NuxtLink>.
              Esta es una mejor práctica para la semántica HTML y la accesibilidad,
              evitando anidar elementos interactivos.
            -->

            <!-- ANIMACIÓN: El botón se desliza hacia arriba y aparece (al final) -->
            <div 
                v-motion
                :initial="{ opacity: 0, y: 50 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 500, type: 'spring', stiffness: 100 } }"
                class="flex justify-center"
            >
                 <NuxtLink
                    to="#portafolio"
                    class="bg-white hover:bg-white/80 text-primary font-primary font-bold py-3 px-8 rounded-full transition-colors duration-300">
                    Ver mis trabajos
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
// No se necesita lógica de script para este componente.
// ¡La magia de v-motion sucede en el template!
</script>