// aqui pondre lo de cambiar el dom en extractos segun la opcion elegida

const ex = document.getElementById("extractos-btn")
const ct = document.getElementById("cert_cta-btn")
const cr = document.getElementById("cert_cred-btn")
const ren = document.getElementById("dec_renta-btn")
const form_title = document.getElementById("form_title")
const elem_arr = [ex, ct, cr, ren];

/*for (i = 0 ; i < elem_arr.length ; i++){
    elem_arr[i].addEventListener('click', ()=>{
        console.log(elem_arr[i].innerHTML);
        for( j = 0; j<elem_arr.length;j++){
            elem_arr[j].style.fontWeight = '400';
        }
        //elem_arr[1].style.fontWeight = '600';
    })
}*/


ct.addEventListener('click', ()=>{
    for( i = 0; i<elem_arr.length;i++){
        elem_arr[i].style.fontWeight = '400';
    }
    ct.style.fontWeight = '600';
    form_title.innerHTML = ct.textContent;

})
ex.addEventListener('click', ()=>{
    for( i = 0; i<elem_arr.length;i++){
        elem_arr[i].style.fontWeight = '400';
    }
    ex.style.fontWeight = '600';
    form_title.innerHTML = ex.textContent;

})
cr.addEventListener('click', ()=>{
    for( i = 0; i<elem_arr.length;i++){
        elem_arr[i].style.fontWeight = '400';
    }
    cr.style.fontWeight = '600';
    form_title.innerHTML = cr.textContent;

})
ren.addEventListener('click', ()=>{
    for( i = 0; i<elem_arr.length;i++){
        elem_arr[i].style.fontWeight = '400';
    }
    ren.style.fontWeight = '600';
    form_title.innerHTML = ren.textContent;

})