# Landing — Dra. Maryfe Reyes

Landing page de una sola página para el consultorio dental, hecha con Vue 3 + Vite.

## Desarrollo

```sh
npm install
npm run dev      # servidor local
npm run build    # type-check + build de producción en dist/
```

## Configuración

Edita [`src/config.ts`](src/config.ts):

- `WHATSAPP` — número solo con dígitos y código de país (ej. `18095550123`)
- `DIRECCION` — se usa para el mapa embebido y el botón "Cómo llegar"
- `ENVIO` — `'whatsapp'` abre WhatsApp con los datos del formulario; `'api'` hace un POST JSON a `VITE_FORM_ENDPOINT` (copia `.env.example` a `.env`)

Servicios y valores: [`src/data/servicios.ts`](src/data/servicios.ts).

## Imágenes

Coloca las fotos en `src/assets/` con estos nombres (jpg, png, webp o avif):

`hero-doctora`, `consultorio`, `srv-limpieza`, `srv-blanqueamiento`, `srv-ortodoncia`, `srv-estetica`, `galeria-1` … `galeria-6`

Mientras no existan se muestra un placeholder crema con el nombre esperado. Para la vista previa al compartir (Open Graph) agrega `public/og-image.jpg` (1200×630).
