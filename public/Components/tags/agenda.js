class Agenda extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            <link rel="stylesheet" href="tags.css">
            <div class="agenda-container">
                <div class="agenda-head">
                    <h5>Tu Agenda Financiera</h5>
                </div>

                <div class="agenda-body">
                    <div class="calendar-title">
                        <p class="body_1">Esta semana</p>
                    </div>

                    <div class="calendar-container">
                        <div class="calendar">
                            <div class="calendar-item calendar-item-selected position-relative">
                                <p class="body_1">D</p>
                                <p class="body_1">0</p>

                                <span class="position-absolute top-0 start-100 translate-middle p-1 bg-warning border border-light rounded-circle">
                                    <span class="visually-hidden">New alerts</span>
                                </span>
                            </div>
        
                            <div class="calendar-item">
                                <p class="body_1">L</p>
                                <p class="body_1">0</p>
                            </div>
        
                            <div class="calendar-item">
                                <p class="body_1">M</p>
                                <p class="body_1">0</p>
                            </div>
        
                            <div class="calendar-item">
                                <p class="body_1">M</p>
                                <p class="body_1">0</p>
                            </div>
        
                            <div class="calendar-item">
                                <p class="body_1">J</p>
                                <p class="body_1">0</p>
                            </div>
        
                            <div class="calendar-item position-relative">
                                <p class="body_1">V</p>
                                <p class="body_1">0</p>

                                <span class="position-absolute top-0 start-100 translate-middle p-1 bg-warning border border-light rounded-circle">
                                    <span class="visually-hidden">New alerts</span>
                                </span>
                            </div>
        
                            <div class="calendar-item">
                                <p class="body_1">S</p>
                                <p class="body_1">0</p>
                            </div>
                        </div>
                        
                        <div class="calendar-data">
                            <div class="calendar-event">
                                <div class="calendar-event-head">
                                    <h5 class="">Pago crédito Yo Construyo</h5>
                                    <p class="body_3">Formas de Pago: Virtual / Presencial</p>
                                </div>
                                
                                <div class="calendar-event-body">
                                    <div class="calendar-event-detail">
                                        <p class="body_3">Próxima Cuota</p>
                                        <p class="body_3">$000.000.000</p>
                                    </div>
        
                                    <div class="calendar-event-detail">
                                        <p class="body_3">Fecha Límite</p>
                                        <p class="body_3">Dia Mes</p>
                                    </div>
        
                                </div>
        
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define('user-agenda', Agenda)
export default Agenda