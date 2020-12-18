const inputField = document.getElementById('inputField')
const outputField = document.getElementById('outputField');

inputField.addEventListener("input", (event) => {
  outputField.innerHTML = convertToRoman(event.target.value);
});

function convertToRoman(input) {

  // empty string for result
  let result = '';

  // Arabic and Roman numeral characters
  const arabicNumbers = [1000, 500, 100, 50, 10, 5, 1],
        romanNumbers = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];

  /* Maping arabic numbers with index. Looping over the new array while
  the input is greater then arabic number.*/
  arabicNumbers.map((arabic, i) => {
     while (input >= arabic) {

       /* If the input matches a condition we substract the input with
       the subtractive notation or the numbers from the arabic array.
       With index from .map() we identify The Roman numeral and add it
       to result variable.*/
       if (input === 4) {
          input -= 4;
          result += 'IV';
       } else if (input === 9) {
          input -= 9;
          result += 'IX';
       } else if (input >= 40 && input <= 49) {
          input -= 40;
          result += 'XL';
       } else if (input >= 90 && input <= 99) {
          input -= 90;
          result += 'XC';
       } else if (input >= 400 && input <= 499) {
          input -= 400;
          result += 'CD';
       } else if ( input >= 900 && input <= 999) {
          input -= 900;
          result += 'CM';
       } else {
       input -= arabic;
       result += romanNumbers[i];
       }
     }
  });
  return result;
}
