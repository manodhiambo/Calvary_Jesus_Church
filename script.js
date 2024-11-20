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

// Form validation for prayer request form
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
	const fullName = document.getElementById('full_name').value.trim();
	const prayerRequest = document.getElementById('prayer_request').value.trim();
	    
	    // Check if both full name and prayer request are filled
	 if (!fullName || !prayerRequest) {
		         e.preventDefault();
		 alert('Please fill in your full name and prayer request.');
		     }
	else {
		// If form is valid, allow submission and refresh page afterward
		setTimeout(() => {
			location.reload();
		}, 500);
	}
});

//Auto-hide the mobile navigation when a link is clicked
document.querySelectorAll('nav a').forEach(anchor => {
	anchor.addEventListener('click', () => {
		if (navLinks.classList.contains('active')) {
			navLinks.classList.remove('active')
		});
});
