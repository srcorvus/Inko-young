const tacos = document.querySelector('.tacos')
const menu = document.querySelector('.menu-nave')

console.log(menu)
console.log(tacos)

tacos.addEventListener('click', ()=>{
    menu.classList.toggle('spread')
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
        && e.target != menu && e.target != tacos ){
        
        menu.classList.toggle('spread')
        
    }
})