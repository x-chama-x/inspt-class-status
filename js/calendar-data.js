// Datos del Calendario Académico 2026 - INSPT UTN
// Basado en Disposición N° 620/2025

const academicCalendar2026 = {
  // Períodos sin clases
  noClassPeriods: [
    {
      name: "Receso de Verano",
      start: "2026-01-01",
      end: "2026-01-25",
      description: "Sin actividad Académica",
    },
    {
      name: "Feriado de Carnaval",
      start: "2026-02-16",
      end: "2026-02-17",
      description: "Feriado de Carnaval",
    },
    {
      name: "Receso Invernal",
      start: "2026-07-20",
      end: "2026-08-01",
      description: "Sin Actividad Académica",
    },
    {
      name: "Receso de Verano 2027",
      start: "2027-01-01",
      end: "2027-01-24",
      description: "Sin actividad Académica",
    },
  ],

  // Feriados y días no laborables
  holidays: [
    { date: "2026-03-23", name: "Día no laboral con fines turísticos" },
    { date: "2026-03-24", name: "Día Nacional de la Memoria por la Verdad y la Justicia" },
    { date: "2026-04-02", name: "Día del Veterano y de los Caídos en la Guerra de Malvinas / Jueves Santo" },
    { date: "2026-04-03", name: "Viernes Santo" },
    { date: "2026-04-04", name: "Sábado Santo" },
    { date: "2026-05-01", name: "Día del Trabajador" },
    { date: "2026-05-02", name: "Día del Docente Tecnológico" },
    { date: "2026-05-25", name: "Día de la Revolución de Mayo" },
    { date: "2026-06-15", name: "Feriado Trasladable: Paso a la Inmortalidad Del Gral. Güemes" },
    { date: "2026-06-20", name: "Paso a la Inmortalidad Del Gral. Manuel Belgrano" },
    { date: "2026-07-09", name: "Día de la Independencia" },
    { date: "2026-07-10", name: "Día no laboral con fines turísticos" },
    { date: "2026-08-17", name: "Paso a la Inmortalidad del Gral. San Martín" },
    { date: "2026-08-19", name: "Día de la Universidad Tecnológica Nacional" },
    { date: "2026-09-21", name: "Día del Estudiante" },
    { date: "2026-10-12", name: "Día del Respeto por la Diversidad Cultural" },
    { date: "2026-11-23", name: "Día de la Soberanía Nacional" },
    { date: "2026-11-26", name: "Día del trabajador Nodocente" },
    { date: "2026-12-07", name: "Día no laboral con fines turísticos" },
    { date: "2026-12-08", name: "Inmaculada Concepción de la Virgen María" },
    { date: "2026-12-25", name: "Navidad" },
  ],

  // Períodos académicos
  academicPeriods: [
    {
      name: "1er Cuatrimestre",
      start: "2026-03-25",
      end: "2026-07-18",
      description: "Asignaturas Anuales y Cuatrimestrales",
    },
    {
      name: "2do Cuatrimestre",
      start: "2026-08-10",
      end: "2026-11-21",
      description: "Asignaturas anuales y cuatrimestrales",
    },
  ],

  // Períodos de exámenes (sin clases regulares)
  examPeriods: [
    { start: "2026-02-18", end: "2026-02-24", name: "7mo Llamado" },
    { start: "2026-02-25", end: "2026-03-03", name: "8vo Llamado" },
    { start: "2026-05-12", end: "2026-05-12", name: "1er Llamado" },
    { start: "2026-08-03", end: "2026-08-07", name: "2do Llamado" },
    { start: "2026-10-01", end: "2026-10-01", name: "3er Llamado" },
    { start: "2026-11-30", end: "2026-12-04", name: "4to Llamado" },
    { start: "2026-12-07", end: "2026-12-11", name: "5to Llamado" },
    { start: "2026-12-14", end: "2026-12-18", name: "6to Llamado" },
    { start: "2027-02-15", end: "2027-02-19", name: "7mo Llamado 2027" },
    { start: "2027-02-22", end: "2027-02-26", name: "8vo Llamado 2027" },
  ],

  // Eventos importantes
  importantEvents: [
    {
      date: "2026-01-26",
      name: "Inicio de actividades administrativas",
      description: "Inicio del 2do Período de inscripción a carreras",
    },
    {
      date: "2026-02-26",
      name: "Última fecha inscripción",
      description: "Nuevos ingresantes: última fecha de inscripción a carreras",
    },
    { date: "2026-03-25", name: "Inicio 1er Cuatrimestre", description: "Asignaturas Anuales y Cuatrimestrales" },
    { date: "2026-07-18", name: "Finalización 1er cuatrimestre", description: "" },
    { date: "2026-08-10", name: "Inicio 2do Cuatrimestre", description: "Asignaturas anuales y cuatrimestrales" },
    { date: "2026-11-21", name: "Finalización 2do cuatrimestre", description: "" },
  ],
}

window.academicCalendar2026 = academicCalendar2026
