document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navDots = document.querySelectorAll('.spy-dot');
  const spyLine = document.getElementById('spy-line');

  window.addEventListener('scroll', () => {
    let current = "";
    const scrollPos = window.scrollY + (window.innerHeight / 2);

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPos >= sectionTop && scrollPos <= (sectionTop + sectionHeight)) {
        current = section.getAttribute('id');
      }
    });

    navDots.forEach(dot => {
      dot.classList.remove('active');
      if (dot.getAttribute('href').includes(current)) {
        dot.classList.add('active');
      }
    });

    // Calcular progreso de la línea (opcional)
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    if(spyLine) spyLine.style.height = `${progress}%`;
  });
});