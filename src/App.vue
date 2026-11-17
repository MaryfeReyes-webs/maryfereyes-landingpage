<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import AboutSection from './components/AboutSection.vue'
import GallerySection from './components/GallerySection.vue'
import AppointmentForm from './components/AppointmentForm.vue'
import LocationSection from './components/LocationSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <GallerySection />
    <AppointmentForm />
    <LocationSection />
  </main>
  <SiteFooter />
  <WhatsAppFloat />
</template>
