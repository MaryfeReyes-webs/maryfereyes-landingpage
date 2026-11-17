<template>
  <footer class="footer">
    <div class="inner">
      <div class="brand">
        <span class="name">Dra. Maryfe Reyes</span>
        <span class="tag">Odontología general y estética</span>
      </div>
      <nav class="links" aria-label="Pie de página">
        <a href="#servicios">Servicios</a>
        <a href="#cita">Agendar cita</a>
        <a href="#ubicacion">Ubicación</a>
      </nav>
      <span class="copy">© 2026 Maryfe Reyes</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--texto);
  color: #f6e8ee;
  padding: 48px 24px;
}
.inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}
.brand {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.name {
  font-family: var(--serif);
  font-size: 26px;
}
.tag {
  font-size: 14px;
  color: #d7b8c6;
}
.links {
  display: flex;
  gap: 24px;
  font-size: 14px;
  flex-wrap: wrap;
}
.links a {
  color: #f6e8ee;
}
.links a:hover {
  color: var(--rosa-medio);
}
.copy {
  font-size: 13px;
  color: #b893a4;
}
</style>
