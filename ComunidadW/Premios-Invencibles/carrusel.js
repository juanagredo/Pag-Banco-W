const imagenes_in_car = document.getElementById("imagenes-carr").getElementsByTagName("img");

const arrowIzq = document.getElementById("carr_izq")
const arrowDer = document.getElementById("carr_der")

let inUse = false;

arrowIzq.addEventListener("click", start_animtoizq)
arrowDer.addEventListener("click", start_animtoder)

let srcArray = [
    "./recursos/carrusel-1.png",
    "./recursos/carrusel-2.png",
    "./recursos/carrusel-3.png",
    "./recursos/carrusel-4.png",
    "./recursos/carrusel-5.png"
];

//setInterval( start_animtoizq, 5000);
//setInterval( start_animtoder, 2000);

function cambiarSrcder() {
    var contenedor = document.getElementById("carrusel-inv");
    var imagenes = contenedor.querySelectorAll("img");

    srcArray.unshift(srcArray[4])
    srcArray.pop();
    console.log(srcArray);

    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].src = srcArray[i];
    }

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
    if (!inUse) {

        inUse = true

        for (let i = 0; i < imagenes_in_car.length; i++) {
            imagenes_in_car[i].classList.add(`animdertoizq${i+1}`);
        }
        setTimeout(() => {
            inUse = false;
            cambiarSrcizq();
            for (let i = 0; i < imagenes_in_car.length; i++) {

                imagenes_in_car[i].classList.remove(`animdertoizq${i+1}`);

            }
        }, 1700);

    }
}

function start_animtoder() {

    if (!inUse) {

        inUse = true

        for (let i = 0; i < imagenes_in_car.length; i++) {
            imagenes_in_car[i].classList.add(`animizqtoder${i+1}`);
        }
        setTimeout(() => {
            inUse = false
            cambiarSrcder();
            for (let i = 0; i < imagenes_in_car.length; i++) {
                imagenes_in_car[i].classList.remove(`animizqtoder${i+1}`);
            }
        }, 1700);
    }

}



//---------movil------------//const carruselInv = document.getElementById('carrusel-inv');
const carruselInv = document.getElementById('carrusel-inv');
let isDragging = false;
let startX;
let scrollLeft;
let dragStartScrollLeft;

carruselInv.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX;
  scrollLeft = carruselInv.scrollLeft;
  dragStartScrollLeft = scrollLeft;
});

carruselInv.addEventListener('mouseleave', () => {
  if (!isDragging) return;
  isDragging = false;
});

carruselInv.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;
  const dragEndScrollLeft = carruselInv.scrollLeft;
  const dragDistance = Math.abs(dragEndScrollLeft - dragStartScrollLeft);
  const snapPoints = Array.from(carruselInv.querySelectorAll('.carrusel-img')).map((img) => img.offsetLeft);
  const closestSnap = snapPoints.reduce((prev, curr) => {
    return Math.abs(curr - dragEndScrollLeft) < Math.abs(prev - dragEndScrollLeft) ? curr : prev;
  });
  const targetScrollLeft = dragDistance > 50 ? closestSnap : dragStartScrollLeft;
  carruselInv.scrollTo({
    left: targetScrollLeft,
    behavior: 'smooth',
  });
});

carruselInv.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX;
  const dragDistance = x - startX;
  carruselInv.scrollLeft = scrollLeft - dragDistance;
});

