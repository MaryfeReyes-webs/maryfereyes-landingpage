<template>
  <header class="header">
    <div class="inner">
      <a href="#inicio" class="brand" aria-label="Dra. Maryfe Reyes, inicio">
        <span class="logo" aria-hidden="true">M</span>
        <span class="names">
          <span class="name">Dra. Maryfe Reyes</span>
          <span class="tag">Odontología estética</span>
        </span>
      </a>
      <nav class="nav" aria-label="Principal">
        <a href="#servicios">Servicios</a>
        <a href="#galeria">Galería</a>
        <a href="#ubicacion">Ubicación</a>
        <a href="#cita" class="btn btn-primary cta">Agendar cita</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(251, 245, 236, 0.92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--borde-1);
}
.inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--texto);
}
.brand:hover {
  color: var(--texto);
}
.logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--fucsia);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--serif);
  font-size: 20px;
}
.names {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}
.name {
  font-family: var(--serif);
  font-size: 21px;
}
.tag {
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--texto-3);
}
.nav {
  display: flex;
  align-items: center;
  gap: 28px;
  font-size: 15px;
  font-weight: 500;
  flex-wrap: wrap;
}
.nav a:not(.cta) {
  color: var(--texto);
}
.nav a:not(.cta):hover {
  color: var(--fucsia);
}
.cta {
  padding: 11px 20px;
}

@media (max-width: 640px) {
  .nav {
    gap: 18px;
    font-size: 14px;
  }
  .nav a:not(.cta) {
    display: none;
  }
}
</style>
