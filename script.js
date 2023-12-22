function validatePhoneNumber() {
    const userInput = document.getElementById('user-input').value;
    const resultsDiv = document.getElementById('results-div');

    // Check if the input is empty
    if (userInput === '') {
      alert('Please provide a phone number');
      return;
    }

    // Use a regular expression to validate the phone number
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
    const isValid = regex.test(userInput);

    // Display the results in the results-div
    if (isValid) {
      resultsDiv.textContent = `Valid US number: ${userInput}`;
    } else {
      resultsDiv.textContent = `Invalid US number: ${userInput}`;
    }
  }

  function clearResults() {
    document.getElementById('results-div').textContent = '';
  }