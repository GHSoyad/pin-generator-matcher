// Add keypad button event listener
document.getElementById('keypad').addEventListener('click', function (event) {
    let button = event.target.innerText;
    const pinInputField = document.getElementById('pin-input');

    if (event.target.classList.contains('button')) {
        if (button == 'C') {
            pinInputField.value = '';
        } else if (button == '<') {
            let pin = pinInputField.value.split('');
            pin.pop();
            let join = pin.join('');

            pinInputField.value = join;
        }
        else {
            pinInputField.value += button;
        }
    }
})

// Add submit button event listener
document.getElementById('submit-btn').addEventListener('click', function () {
    const pinField = document.getElementById('pin-field');
    const pinInputField = document.getElementById('pin-input');
    const tryLeft = document.getElementById('try-left');
    let tryLeftValue = parseInt(tryLeft.innerText);

    if (pinField.value == '') {
        return alert('Generate pin first!!')
    }

    if (pinInputField.value == '') {
        return alert('Enter pin first!!');
    }

    if (tryLeftValue == 0) {
        return alert('You have failed too many times. Everything inside secret door is destroyed!!')
    }

    const success = document.getElementById('notify-success');
    const failed = document.getElementById('notify-failed');
    const destroy = document.getElementById('notify-destroy');

    if (pinField.value == pinInputField.value) {
        success.style.display = 'block';
        failed.style.display = 'none';
        destroy.style.display = 'none';
    }
    else if (tryLeftValue > 1) {
        success.style.display = 'none';
        failed.style.display = 'block';
        destroy.style.display = 'none';

        tryLeftValue--;
        tryLeft.innerText = tryLeftValue;
    }
    else {
        success.style.display = 'none';
        failed.style.display = 'none';
        destroy.style.display = 'block';

        tryLeftValue--;
        tryLeft.innerText = tryLeftValue;
    }
})