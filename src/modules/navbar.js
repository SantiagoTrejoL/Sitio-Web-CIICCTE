document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        // Compara la ruta del enlace con la ruta actual
        if (link.getAttribute('href').includes(currentPath)) {
            link.classList.add('active');
            
            // Opcional: también puedes agregar la clase al elemento padre <li>
            link.closest('.nav-item').classList.add('active');
        }
    });
});