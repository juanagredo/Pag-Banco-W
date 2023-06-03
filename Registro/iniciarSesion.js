let btn_ini = document.getElementById("boton_iniciarsesion")
btn_ini.addEventListener("click", iniciarSesion)

function iniciarSesion() {

    const sesionActiva = true;
    sessionStorage.setItem('sesionActiva', sesionActiva);

    window.location.href = "../Perfil/perfil.html";

}