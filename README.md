# Estado de Clases INSPT-UTN

Una aplicación web que muestra en tiempo real si hay clases en el INSPT-UTN basándose en el calendario académico oficial.

## Características

- ✅ **Estado en tiempo real**: Muestra si hay clases o no según la fecha actual
- 📅 **Calendario integrado**: Basado en el Calendario Académico 2025 oficial
- 🕒 **Actualización automática**: Fecha y hora se actualizan cada segundo
- 📱 **Responsive**: Funciona en dispositivos móviles y desktop
- 🎯 **Próximos eventos**: Muestra los siguientes eventos importantes del calendario

## Cómo funciona

La aplicación evalúa automáticamente:

1. **Fines de semana**: Sábados y domingos = No hay clases
2. **Períodos de receso**: Verano, invierno = No hay clases  
3. **Feriados**: Días feriados nacionales = No hay clases
4. **Períodos de exámenes**: Durante exámenes finales = No hay clases regulares
5. **Períodos académicos**: 1er y 2do cuatrimestre = Hay clases

## Sobre los datos del PDF

### Problema actual
El PDF del calendario está en: `https://inspt.utn.edu.ar/wp-content/uploads/2024/12/Calentadio_academico_2025-VIC.pdf`

**Limitaciones para extraer datos directamente del PDF:**
- Los navegadores no pueden leer PDFs directamente por seguridad (CORS)
- Extraer texto de PDFs requiere librerías especiales
- El PDF puede cambiar de URL o estructura

### Soluciones recomendadas:

#### Opción 1: Servidor proxy (Recomendada)
\`\`\`javascript
// Crear un endpoint en tu servidor que descargue y procese el PDF
fetch('/api/calendar-data')
  .then(response => response.json())
  .then(data => updateCalendar(data));
\`\`\`

#### Opción 2: Actualización manual
- Actualizar `calendar-data.js` cuando se publique un nuevo calendario
- Es la opción más confiable para datos críticos

#### Opción 3: Web scraping
- Crear un script que extraiga datos del sitio web de la facultad
- Ejecutar periódicamente para mantener datos actualizados

#### Opción 4: API de la facultad
- Contactar con el departamento de sistemas para obtener acceso a datos estructurados
- Sería la solución más profesional a largo plazo

## Estructura del proyecto

\`\`\`
/
├── index.html              # Página principal
├── css/
│   └── styles.css         # Estilos CSS
├── js/
│   ├── calendar-data.js   # Datos del calendario académico
│   └── class-status.js    # Lógica principal de la aplicación
└── README.md              # Este archivo
\`\`\`

## Instalación

1. Clona o descarga los archivos
2. Abre `index.html` en tu navegador
3. ¡Listo! La aplicación funcionará automáticamente

## Personalización

Para actualizar el calendario:
1. Edita `js/calendar-data.js`
2. Agrega/modifica las fechas según el nuevo calendario oficial
3. La aplicación se actualizará automáticamente
