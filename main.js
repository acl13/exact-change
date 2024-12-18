import dispenseDollars from "./dispenseDollars.js";
import dispenseCents from "./dispenseCents.js";

const amount = document.getElementById("amount");
const displayChangeBtn = document.getElementById("display-change");
const clearBtn = document.getElementById("clear");

displayChangeBtn.addEventListener("click", () => {
  amount.value = Math.round(amount.value * 100) / 100;
  dispenseChange(amount.value);
});
clearBtn.addEventListener("click", () => {
  document.querySelector("#bills").replaceChildren();
  document.querySelector("#coins").replaceChildren();
  amount.value = "";
});

function dispenseChange(amount) {
  if (amount.trim() === "") {
    alert("Please enter a value");
    return;
  }

  if (!amount.toString().includes(".")) {
    // handles if user only inputs dollar amount (whole number)
    const dollarAmount = dispenseDollars(amount);
    displayDollars(dollarAmount);
    return;
  }

  // Splits amount into dollars and cents: dollars at index 0, cents at index 1
  const dollarsAndCents = amount.toString().split(".");
  // Limits cents to two decimal places
  dollarsAndCents[1] = dollarsAndCents[1].slice(0, 2);
  const dollars = dispenseDollars(+dollarsAndCents[0]);
  const cents = dispenseCents(+dollarsAndCents[1]);

  displayDollars(dollars);
  displayCents(cents);
}

function displayDollars(dollars) {
  document.querySelector("#bills").replaceChildren();
  const billsTemplate = `
  <h2>Bills:</h2>
  <p>$100 bills: ${dollars.hundreds}</p>
  <p>$50 bills: ${dollars.fifties}</p>
  <p>$20 bills: ${dollars.twenties}</p>
  <p>$10 bills: ${dollars.tens}</p>
  <p>$5 bills: ${dollars.fives}</p>
  <p>$1 bills: ${dollars.ones}</p>
  `;
  document
    .querySelector("#bills")
    .insertAdjacentHTML("beforeend", billsTemplate);
}

function displayCents(cents) {
  document.querySelector("#coins").replaceChildren();
  const coinsTemplate = `
  <h2>Coins:</h2>
  <p>Quarters: ${cents.quarters}</p>
  <p>Dimes: ${cents.dimes}</p>
  <p>Nickels: ${cents.nickels}</p>
  <p>Pennies: ${cents.pennies}</p>
  `;
  document
    .querySelector("#coins")
    .insertAdjacentHTML("beforeend", coinsTemplate);
}
