class Product extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            
            <div class="user-product-container">
                <div class="user-product-head ahorro">
                    <h5 id="product-name"><span>Tipo - Nombre Producto</span></p>
                </div>

                <div class="user-product-body">
                    <p class="body_1" id="product-id"><span>0000 0000 0000 0000</span> </p>
                    <p class="body_1">Saldo</p>
                    <h3 id="product-saldo">$<span>0000 0000 0000 0000</span> </h3>
                </div>

                <div class="user-product-data">
                    <div class="user-product-data-item">
                        <h5>Próxima Cuota</h5>
                        <p class="body_1" id="product-nextPay">$<span>0000 0000 0000 0000</span> </p>
                    </div>
                    <div class="user-product-data-item">
                        <h5>Fecha Límite</h5>
                        <p id="product-limit"><span>0000 0000 0000 0000</span> </p>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define('user-product', Product)
export default Product