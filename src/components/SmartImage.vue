<script setup lang="ts">
import { computed } from 'vue'

// Carga todas las imágenes disponibles en src/assets. Si el archivo aún no existe,
// se muestra un placeholder crema con el nombre esperado.
const imagenes = import.meta.glob<string>('../assets/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
})

const props = defineProps<{
  /** Nombre base del archivo, sin extensión (ej. "hero-doctora") */
  name: string
  alt: string
  /** Texto del placeholder mientras no exista la imagen */
  placeholder?: string
  eager?: boolean
}>()

const src = computed(() => {
  for (const ext of ['jpg', 'jpeg', 'png', 'webp', 'avif']) {
    const hit = imagenes[`../assets/${props.name}.${ext}`]
    if (hit) return hit
  }
  return null
})
</script>

<template>
  <img
    v-if="src"
    :src="src"
    :alt="alt"
    :loading="eager ? 'eager' : 'lazy'"
    decoding="async"
    class="smart-img"
  />
  <div v-else class="smart-ph" role="img" :aria-label="alt">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
    <span class="cap">{{ placeholder ?? alt }}</span>
    <span class="file">{{ name }}.jpg</span>
  </div>
</template>

<style scoped>
.smart-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.smart-ph {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px;
  text-align: center;
  background: var(--crema);
  color: var(--texto-3);
  font-size: 13px;
}
.smart-ph svg {
  opacity: 0.5;
}
.cap {
  font-weight: 500;
}
.file {
  font-size: 11px;
  opacity: 0.75;
}
</style>
