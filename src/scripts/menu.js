document.addEventListener('DOMContentLoaded', () => {
    // Elementos del Header
    const header = document.getElementById('main-header');
    const headerContainer = document.getElementById('header-container');
    const logo = document.getElementById('header-logo');
    const navLinks = document.getElementById('nav-links');
    const menuText = document.getElementById('menu-text');
    const hamburgerBg = document.getElementById('hamburger-bg');

    // Elementos del Menú Lateral
    const hamburgerBtn = document.getElementById('hamburger'); // El botón principal
    const sideMenu = document.getElementById('side-menu');
    const menuContent = document.getElementById('menu-content');
    const menuOverlay = document.getElementById('menu-overlay');
    const closeBtn = document.getElementById('close-menu');


    // --- LÓGICA DE SCROLL ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.classList.remove('h-[80px]');
            header.classList.add('h-[60px]', 'border-none');

            headerContainer.classList.add('rounded-b-xl', 'h-[65px]');
            //headerContainer.style.maxWidth = "95%";

            hamburgerBg?.classList.replace('bg-cc_purpura', 'bg-white/20');

        } else {
            header.classList.add('h-[80px]');
            header.classList.remove('h-[60px]');

            headerContainer.classList.remove('bg-cc_purpura', 'shadow-2xl', 'rounded-b-xl', 'h-[65px]');
            //headerContainer.style.maxWidth = "100%";

            hamburgerBg?.classList.replace('bg-white/20', 'bg-cc_purpura');
        }
    });

    // --- LÓGICA DEL MENÚ LATERAL ---
    function toggleMenu(open) {
        if (open) {
            sideMenu.classList.remove('invisible');
            menuOverlay.classList.add('opacity-100');
            menuContent.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden'; // Bloquea el scroll de la página
        } else {
            menuOverlay.classList.remove('opacity-100');
            menuContent.classList.add('translate-x-full');
            document.body.style.overflow = ''; // Libera el scroll
            setTimeout(() => {
                sideMenu.classList.add('invisible');
            }, 300); // Espera a que termine la animación
        }
    }

    // Eventos de click
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleMenu(true);
        });
    }

    if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));
    if (menuOverlay) menuOverlay.addEventListener('click', () => toggleMenu(false));
});