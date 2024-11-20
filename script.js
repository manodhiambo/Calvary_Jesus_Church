// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
	alert("Welcome to Calvary Jesus Church! We're glad to have you here.");
	const prayerForm = document.querySelector(".contact-form");
	    if (prayerForm) {
		            prayerForm.addEventListener("submit", function (e) {
				                e.preventDefault();
				    const name = document.querySelector("input[name='name']");
				                const prayerRequest = document.querySelector("textarea[name='prayer']");

				                if (!name.value.trim()) {
							                alert("Please provide your full name.");
							                name.focus();
							                return;
							            }

				                if (!prayerRequest.value.trim()) {
							                alert("Please enter a prayer request.");
							                prayerRequest.focus();
							                return;
							            }

				                alert("Thank you for your submission! We'll keep you in our prayers.");
				                prayerForm.reset();
			    });
		        }

	// Scroll to Sections
	const navLinks = document.querySelectorAll("nav a");
	navLinks.forEach((link) => {
		link.addEventListener("click", function (e) {
			e.preventDefault();
			const targetId = this.getAttribute("href").slice(1);
			const targetSection = document.getElementById(targetId);
			if (targetSection) {
				window.scrollTo({
					top: targetSection.offsetTop - 50,
					behavior: "smooth",
					                });
				            }
			        });
		    });

	// Gallery Image Click Effect
	const galleryImages = document.querySelectorAll(".gallery img");
	galleryImages.forEach((img) => {
		img.addEventListener("click", function () {
			const imageUrl = img.getAttribute("src");
			window.open(imageUrl, "_blank");
		});
		    });
});
