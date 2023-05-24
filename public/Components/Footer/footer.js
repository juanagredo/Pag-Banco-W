class Footer extends HTMLElement {

    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="/public/Components/Footer/footer.css">
        <footer class="footerW border-0">
        <div class="container">
          <div class="row">
            <div class="col-md-3">

              <h5 class="headline5 text-white border-bottom line-color pb-2">Acerca de nosotros</h5>
              <hr class= separadortitulo>

              <ul class="list-unstyled">
                <li><a href="#" class="text-white">Quiénes sómos</a></li>
                </ul>
                <ul class="list-unstyled">
                <li><a href="#" class="text-white">Trabaja con nosotros</a></li>
                </ul>
                <ul class="list-unstyled">
                <li><a href="#" class="text-white">Proveedores</a></li>
                </ul>
                <ul class="list-unstyled">
                <li><a href="#" class="text-white">Licitación de seguros</a></li>
              </ul>
            </div>
            <div class="col-md-3">

              <h5 class="headline5 text-white border-bottom line-color pb-2">Tasas y tarifas</h5>
              <hr class= separadortitulo>

              <ul class="list-unstyled">
                <li><a href="#" class="text-white">Microcrédito</a></li>
                </ul>
                <ul class="list-unstyled">
                <li><a href="#" class="text-white">Libranza</a></li>
                </ul>
                <ul class="list-unstyled">
                </ul>
                <ul class="list-unstyled">
                <li><a href="#" class="text-white">Cuenta de ahorro</a></li>
                </ul>
                <ul class="list-unstyled">
                <li><a href="#" class="text-white">Depósito de bajo monto</a></li>
                </ul>
                <ul class="list-unstyled">
                <li><a href="#" class="text-white">CDT</a></li>
              </ul>
            </div>
            <div class="col-md-3">

              <h5 class="headline5 text-white border-bottom line-color pb-2">Te escuchamos</h5>
              <hr class= separadortitulo>

              <ul class="list-unstyled">
                
              <li><a href="#" class="text-white ">Consultas, quejas o reclamos </a></li>
                </ul>
                <ul class="list-unstyled">
                <li><a href="#" class="text-white">Defensor del consumidor financiero</a></li>
                </ul>
                <ul class="list-unstyled">
                <li><a href="#" class="text-white">Deberes y derechos del consumidor</a></li>
                </ul>
              </ul>
            </div>
            <div class="col-md-3">

              <h5 class="headline5 text-white border-bottom line-color pb-2 ">Nuestras redes sociales</h5>
              <hr class= separadortitulo>

              <ul class="list-unstyled d-flex ">
                <li class="px-3"><a href="#" class="text-white "><i class="bi bi-facebook h2"></i></a></li>
                <li class="px-3"><a href="#" class="text-white"><i class="bi bi-twitter h2"></i></a></li>
                <li class="px-3"><a href="#" class="text-white"><i class="bi bi-youtube h2 "></i></a></li>
                <li class="px-3"><a href="#" class="text-white"><i class="bi bi-instagram h2"></i></a></li>
                </ul><a href="#" class="text-white"style= "font-size:13px" >Pagina Web Defensoría del Consumidor Financiero www.defensorialg.com.co</a>

                </div>
              <div class="col-md-5">
              
              </div>
              <div class="col-md-4">
              
              </ul>

            </div>
          </div>
        </div>
      </footer>
    
        `
    }

}

customElements.define('w-footer', Footer)
export default Footer