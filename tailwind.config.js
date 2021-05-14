module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.js', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				starYellow: '#FFE81F',
				starBlack: '#282C34'
			},
			transitionTimingFunction: {
				cubic: 'cubic-bezier(.175,.885,.32,1.275)'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
