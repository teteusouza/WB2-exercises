// Make a function to convert Fahrenheit to Celsius
// Make a variable that is whatever number you put in to the input field
// Make a variable that is the result of the formula that includes the number "fahrenheitInput"
// Output that number below the input

function convertTemperature() {
    let celsiusInput = document.getElementById("celsius").value;
    let fahrenheitResult = (celsiusInput * 9/5) + 32;
    document.getElementById("result").innerHTML = celsiusInput + " degrees Celsius is equal to " + fahrenheitResult + " degrees Fahrenheit.";
  }
  
