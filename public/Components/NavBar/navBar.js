class NavBar extends HTMLElement {
    constructor() {
      super();
      this.pages = [
        {
          url: '/landing.html',
          title: 'Inicio'
        },
        {
          url: '../../../CDT/CDT.html',
          title: 'CDT'
        },
        {
          url: '../../../Creditos/credito.html',
          title: 'Microcrédito'
        },
        {
          url: '/landing.html',
          title: 'Inicio'
        },
        {
          url: '/landing.html',
          title: 'Inicio'
        }
      ];
    }
  
    connectedCallback() {
      this.render();
      this.setupSearchForm();
      this.setupCreditRedirect();
      this.hideDropdownMenu();
      const dropdownToggle = this.querySelector('.redirect-unique');
      const dropdownMenu = dropdownToggle.nextElementSibling;
  
      dropdownToggle.addEventListener('mouseenter', () => {
        if (dropdownToggle.getAttribute('aria-expanded') === 'true') {
          this.hideDropdownMenu();
        } else {
          this.showDropdownMenu();
        }
      });
  
      dropdownMenu.addEventListener('mouseleave', () => {
        this.hideDropdownMenu();
      });
    }
  
    showDropdownMenu() {
      const dropdownToggle = this.querySelector('.redirect-unique');
      const dropdownMenu = dropdownToggle.nextElementSibling;
      dropdownToggle.setAttribute('aria-expanded', 'true');
      dropdownMenu.classList.add('show');
  
      dropdownMenu.addEventListener('mouseenter', () => {
        dropdownToggle.setAttribute('aria-expanded', 'true');
        dropdownMenu.classList.add('show');
      });
  
      dropdownMenu.addEventListener('mouseleave', () => {
        dropdownToggle.setAttribute('aria-expanded', 'false');
        dropdownMenu.classList.remove('show');
      });
    }
  
    hideDropdownMenu() {
      const dropdownToggle = this.querySelector('.redirect-unique');
      const dropdownMenu = dropdownToggle.nextElementSibling;
      dropdownToggle.setAttribute('aria-expanded', 'false');
      dropdownMenu.classList.remove('show');
    }
  
    render() {
      this.innerHTML = `
        
        <!-- Resto del código HTML -->
        <link rel="stylesheet" href="/public/Components/NavBar/navBar.css">
        
        <nav class="navbar navbar-expand-lg navbar-light d-none  d-md-block first-nav fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/landing.html">
                    <img class="logo1" src="./public/Components/NavBar/images/logo.png" alt="Logo de mi sitio web">
                </a>
            <div class="d-flex justify-content-center align-items-center">
                <form id = 'search-1' class="d-flex my-2 my-lg-0">
                    <input class="form-control me-2 placeholder-input-desk headline5" type="search"
                    placeholder="¿Que estas buscando?" aria-label="Search">
                <button class="btn btn_large_active search_button_desk " type="submit"><i class="bi bi-search"></i></button>
                </form>
            </div>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item ">
                        <a class="btn btn_medium btn_medium_active text_button_medium nav_btn" href="#"><i
                        class="bi bi-telephone"></i>Canal de atención</a>
                    </li>
                    <li class="nav-item">
                        <a id = "perfil-link" class="btn btn_medium btn_medium_active text_button_medium nav_btn" style="margin-left: 10px;"
                        href="../../../Registro/iniciarSesión.html"><i class="bi bi-person"></i>Mi perfil W</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
        <nav class="navbar navbar-expand-lg navbar-dark  second_nav fixed-top">
            <div class="container-fluid mx-auto background_responsive_navbar">
                <a class="navbar-brand d-md-none" href="#">
                <img class="logo1" src="/public/Components/NavBar/images/logo2.png" alt="Logo de mi sitio web">
                </a>
    
            <button class="navbar-toggler ms-auto button_toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav2" aria-controls="navbarNav2" aria-expanded="false" aria-label="Toggle navigation">
                <span class="bi bi-list"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav2">
                <form id="search-2" class="d-md-none d-flex mx-auto my-2 my-lg-0">
                    <input class="form-control me-2 placeholder-input-mobile mx-auto" type="search"
                    placeholder="¿Que estas buscando?" aria-label="Search">
                    <button class="btn btn_large search_button_mobile " type="submit"><i class="bi bi-search icon_search"></i></button>
                </form>
                <li class="nav-item d-md-none d-block">
                <a class="nav-link btn btn_large_active text-center text-white  mx-auto" style="margin-top: 5px;"
                href="../../../Registro/iniciarSesión.html">Mi perfil W</a>
            </li>
            <li class="nav-item d-md-none d-block">
                <a class="nav-link btn btn_large_active text-center text-white mx-auto " style="margin-top: 18px;"
                href="#">Canales de atención</a>
            </li>
                <ul class="navbar-nav mx-auto second_nav_link">
                
                    <li class="nav-item border-bottom-gg">
                        <a class="nav-link" href="../../../landing.html">Inicio</a>
                    </li>
         

                    <li class="nav-item dropdown border-bottom-gg">
                        <a class="nav-link dropdown-toggle nav-link-pressed  " href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false"> Ahorro e inversión </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="../../../CDT/CDT.html">CDT</a>
                            <a class="dropdown-item" href="#">Cuenta de ahorro</a>
                            <a class="dropdown-item" href="#">Deposito de bajo monto</a>
                            <a class="dropdown-item" href="#">Ahorranza</a>
           
                            
                            
                        </div>
                    </li>



                    <li class="nav-item dropdown border-bottom-gg">
                        <a class="nav-link dropdown-toggle nav-link-pressed redirect-unique" href="../../../Creditos/all-credits.html" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false"> Crédito </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="../../../Creditos/All/all-credits.html">Todos</a>
                            <a class="dropdown-item" href="../../../Creditos/credito.html">Microcredito</a>
                            <a class="dropdown-item" href="#">Yo construyo</a>
                            <a class="dropdown-item" href="#">Gotahorro</a>
                            <a class="dropdown-item" href="#">Inmueble productivo</a>
                            <a class="dropdown-item" href="#">Credito vehiculo</a>
                            
                            
                        </div>
                    </li>

                    
                    <li class="nav-item dropdown border-bottom-gg">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false"> Seguros </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="../../../Seguros/soy-vida.html">Seguro soy vida</a>
                            <a class="dropdown-item" href="#">Seguro soy protección familiar</a>
                            <a class="dropdown-item" href="#">Seguro soy patrimonio seguro</a>
                            <a class="dropdown-item" href="#">Seguro soy previsión exequial</a>
                            
                        </div>
                    </li>
                    <li class="nav-item dropdown border-bottom-gg ">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false"> Giros internacionales </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="../../../Giros/reclamarGiro.html">Reclamar giros</a>
                            <a class="dropdown-item" href="#">Enviar Giros</a>
                            
                        </div>
                    </li>
                    <li class="nav-item dropdown border-bottom-gg">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" 
                        aria-expanded="false"> Comunidad W </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="../../../ComunidadW/comunidadW.html">W contigo</a>
                            <a class="dropdown-item" href="../../../ComunidadW/Premios-Invencibles/premios.html">Premios invencibles W</a>
                            <a class="dropdown-item" href="../../../ComunidadW/Refiere/refiere.html">Refiere y gana</a>
                            <a class="dropdown-item" href="../../../clasificados/clasificados.html">Clasificados</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown ">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false"> Sobre nosotros </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" >Quienes somos</a>
                            <a class="dropdown-item" >Fundación WWB</a>
                            <a class="dropdown-item" >Trabaja con nosotros</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="navbar-margin"></div>
    


      `;
      
      setTimeout(() => {
        const dropdownToggle = this.querySelector('.redirect-unique');
        const dropdownMenu = dropdownToggle.nextElementSibling;
  
        dropdownToggle.addEventListener('mouseenter', () => {
          if (dropdownToggle.getAttribute('aria-expanded') === 'true') {
            this.hideDropdownMenu();
          } else {
            this.showDropdownMenu();
          }
        });
  
        dropdownMenu.addEventListener('mouseleave', () => {
          this.hideDropdownMenu();
        });
      }, 0);
      document.body.style.paddingTop = '8rem';
  
      const perfilLink = this.querySelector('#perfil-link');
      const sesionActiva = sessionStorage.getItem('sesionActiva');
  
      if (sesionActiva === 'true') {
        perfilLink.href = '/Perfil/perfil.html';
      } else {
        perfilLink.href = '/Registro/iniciarSesión.html';
      }
    }
  
    setupSearchForm() {
      const searchForms = this.querySelectorAll('form.search-form');
      searchForms.forEach((searchForm) => {
        searchForm.addEventListener('submit', this.handleSearchSubmit.bind(this));
      });
    }
  
    handleSearchSubmit(event) {
      event.preventDefault();
      const searchInput = event.target.querySelector('input[type="search"]');
      const searchTerm = searchInput.value.trim();
  
      if (searchTerm !== '') {
        const searchResults = this.pages.filter(page =>
          page.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
  
        if (searchResults.length > 0) {
          const firstResult = searchResults[0];
          window.location.href = firstResult.url;
        } else {
          console.log('No se encontró la búsqueda');
        }
      }
    }
  
 
  }
  
  customElements.define('w-nav-bar', NavBar);
  