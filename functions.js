// Function to generate pin
function generatePin() {
    const pin = Math.floor(Math.random() * 10000);
    return pin;
}

// Function to get pin with more than 4 digits
function getPin() {
    const pin = generatePin();
    const pinLength = pin + '';

    if (pinLength.length === 4) {
        return pinLength;
    } else {
        return getPin();
    }
}

// Function to set pin
document.getElementById('pin-btn').addEventListener('click', function () {
    const pinField = document.getElementById('pin-field');
    pinField.value = getPin();
})