module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
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
