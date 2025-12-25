document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:your@email.com?subject=Portfolio Contact from ${name}&body=Email: ${email}%0A%0A${message}`;

    window.location.href = mailtoLink;

    document.getElementById("formStatus").textContent =
        "Thank you! Your email client will open to send the message.";
});
