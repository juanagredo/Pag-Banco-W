class BtnInsideBtn extends HTMLElement {
    constructor() {
        super();
        this.title;
        this.btn;
        this.link;
    }

    static get observedAttributes() {
        return [
            "title",
            "btn",
            "link",
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
            case "title":

                this.title = newValue

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
    <link rel="stylesheet" href="../../../public/Components/Btn-Btn/btn.css">
    <div class="container_btn">
        <h5>${this.title}</h5>
        <a href="${this.link}">
            <button class='btn btn_icon btn_medium btn_medium_outline_active text_button_small'>${this.btn}<i
                class="bi bi-arrow-right right"></i></button>
        </a>
    </div>
    `
    }

}

customElements.define('btn-inside-btn', BtnInsideBtn)


class BtnInsideText extends HTMLElement {
    constructor() {
        super();
        this.title;
        this.text;
    }

    static get observedAttributes() {
        return [
            "title",
            "text",
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
            case "title":

                this.title = newValue

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
    <link rel="stylesheet" href="../../../public/Components/Btn-Btn/btn.css">
    <div class="container_btn container_btn_text">
        <h5>${this.title}</h5>
        <h5 class="container_btn_text_text">${this.text}</h5>
    </div>
    `
    }

}

customElements.define('btn-inside-text', BtnInsideText)
export default BtnInsideBtn