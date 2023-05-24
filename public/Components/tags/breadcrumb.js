class Breadcrumb extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            <link rel="stylesheet" href="tags.css">
            <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>'">
                <ol class="breadcrumb">
                <li class="breadcrumb-item" id="bread_lv1"><a href="#"><span>Level 1</span></a></li>
                <li class="breadcrumb-item" id="bread_lv2"><a href="#"><span>Level 2</span></a></li>
                <li class="breadcrumb-item active" id="bread_lv3" aria-current="page"><span>Level 3</span></li>
                </ol>
            </nav>          
        `
    }
}
customElements.define('breadcrumb-line', Breadcrumb)
export default Breadcrumb