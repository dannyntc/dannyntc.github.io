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

	var filterButtons = Array.prototype.slice.call(document.querySelectorAll(".filter-btn"));
	var filterCards = Array.prototype.slice.call(document.querySelectorAll(".filter-card"));

	filterButtons.forEach(function (button) {
		button.addEventListener("click", function () {
			var filter = button.getAttribute("data-filter");
			filterButtons.forEach(function (item) {
				item.classList.toggle("active", item === button);
			});
			filterCards.forEach(function (card) {
				var tags = card.getAttribute("data-tags") || "";
				card.classList.toggle("is-hidden", filter !== "all" && tags.indexOf(filter) === -1);
			});
		});
	});

	Array.prototype.slice.call(document.querySelectorAll("[data-toggle-details]")).forEach(function (button) {
		button.addEventListener("click", function () {
			var details = button.nextElementSibling;
			if (!details) return;
			var collapsed = details.classList.toggle("is-collapsed");
			button.textContent = collapsed ? "Show details" : "Hide details";
		});
	});

	var roleButtons = Array.prototype.slice.call(document.querySelectorAll("[data-role-target]"));
	var rolePanels = Array.prototype.slice.call(document.querySelectorAll("[data-role-panel]"));
	roleButtons.forEach(function (button) {
		button.addEventListener("click", function () {
			var target = button.getAttribute("data-role-target");
			roleButtons.forEach(function (item) {
				item.classList.toggle("active", item === button);
			});
			rolePanels.forEach(function (panel) {
				panel.classList.toggle("active", panel.getAttribute("data-role-panel") === target);
			});
		});
	});

	function applyProofHash() {
		var filter = window.location.hash.replace("#", "");
		if (!filter) return;
		var matchingFilter = document.querySelector(".filter-btn[data-filter=\"" + filter + "\"]");
		if (matchingFilter) {
			matchingFilter.click();
			var experienceSection = document.getElementById("experience");
			if (experienceSection) {
				window.setTimeout(function () {
					experienceSection.scrollIntoView({ behavior: "smooth", block: "start" });
				}, 80);
			}
		}
	}

	applyProofHash();
	window.addEventListener("hashchange", applyProofHash);

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
