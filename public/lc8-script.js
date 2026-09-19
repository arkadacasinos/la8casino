// La8casino — custom interactions
// No third-party libraries, pure vanilla JS
(function () {
  'use strict';

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Reveal on scroll using IntersectionObserver
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('lc8-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.lc8-reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  // Mobile nav toggle
  var navToggle = document.querySelector('.lc8-nav-btn');
  var navMenu = document.querySelector('.lc8-nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('lc8-nav-open');
      var expanded = navMenu.classList.contains('lc8-nav-open');
      navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  // FAQ accordion
  document.querySelectorAll('.lc8-faq-item').forEach(function (item) {
    var question = item.querySelector('.lc8-faq-q');
    if (question) {
      question.addEventListener('click', function () {
        var isOpen = item.classList.contains('lc8-faq-active');
        document.querySelectorAll('.lc8-faq-item').forEach(function (other) {
          other.classList.remove('lc8-faq-active');
          var otherAnswer = other.querySelector('.lc8-faq-a');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        });
        if (!isOpen) {
          item.classList.add('lc8-faq-active');
          var answer = item.querySelector('.lc8-faq-a');
          if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  });

  // Lazy load images fallback for older browsers
  if (!('loading' in HTMLImageElement.prototype)) {
    var lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
      var imgObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var img = entry.target;
            if (img.dataset.src) img.src = img.dataset.src;
            imgObserver.unobserve(img);
          }
        });
      });
      lazyImages.forEach(function (img) { imgObserver.observe(img); });
    }
  }
})();
