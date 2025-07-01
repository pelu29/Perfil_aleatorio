# Perfil Aleatorio - Grupo 4

Generador de perfiles aleatorios usando la API pública [randomuser.me](https://randomuser.me/). Permite generar, visualizar y guardar perfiles en memoria durante la sesión, con un diseño moderno y responsivo.

---

## Tabla de Contenidos

- [Características](#características)
- [Requisitos](#requisitos)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Ejecución](#instalación-y-ejecución)
- [Uso](#uso)
- [Detalles Técnicos](#detalles-técnicos)
- [Mejoras y Extensiones](#mejoras-y-extensiones)
- [Créditos](#créditos)

---

## Características

- **Generación de perfiles aleatorios** con nombre, país, email e imagen.
- **Diseño tipo tarjeta** para visualización de perfil.
- **Botón para guardar perfiles** en memoria (solo durante la sesión actual).
- **Listado de perfiles guardados** con opción de eliminar.
- **Interfaz responsiva y moderna** (CSS personalizado).
- **Sin dependencias externas** (solo HTML, CSS y JS puro).

---

## Requisitos

- Navegador web moderno (Chrome, Edge, Firefox, etc.)
- No requiere instalación de Node.js ni frameworks.
- No requiere backend ni base de datos.

---

## Estructura del Proyecto

```
Perfil_aleatorio/
│
├── aleatorio.html      # Página principal de la aplicación
├── estilos.css         # Estilos personalizados y responsivos
├── script.js           # Lógica JS para consumir la API y manejar perfiles
└── README.md           # (Este archivo)
```

---

## Instalación y Ejecución

1. **Descarga o clona** este repositorio en tu equipo:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. **Abre la carpeta** `Perfil_aleatorio` en tu editor o navegador de archivos.

3. **Haz doble clic** en `aleatorio.html` para abrir la aplicación en tu navegador.

   > No se requiere servidor local ni instalación adicional.

---

## Uso

1. Haz clic en el botón **"🎲 Generar Perfil"** para obtener un perfil aleatorio.
2. Visualiza el perfil generado en la tarjeta: nombre, país, email e imagen.
3. Si deseas guardar el perfil, haz clic en **"💾 Guardar Perfil"**.
4. Los perfiles guardados aparecerán listados debajo, con su miniatura y datos.
5. Puedes eliminar cualquier perfil guardado usando el botón **🗑️** junto a cada uno.
6. **Nota:** Los perfiles guardados solo existen en memoria y se perderán al recargar la página.

---

## Detalles Técnicos

- **API utilizada:** [randomuser.me](https://randomuser.me/)
- **Persistencia:** Solo en memoria (array JS). No se usa localStorage ni backend.
- **Responsividad:** Adaptado para móviles y escritorio vía media queries en CSS.
- **Accesibilidad:** Uso de etiquetas semánticas y atributos `alt` en imágenes.
- **Código limpio y modular:** Separación clara entre HTML, CSS y JS.

---

## Mejoras y Extensiones

- Persistencia en `localStorage` para mantener perfiles tras recargar.
- Filtros o búsqueda en la lista de perfiles guardados.
- Exportar perfiles a CSV/JSON.
- Internacionalización (i18n) y soporte multilenguaje.
- Mejoras de accesibilidad (teclado, lectores de pantalla).

---

## Créditos

- **API:** [randomuser.me](https://randomuser.me/)
- **Inspiración:** Buenas prácticas de documentación de Google, Microsoft y empresas líderes en tecnología.
