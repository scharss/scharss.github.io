// script.js - Clon HTML5 Portfolio

// Configuración de particles.js igual al original
if (window.particlesJS) {
  // Forzar el render de partículas al cambiar de sección
  function renderParticles() {
    document.getElementById('particles-js').style.display = 'block';
  }
  document.addEventListener('DOMContentLoaded', renderParticles);
  // También al mostrar Home
  document.querySelectorAll('nav .nav-links a[data-section="home"]').forEach(link => {
    link.addEventListener('click', renderParticles);
  });
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          value_area: 1500,
        },
      },
      color: { value: '#fff' },
      shape: { type: 'circle' },
      line_linked: {
        enable: false,
        opacity: 0.03,
      },
      move: {
        direction: 'right',
        speed: 0.2,
      },
      size: {
        value: 1,
      },
      opacity: {
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.05,
        },
      },
    },
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: 'push',
        },
      },
      modes: {
        push: {
          particles_nb: 1,
        },
      },
    },
    retina_detect: true,
  });
}

// Efecto máquina de escribir
const typewriterTexts = [
  'Software Developer',
  'Bytecrafter',
  'Full Stack Developer',
  'Open Source Contributor'
];
let typewriterIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById('typewriter');

function typeWriterEffect() {
  if (!typewriterElement) return;
  const currentText = typewriterTexts[typewriterIndex];
  if (isDeleting) {
    charIndex--;
    typewriterElement.textContent = currentText.substring(0, charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      typewriterIndex = (typewriterIndex + 1) % typewriterTexts.length;
      setTimeout(typeWriterEffect, 500);
    } else {
      setTimeout(typeWriterEffect, 40);
    }
  } else {
    charIndex++;
    typewriterElement.textContent = currentText.substring(0, charIndex);
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeWriterEffect, 1200);
    } else {
      setTimeout(typeWriterEffect, 80);
    }
  }
}

// Navegación multipágina SPA
function showSection(section) {
  document.querySelectorAll('section[data-section]').forEach(sec => {
    if (sec.getAttribute('data-section') === section) {
      sec.classList.add('active');
    } else {
      sec.classList.remove('active');
    }
  });
  // Marcar el ítem del menú como activo
  document.querySelectorAll('nav .nav-links a[data-section]').forEach(link => {
    if (link.getAttribute('data-section') === section) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Mostrar Home por defecto
  showSection('home');

  // Navegación SPA
  document.querySelectorAll('nav .nav-links a[data-section]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.getAttribute('data-section');
      showSection(section);
    });
  });

  // Efecto máquina de escribir
  typeWriterEffect();

  // Scroll suave para navegación (solo para enlaces externos)
  document.querySelectorAll('nav a').forEach(anchor => {
    if (!anchor.hasAttribute('data-section')) {
      anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }
  });
}); 