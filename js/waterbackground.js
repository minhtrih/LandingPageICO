(function($) {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    Typed.new('#typed', {
      stringsElement: document.getElementById('typed-strings'),
      typeSpeed: 80,
      startDelay: 1000,
      backDelay: 5000,
      loop: true,
      contentType: 'html' // or text
    });
  });

  $('.hero-area-fix').ripples({
    resolution: 356,
    dropRadius: 20,
    perturbance: 0.01
  });
})(jQuery);
