document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('news-track');
    const originalItems = Array.from(track.querySelectorAll('.news-item'));
    const nextBtn = document.getElementById('next-news');
    const prevBtn = document.getElementById('prev-news');
    
    // 1. Clonación para efecto infinito
    const firstClone = originalItems[0].cloneNode(true);
    const lastClone = originalItems[originalItems.length - 1].cloneNode(true);
    
    track.appendChild(firstClone);
    track.insertBefore(lastClone, originalItems[0]);

    const allItems = track.querySelectorAll('.news-item');
    let currentIndex = 1; // Empezamos en la 1 real (la 0 es el clon de la última)
    let isTransitioning = false;

    function updateCarousel(instant = false) {
        if (instant) track.style.transition = 'none';
        else track.style.transition = 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
        
        const offset = 10 - (currentIndex * 80);
        track.style.transform = `translateX(${offset}vw)`;

        // Manejo de clases visuales
        allItems.forEach((item, index) => {
            const container = item.querySelector('.group');
            // La noticia "activa" visualmente debe considerar los clones
            let virtualIndex = currentIndex;
            if (index === virtualIndex) {
                container.classList.add('active');
                item.classList.add('active');
            } else {
                container.classList.remove('active');
                item.classList.remove('active');
            }
        });
    }

    // Saltar del clon a la original sin que se note
    track.addEventListener('transitionend', () => {
        isTransitioning = false;
        if (currentIndex === 0) {
            currentIndex = allItems.length - 2;
            updateCarousel(true);
        }
        if (currentIndex === allItems.length - 1) {
            currentIndex = 1;
            updateCarousel(true);
        }
    });

    function moveNext() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex++;
        updateCarousel();
    }

    function movePrev() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex--;
        updateCarousel();
    }

    nextBtn.addEventListener('click', moveNext);
    prevBtn.addEventListener('click', movePrev);

    // Clic en laterales
    allItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (isTransitioning || index === currentIndex) return;
            isTransitioning = true;
            currentIndex = index;
            updateCarousel();
        });
    });

    // Inicio
    updateCarousel(true);
});