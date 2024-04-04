document.addEventListener('DOMContentLoaded', function() {
    const addressForm = document.getElementById('addressForm');

    addressForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const addressLine = document.getElementById('addressLine').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const zipCode = document.getElementById('zipCode').value;

        // Validate the form fields
        if (fullName.trim() === '' || addressLine.trim() === '' || city.trim() === '' || state.trim() === '' || zipCode.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Proceed with submitting the address
        submitAddress(fullName, addressLine, city, state, zipCode);
    });

    function submitAddress(fullName, addressLine, city, state, zipCode) {
        // Perform actions to submit the address, such as sending it to the server
        console.log('Full Name:', fullName);
        console.log('Address Line:', addressLine);
        console.log('City:', city);
        console.log('State:', state);
        console.log('Zip Code:', zipCode);

        // After successful submission, you can redirect the user to the next step
        window.location.href = '/orderplaced.html';
    }
});
