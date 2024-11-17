// Toggle show more details
document.getElementById('toggle-details').addEventListener('click', function () {
	    const moreDetails = document.getElementById('more-details');
	    if (moreDetails.style.display === 'none') {
		            moreDetails.style.display = 'block';
		            this.textContent = 'Show Less Details';
		        } else {
				        moreDetails.style.display = 'none';
				        this.textContent = 'Show More Details';
				    }
});

// Handle prayer request form submission
document.getElementById('prayer-form').addEventListener('submit', function (event) {
	    event.preventDefault(); // Prevent form submission
	    const name = document.getElementById('name').value;
	    const phone = document.getElementById('phone').value;
	    const prayerRequest = document.getElementById('prayer').value;
	    const secret = document.querySelector('input[name="secret"]:checked').value;
	    const canCall = document.querySelector('input[name="can_call"]:checked').value;

	    if (name && prayerRequest) {
		    // Here, we can send data to the PHP backend to handle form submission
		            const formData = new FormData();
		            formData.append('name', name);
		            formData.append('phone', phone);
		            formData.append('prayerRequest', prayerRequest);
		            formData.append('secret', secret);
		            formData.append('canCall', canCall);

		            fetch('submit_prayer.php', {
				                method: 'POST',
				                body: formData
				            })
		            .then(response => response.text())
		            .then(data => {
				                document.getElementById('success-message').style.display = 'block';
				                document.getElementById('prayer-form').reset(); // Reset form
			    })
		            .catch(error => {
				                alert('Error submitting prayer request. Please try again later.');
				            });
		        }
});
