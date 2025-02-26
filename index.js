document.addEventListener('DOMContentLoaded', function() {
	var splide = new Splide('.splide', {
		arrows: false,
		autoScroll: {
			pauseOnFocus: true,
			pauseOnHover: true,
			speed: 2,
		},
		autoWidth: true,
		drag: true,
		pagination: false,
		type: 'loop',
	}).mount(window.splide.Extensions);
});