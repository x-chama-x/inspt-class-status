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

### Solución actual

#### Actualización del calendario manual
- Actualizar `calendar-data.js` cuando se publique un nuevo calendario
- Es la opción más confiable para datos críticos