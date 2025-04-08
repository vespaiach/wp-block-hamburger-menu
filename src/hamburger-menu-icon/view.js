document.addEventListener("DOMContentLoaded", function () {
	document
		.querySelector("button.wp-block-create-block-hamburger-menu-icon")
		.addEventListener("click", function (event) {
			event.preventDefault();
			this.classList.toggle("open");
		});
});
