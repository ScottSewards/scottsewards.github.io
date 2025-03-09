document.addEventListener('DOMContentLoaded', function() {
	new Splide('#bottom', {
		arrows: false,
		autoScroll: {
			pauseOnFocus: false,
			pauseOnHover: false,
			speed: 1,
		},
		autoHeight: true,
		direction: 'ttb',
		drag: false,
		gap: '0.5rem',
		height: '100%',
		pagination: false,
		type: 'loop',
	}).mount(window.splide.Extensions);
});