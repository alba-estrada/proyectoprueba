/* JS PARA CERRAR EL MENU */
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const dropdownMenu = document.querySelector('.menu');

menuIcon.onclick = () => {
    dropdownMenu.classList.toggle('show');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
}

closeIcon.onclick = () => {
    dropdownMenu.classList.remove('show');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
}
/* JS PARA CERRAR EL MENU */


/* JS PARA QUE APAREZCAN LOS ELEMENTOS */
let appearElement = document.querySelectorAll('.appear')

window.addEventListener('scroll', () => {
    appearElement.forEach( (appear) => {
        if (appear.getBoundingClientRect().top < window.innerHeight -400) {
            appear.style.opacity = '1'
        } else {
            appear.removeAttribute('style')
        }           
    }) 
})
/* JS PARA QUE APAREZCAN LOS ELEMENTOS */
