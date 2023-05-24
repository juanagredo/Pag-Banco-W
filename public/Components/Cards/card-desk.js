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