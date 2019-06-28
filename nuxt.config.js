const { CI_PAGES_URL } = process.env
const base = CI_PAGES_URL && new URL(CI_PAGES_URL).pathname

export default {
  mode: 'spa',
  srcDir: 'src/',
  head: {
    title: 'Raphcoin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  modules: ['@nuxtjs/pwa'],
  router: {
    base
  },
  generate: {
    dir: 'public'
  },
  build: {
    extend(config, ctx) {}
  }
}
