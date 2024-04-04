// Function to retrieve user profile information from session storage
function getUserProfile() {
    const userName = sessionStorage.getItem('userName');
    const userEmail = sessionStorage.getItem('userEmail');
    const userPassword = sessionStorage.getItem('userPassword');

    // Display user profile information on the page
    document.getElementById('userName').textContent = userName;
    document.getElementById('userEmail').textContent = userEmail;
    document.getElementById('userPassword').textContent = userPassword;
    // Add more fields as needed
}

// Call getUserProfile when the page is loaded
window.onload = function() {
    getUserProfile();
};
