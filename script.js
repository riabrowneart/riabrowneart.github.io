/* ============================================================
   RIA BROWNE ART — script.js
   Vanilla JS lightbox — no dependencies
   ============================================================ */

(function () {
  const lightbox   = document.getElementById('lightbox');
  const lbImg      = document.getElementById('lightbox-img');
  const btnClose   = lightbox.querySelector('.lightbox-close');
  const btnPrev    = lightbox.querySelector('.lightbox-prev');
  const btnNext    = lightbox.querySelector('.lightbox-next');
  const items      = Array.from(document.querySelectorAll('.gallery-item'));

  let current = 0;

  function getImageData(index) {
    const img = items[index].querySelector('img');
    return { src: img.src, alt: img.alt };
  }

  function open(index) {
    current = index;
    const { src, alt } = getImageData(current);
    lbImg.src = src;
    lbImg.alt = alt;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    btnClose.focus();
  }

  function close() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  function showPrev() {
    current = (current - 1 + items.length) % items.length;
    const { src, alt } = getImageData(current);
    lbImg.src = src;
    lbImg.alt = alt;
  }

  function showNext() {
    current = (current + 1) % items.length;
    const { src, alt } = getImageData(current);
    lbImg.src = src;
    lbImg.alt = alt;
  }

  // Open on gallery item click
  items.forEach(function (item) {
    item.addEventListener('click', function () {
      open(parseInt(item.dataset.index, 10));
    });
  });

  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click', showPrev);
  btnNext.addEventListener('click', showNext);

  // Close on backdrop click
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) close();
  });

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape')      close();
    if (e.key === 'ArrowLeft')   showPrev();
    if (e.key === 'ArrowRight')  showNext();
  });
})();
