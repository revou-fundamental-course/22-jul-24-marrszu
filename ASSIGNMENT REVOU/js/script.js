// JavaScript for banner slide
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - slideIndex) * 100}%)`;
    });
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides();

// JavaScript for form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;
    
    if (!name || !email || !destination) {
        alert('Semua field harus diisi!');
        event.preventDefault();
    } else {
        alert('Form berhasil dikirim!');
    }
});
