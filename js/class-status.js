class ClassStatusManager {
    constructor() {
        this.currentDate = new Date()
        this.init()
    }

    init() {
        if (typeof window.academicCalendar2025 === "undefined") {
            setTimeout(() => this.init(), 100)
            return
        }

        this.updateDateTime()
        this.updateClassStatus()
        this.updateTomorrowClassStatus()
        this.updateUpcomingEvents()

        // Actualizar cada segundo
        setInterval(() => {
            this.updateDateTime()
        }, 1000)

        // Actualizar estado de clases cada minuto
        setInterval(() => {
            this.updateClassStatus()
            this.updateTomorrowClassStatus()
        }, 60000)
    }

    updateDateTime() {
        const now = new Date()

        // Formatear fecha
        const dateOptions = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        }
        const formattedDate = now.toLocaleDateString("es-ES", dateOptions)

        // Formatear hora
        const timeOptions = {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        }
        const formattedTime = now.toLocaleTimeString("es-ES", timeOptions)

        // Actualizar DOM para hoy
        const dateElement = document.querySelector(".current-date")
        const timeElement = document.querySelector(".current-time")

        if (dateElement) {
            dateElement.textContent = this.capitalizeFirst(formattedDate)
        }

        if (timeElement) {
            timeElement.textContent = formattedTime
        }

        // Formatear fecha de mañana
        const tomorrow = new Date(now)
        tomorrow.setDate(tomorrow.getDate() + 1)
        const tomorrowFormattedDate = tomorrow.toLocaleDateString("es-ES", dateOptions)

        // Actualizar DOM para mañana
        const tomorrowDateElement = document.querySelector(".tomorrow-date-text")
        if (tomorrowDateElement) {
            tomorrowDateElement.textContent = this.capitalizeFirst(tomorrowFormattedDate)
        }
    }

    updateClassStatus() {
        const today = new Date()
        const todayStr = this.formatDate(today)
        const dayOfWeek = today.getDay() // 0 = domingo, 6 = sábado

        let hasClasses = false
        let reason = ""

        if (!window.academicCalendar2025) {
            reason = "Error: No se pudieron cargar los datos del calendario"
            this.updateStatusDisplay(false, reason)
            return
        }

        // Verificar si es fin de semana
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            hasClasses = false
            reason = dayOfWeek === 0 ? "Domingo" : "Sábado"
        }
        // Verificar períodos sin clases
        else if (this.isInNoClassPeriod(todayStr)) {
            hasClasses = false
            reason = this.getNoClassReason(todayStr)
        }
        // Verificar feriados
        else if (this.isHoliday(todayStr)) {
            hasClasses = false
            reason = this.getHolidayName(todayStr)
        }
        // Verificar períodos de exámenes
        else if (this.isExamPeriod(todayStr)) {
            hasClasses = false
            reason = `Período de Exámenes - ${this.getExamPeriodName(todayStr)}`
        }
        // Verificar si está en período académico
        else if (this.isInAcademicPeriod(todayStr)) {
            hasClasses = true
            reason = this.getAcademicPeriodName(todayStr)
        } else {
            hasClasses = false
            reason = "Fuera del período académico"
        }

        this.updateStatusDisplay(hasClasses, reason)
    }

    updateTomorrowClassStatus() {
        const today = new Date() // Cambiar this.currentDate por new Date()
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)
        const tomorrowStr = this.formatDate(tomorrow)
        const dayOfWeek = tomorrow.getDay() // 0 = domingo, 6 = sábado

        let hasClasses = false
        let reason = ""

        if (!window.academicCalendar2025) {
            reason = "Error: No se pudieron cargar los datos del calendario"
            this.updateTomorrowStatusDisplay(false, reason)
            return
        }

        // Verificar si es fin de semana
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            hasClasses = false
            reason = dayOfWeek === 0 ? "Domingo" : "Sábado"
        }
        // Verificar períodos sin clases
        else if (this.isInNoClassPeriod(tomorrowStr)) {
            hasClasses = false
            reason = this.getNoClassReason(tomorrowStr)
        }
        // Verificar feriados
        else if (this.isHoliday(tomorrowStr)) {
            hasClasses = false
            reason = this.getHolidayName(tomorrowStr)
        }
        // Verificar períodos de exámenes
        else if (this.isExamPeriod(tomorrowStr)) {
            hasClasses = false
            reason = `Período de Exámenes - ${this.getExamPeriodName(tomorrowStr)}`
        }
        // Verificar si está en período académico
        else if (this.isInAcademicPeriod(tomorrowStr)) {
            hasClasses = true
            reason = this.getAcademicPeriodName(tomorrowStr)
        } else {
            hasClasses = false
            reason = "Fuera del período académico"
        }

        this.updateTomorrowStatusDisplay(hasClasses, reason)
    }

    isInNoClassPeriod(dateStr) {
        return window.academicCalendar2025.noClassPeriods.some((period) => dateStr >= period.start && dateStr <= period.end)
    }

    getNoClassReason(dateStr) {
        const period = window.academicCalendar2025.noClassPeriods.find(
            (period) => dateStr >= period.start && dateStr <= period.end,
        )
        return period ? period.name : "Sin clases"
    }

    isHoliday(dateStr) {
        return window.academicCalendar2025.holidays.some((holiday) => holiday.date === dateStr)
    }

    getHolidayName(dateStr) {
        const holiday = window.academicCalendar2025.holidays.find((holiday) => holiday.date === dateStr)
        return holiday ? holiday.name : "Feriado"
    }

    isExamPeriod(dateStr) {
        return window.academicCalendar2025.examPeriods.some((period) => dateStr >= period.start && dateStr <= period.end)
    }

    getExamPeriodName(dateStr) {
        const period = window.academicCalendar2025.examPeriods.find(
            (period) => dateStr >= period.start && dateStr <= period.end,
        )
        return period ? period.name : "Exámenes"
    }

    isInAcademicPeriod(dateStr) {
        return window.academicCalendar2025.academicPeriods.some(
            (period) => dateStr >= period.start && dateStr <= period.end,
        )
    }

    getAcademicPeriodName(dateStr) {
        const period = window.academicCalendar2025.academicPeriods.find(
            (period) => dateStr >= period.start && dateStr <= period.end,
        )
        return period ? period.name : ""
    }

    updateStatusDisplay(hasClasses, reason) {
        const statusBadge = document.querySelector(".status-badge")
        const reasonText = document.querySelector(".reason-text")

        if (statusBadge) {
            statusBadge.className = "status-badge"
            if (hasClasses) {
                statusBadge.classList.add("has-classes")
                statusBadge.textContent = "HAY CLASES"
            } else {
                statusBadge.classList.add("no-classes")
                statusBadge.textContent = "NO HAY CLASES"
            }
        }

        if (reasonText) {
            reasonText.textContent = reason
        }
    }

    updateTomorrowStatusDisplay(hasClasses, reason) {
        const tomorrowStatusBadge = document.querySelector(".tomorrow-status-badge")
        const tomorrowReasonText = document.querySelector(".tomorrow-reason-text")

        if (tomorrowStatusBadge) {
            tomorrowStatusBadge.className = "tomorrow-status-badge"
            if (hasClasses) {
                tomorrowStatusBadge.classList.add("has-classes")
                tomorrowStatusBadge.textContent = "HAY CLASES MAÑANA"
            } else {
                tomorrowStatusBadge.classList.add("no-classes")
                tomorrowStatusBadge.textContent = "NO HAY CLASES MAÑANA"
            }
        }

        if (tomorrowReasonText) {
            tomorrowReasonText.textContent = reason
        }
    }

    updateUpcomingEvents() {
        const today = new Date()
        const upcomingEvents = this.getUpcomingEvents(today, 3)

        const eventsContainer = document.querySelector(".events-list")
        if (eventsContainer && upcomingEvents.length > 0) {
            eventsContainer.innerHTML = upcomingEvents
                .map(
                    (event) => `
        <div class="event-item">
          <div class="event-date">
            <span class="event-day">${event.day}</span>
            <span class="event-month">${event.month}</span>
          </div>
          <div class="event-details">
            <h3 class="event-title">${event.name}</h3>
            <p class="event-description">${event.description}</p>
          </div>
        </div>
      `,
                )
                .join("")
        } else if (eventsContainer) {
            eventsContainer.innerHTML = `
        <div class="event-item">
          <div class="event-date">
            <span class="event-day">--</span>
            <span class="event-month">---</span>
          </div>
          <div class="event-details">
            <h3 class="event-title">No hay eventos próximos</h3>
            <p class="event-description">Consulta el calendario completo</p>
          </div>
        </div>
      `
        }
    }

    getUpcomingEvents(fromDate, limit = 5) {
        const fromDateStr = this.formatDate(fromDate)
        const allEvents = [
            ...window.academicCalendar2025.importantEvents,
            ...window.academicCalendar2025.holidays.map((h) => ({
                date: h.date,
                name: h.name,
                description: "Feriado",
            })),
        ]

        return allEvents
            .filter((event) => event.date >= fromDateStr)
            .sort((a, b) => a.date.localeCompare(b.date))
            .slice(0, limit)
            .map((event) => {
                const eventDate = new Date(event.date + "T00:00:00")
                return {
                    ...event,
                    day: eventDate.getDate(),
                    month: eventDate.toLocaleDateString("es-ES", { month: "short" }).toUpperCase(),
                }
            })
    }

    formatDate(date) {
        return date.toISOString().split("T")[0]
    }

    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    new ClassStatusManager()
})
