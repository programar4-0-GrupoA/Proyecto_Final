
/* 
document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos() { */

const lista = JSON.parse(localStorage.getItem('lista'));
const cliente = JSON.parse(localStorage.getItem('client'));

const list = lista.filter(el => el != null);

console.log(list);

let prod = document.querySelector('#prod');
let client = document.querySelector('#datosCliente');

client.innerHTML = `
<h2>CLIENTE</h2>
<div class="nombre">
    <label id=>Nombre: ${cliente[0]}</label>
</div>
<div class="direccion">
    <label>Dirección: ${cliente[1]}</label>
</div>
<div class="telefono">
    <label>Teléfono: ${cliente[2]}</label>
</div>
`;

prod.innerHTML = ``;
let total = 0;

list.forEach(element => {

    let precio = element.price / element.quantity;

    total += element.price;
    
    prod.innerHTML += `
        <tr> 
        <td class="cant">${element.quantity}</td>
        <td class="desc">${element.name}</td>
        <td class="prec">$${precio}</td>
        <td class="subt">$${element.price}</td>
        </tr>
    `;
})

prod.innerHTML += `
    <tr>
        <td class="cant blanco"></td>
        <td class="desc blanco"></td>
        <td class="prec total">TOTAL</td>
        <td class="subt total">$${total}</td>
`;
