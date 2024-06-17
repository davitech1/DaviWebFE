// plugins/scripts.js
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  if (process.client) {
    const scripts = [
      '/lib/jquery/dist/jquery.js',
      '/lib/bootstrap/dist/js/bootstrap.min.js',
      '/lib/wow/dist/wow.js',
      '/lib/jquery.mb.ytplayer/dist/jquery.mb.YTPlayer.js',
      '/lib/isotope/dist/isotope.pkgd.js',
      '/lib/imagesloaded/imagesloaded.pkgd.js',
      '/lib/flexslider/jquery.flexslider.js',
      '/lib/owl.carousel/dist/owl.carousel.min.js',
      '/lib/smoothscroll.js',
      '/lib/magnific-popup/dist/jquery.magnific-popup.js',
      '/lib/simple-text-rotator/jquery.simple-text-rotator.min.js',
      '/js/plugins.js',
      '/js/main.js',
    ];

    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
    });
  }
});
