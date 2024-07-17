// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/content", "@nuxt/image", '@pinia/nuxt',],
  app: {
    head: {
      link: [
        // Default stylesheets
        { rel: 'stylesheet', href: '/lib/bootstrap/dist/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Volkhov:400i' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800' },
        // Template specific stylesheets
        { rel: 'stylesheet', href: '/lib/animate.css/animate.css' },
        { rel: 'stylesheet', href: '/lib/components-font-awesome/css/font-awesome.min.css' },
        { rel: 'stylesheet', href: '/lib/et-line-font/et-line-font.css' },
        { rel: 'stylesheet', href: '/lib/flexslider/flexslider.css' },
        { rel: 'stylesheet', href: '/lib/owl.carousel/dist/assets/owl.carousel.min.css' },
        { rel: 'stylesheet', href: '/lib/owl.carousel/dist/assets/owl.theme.default.min.css' },
        { rel: 'stylesheet', href: '/lib/magnific-popup/dist/magnific-popup.css' },
        { rel: 'stylesheet', href: '/lib/simple-text-rotator/simpletextrotator.css' },
        // Main stylesheet and color file
        { rel: 'stylesheet', href: '/css/style.css' },
        { id: 'color-scheme', rel: 'stylesheet', href: '/css/colors/default.css' },
      ],
      script: [
        { src: '/lib/jquery/dist/jquery.js', tagPosition: 'bodyClose' },
        { src: '/lib/bootstrap/dist/js/bootstrap.min.js', tagPosition: 'bodyClose' },
        { src: '/lib/wow/dist/wow.js', tagPosition: 'bodyClose' },
        { src: '/lib/jquery.mb.ytplayer/dist/jquery.mb.YTPlayer.js', tagPosition: 'bodyClose' },
        { src: '/lib/isotope/dist/isotope.pkgd.js', tagPosition: 'bodyClose' },
        { src: '/lib/imagesloaded/imagesloaded.pkgd.js', tagPosition: 'bodyClose' },
        { src: '/lib/flexslider/jquery.flexslider.js', tagPosition: 'bodyClose' },
        { src: '/lib/owl.carousel/dist/owl.carousel.min.js', tagPosition: 'bodyClose' },
        { src: '/lib/smoothscroll.js', tagPosition: 'bodyClose' },
        { src: '/lib/magnific-popup/dist/jquery.magnific-popup.js', tagPosition: 'bodyClose' },
        { src: '/lib/simple-text-rotator/jquery.simple-text-rotator.min.js', tagPosition: 'bodyClose' },
        { async:'', defer: '',  src:'https://maps.googleapis.com/maps/api/js?key=AIzaSyDK2Axt8xiFYMBMDwwG1XzBQvEbYpzCvFU', tagPosition: 'bodyClose' },
        { src: '/js/plugins.js', tagPosition: 'bodyClose' },
        { src: '/js/main.js', tagPosition: 'bodyClose' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3055/v1/api/',
    }
  },
})