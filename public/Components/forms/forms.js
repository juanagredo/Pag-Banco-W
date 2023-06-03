class Forms extends HTMLElement {
  constructor() {
    super();
    this.currentStep = 1;
    this.form = null;
    this.progressBar = null;
    this.img = "";
    this.dropdownButton1 = null;
    this.dropdownButton2 = null;
    this.dropdownButton3 = null;
    this.dropdownButton4 = null;


  }

  connectedCallback() {
    this.render();
    this.form = document.querySelector("#formulario");
    this.progressBar = document.querySelector(".progress-bar");
    this.img = this.getAttribute("img");
    this.dropdownButton1 = document.querySelector("#dropdownMenuButton1")
    this.dropdownButton2 = document.querySelector("#dropdownMenuButton2")
    this.dropdownButton3 = document.querySelector("#dropdownMenuButton3")
    this.dropdownButton4 = document.querySelector("#dropdownMenuButton4")
    this.addListeners();
  }

  static get observedAttributes(){
    return['img'];
  }

  attributeChangedCallback(nameAtr,oldValue,newValue){
    switch(nameAtr){
      case "img":
        this.img = newValue
        break;
    }
  }
  render() {
    this.innerHTML = `
      <link rel="stylesheet" href="forms.css">
      <section class="fondo-card">
      <section class="card-imagen">
        <img src="${this.img}" class="imagen-inCard" alt="">
      </section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <form id="formulario" method="post" action="">
              <label for="nombre" class="my-label">Los campos marcados con (*) son obligatorios.</label>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div id="etapa-1">
                <div class="form-group-forms" style = "margin-top: 3%;">
                  <label for="tipoDocumento"><h5 class = "body_2">Tipo de documento*</h5></label>
                  <div class="dropdown">
                    <button class="btn  btn_large_form formdrop dropdown-toggle text-start"  style ="width: 80%; "type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Cédula de ciudadanía <i class="bi bi-chevron-down float-end"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-forms dropdown_form" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item " >Cédula de ciudadanía</a></li>
                      <li><a class="dropdown-item " >Cédula de extranjería</a></li>
                      <li><a class="dropdown-item"  >NIT</a></li>
                    </ul>
                  </div>
                </div>
                <div class="form-group-forms" style = "margin-top: 3%;">
                  <label for="numeroDocumento"><h5 class = "body_2">Número de documento*</h5></label>
                  <input type="text" class="form-control gray-input " id="numeroDocumento" placeholder="Escribe tu número de documento" style = " border-radius: 20px !important;">
                </div>
                <div class="form-group-forms" style = "margin-top: 3%;">
                <label for="tipoProducto"><h5 class = "body_2">Producto*</h5></label>
                <div class="dropdown">
                  <button class="btn  btn_large_form formdrop dropdown-toggle text-start"  style ="width: 80%;" "type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Seleccionar <i class="bi bi-chevron-down float-end"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-forms dropdown_form" aria-labelledby="dropdownMenuButton2">
                    <li><a class="dropdown-item" >CDT</a></li>
                    <li><a class="dropdown-item" >Microcrédito</a></li>
                    <li><a class="dropdown-item" >Seguro soy vida</a></li>
                    <li><a class="dropdown-item" >Cuenta ahorro</a></li>
                    <li><a class="dropdown-item" >Depósito de bajo monto</a></li>
                    <li><a class="dropdown-item" >Yo construyo</a></li>
                    <li><a class="dropdown-item" >Inmueble productivo</a></li>



                  </ul>
                </div>
              </div>




                
                <div class="form-group-forms "style = "margin-top: 3%;">
                  <label for="nombre"><h5 class = "body_2">Nombre*</h5></label>
                  <input type="text" class="form-control form-control_formulario form-input" id="nombre" placeholder="Escribe tu nombre aquí"style = " border-radius: 20px !important;">
                </div>
                <div class="form-group-forms"style = "margin-top: 3%;">
                  <label for="apellido"><h5 class = "body_2">Apellido*</h5></label>
                  <input type="text" class="form-control form-control_formulario form-input" id="apellido" placeholder="Escribe tu apellido aquí" style = " border-radius: 20px !important;">
                </div>
                <div class="col-md-12 text-center">
                  <button type="button" class="btn btn_medium_active siguiente" style = "margin-top: 5%; margin-bottom: 5%; margin-left:40%;">Continuar <i class="bi bi-arrow-right float-end"></i></button>
                </div>
              </div>


              <div id="etapa-2" style="display:none;">
                <div class="form-group-forms" style = "margin-top: 3%;">
                  <label for="celular"><h5 class = "body_2">Celular</h5></label>
                  <input type="text" class="form-control form-control_formulario form-input" id="celular" placeholder="Ingresa tu número celular" style = " border-radius: 20px !important;">
                </div>
                <div class="form-group-forms" style = "margin-top: 3%;">
                  <label for="departamento"><h5 class = "body_2">Departamento</h5></label>
                  <div class="dropdown">
                    <button class="btn btn_large_form formdrop dropdown-toggle text-start" style ="width: 80%;" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                      Seleccione departamento <i class="bi bi-chevron-down float-end"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-forms dropdown_form" aria-labelledby="dropdownMenuButton3">
                    <li><a class="dropdown-item" >Amazonas</a></li>
                    <li><a class="dropdown-item" >Antioquia</a></li>
                    <li><a class="dropdown-item" >Arauca</a></li>
                    <li><a class="dropdown-item" >Atlantico</a></li>
                    <li><a class="dropdown-item" >Bolivar</a></li>
                    <li><a class="dropdown-item" >Boyaca</a></li>
                    <li><a class="dropdown-item" >Caldas</a></li>
                    <li><a class="dropdown-item" >Caqueta</a></li>
                    <li><a class="dropdown-item" >Casanare</a></li>
                    <li><a class="dropdown-item" >Cauca</a></li>
                    <li><a class="dropdown-item" >Cesar</a></li>
                    <li><a class="dropdown-item" >Choco</a></li>
                    <li><a class="dropdown-item" >Cordoba</a></li>
                    <li><a class="dropdown-item" >Cundinamarca</a></li>
                    <li><a class="dropdown-item" >Guainía</a></li>
                    <li><a class="dropdown-item" >Guaviare</a></li>
                    <li><a class="dropdown-item" >Huila</a></li>
                    <li><a class="dropdown-item" >La Guajira</a></li>
                    <li><a class="dropdown-item" >Magdalena</a></li>
                    <li><a class="dropdown-item" >Meta</a></li>
                    <li><a class="dropdown-item" >Nariño</a></li>
                    <li><a class="dropdown-item" >Norte de Santander</a></li>
                    <li><a class="dropdown-item" >Putumayo</a></li>
                    <li><a class="dropdown-item" >Quindio</a></li>
                    <li><a class="dropdown-item" >Risaralda</a></li>
                    <li><a class="dropdown-item" >San Andrés y Providencia</a></li>
                    <li><a class="dropdown-item" >Valle del Cauca</a></li>

                    </ul>
                  </div>
                </div>
                <div class="form-group-forms" style = "margin-top: 3%;">
                  <label for="ciudad"><h5 class = "body_2">Ciudad</h5></label>
                  <div class="dropdown">
                  <button class="btn btn_large_form formdrop dropdown-toggle text-start" style ="width: 80%;" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-expanded="false">
                    Seleccione departamento <i class="bi bi-chevron-down float-end"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-forms dropdown_form" aria-labelledby="dropdownMenuButton4">
                  <li value="Arauca"><a class="dropdown-item" >Arauca</a></li>
                  <li value="Armenia"><a class="dropdown-item" >Armenia</a></li>
                  <li value="Barranquilla"><a class="dropdown-item" >Barranquilla</a></li>
                  <li value="Bogotá"><a class="dropdown-item" >Bogotá</a></li>
                  <li value="Bucaramanga"><a class="dropdown-item" >Bucaramanga</a></li>
                  <li value="Cali"><a class="dropdown-item" >Cali</a></li>
                  <li value="Cartagena"><a class="dropdown-item" >Cartagena</a></li>
                  <li value="Cúcuta"><a class="dropdown-item" >Cúcuta</a></li>
                  <li value="Florencia"><a class="dropdown-item" >Florencia</a></li>
                  <li value="Ibagué"><a class="dropdown-item" >Ibagué</a></li>
                  <li value="Leticia"><a class="dropdown-item" >Leticia</a></li>
                  <li value="Manizales"><a class="dropdown-item" >Manizales</a></li>
                  <li value="Medellín"><a class="dropdown-item" >Medellín</a></li>
                  <li value="Mitú"><a class="dropdown-item" >Mitú</a></li>
                  <li value="Mocoa"><a class="dropdown-item" >Mocoa</a></li>
                  <li value="Montería"><a class="dropdown-item" >Montería</a></li>
                  <li value="Neiva"><a class="dropdown-item" >Neiva</a></li>
                  <li value="Pasto"><a class="dropdown-item" >Pasto</a></li>
                  <li value="Pereira"><a class="dropdown-item" >Pereira</a></li>
                  <li value="Popayán"><a class="dropdown-item" >Popayán</a></li>
                  <li value="Puerto Carreño"><a class="dropdown-item" >Puerto Carreño</a></li>
                  <li value="Puerto Inírida"><a class="dropdown-item" >Puerto Inírida</a></li>
                  <li value="Quibdó"><a class="dropdown-item" >Quibdó</a></li>
                  <li value="Riohacha"><a class="dropdown-item" >Riohacha</a></li>
                  <li value="San Andrés"><a class="dropdown-item" >San Andrés</a></li>
                  <li value="San José del Guaviare"><a class="dropdown-item" >San José del Guaviare</a></li>
                  <li value="Santa Marta"><a class="dropdown-item" >Santa Marta</a></li>
                  <li value="Sincelejo"><a class="dropdown-item" >Sincelejo</a></li>
                  <li value="Tunja"><a class="dropdown-item" >Tunja</a></li>
                  <li value="Valledupar"><a class="dropdown-item" >Valledupar</a></li>
                  <li value="Villavicencio"><a class="dropdown-item" >Villavicencio</a></li>
                  <li value="Yopal"><a class="dropdown-item" >Yopal</a></li>
                  </ul>
                </div>
                  
                </div>
                <div class="col-md-12 text-center">
                  <button type="button" class="btn btn_medium_active"style = "margin-top: 5%; margin-bottom: 5%; margin-left:40%;">Enviar mis datos</button>
                </div>
              </div>
              <div id="etapa-3" style="display:none;">
                <div class="form-group-forms">
                  <label for="email">Correo electrónico:</label>
                  <input type="email" class="form-control form-control_formulario form-input" id="email" placeholder="Ingresa tu correo electrónico">
                </div>
                <div class="form-group-forms">
                  <label for="password">Contraseña:</label>
                  <input type="password" class="form-control form-control_formulario form-input" id="password" placeholder="Ingresa una contraseña">
                </div>
                <div class="form-group-forms">
                  <label for="confirmarPassword">Confirmar contraseña:</label>
                  <input type="password" class="form-control form-control_formulario form-input" id="confirmarPassword" placeholder="Confirma tu contraseña">
                </div>
                <div class="col-md-12 text-center">
                  <button type="submit" class="btn btn_continuar">Enviar formulario <i class="bi bi-check-circle-fill float-end"></i></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    

    
    
    `;

    
  
  }
  changeDropdownTitle(newTitle, element, dropdownId) {
    const dropdownButton = document.querySelector(`#${dropdownId}`);
    dropdownButton.innerHTML = `${newTitle} <i class="bi bi-chevron-down float-end"></i>`;
  }

 
  
  addListeners() {
    const siguienteBtn = document.querySelector(".siguiente");
    const anteriorBtn = document.querySelector(".anterior");

    siguienteBtn.addEventListener("click", () => {
      this.mostrarSiguienteEtapa();
    });

    

   // Cambiar el título del menú desplegable 1 al seleccionar un elemento
   const dropdownItems1 = document.querySelectorAll("#dropdownMenuButton1 + .dropdown-menu .dropdown-item");
   dropdownItems1.forEach((item) => {
     item.addEventListener("click", (event) => {
       const newTitle = event.target.textContent.trim();
       this.changeDropdownTitle(newTitle, this.dropdownButton1, "dropdownMenuButton1");
     });
   });
 
   // Cambiar el título del menú desplegable 2 al seleccionar un elemento
   const dropdownItems2 = document.querySelectorAll("#dropdownMenuButton2 + .dropdown-menu .dropdown-item");
   dropdownItems2.forEach((item) => {
     item.addEventListener("click", (event) => {
       const newTitle = event.target.textContent.trim();
       this.changeDropdownTitle(newTitle, this.dropdownButton2, "dropdownMenuButton2");
     });
   });

   // Cambiar el título del menú desplegable 3 al seleccionar un elemento
   const dropdownItems3 = document.querySelectorAll("#dropdownMenuButton3 + .dropdown-menu .dropdown-item");
   dropdownItems3.forEach((item) => {
     item.addEventListener("click", (event) => {
       const newTitle = event.target.textContent.trim();
       this.changeDropdownTitle(newTitle, this.dropdownButton3, "dropdownMenuButton3");
     });
   });

      // Cambiar el título del menú desplegable 3 al seleccionar un elemento
      const dropdownItems4 = document.querySelectorAll("#dropdownMenuButton4 + .dropdown-menu .dropdown-item");
      dropdownItems4.forEach((item) => {
        item.addEventListener("click", (event) => {
          const newTitle = event.target.textContent.trim();
          this.changeDropdownTitle(newTitle, this.dropdownButton4, "dropdownMenuButton4");
        });
      });
 
  }

  mostrarSiguienteEtapa() {
    const etapaActual = document.querySelector(`#etapa-${this.currentStep}`);
    const siguienteEtapa = etapaActual.nextElementSibling;

    if (siguienteEtapa) {
      etapaActual.style.display = "none";
      siguienteEtapa.style.display = "block";
      this.currentStep++;

      this.actualizarProgressBar();
    }
  }

  mostrarAnteriorEtapa() {
    const etapaActual = document.querySelector(`#etapa-${this.currentStep}`);
    const anteriorEtapa = etapaActual.previousElementSibling;

    if (anteriorEtapa) {
      etapaActual.style.display = "none";
      anteriorEtapa.style.display = "block";
      this.currentStep--;

      this.actualizarProgressBar();
    }
  }

  actualizarProgressBar() {
    const porcentajeCompletado = (this.currentStep - 1) * 50;
    this.progressBar.style.width = `${porcentajeCompletado}%`;
  }
}





customElements. define('w-form',Forms)
export default Forms


// </div>
//                 <button type="button" class="btn btn_large_outline_active anterior text-center">Anterior</button>
//                 <button type="submit" class="btn btn_large_active">Enviar</button>
//               </div>