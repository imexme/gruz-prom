/* ProWork — Scroll animations */
(function () {
	'use strict';

	function tag(el, animClass, delay) {
		el.classList.add(animClass);
		if (delay) el.style.transitionDelay = delay;
	}

	function initAnimations() {
		/* ── Tagline section ──────────────────────
		   "Услуги грузчиков..." → slide up + fade  */
		var tagline = document.querySelector('.pw-tagline-text');
		if (tagline) tag(tagline, 'pw-anim-slide-up');

		var taglineSub = document.querySelector('.pw-tagline-sub');
		if (taglineSub) tag(taglineSub, 'pw-anim-fade', '0.3s');

		/* ── Image cards — each flips in on Y axis with stagger */
		document.querySelectorAll('.pw-nav-card-img').forEach(function (el, i) {
			tag(el, 'pw-anim-flip-y');
			el.style.transitionDelay = (i * 0.12) + 's';
		});

		/* ── WHY US heading — slide from left */
		document.querySelectorAll('.pw-animate-section h2, .pw-animate-section .pw-why-heading').forEach(function (el) {
			tag(el, 'pw-anim-slide-left');
		});

		/* ── WHY US items — alternating styles */
		var whyItems = document.querySelectorAll('.pw-why-item, .pw-animate-section .wp-block-column');
		var whyAnims = ['pw-anim-slide-up', 'pw-anim-flip-x', 'pw-anim-slide-right', 'pw-anim-zoom'];
		whyItems.forEach(function (el, i) {
			tag(el, whyAnims[i % whyAnims.length]);
			el.style.transitionDelay = (0.1 + i * 0.12) + 's';
		});

		/* ── CTA heading — flip on X (drops in from top) */
		var ctaHeading = document.querySelector('.pw-cta-heading');
		if (ctaHeading) tag(ctaHeading, 'pw-anim-flip-x');

		/* ── CTA subtext — fade */
		var ctaSub = document.querySelector('.pw-cta-sub');
		if (ctaSub) tag(ctaSub, 'pw-anim-fade', '0.25s');

		/* ── CTA button — zoom in */
		document.querySelectorAll('.pw-cta-inner .wp-block-button').forEach(function (el) {
			tag(el, 'pw-anim-zoom', '0.4s');
		});

		/* ── Other cards on inner pages */
		document.querySelectorAll('.pw-card').forEach(function (el, i) {
			tag(el, 'pw-anim-slide-up');
			el.style.transitionDelay = (i * 0.1) + 's';
		});
		document.querySelectorAll('.pw-review-card').forEach(function (el, i) {
			tag(el, i % 2 === 0 ? 'pw-anim-slide-left' : 'pw-anim-slide-right');
			el.style.transitionDelay = (i * 0.1) + 's';
		});
		document.querySelectorAll('.pw-price-card').forEach(function (el, i) {
			tag(el, 'pw-anim-flip-y');
			el.style.transitionDelay = (i * 0.15) + 's';
		});
		document.querySelectorAll('.pw-benefit-card').forEach(function (el, i) {
			tag(el, 'pw-anim-slide-up');
			el.style.transitionDelay = (i * 0.1) + 's';
		});
		document.querySelectorAll('.pw-step').forEach(function (el, i) {
			tag(el, 'pw-anim-zoom');
			el.style.transitionDelay = (i * 0.15) + 's';
		});

		/* ── Observer: triggers on scroll both ways */
		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
				} else {
					/* reverse — remove class so it re-animates on scroll back */
					entry.target.classList.remove('is-visible');
				}
			});
		}, {
			threshold: 0.12,
			rootMargin: '0px 0px -30px 0px'
		});

		var allAnimated = document.querySelectorAll(
			'.pw-anim-slide-up, .pw-anim-slide-left, .pw-anim-slide-right, ' +
			'.pw-anim-fade, .pw-anim-flip-y, .pw-anim-flip-x, .pw-anim-zoom, ' +
			'.pw-slide-up, .pw-slide-left, .pw-slide-right'
		);
		allAnimated.forEach(function (el) { observer.observe(el); });
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initAnimations);
	} else {
		initAnimations();
	}
})();
