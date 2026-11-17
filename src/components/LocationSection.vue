<script setup lang="ts">
import { DIRECCION, MAPS_LINK, MAP_SRC, WA_DISPLAY } from '@/config'
</script>

<template>
  <section id="ubicacion" class="section location">
    <div class="container wrap">
      <div class="info">
        <span class="eyebrow">Ubicación</span>
        <h2 class="h2 h2-sm">Visítanos en el consultorio</h2>
        <dl class="details">
          <div>
            <dt>Dirección</dt>
            <dd>{{ DIRECCION }}</dd>
          </div>
          <div>
            <dt>Horario</dt>
            <dd>Lunes a viernes 9:00 – 18:00 · Sábados 9:00 – 13:00</dd>
          </div>
          <div>
            <dt>Teléfono</dt>
            <dd>{{ WA_DISPLAY }}</dd>
          </div>
        </dl>
        <a :href="MAPS_LINK" target="_blank" rel="noopener" class="btn directions">Cómo llegar</a>
      </div>
      <div class="map">
        <iframe
          title="Mapa del consultorio"
          :src="MAP_SRC"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.location {
  background: #fff;
}
.wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: stretch;
}
.info {
  flex: 1 1 320px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
}
.h2-sm {
  font-size: clamp(34px, 4vw, 48px);
  line-height: 1.1;
}
.details {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 16px;
  line-height: 1.5;
}
.details div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
dt {
  font-size: 13px;
  font-weight: 600;
  color: var(--texto-3);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
dd {
  margin: 0;
}
.directions {
  align-self: flex-start;
  background: var(--rosa-claro);
  color: var(--fucsia-hover);
  padding: 14px 22px;
}
.directions:hover {
  background: var(--rosa-medio);
  color: var(--fucsia-oscuro);
}
.map {
  flex: 2 1 480px;
  min-height: 420px;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid #f3dde5;
  background: var(--crema);
}
.map iframe {
  width: 100%;
  height: 100%;
  min-height: 420px;
  border: 0;
  display: block;
}

@media (max-width: 560px) {
  .map {
    flex-basis: 100%;
  }
}
</style>
