document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("welcome-page").classList.add("active");
});

function showSection(sectionId) {
    document.querySelectorAll("section").forEach(section => section.classList.remove("active"));
    document.getElementById(sectionId).classList.add("active");
}

function requestTac() {
    alert("TAC has been sent to your email.");
}

function loginUser() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const tac = document.getElementById("tac").value;
    
    if (email && password && tac) {
        showSection("user-profile");
        document.getElementById("profile-name").value = "John Doe"; // Example data
        document.getElementById("profile-email").value = email;
        document.getElementById("profile-phone").value = "123456789";
        document.getElementById("profile-address").value = "123 Main St, City, Country";
    } else {
        alert("Please fill in all fields.");
    }
}

function signupUser() {
    alert("Signup successful! Please login.");
    showSection("login-form");
}

function saveProfile() {
    alert("Profile saved successfully!");
}

function submitForm() {
    alert("Service request submitted successfully!");
}

function generateQRCode() {
    const qr = new QRious({
        element: document.getElementById('qrcode'),
        value: 'Your service request has been received.'
    });
}

function showServiceImage() {
    const service = document.getElementById("service").value;
    const serviceImage = document.getElementById("service-image");
    
    const serviceImages = {
        "cleaning": "cleaning-icon.png",
        "maintenance": "maintenance-icon.png",
        "plumbing": "plumbing-icon.png",
        "electrical": "electrical-icon.png",
        "installation": "installation-icon.png",
        "painting": "painting-icon.png",
        "air-conditioning": "air-conditioning-icon.png",
        "grass-cutting": "grass-cutting-icon.png",
        "pest-control": "pest-control-icon.png",
        "other": "other-icon.png"
    };

    serviceImage.src = serviceImages[service] || "";
    serviceImage.style.display = service ? "block" : "none";
}

function showServiceDetails(service) {
    showSection('service-details');
    document.getElementById('service-title').innerText = service.charAt(0).toUpperCase() + service.slice(1) + ' Details';
}

function bookNow(company) {
    alert(`Booking with ${company} confirmed!`);
}

function getQuote(company) {
    alert(`Quote from ${company} requested.`);
}

function sendMessage() {
    const messageText = document.getElementById("message-text").value;
    if (messageText) {
        const message = document.createElement("div");
        message.className = "message";
        message.innerHTML = `<p><strong>You:</strong> ${messageText}</p>`;
        document.getElementById("messages").appendChild(message);
        document.getElementById("message-text").value = "";
    }
}

function makePayment() {
    alert("Payment processed successfully!");
}

function saveReminderSettings() {
    alert("Reminder settings saved successfully!");
}
