<script setup lang="ts">
import SmartImage from './SmartImage.vue'
import { valores } from '@/data/servicios'
</script>

<template>
  <section class="section">
    <div class="container about">
      <div class="photo-wrap">
        <div class="photo">
          <SmartImage name="consultorio" alt="Foto del consultorio" />
        </div>
      </div>
      <div class="copy">
        <span class="eyebrow">Sobre la doctora</span>
        <h2 class="h2 h2-sm">Una consulta donde te sientes escuchada y en confianza</h2>
        <p>
          La Dra. Maryfe Reyes acompaña a cada paciente con un diagnóstico claro, un plan de
          tratamiento a su medida y la tranquilidad de saber qué esperar en cada visita.
        </p>
        <ul class="values">
          <li v-for="v in valores" :key="v">
            <span class="dot-sm" aria-hidden="true"></span>{{ v }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr));
  gap: 56px;
  align-items: center;
}
.photo-wrap {
  aspect-ratio: 1 / 1;
  position: relative;
  max-width: 520px;
  width: 100%;
}
.photo {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  overflow: hidden;
  background: #fff;
}
.photo :deep(.smart-ph) {
  background: #fff;
}
.copy {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.h2-sm {
  font-size: clamp(34px, 4vw, 48px);
  line-height: 1.1;
}
p {
  margin: 0;
  font-size: 17px;
  line-height: 1.7;
  color: var(--texto-2);
  text-wrap: pretty;
}
.values {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}
.values li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  font-weight: 500;
  background: #fff;
  padding: 14px 16px;
  border-radius: 14px;
}
.dot-sm {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--fucsia);
  flex: none;
}
</style>
