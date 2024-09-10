document.getElementById('calculateBtn').addEventListener('click', function() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;  // Monthly interest rate
    const loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12;  // Total number of payments (months)
  
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
      alert('Please enter valid numbers for all fields.');
      return;
    }
  
    // Calculate monthly payment
    const monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
  
    // Display the result
    document.getElementById('result').textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
  });