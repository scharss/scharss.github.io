/**
 * Dark Particle — Main JavaScript
 * i18n (EN default / ES), mobile navigation, scroll reveal, navbar effects.
 */

(function () {
  'use strict';

  /* =============================================================
     TRANSLATIONS
     ============================================================= */
  const translations = {
    en: {
      meta_title: 'Dark Particle | Software Engineering & AI Lab',
      meta_desc: 'Dark Particle is a software engineering and AI Lab. We build AI agents, high-performance websites and e-commerce platforms with scientific rigor.',
      a11y_lang: 'Switch language',
      a11y_skip: 'Skip to content',
      a11y_wa: 'Chat on WhatsApp',
      lang_label: 'ES',

      nav_services: 'Services',
      nav_method: 'Method',
      nav_tech: 'Technology',
      nav_features: 'Why Us',
      nav_contact: 'Contact',
      nav_cta: 'Start a project <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>',

      hero_badge: 'Software Engineering \u00B7 AI Lab \u00B7 Research',
      hero_title: 'Software Engineering<span class="hero__title-sub gradient-text">built to hold up</span>',
      hero_subtitle: 'Dark Particle is an engineering and AI Lab. We design software systems, autonomous agents, high-performance websites and e-commerce platforms \u2014 architected, tested and measured like scientific instruments.',
      hero_cta1: 'Explore services',
      hero_cta2: '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Let\'s talk',
      hero_stat1_label: 'Method',
      hero_stat1: 'Research-led engineering',
      hero_stat2_label: 'Agents',
      hero_stat2: 'AI in production',
      hero_stat3_label: 'Delivery',
      hero_stat3: 'Measured, secure, scalable',

      stack_label: 'Stack',

      services_tag: 'Services',
      services_title: 'Four disciplines,<br><span class="gradient-text">one standard</span>',
      services_desc: 'We concentrate on what we do best: engineering software and artificial intelligence that runs in production, without noise.',

      s1_title: 'Software Engineering &amp; AI',
      s1_desc: 'Full-stack product engineering with AI at the core. We design architectures, APIs and data models that stay coherent as the product grows.',
      s1_i1: 'Web &amp; mobile applications',
      s1_i2: 'APIs &amp; microservices',
      s1_i3: 'Cloud-native architecture',

      s2_title: 'AI Agents &amp; Automation',
      s2_desc: 'Autonomous agents and language-model workflows that read context, use tools and execute real processes \u2014 with evaluation and guardrails.',
      s2_i1: 'Autonomous agents',
      s2_i2: 'RAG &amp; knowledge bases',
      s2_i3: 'Workflow automation',

      s3_title: 'Web Development',
      s3_desc: 'Corporate sites and landing pages engineered for speed, accessibility and search: performance budgets, semantic markup and clean design.',
      s3_i1: 'Corporate websites',
      s3_i2: 'Landing pages',
      s3_i3: 'Technical SEO &amp; performance',

      s4_title: 'E-commerce &amp; Online Stores',
      s4_desc: 'Online stores that convert: catalog, payments, logistics and analytics \u2014 built on WooCommerce, Shopify or a custom stack.',
      s4_i1: 'WooCommerce &amp; Shopify',
      s4_i2: 'Payments &amp; logistics',
      s4_i3: 'Sales analytics &amp; automation',

      method_tag: 'Method',
      method_title: 'A method,<br>not <span class="gradient-text">guesswork</span>',
      method_desc: 'Every project follows the same scientific loop: observe, model, build and measure. It is slower to start and faster to finish.',
      m1_title: 'Observe',
      m1_desc: 'We map the problem, the users, the constraints and the available data before writing a line of code.',
      m2_title: 'Model',
      m2_desc: 'Architecture, data model and AI evaluation criteria are defined up front \u2014 not discovered by accident.',
      m3_title: 'Build',
      m3_desc: 'Clean, tested and documented code, with CI/CD, observability and security from the first iteration.',
      m4_title: 'Measure',
      m4_desc: 'We ship, instrument and iterate against real metrics instead of opinions.',

      tech_tag: 'Technology',
      tech_title: 'From model to<br><span class="gradient-text">production</span>',
      tech_desc: 'AI only matters when it survives contact with real users. We engineer for reliability, latency and cost \u2014 not for demos.',
      t1_title: 'AI research',
      t1_desc: 'Evaluation, fine-tuning and guardrails for models that behave predictably.',
      t2_title: 'Agents &amp; integrations',
      t2_desc: 'Tools, APIs, databases and documents connected into a single workflow.',
      t3_title: 'Data &amp; observability',
      t3_desc: 'Pipelines, metrics and traces that make every decision auditable.',
      engine_title: 'Particle Engine',
      metric1: 'Manual tasks',
      metric2: 'Process speed',
      metric3: 'Accuracy',
      engine_foot: 'Internal benchmark',

      features_tag: 'Why Us',
      features_title: 'Why <span class="gradient-text">Dark Particle</span>?',
      features_desc: 'A small, senior team with a bias toward rigor and long-term maintainability.',
      f1_title: 'Scientific rigor',
      f1_desc: 'Decisions backed by evidence: benchmarks, automated tests and measurable results.',
      f2_title: 'Production-grade code',
      f2_desc: 'Typed, tested and documented \u2014 built to be maintained by someone else.',
      f3_title: 'Security by design',
      f3_desc: 'Least privilege, threat modeling and auditable data handling from day one.',
      f4_title: 'Direct communication',
      f4_desc: 'No layers in between: you talk directly with the engineers building your product.',

      cta_tag: 'Contact',
      cta_title: 'Have a problem worth engineering?',
      cta_text: 'Tell us what you are building. You will get a technical answer, not a sales pitch.',
      cta_btn1: '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Message us on WhatsApp',
      cta_btn2: 'Review services',

      footer_tagline: 'Software engineering &amp; AI Lab.<br>Built with scientific rigor.',
      footer_status: 'Available for new projects',
      footer_services: 'Services',
      footer_sw: 'Software Engineering',
      footer_ai: 'AI Agents',
      footer_web: 'Web Development',
      footer_ecommerce: 'E-commerce',
      footer_company: 'Company',
      footer_method: 'Method',
      footer_tech: 'Technology',
      footer_why: 'Why Us',
      footer_contact: 'Contact',
      footer_whatsapp: 'WhatsApp',
      footer_talk: 'Start a project',
      footer_copy: '\u00A9 2026 Dark Particle. All rights reserved.',

      cookie_title: 'Your privacy is important to us',
      cookie_text: 'We use our own and third-party cookies to improve your experience, analyze traffic and remember your preferences.',
      cookie_policy: 'Cookie Policy',
      cookie_privacy: 'Privacy Policy',
      cookie_reject: 'Reject all',
      cookie_accept: 'Accept all'
    },

    es: {
      meta_title: 'Dark Particle | Ingenier\u00EDa de Software \u00B7 Laboratorio de IA',
      meta_desc: 'Dark Particle es un laboratorio de ingenier\u00EDa de software e IA. Construimos agentes de IA, p\u00E1ginas web de alto rendimiento y tiendas virtuales con rigor cient\u00EDfico.',
      a11y_lang: 'Cambiar idioma',
      a11y_skip: 'Ir al contenido',
      a11y_wa: 'Chatear por WhatsApp',
      lang_label: 'EN',

      nav_services: 'Servicios',
      nav_method: 'M\u00E9todo',
      nav_tech: 'Tecnolog\u00EDa',
      nav_features: 'Nosotros',
      nav_contact: 'Contacto',
      nav_cta: 'Iniciar proyecto <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>',

      hero_badge: 'Ingenier\u00EDa de Software \u00B7 Laboratorio de IA \u00B7 Investigaci\u00F3n',
      hero_title: 'Ingenier\u00EDa de Software<span class="hero__title-sub gradient-text">construido para resistir</span>',
      hero_subtitle: 'Dark Particle es un laboratorio de ingenier\u00EDa de software e IA. Dise\u00F1amos sistemas, agentes aut\u00F3nomos, p\u00E1ginas web de alto rendimiento y tiendas virtuales \u2014 arquitectados, probados y medidos como instrumentos cient\u00EDficos.',
      hero_cta1: 'Explorar servicios',
      hero_cta2: '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Hablemos',
      hero_stat1_label: 'M\u00E9todo',
      hero_stat1: 'Ingenier\u00EDa basada en investigaci\u00F3n',
      hero_stat2_label: 'Agentes',
      hero_stat2: 'IA en producci\u00F3n',
      hero_stat3_label: 'Entrega',
      hero_stat3: 'Medido, seguro y escalable',

      stack_label: 'Stack',

      services_tag: 'Servicios',
      services_title: 'Cuatro disciplinas,<br><span class="gradient-text">un est\u00E1ndar</span>',
      services_desc: 'Nos concentramos en lo que mejor hacemos: ingenier\u00EDa de software e inteligencia artificial que funcionan en producci\u00F3n, sin ruido.',

      s1_title: 'Ingenier\u00EDa de Software e IA',
      s1_desc: 'Ingenier\u00EDa de producto full-stack con IA en el n\u00FAcleo. Dise\u00F1amos arquitecturas, APIs y modelos de datos que se mantienen coherentes mientras el producto crece.',
      s1_i1: 'Aplicaciones web y m\u00F3viles',
      s1_i2: 'APIs y microservicios',
      s1_i3: 'Arquitectura cloud-native',

      s2_title: 'Agentes de IA y Automatizaci\u00F3n',
      s2_desc: 'Agentes aut\u00F3nomos y flujos con modelos de lenguaje que leen contexto, usan herramientas y ejecutan procesos reales \u2014 con evaluaci\u00F3n y salvaguardas.',
      s2_i1: 'Agentes aut\u00F3nomos',
      s2_i2: 'RAG y bases de conocimiento',
      s2_i3: 'Automatizaci\u00F3n de flujos',

      s3_title: 'Desarrollo de P\u00E1ginas Web',
      s3_desc: 'Sitios corporativos y landing pages dise\u00F1ados para velocidad, accesibilidad y b\u00FAsqueda: presupuestos de rendimiento, marcado sem\u00E1ntico y dise\u00F1o limpio.',
      s3_i1: 'Sitios corporativos',
      s3_i2: 'Landing pages',
      s3_i3: 'SEO t\u00E9cnico y rendimiento',

      s4_title: 'Tiendas Virtuales y E-commerce',
      s4_desc: 'Tiendas online que convierten: cat\u00E1logo, pagos, log\u00EDstica y anal\u00EDtica \u2014 sobre WooCommerce, Shopify o una plataforma a medida.',
      s4_i1: 'WooCommerce y Shopify',
      s4_i2: 'Pagos y log\u00EDstica',
      s4_i3: 'Anal\u00EDtica y automatizaci\u00F3n de ventas',

      method_tag: 'M\u00E9todo',
      method_title: 'Un m\u00E9todo,<br>no <span class="gradient-text">improvisaci\u00F3n</span>',
      method_desc: 'Cada proyecto sigue el mismo ciclo cient\u00EDfico: observar, modelar, construir y medir. Tardamos m\u00E1s en empezar y terminamos antes.',
      m1_title: 'Observar',
      m1_desc: 'Mapeamos el problema, los usuarios, las restricciones y los datos disponibles antes de escribir una l\u00EDnea de c\u00F3digo.',
      m2_title: 'Modelar',
      m2_desc: 'La arquitectura, el modelo de datos y los criterios de evaluaci\u00F3n de la IA se definen desde el inicio \u2014 no se descubren por accidente.',
      m3_title: 'Construir',
      m3_desc: 'C\u00F3digo limpio, probado y documentado, con CI/CD, observabilidad y seguridad desde la primera iteraci\u00F3n.',
      m4_title: 'Medir',
      m4_desc: 'Desplegamos, instrumentamos e iteramos con m\u00E9tricas reales en lugar de opiniones.',

      tech_tag: 'Tecnolog\u00EDa',
      tech_title: 'Del modelo a<br><span class="gradient-text">producci\u00F3n</span>',
      tech_desc: 'La IA solo importa cuando sobrevive al contacto con usuarios reales. Dise\u00F1amos para confiabilidad, latencia y costo \u2014 no para demos.',
      t1_title: 'Investigaci\u00F3n en IA',
      t1_desc: 'Evaluaci\u00F3n, ajuste fino y salvaguardas para modelos que se comportan de forma predecible.',
      t2_title: 'Agentes e integraciones',
      t2_desc: 'Herramientas, APIs, bases de datos y documentos conectados en un solo flujo.',
      t3_title: 'Datos y observabilidad',
      t3_desc: 'Pipelines, m\u00E9tricas y trazas que hacen auditable cada decisi\u00F3n.',
      engine_title: 'Particle Engine',
      metric1: 'Tareas manuales',
      metric2: 'Velocidad de proceso',
      metric3: 'Precisi\u00F3n',
      engine_foot: 'Benchmark interno',

      features_tag: 'Nosotros',
      features_title: '\u00BFPor qu\u00E9 <span class="gradient-text">Dark Particle</span>?',
      features_desc: 'Un equipo senior y reducido con sesgo hacia el rigor y el mantenimiento a largo plazo.',
      f1_title: 'Rigor cient\u00EDfico',
      f1_desc: 'Decisiones respaldadas por evidencia: benchmarks, pruebas automatizadas y resultados medibles.',
      f2_title: 'C\u00F3digo de producci\u00F3n',
      f2_desc: 'Tipado, probado y documentado \u2014 construido para que otro equipo lo mantenga.',
      f3_title: 'Seguridad desde el dise\u00F1o',
      f3_desc: 'M\u00EDnimo privilegio, modelado de amenazas y manejo de datos auditable desde el primer d\u00EDa.',
      f4_title: 'Comunicaci\u00F3n directa',
      f4_desc: 'Sin capas intermedias: hablas directamente con los ingenieros que construyen tu producto.',

      cta_tag: 'Contacto',
      cta_title: '\u00BFTienes un problema que valga la pena ingenier\u00EDa?',
      cta_text: 'Cu\u00E9ntanos qu\u00E9 est\u00E1s construyendo. Recibir\u00E1s una respuesta t\u00E9cnica, no un discurso de ventas.',
      cta_btn1: '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Escr\u00EDbenos por WhatsApp',
      cta_btn2: 'Ver servicios',

      footer_tagline: 'Ingenier\u00EDa de software y laboratorio de IA.<br>Construido con rigor cient\u00EDfico.',
      footer_status: 'Disponibles para nuevos proyectos',
      footer_services: 'Servicios',
      footer_sw: 'Ingenier\u00EDa de Software',
      footer_ai: 'Agentes de IA',
      footer_web: 'Desarrollo Web',
      footer_ecommerce: 'E-commerce',
      footer_company: 'Empresa',
      footer_method: 'M\u00E9todo',
      footer_tech: 'Tecnolog\u00EDa',
      footer_why: 'Nosotros',
      footer_contact: 'Contacto',
      footer_whatsapp: 'WhatsApp',
      footer_talk: 'Iniciar proyecto',
      footer_copy: '\u00A9 2026 Dark Particle. Todos los derechos reservados.',

      cookie_title: 'Tu privacidad es importante para nosotros',
      cookie_text: 'Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tr\u00E1fico y recordar tus preferencias.',
      cookie_policy: 'Pol\u00EDtica de cookies',
      cookie_privacy: 'Pol\u00EDtica de privacidad',
      cookie_reject: 'Rechazar todo',
      cookie_accept: 'Aceptar todo'
    }
  };

  /* =============================================================
     STATE
     ============================================================= */
  const STORAGE_KEY = 'darkparticle-lang';
  const SUPPORTED = ['en', 'es'];

  function getInitialLanguage() {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED.indexOf(stored) !== -1) {
        return stored;
      }
    } catch (error) {
      /* Storage can be unavailable (private mode, file protocol). */
    }
    return 'en';
  }

  let currentLang = getInitialLanguage();

  /* =============================================================
     DOM REFERENCES
     ============================================================= */
  const langToggle = document.getElementById('langToggle');
  const langToggleMobile = document.getElementById('langToggleMobile');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navbar = document.getElementById('navbar');
  const whatsappBtn = document.getElementById('whatsappBtn');
  const revealEls = document.querySelectorAll('.reveal');

  /* =============================================================
     WHATSAPP MESSAGES
     ============================================================= */
  const waMessages = {
    nav: {
      en: 'Hi Dark Particle, I would like to start a project with you.',
      es: 'Hola Dark Particle, quiero iniciar un proyecto con ustedes.'
    },
    hero: {
      en: 'Hi Dark Particle, I would like to talk about a project idea.',
      es: 'Hola Dark Particle, me gustar\u00EDa conversar sobre una idea de proyecto.'
    },
    cta: {
      en: 'Hi Dark Particle, I would like to schedule a consultation for my project.',
      es: 'Hola Dark Particle, quiero agendar una asesor\u00EDa para mi proyecto.'
    },
    float: {
      en: 'Hi Dark Particle, I have a question.',
      es: 'Hola Dark Particle, tengo una consulta.'
    },
    footer: {
      en: 'Hi Dark Particle, I would like to start a project with you.',
      es: 'Hola Dark Particle, quiero iniciar un proyecto con ustedes.'
    }
  };

  /* =============================================================
     i18n ENGINE
     ============================================================= */
  function setMetaContent(selector, value) {
    const el = document.querySelector(selector);
    if (el) {
      el.setAttribute('content', value);
    }
  }

  function updateDocumentMeta(lang) {
    document.title = translations[lang].meta_title;
    setMetaContent('meta[name="description"]', translations[lang].meta_desc);
    setMetaContent('meta[property="og:title"]', translations[lang].meta_title);
    setMetaContent('meta[property="og:description"]', translations[lang].meta_desc);
    setMetaContent('meta[name="twitter:title"]', translations[lang].meta_title);
    setMetaContent('meta[name="twitter:description"]', translations[lang].meta_desc);
  }

  function updatePageLanguage(lang) {
    if (SUPPORTED.indexOf(lang) === -1) {
      lang = 'en';
    }

    currentLang = lang;

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* Ignore unavailable storage. */
    }

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const value = translations[lang][key];
      if (value !== undefined) {
        el.innerHTML = value;
      }
    });

    document.documentElement.lang = lang;
    updateDocumentMeta(lang);

    if (langToggle) {
      langToggle.setAttribute('aria-label', translations[lang].a11y_lang);
    }
    if (langToggleMobile) {
      langToggleMobile.setAttribute('aria-label', translations[lang].a11y_lang);
    }

    if (whatsappBtn) {
      whatsappBtn.setAttribute('aria-label', translations[lang].a11y_wa);
    }

    document.querySelectorAll('a[href*="wa.me"]').forEach(function (link) {
      const key = link.getAttribute('data-wa') || 'float';
      const messages = waMessages[key] || waMessages.float;
      const message = messages[lang] || messages.en;
      const base = link.getAttribute('href').split('?')[0];
      link.setAttribute('href', base + '?text=' + encodeURIComponent(message));
    });
  }

  function switchLanguage() {
    updatePageLanguage(currentLang === 'en' ? 'es' : 'en');
  }

  if (langToggle) {
    langToggle.addEventListener('click', switchLanguage);
  }

  if (langToggleMobile) {
    langToggleMobile.addEventListener('click', switchLanguage);
  }

  /* Apply the default language (English) on load */
  updatePageLanguage(currentLang);

  /* =============================================================
     MOBILE MENU
     ============================================================= */
  function closeMenu() {
    if (!navMenu || !navToggle) {
      return;
    }
    navMenu.classList.remove('open');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function openMenu() {
    if (!navMenu || !navToggle) {
      return;
    }
    navMenu.classList.add('open');
    navToggle.classList.add('active');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      if (navMenu.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  document.querySelectorAll('.navbar__links .navbar__link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  const navCta = navMenu ? navMenu.querySelector('.navbar__cta') : null;
  if (navCta) {
    navCta.addEventListener('click', closeMenu);
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });

  /* =============================================================
     NAVBAR — subtle shadow on scroll
     ============================================================= */
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.style.boxShadow = window.scrollY > 12
        ? '0 18px 40px -32px rgba(0, 0, 0, 0.95)'
        : 'none';
    }, { passive: true });
  }

  /* =============================================================
     SCROLL REVEAL
     ============================================================= */
  if (revealEls.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  /* =============================================================
     WHATSAPP BUTTON — pause pulse while hovering
     ============================================================= */
  if (whatsappBtn) {
    const pulseEl = whatsappBtn.querySelector('.whatsapp-btn__pulse');

    whatsappBtn.addEventListener('mouseenter', function () {
      whatsappBtn.style.animationPlayState = 'paused';
      if (pulseEl) {
        pulseEl.style.animationPlayState = 'paused';
      }
    });

    whatsappBtn.addEventListener('mouseleave', function () {
      whatsappBtn.style.animationPlayState = 'running';
      if (pulseEl) {
        pulseEl.style.animationPlayState = 'running';
      }
    });
  }

  /* =============================================================
     COOKIE CONSENT BANNER
     ============================================================= */
  const COOKIE_STORAGE_KEY = 'darkparticle-cookie-consent';
  const COOKIE_MAX_AGE_DAYS = 180;
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieAcceptBtn = document.getElementById('cookieAccept');
  const cookieRejectBtn = document.getElementById('cookieReject');

  function readCookieConsent() {
    try {
      const raw = window.localStorage.getItem(COOKIE_STORAGE_KEY);
      if (!raw) {
        return null;
      }
      const data = JSON.parse(raw);
      if (!data || typeof data.ts !== 'number') {
        return null;
      }
      if (Date.now() - data.ts > COOKIE_MAX_AGE_DAYS * 24 * 60 * 60 * 1000) {
        return null;
      }
      return data;
    } catch (error) {
      return null;
    }
  }

  function hideCookieBanner(value) {
    if (value) {
      try {
        window.localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify({
          value: value,
          ts: Date.now()
        }));
      } catch (error) {
        /* Storage can be unavailable (private mode, file protocol). */
      }
    }

    if (cookieBanner) {
      cookieBanner.hidden = true;
    }
    document.body.classList.remove('cookie-open');
  }

  if (cookieBanner) {
    if (!readCookieConsent()) {
      cookieBanner.hidden = false;
      document.body.classList.add('cookie-open');
    }

    if (cookieAcceptBtn) {
      cookieAcceptBtn.addEventListener('click', function () {
        hideCookieBanner('accepted');
      });
    }

    if (cookieRejectBtn) {
      cookieRejectBtn.addEventListener('click', function () {
        hideCookieBanner('rejected');
      });
    }
  }
})();
