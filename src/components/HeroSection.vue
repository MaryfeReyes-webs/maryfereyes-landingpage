<script setup lang="ts">
import SmartImage from './SmartImage.vue'
import { WA_SALUDO } from '@/config'
</script>

<template>
  <section id="inicio" class="hero">
    <div class="copy">
      <span class="badge">Consultorio dental</span>
      <h1>Tu sonrisa, cuidada con <em>dedicación</em> y delicadeza.</h1>
      <p class="lead">
        Atención odontológica personalizada para toda la familia: limpiezas, blanqueamiento,
        ortodoncia y estética dental en un espacio cálido y tranquilo.
      </p>
      <div class="actions">
        <a href="#cita" class="btn btn-primary btn-lg">Agendar mi cita</a>
        <a :href="WA_SALUDO" target="_blank" rel="noopener" class="btn btn-wa-outline">
          <span class="dot" style="background: var(--whatsapp)" aria-hidden="true"></span>
          Escribir por WhatsApp
        </a>
      </div>
      <div class="facts">
        <div class="fact">
          <span class="fact-val">Lun – Sáb</span>
          <span class="fact-lbl">Horario de atención</span>
        </div>
        <div class="fact">
          <span class="fact-val">Sin dolor</span>
          <span class="fact-lbl">Tratamientos suaves</span>
        </div>
      </div>
    </div>

    <div class="visual">
      <div class="backdrop" aria-hidden="true"></div>
      <div class="arch">
        <SmartImage name="hero-doctora" alt="Foto de la Dra. Maryfe Reyes" eager />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  max-width: 1200px;
  margin: 0 auto;
  padding: 72px 24px 88px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 440px), 1fr));
  gap: 56px;
  align-items: center;
}
.copy {
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.badge {
  align-self: flex-start;
  background: var(--rosa-claro);
  color: var(--fucsia-hover);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 8px 14px;
  border-radius: 999px;
}
h1 {
  margin: 0;
  font-family: var(--serif);
  font-weight: 400;
  font-size: clamp(44px, 6vw, 76px);
  line-height: 1.02;
  letter-spacing: -0.01em;
  text-wrap: balance;
}
h1 em {
  color: var(--fucsia);
}
.lead {
  margin: 0;
  font-size: 19px;
  line-height: 1.6;
  color: var(--texto-2);
  max-width: 520px;
  text-wrap: pretty;
}
.actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.btn-lg {
  padding: 17px 30px;
  font-size: 16px;
}
.btn-wa-outline {
  background: #fff;
  color: var(--texto);
  padding: 17px 26px;
  font-size: 16px;
  border: 1px solid var(--borde-2);
}
.btn-wa-outline:hover {
  border-color: var(--whatsapp);
  color: var(--texto);
}
.facts {
  display: flex;
  gap: 36px;
  flex-wrap: wrap;
  padding-top: 12px;
  border-top: 1px solid var(--borde-3);
}
.fact {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.fact-val {
  font-family: var(--serif);
  font-size: 32px;
  color: var(--fucsia);
}
.fact-lbl {
  font-size: 14px;
  color: var(--texto-3);
}
.visual {
  position: relative;
  aspect-ratio: 4 / 5;
  max-height: 640px;
  margin-right: 16px;
}
.backdrop {
  position: absolute;
  inset: 24px -16px -16px 24px;
  background: var(--rosa-medio);
  border-radius: 220px 220px 28px 28px;
}
.arch {
  position: absolute;
  inset: 0;
  border-radius: 220px 220px 28px 28px;
  overflow: hidden;
  background: #fff;
}
</style>
