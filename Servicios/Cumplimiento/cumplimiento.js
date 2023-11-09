document.addEventListener('DOMContentLoaded', function() {
    const serviciosDropdown = document.getElementById('servicios-dropdown');
    const dropdownMenu = serviciosDropdown.querySelector('.dropdown-menu');

    serviciosDropdown.addEventListener('click', function() {
        serviciosDropdown.classList.toggle('active');
    });

    // Cierra el menú desplegable si se hace clic en cualquier lugar fuera de él
    document.addEventListener('click', function(event) {
        if (!serviciosDropdown.contains(event.target)) {
            serviciosDropdown.classList.remove('active');
        }
    });
});
