document.addEventListener('DOMContentLoaded', () => {
    // Obtiene la URL de la página actual y simplifica el nombre del archivo
    const currentPage = window.location.pathname.split('/').pop();

    // Selecciona todos los enlaces del navbar
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        // Obtiene el nombre del archivo del atributo href
        const linkPage = link.getAttribute('href').split('/').pop();

        // Si el href del enlace coincide con la página actual
        if (linkPage === currentPage) {
            link.classList.add('active'); // Agrega la clase 'active'
        }
    });
});
