class Sidebarproduct extends HTMLElement {
  constructor() {
    super();
    this.reference = '';
    this.locations = [];
    this.buttonNames = [];
  }

  static get observedAttributes() {
    return ['reference', 'locations', 'button-names'];
  }

  connectedCallback() {
    this.reference = this.getAttribute('reference') || this.defaultAttributeValue('reference');
    this.locations = this.getAttribute('locations')?.split(',') || this.defaultAttributeValue('locations').split(',');
    this.buttonNames = this.getAttribute('button-names')?.split(',') || this.defaultAttributeValue('button-names').split(',');
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'reference') {
      this.reference = newValue;
      this.render();
    } else if (name === 'locations') {
      this.locations = newValue.split(',');
      this.render();
    } else if (name === 'button-names') {
      this.buttonNames = newValue.split(',');
      this.render();
    }
  }

  defaultAttributeValue(name) {
    const attribute = this.getAttributeNode(name);
    return attribute?.defaultValue || '';
  }

  render() {
    this.innerHTML = `
      <link rel="stylesheet" href="/public/Components/Sidebarproduct/sidebarproduct.css">
      <div class="container-fluid">
        <div class="row">
          <!-- Sidebar -->
          <div class="col-lg-3 col-md-4 d-none d-md-block tam-sidebar">
            <div class="border-right" id="sidebar-wrapper">
              <div class="list-group list-group-flush">
                ${this.locations.map((location, i) => `
                  <a href="${this.reference}#${location}" class="list-group-item list-group-item-action rounded-pill border btn-sidebar">${this.buttonNames[i]} <i class="bi bi-arrow-right float-end"></i></a>
                `).join('')}
              </div>
            </div>
          </div>
          <!-- /Sidebar -->

          <!-- Contenido principal -->
          <div class="col-lg-9 col-md-8"></div>
          <!-- /Contenido principal -->
        </div>
      </div>
    `;
  }
}

customElements.define('product-sidebar', Sidebarproduct);


  