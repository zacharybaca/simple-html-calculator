/* Global Variables */
let addResultSpan = document.getElementById('add-result');
let subtractResultSpan = document.getElementById('subtract-result');
let multiplyResultSpan = document.getElementById('multiply-result');


// Add Event Listener on Add Calculation Form
// To Get Input Values
document.addCalculation.addEventListener("submit", (e) => {
    e.preventDefault();

    // First Number Input Value
    const firstNum = document.addCalculation.firstNumberAdd.value;

    // Second Number Input Value
    const secondNum = document.addCalculation.secondNumberAdd.value;

    // Assign a Variable to the Result of Adding the Two Numbers
    // Convert firstNum and secondNum to be Numbers
    const result = Number(firstNum) + Number(secondNum);

    // Inject Value of Result Into Span
    addResultSpan.innerText = result;

    // Clear Input Fields
    document.addCalculation.firstNumberAdd.value = '';
    document.addCalculation.secondNumberAdd.value = '';
})

// Add Event Listener on Subtract Calculation Form
// To Get Input Values
document.subtractCalculation.addEventListener("submit", (e) => {
  e.preventDefault();

  // First Number Input Value
  const firstNum = document.subtractCalculation.firstNumberSubtract.value;

  // Second Number Input Value
  const secondNum = document.subtractCalculation.secondNumberSubtract.value;

  // Assign a Variable to the Result of Adding the Two Numbers
  // Convert firstNum and secondNum to be Numbers
  const result = Number(firstNum) - Number(secondNum);

  // Inject Value of Result Into Span
  subtractResultSpan.innerText = result;

  // Clear Input Fields
  document.subtractCalculation.firstNumberSubtract.value = '';
  document.subtractCalculation.secondNumberSubtract.value = '';
})

// Add Event Listener on Multiply Calculation Form
// To Get Input Values
document.multiplyCalculation.addEventListener("submit", (e) => {
  e.preventDefault();

  // First Number Input Value
  const firstNum = document.multiplyCalculation.firstNumberMultiply.value;

  // Second Number Input Value
  const secondNum = document.multiplyCalculation.secondNumberMultiply.value;

  // Assign a Variable to the Result of Adding the Two Numbers
  // Convert firstNum and secondNum to be Numbers
  const result = Number(firstNum) * Number(secondNum);

  // Inject Value of Result Into Span
  multiplyResultSpan.innerText = result;

  // Clear Input Fields
  document.multiplyCalculation.firstNumberMultiply.value = '';
  document.multiplyCalculation.secondNumberMultiply.value = '';
})
