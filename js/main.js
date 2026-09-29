/* ============================================================
   CVF — Centro Veterinário de Febres
   JavaScript (menu, scroll, animações, formulário, calendário)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- Hamburger menu ---------- */
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    const openMenu = () => {
      navLinks.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.contains('open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Fechar ao clicar num link
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Fechar com a tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        closeMenu();
        hamburger.focus();
      }
    });
  }

  /* ------------------------------------------------------------
     Navegação por âncoras (scroll suave com compensação do header)
     ------------------------------------------------------------ */
  const headerEl = document.querySelector('.header');
  const headerOffset = headerEl ? headerEl.offsetHeight : 0;

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const hash = link.getAttribute('href');
      if (!hash || hash.length < 2) return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
      // Fechar menu mobile se aberto
      if (navLinks && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        hamburger && hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* ------------------------------------------------------------
     Dots de navegação lateral
     ------------------------------------------------------------ */
const dotsContainer = document.querySelector('#scroll-dots');
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  // Rótulos legíveis em PT para os indicadores laterais (acessibilidade)
  const sectionLabels = {
    inicio: 'Início',
    sobre: 'Sobre',
    servicos: 'Serviços',
    equipa: 'Equipa',
    marcacao: 'Marcação',
    contactos: 'Contactos',
    diferencas: 'O que nos diferencia'
  };

  if (dotsContainer && sections.length) {
    sections.forEach((sec) => {
      const id = sec.id;
      const dot = document.createElement('a');
      dot.classList.add('dot');
      dot.href = '#' + id;
      dot.setAttribute('aria-label', sectionLabels[id] || id);
      dot.title = sectionLabels[id] || id;
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        const top = sec.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
      dotsContainer.appendChild(dot);
    });
  }

  const dots = document.querySelectorAll('#scroll-dots .dot');

  function setActive(id) {
    navAnchors.forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
    dots.forEach((d) => {
      d.classList.toggle('active', d.getAttribute('href') === '#' + id);
    });
  }

  /* ------------------------------------------------------------
     Observar a secção visível (destaca menu + dots)
     ------------------------------------------------------------ */
  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((sec) => observer.observe(sec));
  }

/* ------------------------------------------------------------
     Barra de progresso do scroll (transform scaleX — GPU friendly)
     ------------------------------------------------------------ */
  const progressBar = document.querySelector('#scroll-progress');
  if (progressBar) {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? scrolled / total : 0;
      progressBar.style.transform = 'scaleX(' + pct + ')';
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /* ------------------------------------------------------------
     Scroll reveal animations
     ------------------------------------------------------------ */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  /* ------------------------------------------------------------
     Navbar shadow on scroll
     ------------------------------------------------------------ */
  if (headerEl) {
    const onScroll = () => {
      headerEl.style.boxShadow =
        window.scrollY > 10
          ? '0 10px 30px rgba(0,70,73,0.12)'
          : '0 10px 30px rgba(0,70,73,0.08)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

/* ------------------------------------------------------------
     Google Forms embeds (marcação + contacto) — lazy-load
     ------------------------------------------------------------ */
  const formFrames = document.querySelectorAll('iframe[data-src]');
  if (formFrames.length) {
    const loadFrame = (frame) => {
      const src = frame.getAttribute('data-src');
      if (src && frame.getAttribute('src') === 'about:blank') {
        frame.setAttribute('src', src);
      }
    };
    if ('IntersectionObserver' in window) {
      const formObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadFrame(entry.target);
              formObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      formFrames.forEach((frame) => formObserver.observe(frame));
    } else {
      formFrames.forEach((frame) => loadFrame(frame));
    }
  }

/* ------------------------------------------------------------
     Links "Abrir em nova janela" (marcação / contacto)
     ------------------------------------------------------------ */
  const placeholderLinks = document.querySelectorAll('.placeholder-link');
  placeholderLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const src = link.getAttribute('href');
      if (src && src !== '#') {
        window.open(src, '_blank', 'noopener');
      }
    });
  });

  /* ---------- Ano no footer ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
