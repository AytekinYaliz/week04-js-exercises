/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

function calculateTax(price) {
  return price * 1.01;
}

function calculateCurrency(price, currency) {
  let response = 0;
  if (currency === "dollar") {
    response = price * 2;
  } else {
    response = price / 2;
  }
  return response;
}

function convertToUSD(real) {
  const dollar = calculateCurrency(real, "real");
  const afterTax = calculateTax(dollar);
  return afterTax;

  // return calculateTax(real / 2);  -  Bu üstteki kodların kısa hali
}
function convertToBRL(dollar) {
  //return dollar * 2 * 1.01;
  const real = calculateCurrency(dollar, "dollar");
  const afterTax = calculateTax(real);
  return afterTax;
}

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var price = 12.5;
var priceInUSD = convertToUSD(price);

var priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price in USD: " + priceInUSD);
console.log("Price in BRL: " + priceInBRL);
