// listen for submit
document.getElementById('loan-form').addEventListener('submit', function (e) {
  //hide result
  document.getElementById('results').style.display = 'none';

  //show loading
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculatorResults, 1000);

  e.preventDefault();
});

//Calculator Results
function calculatorResults() {
  // UI variable
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const year = document.getElementById('year');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  //Comput monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  // check if it is finite number
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    //show result
    document.getElementById('results').style.display = 'block';

    //hide loading
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please enter your numbers correctly!')
  }
}

//Show Error
function showError(error) {
  //hide result
  document.getElementById('results').style.display = 'none';

  //hide loading
  document.getElementById('loading').style.display = 'none';

  //create div
  const errorDiv = document.createElement('div');

  //Get Elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  //Add class
  errorDiv.className = 'alert alert-danger';

  //creat text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  //Insert Error Above Heading
  card.insertBefore(errorDiv, heading);

  //clear error after 3seconds
  setTimeout(clearError, 3000);
}

//clear Error
function clearError() {
  document.querySelector('.alert').remove();
}