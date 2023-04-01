
/*  --------------------- Transparencia en la barra de navegación --------------------- */
window.addEventListener('scroll', function() {
    document.getElementById("navbar").classList.toggle("solido", window.scrollY > 100);
});

/*  --------------------- Cambio boton activo nav bar --------------------- */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header div nav ul li a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header div nav ul li a[href*=" + id + "]").classList.add("active");
            });
        };
    });
};