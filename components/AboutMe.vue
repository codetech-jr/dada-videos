<template>
  <!-- Cambiamos a un fondo 'primary' para un look más elegante y personal -->
  <section id="sobre-mi" class="bg-primary py-16 sm:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        <!-- Columna 1: Imagen de Perfil -->
        <div class="lg:w-1/3 flex-shrink-0">
          <!-- 
            El borde ahora usa el color 'accent' para enmarcar la foto y hacerla el punto focal.
            La sombra 'shadow-lg' destaca sobre el fondo oscuro.
          -->
          <img 
            class="h-64 w-64 rounded-full object-cover mx-auto shadow-lg border-4 border-accent" 
            src="/images/daniel-andres.jpg" 
            alt="Foto de perfil de Andres Daniel, editor de video"
          >
        </div>

        <!-- Columna 2: Texto de Presentación -->
        <div class="lg:w-2/3 text-center lg:text-left">
          <!-- Título en blanco, con el nombre resaltado en 'accent' para darle un toque personal -->
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Hola, soy <span class="text-accent">Andrés Daniel</span>
          </h2>

          <!-- El texto de los párrafos ahora es blanco con opacidad para una lectura cómoda -->
          <div class="mt-6 space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              Apasionado por contar historias a través del video desde hace más de 8 años. Mi objetivo es transformar ideas en contenido visual que no solo se vea profesional, sino que también conecte con la audiencia y genere resultados.
            </p>
            <p>
              Me especializo tanto en ediciones ágiles con CapCut para redes sociales como en producciones más complejas utilizando la Suite de Adobe. Esta versatilidad me permite adaptarme a cualquier proyecto, desde un reel viral hasta un documental cinematográfico.
            </p>
            <p>
              Mi filosofía es simple: cada proyecto merece atención personalizada y soluciones creativas que superen las expectativas del cliente.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
// Este componente es puramente visual, no necesita lógica de script.
</script>

<style scoped>
#sobre-mi {
  scroll-margin-top: 80px; /* Para que el anclaje del menú no quede oculto por el header */
}
</style>