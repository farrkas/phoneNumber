//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers) {
  if (numbers.length === 10) {
    const a = numbers.slice(0, 3).join("");
    const b = numbers.slice(3, 6).join("");
    const c = numbers.slice(6).join("");

    const numer = "(" + a + ") " + b + "-" + c;

    console.log(numer);
    return numer;
  } else {
    console.log("wpisz 10 cyfr!");
    return false;
  }
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
