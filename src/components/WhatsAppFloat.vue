<script setup lang="ts">
import { WA_SALUDO } from '@/config'
</script>

<template>
  <a :href="WA_SALUDO" target="_blank" rel="noopener" aria-label="Escribir por WhatsApp" class="float">
    <span class="icon" aria-hidden="true">W</span>WhatsApp
  </a>
</template>

<style scoped>
.float {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--whatsapp);
  color: #fff;
  padding: 16px 22px 16px 18px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 15px;
  box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.35);
  animation: pulse 2.4s infinite;
}
.float:hover {
  background: var(--whatsapp-hover);
  color: #fff;
}
.icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #fff;
  color: var(--whatsapp);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 800;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.45);
  }
  70% {
    box-shadow: 0 0 0 16px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}

@media (max-width: 480px) {
  .float {
    right: 16px;
    bottom: 16px;
  }
}
</style>
