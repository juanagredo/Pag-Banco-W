export default class salvavidasComp extends HTMLElement {

    constructor() {
        super();

        this.algo;

        this.home = `           
        <section style=" padding: 0px 10px; width: calc(100%); border-radius:10px 10px 0px 0px ; height:40px ; margin-top: -10px; ; background-color: #2FD9DE; display:flex; justify-content: space-between; align-items:center;" class= "hidden-title">
     
        <i style="color:#fff" class="bi bi-chevron-left"></i>
        <p style="font-weight: 700;
        font-size: 18px;
        line-height: 120%;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
        ">Asistente Virtual</p>
        <i id="chatback" style="cursor:pointer;color:#fff" class="bi bi-x-lg"></i>
     
        </section>
        <section class="saludo-salva">
        <p>¡Como estas! Estoy para ayudarte
            en lo que necesites.</p>
    </section>

    <!-- Botón de búsqueda, en salvavidas.scss están los estilos -->
    <section class="to-search-salvavidas" style="display:flex; align-items:baseline>
        <form class="d-flex my-2 my-lg-0" style="width: 90%">
            <input class="form-control me-2 placeholder-input-desktop headline5" type="search"
                placeholder="Pregúntame algo" aria-label="Search">
            
        </form>
        <button class="btn btn_large_active search_button " type="submit"><i
            id="buscar-conversacion" class="bi bi-chat"></i></button>
    </section>

    <section class="preguntas-sugeridas">
        <div id="preguntas-frecuentes-titulo">
            <p class="title-salvavidas-preguntas"> Preguntas Frecuentes</p>
            <button id="vermas" style="color: #00B1BB; text-decoration: underline;"
                class="btn_large_transparent">Quiero ver mas</button>

        </div>
        <div id="preguntas-frecuentes-sugerencias">
            <button class="x pregunta-frecuente-salvavidas" id="microcredito_salvalogo"> ¿Cómo sacar un
                Microcredito? </button>
            <button class="x pregunta-frecuente-salvavidas"> ¿Cómo solicitar un Gota Ahorro? </button>
            <button class="x pregunta-frecuente-salvavidas"> ¿Cómo ingresar a yo construyo? </button>
        </div>


    </section>
    <section>
        <button id="just-to-know">Educación financiera</button>
    </section>`

        this.micro = `
    <section class="encabezadoseccion">
<i class="bi bi-chevron-left "></i>
<button id= "regresa_main" class="btn btn_large_outline_active" style="background-color: #CCEFF1; width: 370px; padding: auto 15px auto;">Microcrédito</button>

</section>
<section>
<h5 class="titulomicro">Estás a un paso de solicitarlo</h5>
<p class="contenidomicro">Llena el formulario que estás visualizando
y un analista de crédito se contactará lo 
más pronto posible.</p>
<section style="display: flex; justify-content: space-around;"> <section class="imagenesmicro"><img src="/salvavidas/recursos/imagenes/mascota2.png" alt=""></section></section>
<!-- <p class="contenidomicro">Para realizar este proceso deberás de
rellenar un formulario que encontraras 
bajando un poco en la pagina.</p>


<section style="display: flex; justify-content: space-around;"> <section class="imagenesmicro"><img src="/salvavidas/recursos/imagenes/form 1.png" alt=""><img src="/salvavidas/recursos/imagenes/mascota2.png" alt=""></section></section> -->

</section>`



    }

    cerrarChat() {

    }

    startrun() {

        if (!sessionStorage.getItem("active")) {
            sessionStorage.setItem("active", false)
        }



        if (sessionStorage.getItem("active") === true) {
            document.getElementById("btn-plus").checked = true

        }



    }

    static get observedAttributes() {
        return ["algo"]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
            case "algo":

                this.algo = newValue

                break;
        }

    }

    connectedCallback() {

        this.startrun()


        if (!sessionStorage.getItem("etapa")) {
            sessionStorage.setItem("etapa", "main")

        }

        if (sessionStorage.getItem("etapa") === "main") {
            this.innerHTML = `
        <section class="contenedor">
        <input type="checkbox" name="" id="btn-plus" >
        <section id="content-in-help">
        ${this.home}
        </section>
        <div class="btn-more">
            <label for="btn-plus" class="salvavidas-logo"><img id="salvalogo" src="/salvavidas/recursos/imagenes/salvalogo-default.svg" width="80"
                    alt="Boton salvavidas"></label>
        </div>
    </section>
        `
            document.getElementById("microcredito_salvalogo").addEventListener("click", changeToMicro);
            document.getElementById("vermas").addEventListener("click", changeToVermas);

            document.getElementById("buscar-conversacion").addEventListener("click", conversacion);


            document.getElementById("chatback").addEventListener("click", () => document.getElementById("btn-plus").checked = false)





        }
        if (sessionStorage.getItem("etapa") === "Microcre") {
            this.innerHTML = `
        <section class="contenedor">
        <input type="checkbox" name="" id="btn-plus" >
        <section id="content-in-help">
        ${this.micro}
        </section>
        <div class="btn-more">
            <label for="btn-plus" class="salvavidas-logo"><img id="salvalogo" src="/salvavidas/recursos/imagenes/salvalogo-default.svg" width="80"
                    alt="Boton salvavidas"></label>
        </div>
    </section>
        `


            document.getElementById("regresa_main").addEventListener("click", returnToMain);

            window.scroll(0, 700)


        }

        //  console.log(document.getElementById("btn-plus").checked)
    }



}

window.customElements.define("salvavidas-comp", salvavidasComp)




function changeToVermas() {

    document.getElementById("content-in-help").innerHTML = `<section class="encabezado">
<i id="volvermain" class="bi bi-arrow-left-short x " style="cursor: pointer;"></i><p class="h5"style="color: #000;font-size: 14px; font-weight:bold;">Recomendado para ti</p>
</section>
<section class="lista-botones">

<button style="height: 30px !important; margin: 0px" class="btn btn_large_outline btn_large_outline_active">¿Cómo solicitar un Gota Ahorro?</button>
<button style="height: 30px !important; margin: 0px" class="btn btn_large_outline btn_large_outline_active">¿Cómo solicitar un Crédito?</button>
<button style="height: 30px !important; margin: 0px" class="btn btn_large_outline btn_large_outline_active">No se como crear un perfil</button>
<button style="height: 30px !important; margin: 0px" class="btn btn_large_outline btn_large_outline_active">Cómo lograr un CDT</button>
<button style="height: 30px !important; margin: 0px" class="btn btn_large_outline btn_large_outline_active">Donde esta el blog</button>
<button style="height: 30px !important; margin: 0px" class="btn btn_large_outline btn_large_outline_active">¿Cómo ingresar a Yo construyo?</button>
<button style="height: 30px !important; margin: 0px" class="btn btn_large_outline btn_large_outline_active">¿Cómo hacer un ahorro?</button>

</section>`

    document.getElementById("volvermain").addEventListener("click", returnToMain)

}

function changeToMicro() {

    console.log(sessionStorage.getItem("etapa"))

    sessionStorage.setItem("etapa", "Microcre")


    sessionStorage.setItem("active", true)

    if (window.location.href != "http://127.0.0.1:5500/Creditos/credito.html") {

        window.location.href = "/Creditos/credito.html"
    } else {
        document.getElementById("content-in-help").innerHTML = `

            <section class="encabezadoseccion">
<i class="bi bi-chevron-left "></i>
<button id= "regresa_main" class="btn btn_large_outline_active" style="background-color: #CCEFF1; width: 370px; padding: auto 15px auto;">Microcrédito</button>

</section>
<section>
<h5 class="titulomicro">Estás a un paso de solicitarlo</h5>
<p class="contenidomicro">Llena el formulario que estás visualizando
y un analista de crédito se contactará lo 
más pronto posible.</p>
<section style="display: flex; justify-content: space-around;"> <section class="imagenesmicro"><img src="/salvavidas/recursos/imagenes/mascota2.png" alt=""></section></section>
<!-- <p class="contenidomicro">Para realizar este proceso deberás de
    rellenar un formulario que encontraras 
    bajando un poco en la pagina.</p>


<section style="display: flex; justify-content: space-around;"> <section class="imagenesmicro"><img src="/salvavidas/recursos/imagenes/form 1.png" alt=""><img src="/salvavidas/recursos/imagenes/mascota2.png" alt=""></section></section> -->

</section>
    `;
    }




    document.getElementById("regresa_main").addEventListener("click", returnToMain);



}


function returnToMain() {

    sessionStorage.setItem("etapa", "main")


    console.log(document.getElementById("content-in-help").innerHTML)

    document.getElementById("content-in-help").innerHTML = "";

    document.getElementById("content-in-help").innerHTML = `   
    <section style=" padding: 0px 10px; width: calc(100%); border-radius:10px 10px 0px 0px ; height:40px ; margin-top: -10px; ; background-color: #00b1bb; display:flex; justify-content: space-between; align-items:center;" class= "hidden-title">
     
    <i style="color:#fff" class="bi bi-chevron-left"></i>
    <p style="font-weight: 700;
    font-size: 18px;
    line-height: 120%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    ">Asistente Virtual</p>
    <i id="chatback" style="cursor:pointer;color:#fff" class="bi bi-x-lg"></i>
 
    </section>
    <section class="saludo-salva">
    <p>¡Como estas! Estoy para ayudarte
        en lo que necesites.</p>
</section>

<!-- Botón de búsqueda, en salvavidas.scss están los estilos -->
<section class="to-search-salvavidas" style="display:flex; align-items:baseline>
<form class="d-flex my-2 my-lg-0" style="width: 90%">
    <input class="form-control me-2 placeholder-input-desktop headline5" type="search"
        placeholder="Pregúntame algo" aria-label="Search">
    
</form>
<button class="btn btn_large_active search_button " type="submit"><i
    id="buscar-conversacion" class="bi bi-chat"></i></button>
</section>


<section class="preguntas-sugeridas">
    <div id="preguntas-frecuentes-titulo">
        <p class="title-salvavidas-preguntas"> Preguntas Frecuentes</p>
        <button id="vermas" style="color: #00B1BB; text-decoration: underline;"
            class="btn_large_transparent">Quiero ver mas</button>

    </div>
    <div id="preguntas-frecuentes-sugerencias">
        <button class="x pregunta-frecuente-salvavidas" id="microcredito_salvalogo"> ¿Cómo sacar un
            Microcredito? </button>
        <button class="x pregunta-frecuente-salvavidas"> ¿Cómo solicitar un Gota Ahorro? </button>
        <button class="x pregunta-frecuente-salvavidas"> ¿Cómo ingresar a yo construyo? </button>
    </div>


</section>
<section>
    <button id="just-to-know">Educación financiera</button>
</section>        
`;





    document.getElementById("microcredito_salvalogo").addEventListener("click", changeToMicro);

    document.getElementById("vermas").addEventListener("click", changeToVermas);


    document.getElementById("chatback").addEventListener("click", () => document.getElementById("btn-plus").checked = false);

    document.getElementById("buscar-conversacion").addEventListener("click", conversacion);


}

let textocambiar = `
<section class="encabezadoseccion">
<i class="bi bi-chevron-left "></i>
<button class="btn btn_large_outline_active" style="background-color: #CCEFF1; width: 370px; padding: auto 15px auto;">Microcrédito</button>

</section>
<section>
<h5 class="titulomicro">¿Cómo solicitar un Microcrédito?</h5>
<p class="contenidomicro">Llena el formulario y un analista de
crédito se contactara lo mas pronto posible.</p>
<section style="display: flex; justify-content: space-around;"> <section class="imagenesmicro"><img src="/salvavidas/recursos/imagenes/mascota2.png" alt=""></section></section>
<!-- <p class="contenidomicro">Para realizar este proceso deberás de
    rellenar un formulario que encontraras 
    bajando un poco en la pagina.</p>


<section style="display: flex; justify-content: space-around;"> <section class="imagenesmicro"><img src="/salvavidas/recursos/imagenes/form 1.png" alt=""><img src="/salvavidas/recursos/imagenes/mascota2.png" alt=""></section></section> -->

</section>`

//console.log(document.getElementById("btn-plus").checked)
if (!sessionStorage.getItem("active")) {
    sessionStorage.setItem("active", false)
}
if (sessionStorage.getItem("active") === true) {

    document.getElementById("btn-plus").checked = true

}


















function conversacion() {

    //console.log(this.home)
    //    sessionStorage.setItem("etapa","main")

    console.log(document.getElementById("content-in-help").innerHTML)

    document.getElementById("content-in-help").innerHTML = "";

    document.getElementById("content-in-help").innerHTML = `           
    

    <section style=" padding: 0px 10px; width: calc(100%); border-radius:10px 10px 0px 0px ; height:40px ; margin-top: -10px; ; background-color: #2FD9DE; display:flex; justify-content: space-between; align-items:center;" class= "hidden-title">
     
    <i id="chatback" style="cursor:pointer; color:#fff" class="bi bi-chevron-left"></i>
    <p style="font-weight: 700;
    font-size: 18px;
    line-height: 120%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    ">Asistente Virtual</p>
    <i id="closethis" style="cursor:pointer;color:#fff" class="bi bi-x-lg"></i>
 
    </section>
 

<!-- Pregunta -->
<section class="pregunta-chat">
    <div class="comment pregunta">
        <img class="profile-pic" src="/Salvavidas/recursos/imagenes/Icono-pregunta.png">
        <div class="comment-body">
            <div class="comment-message">Como crear un perfil
            </div>
        </div>
    </div>
</section>

<!-- Respuesta -->
<section class="respuesta-chat">
    <div class="comment respuesta">
        <img class="banco-pic" src="/Salvavidas/recursos/imagenes/Icono-respuesta.png">
        <div class="comment-body">
            <div class="comment-message">Para crear un perfil, tendrás que dirigirte a <a href=".././Registro/registro.html">Mi perfil aquí.</a> <br><br>
                Te proporcionare también algunas opciones que podran ayudarte. <br><br>
                Si tienes mas dudas continua escribiendo.
            </div>
        </div>
    </div>
</section>

<!-- Botón que sale con la respuesta -->
<section class="botonayuda-chat">
    <div class="botonayuda-div" style="margin-top: 30px;">
    <button class="pregunta-frecuente-salvavidas"> ¿Cómo crear un perfil? </button>
    </div>
</section>

<!-- Input de escribir -->
<section class="inputescribir-chat">
    <input class="inputchatsalvavidas" type="text" placeholder="Escribe aquí tu mensaje">
</section> `;

    document.getElementById("chatback").addEventListener("click", returnToMain)

    document.getElementById("closethis").addEventListener("click", () => document.getElementById("btn-plus").checked = false)



}