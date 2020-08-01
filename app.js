const btn_toggle = document.querySelector('.btn_toggle');

btn_toggle.addEventListener('click', () => {
	const navbar_ul = document.querySelector('.collapse_nav');
	const wrapper = document.querySelector('.wrapper');
	navbar_ul.classList.toggle('show');
	wrapper.classList.toggle('show_wrapper');

	const icon_hamburger = document.querySelector('.icon_hamburger');
	const icon_close = document.querySelector('.icon_close');
	icon_close.classList.toggle('show_toggle');
	icon_hamburger.classList.toggle('show_toggle');
});
