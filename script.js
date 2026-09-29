// Mobile Navigation Menu

function toggleMenu() {

    const navLinks =
        document.querySelector(".nav-links");

    navLinks.classList.toggle("show");

}


// Close mobile menu when clicking a link

const navItems =
    document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        document
            .querySelector(".nav-links")
            .classList.remove("show");

    });

});


// Contact Form

function submitForm(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "! Your message has been received."
    );

    document
        .getElementById("contactForm")
        .reset();

}


// Resume Button

function showResumeMessage() {

    alert(
        "Resume section is ready. You can replace this button with your actual resume PDF."
    );

}