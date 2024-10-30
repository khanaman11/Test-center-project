
// script code for contact section .

function toggleCard(card) {
    // Get the checkbox within the clicked card
    const checkbox = card.querySelector('input[type="checkbox"]');

    // Deselect all checkboxes
    document.querySelectorAll('.contact-form input[type="checkbox"]').forEach(cb => cb.checked = false);

    // Select the clicked checkbox
    if (checkbox) {
        checkbox.checked = true;
    }
}

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Check if any checkbox is selected
    const isCardSelected = Array.from(document.querySelectorAll('.contact-form input[type="checkbox"]')).some(checkbox => checkbox.checked);

    if (!name || !email || !mobile) {
        alert('Please fill in all fields.');
        return;
    }

    if (!isCardSelected) {
        alert('Please select at least one card.');
        return;
    }

    alert('Form submitted successfully!');
    document.getElementById('contactForm').reset();
}

function sendMessage() {
    const message = document.getElementById('messageText').value;

    if (!message) {
        alert('Please type a message before sending.');
        return;
    }

    alert('Message sent successfully!');
    const messageModal = bootstrap.Modal.getInstance(document.getElementById('messageModal'));
    if (messageModal) {
        messageModal.hide();
    }
    document.getElementById('messageText').value = '';
}




// JavaScript code for accordian display image .

function showImage(imageIndex) {
    const images = document.querySelectorAll('.image-display img');
    images.forEach((img, index) => {
        img.classList.remove('active');
        if (index === imageIndex - 1) {
            img.classList.add('active');
        }
    });
};

