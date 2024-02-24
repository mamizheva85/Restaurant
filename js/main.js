const swiper = new Swiper('.reviews__slider', {
	loop: true,
	pagination: {
		el: '.reviews-pagination',
	}
});

	let btnAnimation = () => {
		const tlOrderBtn = gsap.timeline({ defaults: { duration: .1 }, repeat: -1, repeatDelay: 3 });
		tlOrderBtn.to('.header__button', { rotate: 5 })
			.to('.header__button', { rotate: -5 })
			.to('.header__button', { rotate: 5 })
			.to('.header__button', { rotate: 0 });
		return tlOrderBtn;
	}

	let stepAnimation = () => {
		const tlStep = gsap.timeline({ defaults: { duration: 1 }, repeat: -1, repeatDelay: 2 });
	tlStep
		.to('.advantages__item', { y: -30 })
		.to('.advantages__item', { y: 0, ease: "bounce.out"});
		return tlStep;
	}
	const tl = gsap.timeline({  defaults: { duration: .5 } });
	tl.from('.hero__subtext', { opacity: 0, y: 30 })
		.from('.hero__header', { opacity: 0, y: 30 })
		.from('.hero__suptext', { opacity: 0, y: 30 })
		.from('.hero__button', { opacity: 0, y: 30 })
		.add(btnAnimation);

	let sa = stepAnimation();
	const firstStep = document.querySelector('.advantages__wrapper');
	firstStep.addEventListener('mouseover', () => {
		sa.pause();
	});
	firstStep.addEventListener('mouseleave', () => {
		sa.play();
	})

