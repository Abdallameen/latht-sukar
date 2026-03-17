    (function() {
      // smooth scroll
      document.querySelectorAll('.smooth, .nav-menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if(targetId && targetId !== '#') {
            const targetEl = document.querySelector(targetId);
            if(targetEl) {
              targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        });
      });

      // loader
      window.addEventListener('load', function() {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => { loader.style.visibility = 'hidden'; }, 600);
      });

      // mobile menu toggle
      const toggle = document.getElementById('menuToggle');
      const navMenu = document.getElementById('navMenu');
      toggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });

      // close mobile menu on link click
      navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
        });
      });

      // LIGHTBOX
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      const closeLightbox = document.querySelector('.close-lightbox');

      document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', e => {
          lightbox.classList.add('active');
          lightboxImg.src = img.src;
        });
      });

      closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
      });

      lightbox.addEventListener('click', (e) => {
        if(e.target === lightbox) lightbox.classList.remove('active');
      });

      // sticky header
      const header = document.querySelector('.sticky-header');
      window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
          header.style.background = 'rgba(250, 240, 230, 0.95)';
        } else {
          header.style.background = 'rgba(250, 240, 230, 0.85)';
        }
      });

      // BILINGUAL TOGGLE
      const langEn = document.getElementById('langEn');
      const langAr = document.getElementById('langAr');
      const body = document.body;
      
      // elements with data-en and data-ar
      const elementsToTranslate = document.querySelectorAll('[data-en]');

      function setLanguage(lang) {
        if (lang === 'ar') {
          body.classList.add('rtl');
          langEn.classList.remove('active');
          langAr.classList.add('active');
        } else {
          body.classList.remove('rtl');
          langAr.classList.remove('active');
          langEn.classList.add('active');
        }

        elementsToTranslate.forEach(el => {
          const enText = el.getAttribute('data-en');
          const arText = el.getAttribute('data-ar');
          if (lang === 'ar' && arText) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'BUTTON') {
              el.value = arText;
            } else {
              el.textContent = arText;
            }
          } else if (lang === 'en' && enText) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'BUTTON') {
              el.value = enText;
            } else {
              el.textContent = enText;
            }
          }
        });
      }


        window.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('securityModal');
    const closeBtn = document.querySelector('.close-modal');

    // إظهار الرسالة بعد ثانية من الدخول
    setTimeout(() => {
        // نتحقق إذا كان العميل قد أغلق الرسالة سابقاً في نفس الجلسة
        if (!sessionStorage.getItem('modalDismissed')) {
            modal.style.display = 'block';
        }
    }, 1000);

    closeBtn.onclick = () => {
        modal.style.display = 'none';
        sessionStorage.setItem('modalDismissed', 'true');
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            sessionStorage.setItem('modalDismissed', 'true');
        }
    };
});

      langEn.addEventListener('click', () => setLanguage('en'));
      langAr.addEventListener('click', () => setLanguage('ar'));

      // initial language: English
      setLanguage('en');
    })();
