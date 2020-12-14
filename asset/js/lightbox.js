const imagenes  = document.querySelectorAll('.img-galeria')
const imageneslight = document.querySelector('.agregar-img')
const contenedorlight = document.querySelector('.img-light')
const tacos1 = document.querySelector('.tacos')
imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerimgaen(imagen.getAttribute('src'))
        
    })
})


contenedorlight.addEventListener('click', (e)=>{
    if(e.target !== imageneslight){
        contenedorlight.classList.toggle('show')
        imageneslight.classList.toggle('show-img')
        tacos1.style.opacity = '1'
    }
})

const aparecerimgaen = (imagen)=>{
    imageneslight.src = imagen;
    contenedorlight.classList.toggle('show')
    imageneslight.classList.toggle('show-img')
    tacos1.style.opacity = '0'

}