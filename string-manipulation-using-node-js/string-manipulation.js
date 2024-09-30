//this is a function to covert a string to uppercase
//and also i have add a truncate if longer than 10 characters
function convertString(inputString) {
    // here iam converting the string to uppercase
    let upperCasedString = inputString.toUpperCase();
    // here iam checking if the string is longer than 10 characters
    if (upperCasedString.length > 10) 
    {
      upperCasedString += ' (truncated)';
    }
  
    // we will return the modified string
    return upperCasedString;
  }
  
  // Example usage:
  const result1 = convertString('hello world');
  const result2 = convertString('javascript');
  
  // Print out the results
  console.log(result1);
  console.log(result2); 
