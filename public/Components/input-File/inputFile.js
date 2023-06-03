class InputFile extends HTMLElement {
    constructor() {
        super();
        this.btn;
        this.title
        this.obligatorio;
    }

    static get observedAttributes() {
        return [
            "btn",
            "title",
            "obligatorio",
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
            case "btn":
                this.btn = newValue

                break;

            case "title":
                this.title = newValue

                break;

            case "obligatorio":
                this.obligatorio = newValue

                break;
        }
    }


    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
    <link rel="stylesheet" href="../../../style.css">
    <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: -30px">
        <label for="input_file" class="text_button_medium">${this.title}<span>${this.obligatorio}</span></label>
        <label for="input_file" class="label_file"><i class="bi bi-link-45deg text_button_medium"></i>${this.btn}</label>
        <input type="file" id="input_file" class="inputFile">
    </div>
    `

        const input = document.getElementById('input_file');
        const label = document.querySelector('.label_file');

        input.addEventListener('change', function () {
            if (input.files.length > 0) {
                label.textContent = input.files[0].name;
            }
        });
    }

}

customElements.define('input-file', InputFile)
export default InputFile