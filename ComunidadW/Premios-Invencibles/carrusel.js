const imagenes_in_car = document.getElementById("imagenes-carr").getElementsByTagName("img");
const posi = ["1 indexz-0 blacked izq-carr", "2 indexz-1 blacked izq-carr",
    "3 indexz-2 -blacked cent-carr", "4 indexz-1 blacked der-carr", "5 indexz-0 blacked der-carr"
]
let srcArray = [
    "./recursos/carrusel-1.png",
    "./recursos/carrusel-2.png",
    "./recursos/carrusel-3.png",
    "./recursos/carrusel-4.png",
    "./recursos/carrusel-5.png"
  ];
  
 

setInterval( start_animtoizq, 5000);

function cambiarSrcder() {
    var contenedor = document.getElementById("carrusel-inv");
    var imagenes = contenedor.querySelectorAll("img");
  
    for (var i = 0; i < imagenes.length; i++) {
      imagenes[i].src = srcArray[i];
    }

    srcArray.unshift(srcArray[4])
    srcArray.pop();
    console.log(srcArray);

  }

  function cambiarSrcizq() {
    var contenedor = document.getElementById("carrusel-inv");
    var imagenes = contenedor.querySelectorAll("img");
  
   

    srcArray.push(srcArray[0])
    srcArray.shift();
    console.log(srcArray); 
    for (var i = 0; i < imagenes.length; i++) {
      imagenes[i].src = srcArray[i];
    }

  }


  function start_animtoizq() {

    for (let i = 0; i < imagenes_in_car.length; i++) {
        imagenes_in_car[i].classList.add(`animdertoizq${i+1}`);
         }

         setTimeout(() => {cambiarSrcizq();
            for (let i = 0; i < imagenes_in_car.length; i++) {
        imagenes_in_car[i].classList.remove(`animdertoizq${i+1}`);
        
         }
         }, 1700);

}


console.log(imagenes_in_car[0])















/*

start_animtoizq()


setTimeout(changeposis, 1700)

function changeposis() {

    for (let i = 0; i < imagenes_in_car.length; i++) {
    
        j = i+1

        if (imagenes_in_car[i].classList.contains(j)) {
            if (i-1 === -1) {
            imagenes_in_car[i].classList.value = posi[posi.length - 1]
            }
            else{
            imagenes_in_car[i].classList.value = posi[i - 1]
            }
        }
    }
}

function start_animtoizq() {

    for (let i = 0; i < imagenes_in_car.length; i++) {
        imagenes_in_car[i].classList.add(`animdertoizq${i+1}`);


         }

    ;


}

function start_animtoder() {

}*/