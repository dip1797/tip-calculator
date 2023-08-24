// index.js
function updateTipPercentage(value) {
    document.getElementById('tipPercentageValue').textContent = value + '%';
}

function updateNumOfPerson(value) {
    document.getElementById('numOfPersonValue').textContent = value;
}

function count() {
    var bill = Number(document.getElementById('bill').value);
    var tipPercentage = Number(document.getElementById('tip').value);
    var numOfPerson = Number(document.getElementById('person').value);
    if (isNaN(bill) || isNaN(tipPercentage) || isNaN(numOfPerson) || numOfPerson === 0) {
        document.getElementById('error').textContent = "Please enter valid numbers.";
    }

    var tipAmount = (bill * tipPercentage) / 100;
    var totalBill = bill + tipAmount;
    var perPersonTotal = totalBill / numOfPerson;

    document.getElementById('total').textContent = totalBill.toFixed(2);
    document.getElementById('perPeople').textContent = perPersonTotal.toFixed(2);
    document.getElementById('tipCount').textContent=tipAmount.toFixed(2);
}
function resetApp() {
    // Clear input values
    document.getElementById('bill').value = '';
    document.getElementById('tip').value = 5; // Reset to default value
    document.getElementById('person').value = 0; // Reset to default value

    // Clear results
    document.getElementById('total').textContent = '';
    document.getElementById('perPeople').textContent = '';
    document.getElementById('error').textContent = ''; // Clear any previous error message

    // Reset dynamic value displays
    document.getElementById('tipPercentageValue').textContent = '5%';
    document.getElementById('numOfPersonValue').textContent = '0';
}
