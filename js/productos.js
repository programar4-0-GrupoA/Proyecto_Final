var listCards = [];
var products = "";

function productos() {
    $.ajax({
        type: 'GET',
        url: 'https://api-usuarios-sugarrush.onrender.com/productos/',
        async: false,
        dataType: 'json',
        success: function (data) {
            products = data;
            // console.log(products);
        }
    });
};

function iniciar() {
    productos();
    console.log(products);
    // products.forEach((value, key) => {
        let key = 0;
    for (let value of products){
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div class="product">
                <img src="image/${value.image}">
                <div class="title">${value.name}</div>
                <div class="price">$${value.price.toLocaleString()}</div>
                <div class="description">${value.description}</div>
                <button onclick="addToCard(${key})" class="boton">Añadir al Carrito</button>
            </div>`;
        list.appendChild(newDiv);
        key++;
    };
}

function addToCard(key) {
    productos();
    console.log(products);
    
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = products[key];
        console.log(listCards[key]);
        listCards[key].quantity += 1;
    };
    console.log(listCards + "Segunda impresion"); 
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    let i = 1;
    listCards.forEach((value, key) => {
        console.log(value);
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="./image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price}$</div>                
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
        i++;
    });

    total.innerText = totalPrice;
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        let precio = listCards[key].price / listCards[key].quantity;
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * precio;
        console.log(products[key]);
    }
    reloadCard();
}
