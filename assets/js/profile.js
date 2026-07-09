(function () {
	"use strict";

	var navToggle = document.querySelector(".nav-toggle");
	var navLinks = document.querySelector(".nav-links");

	if (navToggle && navLinks) {
		navToggle.addEventListener("click", function () {
			var open = navLinks.classList.toggle("is-open");
			navToggle.setAttribute("aria-expanded", String(open));
		});
	}

	var revealItems = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
	if ("IntersectionObserver" in window) {
		var revealObserver = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					revealObserver.unobserve(entry.target);
				}
			});
		}, { threshold: 0.12 });

		revealItems.forEach(function (item) {
			revealObserver.observe(item);
		});
	} else {
		revealItems.forEach(function (item) {
			item.classList.add("is-visible");
		});
	}

	var metricBlocks = Array.prototype.slice.call(document.querySelectorAll("[data-animate-metrics]"));
	function animateMetric(el) {
		var target = Number(el.getAttribute("data-count"));
		if (!target || el.getAttribute("data-done") === "true") return;

		el.setAttribute("data-done", "true");
		var current = 0;
		var steps = 36;
		var increment = target / steps;
		var frame = 0;

		var timer = window.setInterval(function () {
			frame += 1;
			current += increment;
			if (frame >= steps) {
				current = target;
				window.clearInterval(timer);
			}
			el.textContent = Math.round(current).toLocaleString();
		}, 24);
	}

	if ("IntersectionObserver" in window) {
		var metricObserver = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					Array.prototype.slice.call(entry.target.querySelectorAll("[data-count]")).forEach(animateMetric);
					metricObserver.unobserve(entry.target);
				}
			});
		}, { threshold: 0.3 });

		metricBlocks.forEach(function (block) {
			metricObserver.observe(block);
		});
	} else {
		Array.prototype.slice.call(document.querySelectorAll("[data-count]")).forEach(animateMetric);
	}

	Array.prototype.slice.call(document.querySelectorAll("[data-toggle-details]")).forEach(function (button) {
		button.addEventListener("click", function () {
			var details = button.nextElementSibling;
			if (!details) return;
			var collapsed = details.classList.toggle("is-collapsed");
			button.textContent = collapsed ? "Show details" : "Hide details";
		});
	});

	var copiedButton = null;
	var copiedTimer = null;

	function restoreCopiedButton() {
		if (!copiedButton) return;
		copiedButton.innerHTML = copiedButton.getAttribute("data-copy-html") || copiedButton.textContent;
		copiedButton.classList.remove("is-copied");
		copiedButton = null;
		if (copiedTimer) {
			window.clearTimeout(copiedTimer);
			copiedTimer = null;
		}
	}

	Array.prototype.slice.call(document.querySelectorAll("[data-copy]")).forEach(function (button) {
		button.setAttribute("data-copy-html", button.innerHTML);
		button.addEventListener("click", function () {
			var value = button.getAttribute("data-copy");
			if (!value || !navigator.clipboard) return;
			navigator.clipboard.writeText(value).then(function () {
				restoreCopiedButton();
				copiedButton = button;
				button.classList.add("is-copied");
				button.textContent = "Copied";
				copiedTimer = window.setTimeout(function () {
					restoreCopiedButton();
				}, 1400);
			});
		});
	});
})();
