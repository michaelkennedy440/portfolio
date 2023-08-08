document.addEventListener("DOMContentLoaded", function () {
    var contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (event) {
        var nameInput = document.getElementById("name");
        var emailInput = document.getElementById("email");
        var messageInput = document.getElementById("message");
        var isValid = true;

        if (nameInput.value.trim() === "") {
            isValid = false;
            alert("Please enter your name.");
        }

        if (emailInput.value.trim() === "") {
            isValid = false;
            alert("Please enter your email.");
        }

        if (messageInput.value.trim() === "") {
            isValid = false;
            alert("Please enter a message.");
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
                            