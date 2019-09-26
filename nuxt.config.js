module.exports = {
	mode: 'universal',
	/*
	 ** Headers of the page
	 */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
			}
		]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },
	/*
	 ** Global CSS
	 */
	css: [
		'element-ui/lib/theme-chalk/index.css',
		'~assets/css/normailze.css',
		'~assets/css/main.css'
	],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: ['@/plugins/element-ui', '@/plugins/iview'],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [],
	/*
	 ** Nuxt.js modules
	 */
	modules: [],
	/*
	 ** Build configuration
	 */
	build: {
		transpile: [/^element-ui/],
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {},
		loaders: [
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				loader: 'url-loader',
				query: {
					limit: 10000,
					name: 'img/[name].[hash].[ext]'
				}
			}
		],
		/*
		 ** Run ESLint on save
		 */
		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	}
}
