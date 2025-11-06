// ===============================
// 📸 LIGHTBOX (Galería de imágenes)
// ===============================
const images = document.querySelectorAll('.galeria img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

if (images && lightbox && lightboxImg) {
  images.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
  });
}

// ===============================
// ✨ ANIMACIÓN DE ENTRADA AL HACER SCROLL
// ===============================
const elementos = document.querySelectorAll('.animate-fadeIn, section, div');

const mostrarElemento = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(mostrarElemento, { threshold: 0.2 });

elementos.forEach(el => {
  el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700');
  observer.observe(el);
});

// ===============================
// 🦁 ANIMACIÓN DEL TÍTULO PRINCIPAL (hover)
// ===============================
const titulo = document.querySelector('h1');

if (titulo) {
  titulo.addEventListener('mouseenter', () => {
    titulo.classList.add('scale-110', 'transition-transform', 'duration-300');
  });
  titulo.addEventListener('mouseleave', () => {
    titulo.classList.remove('scale-110');
  });
}

// ===============================
// 📨 FORMULARIO DE CONTACTO
// ===============================
const form = document.getElementById('formContacto');
const mensaje = document.getElementById('mensajeEnviado');

if (form && mensaje) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    mensaje.classList.remove('hidden');
    mensaje.classList.add('opacity-100');

    form.reset();

    // Oculta el mensaje después de 4 segundos
    setTimeout(() => {
      mensaje.classList.add('hidden');
      mensaje.classList.remove('opacity-100');
    }, 4000);
  });
}

