/* ============================================
   LUME — Lash Lifting & Brow Lamination
   Landing Page JavaScript v2
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Intersection Observer — Reveal Animations ----------
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));


  // ---------- Navigation — Scroll Effect ----------
  const nav = document.getElementById('mainNav');

  const handleNavScroll = () => {
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  // Start with scrolled class since hero is light
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();


  // ---------- Mobile Menu ----------
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuClose = document.getElementById('menuClose');
  const mobileLinks = mobileMenu.querySelectorAll('.mobile-menu__link');

  const openMenu = () => {
    mobileMenu.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  menuToggle.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      closeMenu();
    }
  });


  // ---------- Fixed Mobile CTA ----------
  const mobileCta = document.getElementById('mobileCta');
  const heroSection = document.getElementById('hero');

  const handleMobileCta = () => {
    if (!mobileCta) return;
    const heroBottom = heroSection.getBoundingClientRect().bottom;

    if (heroBottom < 0) {
      mobileCta.classList.add('visible');
    } else {
      mobileCta.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', handleMobileCta, { passive: true });


  // ---------- Smooth Scroll for Anchor Links ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = nav.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });


  // ---------- Procedure Cards Hover ----------
  const procedureCards = document.querySelectorAll('.procedure-card');
  procedureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });


  // ---------- Before/After Card Hover ----------
  const baCards = document.querySelectorAll('.ba-card');
  baCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)';
      card.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });


  // ---------- Testimonial Hover ----------
  const testimonials = document.querySelectorAll('.testimonial');
  testimonials.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateY(-3px)';
      item.style.boxShadow = '0 12px 40px rgba(0,0,0,0.04)';
      item.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateY(0)';
      item.style.boxShadow = 'none';
    });
  });


  // ---------- Console Branding ----------
  console.log(
    '%c✦ Lume %c— Beleza natural, resultado sofisticado.',
    'font-weight: bold; font-size: 14px; color: #B8956A; padding: 8px 0;',
    'font-weight: normal; font-size: 12px; color: #78716C;'
  );

});
