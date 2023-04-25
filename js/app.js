let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let comprarCarrito = document.querySelector('.pdf-button');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})
comprarCarrito.addEventListener('click', () => {
    body.classList.remove('active'); /*cerrar carrito*/
})

iniciar();

/*------------------------------------Boton del carrito-------------------------------------------------------------*/
const misBotones = document.getElementsByClassName('boton');

Array.from(misBotones).forEach(miBoton => {
    miBoton.addEventListener('click', function () {
        miBoton.classList.add('clicked');
        setTimeout(function () {
            miBoton.classList.remove('clicked');
        }, 1000);
    });
});
/*---------------------------- Agregado de una capa semi-transparente que cubra toda la página al hacer click en el carrito---------------------------------------------------------------------*/
const btnAbrirCarrito = document.querySelector('#carro-boton');
const carrito = document.querySelector('#shopping');
const overlay = document.querySelector('.overlay');

btnAbrirCarrito.addEventListener('click', () => {
    carrito.classList.add('activo');
    overlay.style.display = 'block';
});
// cierre de carro que oculta la capa semi-transparente
const btnCerrarCarrito = document.querySelector('#close-boton');

btnCerrarCarrito.addEventListener('click', cerrarCarrito);

function cerrarCarrito() {
    carrito.classList.remove('activo');
    overlay.style.display = 'none';
}
// cierre de modal de inicio de sesion y click para abrir el pdf y cerrar modal
function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function abrirModal(enlace) {
    if (enlace) {
        window.open(enlace, '_blank');
        overlay.style.display = 'none';
    }
}

const modal = document.querySelector('.modal2');
const closeButton = document.querySelector('.close-modal');

closeButton.addEventListener('click', function () {
    modal.style.display = 'none';
});
