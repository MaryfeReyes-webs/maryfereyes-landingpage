<script setup lang="ts">
import SmartImage from './SmartImage.vue'
import { servicios } from '@/data/servicios'
</script>

<template>
  <section id="servicios" class="section services">
    <div class="container stack">
      <div class="head">
        <div class="head-copy">
          <span class="eyebrow">Servicios</span>
          <h2 class="h2">Tratamientos para cada etapa de tu sonrisa</h2>
        </div>
        <a href="#cita" class="link">Consultar disponibilidad</a>
      </div>
      <div class="grid">
        <article v-for="s in servicios" :key="s.id" class="card">
          <div class="media">
            <SmartImage :name="s.id" :alt="s.titulo" :placeholder="s.foto" />
          </div>
          <div class="body">
            <span class="num">{{ s.num }}</span>
            <h3>{{ s.titulo }}</h3>
            <p>{{ s.desc }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  background: #fff;
}
.stack {
  display: flex;
  flex-direction: column;
  gap: 48px;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  flex-wrap: wrap;
}
.head-copy {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 620px;
}
.link {
  font-weight: 600;
  font-size: 16px;
  border-bottom: 2px solid var(--fucsia);
  padding-bottom: 4px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: 24px;
}
.card {
  background: var(--crema);
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s;
}
.card:hover {
  box-shadow: 0 18px 40px -20px rgba(194, 24, 91, 0.35);
}
.media {
  aspect-ratio: 4 / 3;
  position: relative;
}
.media :deep(.smart-ph) {
  background: #f5ece0;
}
.body {
  padding: 24px 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.num {
  font-size: 13px;
  font-weight: 700;
  color: var(--fucsia);
}
h3 {
  margin: 0;
  font-family: var(--serif);
  font-weight: 400;
  font-size: 26px;
}
p {
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: var(--texto-2);
}
</style>
