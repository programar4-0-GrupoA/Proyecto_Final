// Carrito de compras--------------------------------------------------
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let comprarCarrito = document.querySelector('.pdf-button');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active'); // Agrega la clase CSS active al elemento HTML body, lo que cambia su estilo visual para mostrar el carrito de compras.
})
closeShopping.addEventListener('click', () => {// Agrega un evento click al elemento HTML referenciado por la variable closeShopping, que ejecuta una función de flecha (arrow function) cuando el usuario hace clic en él.
    body.classList.remove('active'); // Elimina la clase CSS active del elemento HTML body, lo que cambia su estilo visual para ocultar el carrito de compras.
})
comprarCarrito.addEventListener('click', () => {
    body.classList.remove('active'); /*cerrar carrito*/
})

iniciar();

/*------------------------------------Boton del carrito-------------------------------------------------------------*/
const misBotones = document.getElementsByClassName('boton');

Array.from(misBotones).forEach(miBoton => { //Convierte la lista de elementos HTML referenciados por misBotones en un Array y, a continuación, itera sobre cada elemento usando el método forEach.
    // En cada iteración, el elemento actual se hace referencia como miBoton.
    miBoton.addEventListener('click', function () { // ejecuta una función anónima cuando el usuario hace clic en el elemento.
        miBoton.classList.add('clicked'); // Agrega la clase CSS clicked al elemento actual (miBoton), lo que cambia su estilo visual.
        setTimeout(function () { // Ejecuta una función anónima después de un cierto período de tiempo (en este caso, 1000 milisegundos, es decir, 1 segundo).
            miBoton.classList.remove('clicked'); //  Elimina la clase CSS clicked del elemento actual (miBoton), lo que revierte su estilo visual al original.
        }, 1000);
    }); //  Cierra la función anónima y el evento click.
}); //  Cierra el método forEach.
/*---------------------------- Agregado de una capa semi-transparente que cubra toda la página al hacer click en el carrito---------------------------------------------------------------------*/
const btnAbrirCarrito = document.querySelector('#carro-boton');   //Declaracion de constante
const carrito = document.querySelector('#shopping');
const overlay = document.querySelector('.overlay');

btnAbrirCarrito.addEventListener('click', () => {  // Se agrega el evento click al elemento btnAbrirCarrito que se activa al ser presionado
    carrito.classList.add('activo'); // Se agrega la clase activo al elemento carrito
    overlay.style.display = 'block'; //Cambia el estilo display del elemento overlay a block, que hace que se muestre en la pantalla, cubriendo todo el contenido.
});
// cierre de carro que oculta la capa semi-transparente---------------------------------------
const btnCerrarCarrito = document.querySelector('#close-boton');  //Declaracion de constante

btnCerrarCarrito.addEventListener('click', cerrarCarrito); //Agrega un evento click al elemento btnCerrarCarrito, que se activará cuando el botón sea presionado y ejecutará la función cerrarCarrito().

function cerrarCarrito() { //Declara la función cerrarCarrito() que se encarga de cerrar el carrito de compras y el overlay.
    carrito.classList.remove('activo'); // Remueve la clase activo del elemento carrito,  que hace que se oculte de la pantalla.
    overlay.style.display = 'none'; // Cambia el estilo display del elemento overlay a none, que hace que se oculte de la pantalla.
}


// cierre de modal de inicio de sesion y click para abrir el pdf y cerrar modal--------------------
function cerrarModal() { //Declara la función cerrarModal() que se encarga de cerrar un modal o ventana emergente que tiene un ID modal.
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Cambia el valor de la propiedad CSS display del elemento HTML referenciado por la constante modal a none, lo que oculta el elemento de la pantalla.
}

function abrirModal(enlace) { //


    /*     let modal = document.getElementById('modal');--------------------------------------------
        modal.style.display = 'block'; */
    if (enlace) { //Verifica si el parámetro enlace no es nulo o vacío.
        window.open(enlace, '_blank'); // Abre el enlace externo en una nueva pestaña del navegador.
        overlay.style.display = 'none'; // Oculta el elemento referenciado por la variable overlay.
    }
}

const modal = document.querySelector('.modal2');
const closeButton = document.querySelector('.close-modal');

closeButton.addEventListener('click', function () { // Agrega un evento click al elemento closeButton, que ejecuta una función anónima cuando el usuario hace clic en el elemento.
    modal.style.display = 'none'; // oculta el elemento de la pantalla.
});
