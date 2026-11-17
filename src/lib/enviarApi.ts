export interface DatosCita {
  nombre: string
  telefono: string
  email: string
  servicio: string
  fecha: string
  mensaje: string
}

/**
 * Envía la solicitud a un endpoint externo (Formspree, EmailJS vía proxy o backend propio).
 * Configura VITE_FORM_ENDPOINT en un archivo .env (ver .env.example).
 */
export async function enviarApi(datos: DatosCita): Promise<void> {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT
  if (!endpoint) throw new Error('VITE_FORM_ENDPOINT no está configurado')

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(datos),
  })
  if (!res.ok) throw new Error(`Error al enviar (${res.status})`)
}
