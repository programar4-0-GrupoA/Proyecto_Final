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


let products = [ // un array que contiene objetos con sus propiedades
    {
        id: 1,
        name: 'Torta 1',
        image: 'torta1.jpg',
        price: 3500,
        description: 'aca va la descripcion de cada torta'
    },
    {
        id: 2,
        name: 'Torta 2',
        image: 'torta2.jpg',
        price: 3800,
        description: 'aca va la descripcion de cada torta'
    },
    {
        id: 3,
        name: 'Torta chocolate',
        image: 'torta3.jpg',
        price: 3200,
        description: 'aca va la descripcion de cada torta'
    },
    {
        id: 4,
        name: 'Torta 54',
        image: 'torta4.com.png',
        price: 2800,
        description: 'aca va la descripcion de cada torta'
    },
    {
        id: 5,
        name: 'Torta 5',
        image: 'torta5.com.png',
        price: 2800,
        description: 'aca va la descripcion de cada torta'
    },
    {
        id: 6,
        name: 'Torta 6',
        image: 'torta11.com.png',
        price: 4500,
        description: 'aca va la descripcion de cada torta'
    },
    {
        id: 7,
        name: 'Torta chocolate',
        image: 'torta8.com.png',
        price: 4000,
        description: 'aca va la descripcion de cada torta'
    },
    {
        id: 8,
        name: 'Torta chocolate',
        image: 'torta9.com.png',
        price: 1800,
        description: 'aca va la descripcion de cada torta'
    },
    {
        id: 10,
        name: 'Torta chocolate',
        image: 'torta7.com.png',
        price: 3250,
        description: 'aca va la descripcion de cada torta'
    },
];
// crea una lista de productos en la página web con la información y los botones necesarios para añadir productos al carrito de compras.

let listCards = []; //  array vacío llamado listCards.

function initApp() { //  inicializa una lista de productos en la interfaz de usuario.
    products.forEach((value, key) => { // Itera sobre cada objeto del array products usando forEach().
        let newDiv = document.createElement('div'); // Crea un nuevo elemento div usando createElement().
        newDiv.classList.add('item'); // // Agrega la clase 'item' al nuevo elemento div usando classList.add().
        newDiv.innerHTML = `
            <div class="product">
                <img src="image/${value.image}">
                <div class="title">${value.name}</div>
                <div class="price">${value.price.toLocaleString()}$</div>
                <div class="description">${value.description}</div>
                <button onclick="addToCard(${key})" class="boton">Añadir al Carrito</button>
            </div>`;
        list.appendChild(newDiv); // // Agrega el nuevo elemento div al elemento con el identificador 'list' usando appendChild().
    });
}

initApp(); // Esta función se encarga de generar la lista de productos y mostrarla en la pantalla.
function addToCard(key) { // una función llamada addToCard que se llama cuando el usuario hace clic en el botón "Agregar al carrito". La función recibe el índice del producto en la lista de productos.
    if (listCards[key] == null) { // Esta línea comprueba si el producto ya ha sido agregado al carrito. Si el producto no ha sido agregado al carrito, la función agrega una copia del producto a la lista de carrito. La copia se realiza utilizando JSON.parse() y JSON.stringify() para crear una copia profunda del objeto.
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1; // Esta línea agrega el producto a la lista de carrito y establece su cantidad en 1.
    }
    reloadCard(); // actualiza el carrito en la pantalla.
}
function reloadCard() { // actualiza el carrito en la pantalla.
    listCard.innerHTML = ''; // Esta línea vacía la lista de carrito en la pantalla.
    let count = 0;//
    let totalPrice = 0; // Estas líneas inicializan dos variables para realizar un seguimiento del número total de artículos en el carrito y del precio total.
    listCards.forEach((value, key) => { // itera sobre la lista de carrito y llama a una función anónima para cada elemento de la lista.
        totalPrice = totalPrice + value.price;
        count = count + value.quantity; // actualizan el precio total y el número total de artículos en el carrito.
        if (value != null) { // comprueba si el valor actual en la lista de carrito es null. Si el valor es null, se salta este elemento.
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}$</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv); 
        } // crea un nuevo elemento li para el producto y lo agrega a la lista de carrito en la pantalla.
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count; //  actualizan el precio total y el número total de artículos en la pantalla.
}
function changeQuantity(key, quantity) { //key,es la clave del producto en la lista de carrito, y quantity,es la cantidad que se va a actualizar para ese producto.
    if (quantity == 0) { // //Si la cantidad es igual a cero, es decir, si se quiere eliminar el producto del carrito
        delete listCards[key]; //  //Elimina el producto correspondiente de la lista de carrito
    } else { // //De lo contrario, si la cantidad es mayor a cero, es decir, si se quiere actualizar la cantidad del producto en el carrito
        listCards[key].quantity = quantity; // //Actualiza la cantidad del producto correspondiente en la lista de carrito
        listCards[key].price = quantity * products[key].price; //Actualiza el precio total del producto correspondiente en la lista de carrito
    }
    reloadCard();  //Vuelve a cargar la lista de carrito con los cambios realizados
}

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
