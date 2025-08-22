// Datos del Calendario Académico 2025 - INSPT UTN
// Basado en Disposición N° 699/2024

const academicCalendar2025 = {
  // Períodos sin clases
  noClassPeriods: [
    {
      name: "Receso de Verano",
      start: "2025-01-01",
      end: "2025-01-26",
      description: "Sin actividad Académica",
    },
    {
      name: "Feriado de Carnaval",
      start: "2025-03-03",
      end: "2025-03-04",
      description: "Feriado de Carnaval",
    },
    {
      name: "Receso Invernal",
      start: "2025-07-21",
      end: "2025-08-01",
      description: "Sin Actividad Académica",
    },
    {
      name: "Receso de Verano 2026",
      start: "2026-01-01",
      end: "2026-01-25",
      description: "Sin actividad Académica",
    },
  ],

  // Feriados y días no laborables
  holidays: [
    { date: "2025-03-24", name: "Día Nacional de la Memoria por la Verdad y la Justicia" },
    { date: "2025-04-02", name: "Día del Veterano y de los Caídos en la Guerra de Malvinas" },
    { date: "2025-04-17", name: "Día no laboral: Festividad Cristiana" },
    { date: "2025-04-18", name: "Viernes Santo" },
    { date: "2025-04-19", name: "Día no laboral: Festividad Cristiana" },
    { date: "2025-05-01", name: "Día del Trabajador" },
    { date: "2025-05-02", name: "Día no laboral con fines turísticos" },
    { date: "2025-05-25", name: "Día de la Revolución de Mayo" },
    { date: "2025-06-16", name: "Feriado Trasladable: Paso a la Inmortalidad Del Gral. Güemes" },
    { date: "2025-06-20", name: "Paso a la Inmortalidad Del Gral. Manuel Belgrano" },
    { date: "2025-07-09", name: "Día de la Independencia" },
    { date: "2025-08-15", name: "Día no laboral con fines turísticos: Paso a la Inmortalidad del Gral. San Martín" },
    { date: "2025-08-17", name: "Paso a la Inmortalidad del Gral. San Martín" },
    { date: "2025-08-19", name: "Día de la Universidad Tecnológica Nacional" },
    { date: "2025-09-21", name: "Día del Estudiante" },
    { date: "2025-10-12", name: "Día del Respeto por la Diversidad Cultural" },
    { date: "2025-11-20", name: "Día de la Soberanía Nacional" },
    { date: "2025-11-21", name: "Día no laboral con fines turísticos" },
    { date: "2025-11-26", name: "Día del trabajador Nodocente" },
    { date: "2025-12-08", name: "Inmaculada Concepción de la Virgen María" },
    { date: "2025-12-25", name: "Navidad" },
  ],

  // Períodos académicos
  academicPeriods: [
    {
      name: "1er Cuatrimestre",
      start: "2025-03-25",
      end: "2025-07-18",
      description: "Asignaturas Anuales y Cuatrimestrales",
    },
    {
      name: "2do Cuatrimestre",
      start: "2025-08-11",
      end: "2025-11-21",
      description: "Asignaturas anuales y cuatrimestrales",
    },
  ],

  // Períodos de exámenes (sin clases regulares)
  examPeriods: [
    { start: "2025-02-17", end: "2025-02-21", name: "7mo Llamado" },
    { start: "2025-02-24", end: "2025-02-28", name: "8vo Llamado" },
    { start: "2025-05-13", end: "2025-05-13", name: "1er Llamado" },
    { start: "2025-08-04", end: "2025-08-08", name: "2do Llamado" },
    { start: "2025-10-01", end: "2025-10-01", name: "3er Llamado" },
    { start: "2025-12-01", end: "2025-12-05", name: "4to Llamado" },
    { start: "2025-12-09", end: "2025-12-12", name: "5to Llamado" },
    { start: "2025-12-15", end: "2025-12-19", name: "6to Llamado" },
    { start: "2026-02-18", end: "2026-02-24", name: "7mo Llamado 2026" },
    { start: "2026-02-25", end: "2026-03-03", name: "8vo Llamado 2026" },
  ],

  // Eventos importantes
  importantEvents: [
    {
      date: "2025-01-27",
      name: "Inicio de actividades administrativas",
      description: "Inicio del 2do Período de inscripción a carreras",
    },
    {
      date: "2025-02-28",
      name: "Última fecha inscripción",
      description: "Nuevos ingresantes: última fecha de inscripción a carreras",
    },
    { date: "2025-03-25", name: "Inicio 1er Cuatrimestre", description: "Asignaturas Anuales y Cuatrimestrales" },
    { date: "2025-07-18", name: "Finalización 1er cuatrimestre", description: "" },
    { date: "2025-08-11", name: "Inicio 2do Cuatrimestre", description: "Asignaturas anuales y cuatrimestrales" },
    { date: "2025-11-21", name: "Finalización 2do cuatrimestre", description: "" },
  ],
}

window.academicCalendar2025 = academicCalendar2025
