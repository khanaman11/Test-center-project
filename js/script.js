// JavaScript code for accordian display image .

function showImage(imageIndex) {
    const images = document.querySelectorAll('.image-display img');
    images.forEach((img, index) => {
        img.classList.remove('active');
        if (index === imageIndex - 1) {
            img.classList.add('active');
        }
    });
}


// JavaScript for Toggle Card Selection and Custom Message Box .

function toggleCardSelection(cardNumber) {
    const card = document.querySelector(`#checkbox${cardNumber}`).closest('.option-card');
    const checkbox = document.getElementById(`checkbox${cardNumber}`);

    // Toggle the selected state of the card and checkbox
    card.classList.toggle('selected');
    checkbox.checked = !checkbox.checked;
}

function toggleMessageBox() {
    const messageBox = document.querySelector('.custom-message');
    messageBox.style.display = messageBox.style.display === 'none' ? 'block' : 'none';
}