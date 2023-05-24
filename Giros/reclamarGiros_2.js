class cardWithinputs extends HTMLElement {

    constructor() {
        super();

        this.recurso;
        this.titulo;
        this.contenido;
        this.boton;
        this.titulocard;
        this.botoncard;
        this.titulocard1;
        this.botoncard1;
        this.titulocard2;
        this.botoncard2;
      /*   this.titulocard3;
        this.botoncard3;
        this.titulocard4;
        this.botoncard4;
        this.titulocard5;
        this.botoncard5; */


    }

    static get observedAttributes() {
        return [
            "recurso",
            "titulo",
            "contenido",
            "boton",
            "titulocard",
            "botoncard",
            "titulocard2",
            "botoncard2",
         /*    "titulocard3",
            "botoncard3",
            "titulocard4",
            "botoncard4",
            "titulocard5",
            "botoncard5", */

        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
            case "recurso":

                this.recurso = newValue

                break;

            case "titulo":

                this.titulo = newValue

                break;

            case "contenido":

                this.contenido = newValue

                break;

            case "boton":

                this.boton = newValue

                break;

            case "titulocard":
                this.titulocard = newValue

                break;

            case "botoncard":
                this.botoncard = newValue

                break;

            case "titulocard2":
                this.titulocard2 = newValue

                break;

            case "botoncard2":
                this.botoncard2 = newValue

                break;
        /*     case "titulocard3":
                this.titulocard3 = newValue

                break;

            case "botoncard3":
                this.botoncard3 = newValue

                break;
            case "titulocard4":
                this.titulocard4 = newValue

                break;

            case "botoncard4":
                this.botoncard4 = newValue

                break;
            case "titulocard5":
                this.titulocard5 = newValue

                break;

            case "botoncard5":
                this.botoncard5 = newValue

                break; */
        }

    }

    connectedCallback() {

        this.innerHTML = `
        <div class = 'supreme'>
        
        <section class="fondo-card">
        <section class="card-imagen">
            <img src= "${this.recurso}" class="imagen-inCard" alt="">
        </section>
        <section class="texto-card">
            <p class="parrafo">
            ${this.contenido}   
            </p>
        </section>

        

<div class="row">
<div class="col-12">
<div class = "card border-0">
    <div class="card-body row body-details">
      <div class="col-6">
        <h5 class="title-inputcard">${this.titulocard}</h5>
      </div>
      <div class="col-6">
        <button class="btn btn_medium_outline_active botoncard">${this.botoncard} <i class="bi bi-arrow-right float-end"></i></button>
      </div>
    </div>
  </div>
</div>
</div>
      
        <div class="row">
        <div class="col-12">
        <div class = "card border-0">
            <div class="card-body row body-details">
              <div class="col-6">
                <h5 class="title-inputcard">${this.titulocard2}</h5>
              </div>
              <div class="col-6">
                <button class="btn btn_medium_outline_active botoncard">${this.botoncard2} <i class="bi bi-arrow-right float-end"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
      <div class="col-12">
      <div class = "card border-0">
          <div class="card-body row body-details">
            <div class="col-6">
              <h5 class="title-inputcard">${this.titulocard3}</h5>
            </div>
            <div class="col-6">
              <button class="btn btn_medium_outline_active botoncard">${this.botoncard3} <i class="bi bi-arrow-right float-end"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>

      
   
        
        `

    }


}

window.customElements.define("card-inputs", cardWithinputs)



/*<div class="row">
      <div class="col-12">
      <div class = "card border-0">
          <div class="card-body row body-details">
            <div class="col-6">
              <h5 class="title-inputcard">${this.titulocard3}</h5>
            </div>
            <div class="col-6">
              <button class="btn btn_medium_outline_active botoncard">${this.botoncard3} <i class="bi bi-arrow-right float-end"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="row">
    <div class="col-12">
    <div class = "card border-0">
        <div class="card-body row body-details">
          <div class="col-6">
            <h5 class="title-inputcard">${this.titulocard4}</h5>
          </div>
          <div class="col-6">
            <button class="btn btn_medium_outline_active botoncard">${this.botoncard4} <i class="bi bi-arrow-right float-end"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>




    </section>
    */