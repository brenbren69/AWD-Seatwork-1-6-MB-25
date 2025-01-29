document.querySelector('button').addEventListener('click', function() {
    // Get input values
    const c = parseFloat(document.getElementById('c').value);
    const mt = parseFloat(document.getElementById('mt').value);
    const ph = parseFloat(document.getElementById('ph').value);
    const ja = parseFloat(document.getElementById('ja').value);
    const csa = parseFloat(document.getElementById('csa').value);

    // Check if any of the inputs are invalid (NaN)
    if (isNaN(c) || isNaN(mt) || isNaN(ph) || isNaN(ja) || isNaN(csa)) {
        alert("Please enter valid numbers for all subjects.");
        return;
    }

    // Calculate total and percentage
    const total = c + mt + ph + ja + csa;
    const percentage = (total / 500) * 100;

    // Determine grade based on percentage
    let grade;
    if (percentage >= 90) {
        grade = 'A';
    } else if (percentage >= 80) {
        grade = 'B';
    } else if (percentage >= 70) {
        grade = 'C';
    } else if (percentage >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Display the result
    document.querySelector('.per').textContent = percentage.toFixed(2) + '%';
    document.querySelector('.gra').textContent = grade;
    document.querySelector('.to').textContent = total;
});
