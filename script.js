// FORM VALIDATION
const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message");

        if (name === "" || email === "") {
            message.textContent = "Please fill all fields";
        } else {
            message.textContent = "Form submitted successfully!";
        }
    });
}

// DARK MODE TOGGLE
const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// IMAGE SLIDER
const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
];

let index = 0;

function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById("slider").src = images[index];
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("slider").src = images[index];
}