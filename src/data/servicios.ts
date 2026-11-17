export interface Servicio {
  id: string
  num: string
  titulo: string
  desc: string
  foto: string
}

export const servicios: Servicio[] = [
  { id: 'srv-limpieza', num: '01', titulo: 'Limpieza dental', desc: 'Profilaxis profunda y revisión completa para mantener encías y dientes sanos.', foto: 'Foto: limpieza dental' },
  { id: 'srv-blanqueamiento', num: '02', titulo: 'Blanqueamiento', desc: 'Aclara varios tonos tu sonrisa con un procedimiento seguro y supervisado.', foto: 'Foto: blanqueamiento' },
  { id: 'srv-ortodoncia', num: '03', titulo: 'Ortodoncia', desc: 'Brackets y alineadores para corregir la posición de tus dientes.', foto: 'Foto: ortodoncia' },
  { id: 'srv-estetica', num: '04', titulo: 'Diseño de sonrisa', desc: 'Carillas y resinas estéticas para una sonrisa armoniosa y natural.', foto: 'Foto: diseño de sonrisa' },
]

export const valores = ['Atención personalizada', 'Materiales de calidad', 'Ambiente cálido', 'Planes de pago']
