// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const postcodeInput = document.querySelector('#postcode').value;
    const postcodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;  // US postcode regex
    const errorMessage = document.querySelector('#postcodeError');

    console.log("Postcode input:", postcodeInput);  // Debugging step

    if (postcodeRegex.test(postcodeInput)) {
        errorMessage.textContent = "";  // Clear error message
        console.log("Valid postcode.");
    } else {
        errorMessage.textContent = "Please enter a valid 5-digit postcode.";
        console.log("Invalid postcode.");
    }
});


document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.add('btn-clicked');
        setTimeout(() => this.classList.remove('btn-clicked'), 300);  // Flash effect for 300ms
    });
});
