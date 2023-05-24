class BreadComponent extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            <link rel="stylesheet" href="tags.css">
            <div class="breadcrumb-title-section">
                <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>'">
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item" id="bread_lv1"><a href="#"><span>Level 1</span></a></li>
                    <li class="breadcrumb-item" id="bread_lv2"><a href="#"><span>Level 1</span></a></li>
                    <li class="breadcrumb-item active" id="bread_lv3" aria-current="page"><span>Level 1</span></li>
                    </ol>
                </nav>
                <h4 class="breadcrumb-title" id="bread_title"><span>Titulo de la Sección</span></h4>
            </div>        
        `
    }
}
customElements.define('bread-n-title', BreadComponent)
export default BreadComponent