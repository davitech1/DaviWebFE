export default {
  devtools: {
    enabled: true
  },

  css: [
    '~/assets/lib/bootstrap/dist/css/bootstrap.min.css',
    '~/assets/lib/animate.css/animate.css',
    '~/assets/lib/components-font-awesome/css/font-awesome.min.css',
    '~/assets/lib/et-line-font/et-line-font.css',
    '~/assets/lib/flexslider/flexslider.css',
    '~/assets/lib/owl.carousel/dist/assets/owl.carousel.min.css',
    '~/assets/lib/owl.carousel/dist/assets/owl.theme.default.min.css',
    '~/assets/lib/magnific-popup/dist/magnific-popup.css',
    '~/assets/lib/simple-text-rotator/simpletextrotator.css',
    '~/assets/css/style.css',
  ],

  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Volkhov:400i' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800' },
      ],
    }
  },

  plugins: [
    { src: '~/plugins/scripts.js', mode: 'client' }
  ],

  modules: ["@nuxt/image"]
};