class CardDesk extends HTMLElement {
    constructor() {
        super();
        this.photo;
        this.title;
        this.text;
        this.btn;
        this.link;
    }

    static get observedAttributes() {
        return [
            "photo",
            "title",
            "text",
            "btn",
            "link",
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
            case "photo":

                this.photo = newValue

                break;

            case "title":

                this.title = newValue

                break;

            case "text":

                this.text = newValue

                break;

            case "btn":

                this.btn = newValue

                break;

            case "link":

                this.link = newValue

                break;
        }

    }


    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
    <link rel="stylesheet" href="../../../public/Components/Cards/cardArticle.css">
    <article class="card_horizontal_container">
            <img class="card_horizontal_img" src="${this.photo}" alt="">
            <section class="card_horizontal_body">
                <h3>${this.title}</h3>
                <p class="body_1"> ${this.text} </p>
                <a href="${this.link}">
                    <button class="btn btn_medium btn_medium_active text_button_medium">
                        ${this.btn}
                        <i class="bi bi-arrow-right"></i>
                    </button>
                </a>
            </section>
        </article>
    `
    }

}

customElements.define('w-card-desk', CardDesk)
export default CardDesk


class ImageCard extends HTMLElement {

    constructor() {
        super();

        this.recurso;
        this.titulo;
        this.contenido;
        this.boton;
        this.link;


    }

    static get observedAttributes() {
        return [
            "recurso",
            "titulo",
            "contenido",
            "boton",
            "link",
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

            case "link":

                this.link = newValue

                break;
        }

    }

    connectedCallback() {

        const titulo = this.titulo.trim();

        this.innerHTML = `
        <link rel="stylesheet" href="../../../public/Components/Cards/cardArticle.css">
        <div class="supreme">
          <section class="fondo-card">
            <section class="card-imagen">
              <img src="${this.recurso}" class="imagen-inCard" alt="">
            </section>
            <section class="texto-card">
              <h5 class="titulo${titulo === '' ? ' titulo-vacio' : ''}" id="miTitulo">${this.titulo}</h5>
              <p class="parrafo">
                ${this.contenido}   
              </p>
            </section>
            <section id="section-btn">
            <a href="${this.link}">
              <button class = 'btn btn_icon btn_medium btn_medium_active text_button_small'>${this.boton} <i class="bi bi-arrow-right right"></i></button>   
            </a>
          </section>
          </section>

        </div>
      `;
    }


}

window.customElements.define("image-card", ImageCard)