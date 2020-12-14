let slidere = document.querySelector(".slider-contenedora")
let sliderIndividuale = document.querySelectorAll(".contenido-slidere")
let contador = 1;
let width = sliderIndividuale [0].clientWidth;
let intervalo = 9000;

window.addEventListener("resize", function(){
    width = sliderIndividuale[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slidere.style.transform = "translate("+(-width*contador)+"px)";
    slidere.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividuale.length){
        setTimeout(function(){
            slidere.style.transform = "translate(0px)";
            slidere.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}