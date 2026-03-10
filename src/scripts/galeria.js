
    /**
     * GALERÍA DE OBRAS
     * ----------------
     * Array de obras: cada objeto tiene src, title, author, desc y span
     * (span controla cuántas columnas ocupa en el grid para efecto masonry).
     * Para WordPress: reemplazá este array con datos PHP -> JSON.
     */
    const obras = [
      {
        src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800",
        title: "Abstracciones en Rojo",
        author: "Andrés Añasco",
        desc: "Técnica mixta sobre tela, 2024. Obra donada al acervo del Centro Cultural UTU.",
        span: "col-span-2 row-span-2"
      },
      {
        src: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?q=80&w=800",
        title: "Paisaje Urbano I",
        author: "Nando Rera",
        desc: "Óleo sobre tela, 80x60 cm. Colección permanente.",
        span: "col-span-1 row-span-1"
      },
      {
        src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800",
        title: "UTU Ciudadela",
        author: "Jorge Faruelo",
        desc: "Donación 2023. Homenaje pictórico a la historia de Montevideo.",
        span: "col-span-1 row-span-2"
      },
      {
        src: "https://images.unsplash.com/photo-1554941068-a252680d25d9?q=80&w=800",
        title: "Memoria Visual",
        author: "Laura Britos",
        desc: "Fotografía intervenida, serie de 5 piezas. Archivo del laboratorio fotográfico.",
        span: "col-span-1 row-span-1"
      },
      {
        src: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800",
        title: "Sin título #3",
        author: "Marcos Villalba",
        desc: "Acuarela y tinta china, 2022. Fondo de adquisiciones.",
        span: "col-span-1 row-span-1"
      },
      {
        src: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800",
        title: "Raíces",
        author: "Claudia Sepúlveda",
        desc: "Escultura en bronce, 45 cm. Préstamo a largo plazo del Museo Nacional.",
        span: "col-span-2 row-span-1"
      }
    ];

    // Renderizar cards en el grid
    const grid = document.getElementById('gallery-grid');
    if (grid) {
      obras.forEach((obra, i) => {
        const card = document.createElement('div');
        card.className = `${obra.span} relative overflow-hidden group cursor-pointer bg-neutral-900`;
        card.setAttribute('data-index', i);
        card.innerHTML = `
          <img src="${obra.src}" alt="${obra.title}"
            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0">
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="absolute bottom-0 left-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p class="text-cc_pink text-[9px] uppercase tracking-widest font-bold">${obra.author}</p>
            <p class="text-white font-bold text-sm leading-tight">${obra.title}</p>
          </div>
          <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span class="bg-black/60 backdrop-blur-sm text-white text-[9px] px-2 py-1 rounded-full">Ver obra</span>
          </div>
        `;
        card.addEventListener('click', () => openModal(i));
        grid.appendChild(card);
      });
    }

    // Lightbox modal
    const modal     = document.getElementById('gallery-modal');
    const modalImg  = document.getElementById('modal-img');
    const modalTitle  = document.getElementById('modal-title');
    const modalAuthor = document.getElementById('modal-author');
    const modalDesc   = document.getElementById('modal-desc');
    const modalClose  = document.getElementById('modal-close');
    const modalOverlay = document.getElementById('modal-overlay');

    function openModal(index) {
      const obra = obras[index];
      modalImg.src = obra.src;
      modalImg.alt = obra.title;
      modalTitle.textContent = obra.title;
      modalAuthor.textContent = obra.author;
      modalDesc.textContent = obra.desc;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

