// Function to handle form submission and display alert
function alertSubFunc(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get the email input value
    const emailInput = document.getElementById("email").value;

    window.alert("You have subscribed with the email: " + emailInput);
}

window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", alertSubFunc);
};