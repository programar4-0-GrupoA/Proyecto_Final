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


let products = [
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
let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div class="product">
                <img src="image/${value.image}">
                <div class="title">${value.name}</div>
                <div class="price">${value.price.toLocaleString()}$</div>
                <div class="description">${value.description}</div>
                <button onclick="addToCard(${key})" class="boton">Añadir al Carrito</button>
            </div>`;
        list.appendChild(newDiv);
    });
}

initApp();
function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
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
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

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
/*     let modal = document.getElementById('modal');
    modal.style.display = 'block'; */
    if (enlace) {
      window.open(enlace, '_blank');
      overlay.style.display = 'none';
    }

  }

  const modal = document.querySelector('.modal2');
const closeButton = document.querySelector('.close-modal');

closeButton.addEventListener('click', function() {
  modal.style.display = 'none';
});
