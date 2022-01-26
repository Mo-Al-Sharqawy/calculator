let num1 = document.getElementById("num1-el");
let num2 = document.getElementById("num2-el");
let sumEl = document.getElementById("sum-el");
let sumEl2 = document.getElementById("sum-el2");

function add() {
  sumEl.textContent = "sum: ";
  sumEl2.textContent = Number(num1.value) + Number(num2.value);
}
function subtract() {
  sumEl.textContent = "subtraction: ";
  sumEl2.textContent = Number(num1.value) - Number(num2.value);
}
function divide() {
  sumEl.textContent = "division: ";
  sumEl2.textContent = Number(num1.value) / Number(num2.value);
}
function multiply() {
  sumEl.textContent = "maultiplication: ";
  sumEl2.textContent = Number(num1.value) * Number(num2.value);
}
