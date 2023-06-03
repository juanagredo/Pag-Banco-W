class BreadComponent extends HTMLElement {
    constructor() {
        super()

        this.link;
        this.level;
        this.actual;
    }

    static get observedAttributes() {
        return [
            "link",
            "level",
            "actual",
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
            case "level":

                this.level = newValue

                break;

            case "link":

                this.link = newValue

                break;

            case "actual":

                this.actual = newValue

                break;
        }

    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <link rel="stylesheet" href="../../../public/Components/tags/tags.css">
            <div id="breadcrumb-title-section">
                <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>'">
                    <ol id="breadcrumb">
                    <li id="breadcrumb-item" id="bread_lv3" aria-current="page">${this.actual}</li>
                    </ol>
                </nav>
                <h4 id="breadcrumb-title" id="bread_title">${this.actual}</h4>
            </div>        
        `

        const levels = this.level.split("-");
        const links = this.link.split("-");

        console.log(this.levelActual)

        const breadcrumb = document.getElementById('breadcrumb')
        const levelActual = breadcrumb.querySelector("li");

        for (let i = 0; i < levels.length; i++) {
            const newLevel = document.createElement("li");
            const newLink = document.createElement("a");
            newLink.href = links[i];
            newLink.textContent = levels[i];
            newLevel.appendChild(newLink);
            breadcrumb.insertBefore(newLevel, levelActual);
        }
    }
}

customElements.define('bread-n-title', BreadComponent)
export default BreadComponent