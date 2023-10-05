const exchangeRate = document.getElementById('selectionBox');
let dollarRate = document.getElementById('dollarRate'); 
let toCurrencySelect = document.getElementById('toCurrency');

const rates = {
    USD: 0.0017,
    GBP: 0.0013,
    EUR: 0.0022
};

window.addEventListener('DOMContentLoaded', function (e) {
    dollarRate.innerHTML = `1 USD($) = # ${exchangeRate.value} (@ Central Bank of Nigeria Rate)`;
});

exchangeRate.addEventListener('change', function (e) {
    console.log(e.target.value);
    dollarRate.innerHTML = `1 USD($) = # ${e.target.value} (@ Central Bank of Nigeria Rate)`;
    calculateConversion(); 
});

const amountInput = document.getElementById('textInput');
const resultInput = document.getElementById('result');

amountInput.addEventListener('input', calculateConversion);
toCurrencySelect.addEventListener('change', calculateConversion);

function calculateConversion() {
    const amount = parseFloat(amountInput.value);
    const toCurrency = toCurrencySelect.value;

    if (!isNaN(amount) && rates[toCurrency]) {
        const convertedAmount = amount * rates[toCurrency];
        resultInput.value = convertedAmount.toFixed(4);
    } else {
        resultInput.value = 'Invalid input';
    }
}