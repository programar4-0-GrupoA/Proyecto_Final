
/*  --------------------- Transparencia en la barra de navegación --------------------- */
window.addEventListener('scroll', function () {
    document.getElementById("navbar").classList.toggle("solido", window.scrollY > 100);

    /* if(window.scrollY > 100){
       document.getElementById("logo").src="./images/logoNombre.png"
    } else {
        document.getElementById("logo").src="./images/logo.png"
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

/*  --------------------- Slider Video  --------------------- */
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});


