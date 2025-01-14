// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
	link.addEventListener('click', function (event) {
		event.preventDefault();
		const targetId = this.getAttribute('href').substring(1);
		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop - 50, // Adjust for header height
				behavior: 'smooth',
			});
		}
	});
});

// Highlight Active Section in Navigation
window.addEventListener('scroll', () => {
	const scrollPosition = window.scrollY + 60; // Adjust for header height

	sections.forEach((section, index) => {
		if (
			scrollPosition >= section.offsetTop &&
			scrollPosition < section.offsetTop + section.offsetHeight
		) {
			navLinks.forEach(link => link.classList.remove('active'));
			navLinks[index].classList.add('active');
		}
	});
});

// Form Validation and Submission Confirmation
const prayerForm = document.querySelector('form');
prayerForm.addEventListener('submit', function (event) {
	const fullName = document.getElementById('full_name').value.trim();
	const prayerRequest = document.getElementById('prayer_request').value.trim();
	if (!fullName || !prayerRequest) {
		event.preventDefault();
		alert('Please fill out the required fields: Full Name and Prayer Request.');
		return;
	}

	alert('Thank you for your prayer request! Our team will review it soon.');

	prayerForm.reset();
});

// Dynamic Footer Year Update
const footerYear = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footerYear.innerHTML = `&copy; ${currentYear} Calvary Jesus Church. All rights reserved.`;
	
