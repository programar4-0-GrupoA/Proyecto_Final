
/*  --------------------- Transparencia en la barra de navegación --------------------- */
window.addEventListener('scroll', function () {
    document.getElementById("navbar").classList.toggle("solido", window.scrollY > 100);

    /* if(window.scrollY > 100){
       document.getElementById("logo").src="./image/logoNombre.png"
    } else {
        document.getElementById("logo").src="./image/logo.png"
    } */

});

/*  --------------------- Despliegue menú navbar --------------------- */

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x")
    navbar.classList.toggle("active");
};

/*  --------------------- Cambio boton activo nav bar --------------------- */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        };
    });

    menuIcon.classList.remove("bx-x")
    navbar.classList.remove("active");
};

// ---- Pasar los datos del carrito de compras al modelo de PDF ----
document.querySelector('#btnCrearPdf').addEventListener('click', guardarArray);

// ---- Función para guardar los datos en el localStorage ----
function guardarArray() {
    let nombre = document.querySelector("#nomb");
    let direccion = document.querySelector("#dir");
    let telefono = document.querySelector("#tel");
    let client = [nombre.value, direccion.value, telefono.value];
    localStorage.clear();
    localStorage.setItem('client', JSON.stringify(client));
    localStorage.setItem('lista', JSON.stringify(listCards));
}


/* ------------------------------ Cierre de Modal ---------------------------------------------- */

var iconoCerrarModal = document.getElementById("cerrarModalIcono");
iconoCerrarModal.addEventListener("click", cerrarModal);

function cerrarModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
    overlay.style.display = "none";
}


/* ---------------------- Cierre de Modal Registro ------------------------------- */
var iconoCerrarModalRegistro = document.getElementById("cerrarModalIconoRegistro");
iconoCerrarModalRegistro.addEventListener("click", cerrarModalRegistro);

function cerrarModalRegistro() {
    var modal = document.getElementById("modal2");
    modal.style.display = "none";
    window.location.href = "#inicio";
    window.location.reload();
}

// /*  --------------------- Slider Video  --------------------- /
 const btns = document.querySelectorAll(".nav-btn"); // Almacena todos los elementos que tienen la clase .nav-btn / 
const slides = document.querySelectorAll(".video-slide"); // Almacena todos los elementos que tienen la clase .video-slide / 
 const contents = document.querySelectorAll(".content"); // Almacena todos los elementos que tienen la clase .content / 

 var sliderNav = function (manual) { // Se define una función llamada sliderNav que recibe un parámetro llamado manual /
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    }); 

    // / Se realiza un bucle forEach en el que se eliminan las clases active de 
    // todos los elementos almacenados en las tres constantes (btns, slides y contents), para asegurarse de que solo 
    // el elemento seleccionado tenga la clase active /

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");

    // / Se agrega la clase active al botón, al slide y al content 
    // que se encuentra en la posición manual en los arrays btns, slides y contents, respectivamente. /

}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

// Se realiza otro bucle forEach en el que se agregan los eventos click a cada uno de los botones almacenados en la constante btns. 
//Cuando se hace clic en alguno de los botones, se llama a la función sliderNav y se le pasa el índice del botón como argumento.  */

// Recarga de pagina al darle click al logo de la pagina

const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
  location.reload();
});


