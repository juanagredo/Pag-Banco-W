class ProductsLanding extends HTMLElement {
    constructor() {
        super();
        this.photo;
        this.section;
        this.title;
        this.text;
    }

    static get observedAttributes() {
        return [
            "photo",
            "title",
            "section",
            "text",
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

            case "section":

                this.section = newValue

                break;
            
            case "text":

                this.text = newValue

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
                <p class="body_1"> ${this.section} </p>
                <button class="text text_medium_active">
                    ${this.text}
                    <i class="bi bi-arrow-right"></i>
                </button>
            </section>
        </article>
    `
    }

}

customElements.define('w-card-desk', ProductsLanding)
export default ProductsLanding