<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { ENVIO, WA_DISPLAY, WA_SALUDO, waLink } from '@/config'
import { servicios } from '@/data/servicios'
import { enviarApi, type DatosCita } from '@/lib/enviarApi'

type Requerido = 'nombre' | 'telefono' | 'servicio'

const vacio = (): DatosCita => ({ nombre: '', telefono: '', email: '', servicio: '', fecha: '', mensaje: '' })

const f = reactive<DatosCita>(vacio())
const errores = reactive<Record<Requerido, boolean>>({ nombre: false, telefono: false, servicio: false })
const enviado = ref(false)
const enviando = ref(false)
const errorEnvio = ref('')

const viaWa = ENVIO === 'whatsapp'
const hayError = computed(() => Object.values(errores).some(Boolean))
const nombreCorto = computed(() => f.nombre.trim().split(/\s+/)[0] ?? '')
const hoy = new Date().toISOString().slice(0, 10)

function limpiarError(k: Requerido) {
  errores[k] = false
}

function mensajeWhatsApp(d: DatosCita) {
  return [
    'Hola Dra. Maryfe, quiero agendar una cita:',
    `Nombre: ${d.nombre}`,
    `Teléfono: ${d.telefono}`,
    d.email && `Correo: ${d.email}`,
    `Servicio: ${d.servicio}`,
    d.fecha && `Fecha preferida: ${d.fecha}`,
    d.mensaje && `Mensaje: ${d.mensaje}`,
  ]
    .filter(Boolean)
    .join('\n')
}

async function submit() {
  errorEnvio.value = ''
  ;(['nombre', 'telefono', 'servicio'] as Requerido[]).forEach((k) => {
    errores[k] = !f[k].trim()
  })
  if (hayError.value) return

  const datos = { ...f }
  if (viaWa) {
    window.open(waLink(mensajeWhatsApp(datos)), '_blank', 'noopener')
  } else {
    enviando.value = true
    try {
      await enviarApi(datos)
    } catch (e) {
      errorEnvio.value = 'No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.'
      console.error(e)
      return
    } finally {
      enviando.value = false
    }
  }
  enviado.value = true
}

function reset() {
  Object.assign(f, vacio())
  ;(Object.keys(errores) as Requerido[]).forEach((k) => (errores[k] = false))
  errorEnvio.value = ''
  enviado.value = false
}
</script>

<template>
  <section id="cita" class="section">
    <div class="container layout">
      <div class="intro">
        <span class="eyebrow">Agenda tu cita</span>
        <h2 class="h2">Déjanos tus datos y te contactamos</h2>
        <p>
          Completa el formulario y recibirás la confirmación de tu cita. Si lo prefieres,
          escríbenos directamente por WhatsApp.
        </p>
        <a :href="WA_SALUDO" target="_blank" rel="noopener" class="btn btn-whatsapp wa">
          <span class="dot" style="background: #fff" aria-hidden="true"></span>WhatsApp {{ WA_DISPLAY }}
        </a>
      </div>

      <div class="card">
        <div v-if="enviado" class="success" role="status" aria-live="polite">
          <span class="check" aria-hidden="true">✓</span>
          <h3>¡Gracias, {{ nombreCorto }}!</h3>
          <p>Recibimos tu solicitud. Te contactaremos pronto para confirmar tu cita.</p>
          <button type="button" class="again" @click="reset">Enviar otra solicitud</button>
        </div>

        <form v-else class="form" novalidate @submit.prevent="submit">
          <div class="row">
            <label class="field">
              Nombre completo *
              <input
                v-model="f.nombre"
                name="nombre"
                autocomplete="name"
                placeholder="Ej. Ana Martínez"
                required
                :class="{ invalid: errores.nombre }"
                :aria-invalid="errores.nombre"
                @input="limpiarError('nombre')"
              />
            </label>
            <label class="field">
              Teléfono *
              <input
                v-model="f.telefono"
                name="telefono"
                type="tel"
                autocomplete="tel"
                placeholder="Ej. 809 555 0123"
                required
                :class="{ invalid: errores.telefono }"
                :aria-invalid="errores.telefono"
                @input="limpiarError('telefono')"
              />
            </label>
          </div>
          <label class="field">
            Correo electrónico
            <input v-model="f.email" name="email" type="email" autocomplete="email" placeholder="tucorreo@ejemplo.com" />
          </label>
          <div class="row">
            <label class="field">
              Servicio *
              <select
                v-model="f.servicio"
                name="servicio"
                required
                :class="{ invalid: errores.servicio }"
                :aria-invalid="errores.servicio"
                @change="limpiarError('servicio')"
              >
                <option value="">Selecciona una opción</option>
                <option v-for="s in servicios" :key="s.id" :value="s.titulo">{{ s.titulo }}</option>
                <option value="Otro / Evaluación general">Otro / Evaluación general</option>
              </select>
            </label>
            <label class="field">
              Fecha preferida
              <input v-model="f.fecha" name="fecha" type="date" :min="hoy" class="date" />
            </label>
          </div>
          <label class="field">
            Mensaje
            <textarea
              v-model="f.mensaje"
              name="mensaje"
              rows="4"
              placeholder="Cuéntanos brevemente el motivo de tu consulta"
            ></textarea>
          </label>

          <p v-if="hayError" class="error" role="alert">Por favor completa los campos marcados con *.</p>
          <p v-if="errorEnvio" class="error" role="alert">{{ errorEnvio }}</p>

          <button type="submit" class="btn btn-primary submit" :disabled="enviando">
            {{ enviando ? 'Enviando…' : viaWa ? 'Enviar solicitud por WhatsApp' : 'Enviar solicitud' }}
          </button>
          <p class="note">
            {{ viaWa ? 'Se abrirá WhatsApp con tus datos listos para enviar.' : 'Tus datos se envían de forma segura al consultorio.' }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr));
  gap: 56px;
  align-items: start;
}
.intro {
  display: flex;
  flex-direction: column;
  gap: 22px;
  position: sticky;
  top: 110px;
}
.intro p {
  margin: 0;
  font-size: 17px;
  line-height: 1.7;
  color: var(--texto-2);
}
.wa {
  align-self: flex-start;
  gap: 12px;
  padding: 15px 24px;
}
.card {
  background: #fff;
  border-radius: 28px;
  padding: clamp(24px, 4vw, 44px);
  box-shadow: 0 30px 60px -40px rgba(194, 24, 91, 0.4);
  border: 1px solid #f3dde5;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 18px;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
}
.field input,
.field select,
.field textarea {
  font-size: 16px;
  font-weight: 400;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid var(--borde-3);
  background: var(--crema);
  outline: none;
  color: var(--texto);
  width: 100%;
  transition: border-color 0.15s, background-color 0.15s;
}
.field .date {
  padding: 13px 16px;
}
.field textarea {
  resize: vertical;
}
.field input:focus,
.field select:focus,
.field textarea:focus {
  border-color: var(--fucsia);
  background: #fff;
}
.field .invalid,
.field .invalid:focus {
  border-color: var(--error);
}
.error {
  margin: 0;
  font-size: 14px;
  color: #b0123f;
  font-weight: 500;
}
.submit {
  margin-top: 6px;
  justify-content: center;
  padding: 18px 24px;
  font-size: 17px;
}
.submit:disabled {
  opacity: 0.7;
  cursor: wait;
}
.note {
  margin: 0;
  font-size: 13px;
  color: var(--texto-3);
  text-align: center;
}
.success {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  padding: 40px 8px;
}
.check {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--rosa-claro);
  color: var(--fucsia);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
}
.success h3 {
  margin: 0;
  font-family: var(--serif);
  font-weight: 400;
  font-size: 32px;
}
.success p {
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  color: var(--texto-2);
  max-width: 380px;
}
.again {
  margin-top: 8px;
  background: transparent;
  border: 1px solid var(--borde-2);
  color: var(--texto);
  padding: 12px 22px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
}
.again:hover {
  border-color: var(--fucsia);
}

@media (max-width: 860px) {
  .intro {
    position: static;
  }
}
</style>
