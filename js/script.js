
// script code for contact section .

function toggleCard(card) {
  // Get the checkbox within the clicked card
  const checkbox = card.querySelector('input[type="checkbox"]');

  // Deselect all checkboxes and remove the border
  document.querySelectorAll('.contact-form .card').forEach(c => {
    const cb = c.querySelector('input[type="checkbox"]');
    if (cb) cb.checked = false;
    c.classList.remove('selected-card');
  });

  // Select the clicked checkbox and add border
  if (checkbox) {
    checkbox.checked = true;
    card.classList.add('selected-card');
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


// FAQ section script - start
document.querySelectorAll('.new-faq-accordion').forEach(accordionContainer => {
    const headers = accordionContainer.querySelectorAll('.accordion-header');
  
    headers.forEach(button => {
      button.addEventListener('click', () => {
        // Close other accordion contents within the same container
        headers.forEach(header => {
          if (header !== button) {
            header.classList.remove('active');
            header.nextElementSibling.style.display = 'none';
          }
        });
  
        // Toggle the clicked accordion content
        const content = button.nextElementSibling;
        if (button.classList.contains('active')) {
          button.classList.remove('active');
          content.style.display = 'none';
        } else {
          button.classList.add('active');
          content.style.display = 'block';
        }
      });
    });
  });
  // FAQ section script - end
  // Select all tab buttons and content divs
const tabButtons = document.querySelectorAll(".tabButton");
const tabContents = document.querySelectorAll(".tabContent");

// Add click event listener to each button
tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // Remove 'show' class from all content divs to hide them
        tabContents.forEach(content => content.classList.remove("show"));
        tabButtons.forEach(content => content.classList.remove("active"));

        // Add 'show' class to the clicked tab's corresponding content
        tabContents[index].classList.add("show");
        tabButtons[index].classList.add("active");
    });
});
