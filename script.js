// Smooth scrolling for anchor links
document.querySelectorAll('nav a').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const targetId = this.getAttribute('href').substring(1);
		const targetElement = document.getElementById(targetId);


		// Scroll smoothly to the target element
		targetElement.scrollIntoView({
			            behavior: 'smooth',
			            block: 'start'
			        });
		    });
});

// Mobile navigation toggle (responsive navigation menu)
const menuToggle = document.createElement('button');
menuToggle.textContent = '☰';
menuToggle.classList.add('menu-toggle');
document.querySelector('header').appendChild(menuToggle);

const navLinks = document.querySelector('nav');

// When the menu toggle is clicked, toggle the visibility of the nav links
menuToggle.addEventListener('click', () => {
	    navLinks.classList.toggle('active');
});

// Form validation for the prayer request form
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
	const fullName = document.getElementById('full_name').value.trim();
	const prayerRequest = document.getElementById('prayer_request').value.trim();

	// Check if both full name and prayer request are filled
	 if (!fullName || !prayerRequest) {
		         e.preventDefault();
		         alert('Please fill in your full name and prayer request.');
		     } else {
			     // Allow submission and redirect back to the homepage after submission
			     setTimeout(() => {
				     window.location.href = 'index.html';
			     }, 500);
		     }
});

// Auto-hide the mobile navigation when a link is clicked
document.querySelectorAll('nav a').forEach(anchor => {
	anchor.addEventListener('click', () => {
		if (navLinks.classList.contains('active')) {
			navLinks.classList.remove('active');
				            }
		        });
});

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
	    alert("Welcome to Calvary Jesus Church! We're glad to have you here.");

	// Additional form validation and submission message
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

	// Gallery Image Click Effect
	const galleryImages = document.querySelectorAll(".gallery img");
	galleryImages.forEach((img) => {
		img.addEventListener("click", function () {
			const imageUrl = img.getAttribute("src");
			window.open(imageUrl, "_blank");
		});
	});
});
