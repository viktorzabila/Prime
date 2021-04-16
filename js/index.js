new Swiper('.info-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
		// renderBullet: function(index, className) {
		// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
		// },
	// },

	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1,
	// 	},
	// 	480: {
	// 		slidesPerView: 2,
	// 	}, 
	// 	992: {
	// 		slidesPerView: 3,
	// 	}
	},
});
