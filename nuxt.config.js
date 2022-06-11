export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'micakin-todo-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],
  
  
  tailwindcss: {
    jit: false,
    config: {
      // Options
      purge: [
        './pages/**/*.vue',
        './components/**/*.vue',
        './layouts/**/*.vue',
      ],
      darkMode: 'media',

      theme: {
        extend: {
          height: theme => ({
            'screen-30': '30vh',
            'screen-40': '40vh',
            'screen-50': '50vh',
            'screen-60': '60vh',
            'screen-70': '70vh',
            'screen-75': '75vh',
            'screen-80': '80vh',
            'screen-85': '85vh',
            'screen-87': '87vh',
            'screen-90': '90vh',
            'screen-92': '92vh',
            'screen-95': '95vh',
          }),

          letterSpacing: {
            otp: '.65em'
          },

          zIndex: {
            '5': 5,
            '10': 10,
            '15': 15,
            '20': 20,
            '25': 25,
            '30': 30,
            '35': 35,
            '40': 40,
            '45': 45,
            '50': 50,
            '55': 55,
            '60': 60,
            '65': 65,
            '70': 70,
            '75': 75,
            '80': 80,
            '85': 85,
            '90': 90,
            '95': 95,
            '100': 100,
            'auto': 'auto',
          },

          colors: {
            black: '#000000',
            white: '#ffffff',
            red: '#ff130c',
            green: '#0cc232',
            accent1: {
              '50': '#fff8f8',
              '100': '#FFF2EE',
              '200': '#ffd4c6',
              '300': '#ffb398',
              '400': '#ff885f',
              '500': '#FF6631',
            },
            accent2: {
              '100': '#f9f9f9',
              '200': '#d6d6d6',
              '300': '#aaaaaa',
              '400': '#2b2b2b',
              '500': '#230900'
            },
          },

          maxWidth: {
            '8xl': '86rem'
          },

          backgroundImage: theme => ({
            // 'home': "url('./assets/images/img1.jpg')",
          }),

          transitionProperty: {
            'width': 'width',
            'height': 'height'
          },

          display: [
            "group-hover",
            "group-focus",
          ]
        },
      }

    }

  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
