const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Fix: Add parentheses //otherwise your output will fade off!

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = "<span>Please enter a valid height!</span>";
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = "<span>Please enter a valid weight!</span>";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let message = `<span>Your BMI is ${bmi}</span><br>`;

        if (bmi < 18.6) {
            message += "<span>You are underweight!</span>";
        } else if (bmi > 24.9) {
            message += "<span>You are overweight!</span>"; // Fixed message
        } else {
            message += "<span>You are Normal!</span>";
        }

        results.innerHTML = message; // Set final result once
    }
});
