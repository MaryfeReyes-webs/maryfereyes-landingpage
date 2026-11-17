<script setup lang="ts">
import SmartImage from './SmartImage.vue'

const fotos = [
  { name: 'galeria-1', alt: 'Antes / después', tall: true },
  { name: 'galeria-2', alt: 'Paciente sonriendo', tall: false },
  { name: 'galeria-3', alt: 'Equipo / instrumental', tall: false },
  { name: 'galeria-4', alt: 'Tratamiento en curso', tall: true },
  { name: 'galeria-5', alt: 'Sala de espera', tall: false },
  { name: 'galeria-6', alt: 'Resultado blanqueamiento', tall: false },
]
</script>

<template>
  <section id="galeria" class="section gallery">
    <div class="container stack">
      <div class="head">
        <span class="eyebrow eyebrow-dark">Galería</span>
        <h2 class="h2">Sonrisas que hablan por sí solas</h2>
      </div>
      <div class="grid">
        <div v-for="f in fotos" :key="f.name" class="tile" :class="{ tall: f.tall }">
          <SmartImage :name="f.name" :alt="f.alt" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  background: var(--rosa-galeria);
}
.stack {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.head {
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  text-align: center;
}
.eyebrow-dark {
  color: var(--fucsia-hover);
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  grid-auto-rows: 240px;
  gap: 16px;
}
.tile {
  border-radius: 24px;
  overflow: hidden;
  position: relative;
}
.tile.tall {
  grid-row: span 2;
}
</style>
