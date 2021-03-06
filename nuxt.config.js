export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jarkol Technologies',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Jarkol' },
      {
        name: 'keywords',
        content:
          'Engineering, Services, Ingeniería, Technology, Tecnología, jarckol, Jarkol Jarcol, pozos, Geotermia'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Más de 15 años de experiencia técnica en operaciones tanto en tierra como en alta mar en la industria petrolera'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: 'Jarkol Technologies'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        property: 'og:url',
        content: 'https://www.jarkol.com/'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: 'https://www.jarkol.com/favicon.png'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        property: 'og:site_name',
        content: 'Jarkol'
      },
      {
        hid: 'og:type',
        name: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content:
          'Más de 15 años de experiencia técnica en operaciones tanto en tierra como en alta mar en la industria petrolera'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800|Montserrat:300,400,700'
      },
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'canonical', href: 'index.html' },
      { rel: 'icon', href: '/favicon.png' },
      { rel: 'apple-touch-icon', href: '/favicon.png' }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-1.10.2.min.js',
        body: true
      },
      { src: 'lib/jquery/jquery.min.js', body: true },
      { src: 'lib/jquery/jquery-migrate.min.js', body: true },
      { src: 'lib/bootstrap/bootstrap.bundle.min.js', body: true },
      { src: 'lib/easing/easing.min.js', body: true },
      { src: 'lib/superfish/hoverIntent.js', body: true },
      { src: 'lib/superfish/superfish.min.js', body: true },
      { src: 'lib/wow/wow.min.js', body: true },
      { src: 'lib/owlcarousel/owl.carousel.min.js', body: true },
      { src: 'lib/magnific-popup/magnific-popup.js', body: true },
      { src: 'lib/sticky/sticky.js', body: true },
      { src: 'translatejs/jquery.translate.js', body: true },
      { src: 'translatejs/main.js', body: true },
      { src: 'https://smtpjs.com/v3/smtp.js', body: true },
      { src: 'js/main.js', body: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/font-awesome.min.css',
    '@/assets/css/animate.min.css',
    '@/assets/css/owl.carousel.min.css',
    '@/assets/css/magnific-popup.css',
    '@/assets/css/ionicons.min.css',
    '@/assets/css/style.css',
    '@/assets/css/estilos.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  telemetry: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
