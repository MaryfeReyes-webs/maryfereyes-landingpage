export const WHATSAPP = '18095550123' // solo dígitos, con código de país
export const DIRECCION = 'Av. Abraham Lincoln, Santo Domingo, República Dominicana'
export const ENVIO: 'whatsapp' | 'api' = 'whatsapp'

export const WA_DISPLAY = '+' + WHATSAPP
export const waLink = (mensaje: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`
export const WA_SALUDO = waLink('Hola Dra. Maryfe, quisiera información para agendar una cita.')
export const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(DIRECCION)}&output=embed`
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(DIRECCION)}`
