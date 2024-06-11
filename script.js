function showLoginPage() {
    document.getElementById('welcome-page').classList.remove('active');
    document.getElementById('login-form').classList.add('active');
}

function showSignupPage() {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('signup-form').classList.add('active');
}

function requestTac() {
    // Placeholder for TAC request logic
    alert('TAC requested! Check your email.');
}

function loginUser() {
    // Placeholder for login logic
    alert('User logged in!');
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('profile-page').classList.add('active');
}

function signupUser() {
    // Placeholder for signup logic
    alert('User signed up!');
    document.getElementById('signup-form').classList.remove('active');
    document.getElementById('profile-page').classList.add('active');
}

function saveProfile() {
    // Placeholder for saving profile logic
    alert('Profile saved!');
    document.getElementById('profile-page').classList.remove('active');
    document.getElementById('service-list').classList.add('active');
}

function submitServiceRequest() {
    // Placeholder for submitting service request logic
    alert('Service request submitted!');
}

function uploadMedia() {
    // Placeholder for media upload logic
    alert('Media uploaded!');
}

function bookNow(companyName) {
    // Placeholder for booking logic
    alert(`Booking now with ${companyName}`);
}

function getQuote(companyName) {
    // Placeholder for getting quote logic
    alert(`Getting quote from ${companyName}`);
}

function showServiceDetail(serviceName) {
    // Placeholder for showing service detail logic
    alert(`Showing details for ${serviceName}`);
}

function generateQRCode() {
    const qr = new QRious({
        element: document.getElementById('qr-code'),
        value: 'https://example.com/verify',
        size: 150
    });
}

document.addEventListener('DOMContentLoaded', () => {
    generateQRCode();
});
