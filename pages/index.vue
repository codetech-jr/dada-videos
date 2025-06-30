<!-- pages/index.vue -->
<template>
    <div>
        <Header /> 
        <HeroSection />
        <BrandsLogos />
        <PortfolioGrid /> 
        <Services /> 
        <Faq /> 
        <CtaSection /> <!-- Lo dejaremos comentado por ahora -->
        <Footer /> 
    </div>
</template>

<script setup>
// Importa los componentes a medida que los vayas creando
import Header from '~/components/Header.vue';
import HeroSection from '~/components/HeroSection.vue';
import BrandsLogos from '~/components/BrandsLogos.vue';
import PortfolioGrid from '~/components/PortfolioGrid.vue';
import Services from '~/components/Services.vue';
import Faq from '~/components/Faq.vue';
import CtaSection from '~/components/CtaSection.vue';
import Footer from '~/components/Footer.vue';
// ...y así sucesivamente
</script>