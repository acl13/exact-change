const amount = document.getElementById("amount");
const displayChangeBtn = document.getElementById("display-change");
const clearBtn = document.getElementById("clear");

// displayChangeBtn.addEventListener("click", dispenseChange(amount.value));
console.log(displayChangeBtn);
displayChangeBtn.addEventListener("click", () => dispenseChange(amount.value));
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
  const dollarsAndCents = amount.toString().split(".");
  const dollars = {
    amount: +dollarsAndCents[0],
    hundreds: 0,
    fifties: 0,
    twenties: 0,
    tens: 0,
    fives: 0,
    ones: 0,
  };
  const cents = {
    amount: +dollarsAndCents[1],
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  };

  console.log(dollarsAndCents);
  console.log(dollars);
  console.log(cents);

  dispenseDollars(dollars);
  dispenseCents(cents);
}

function dispenseDollars(dollars) {
  dollars.hundreds = Math.floor(dollars.amount / 100);
  //Amount is what remains after 100s are dispensed
  dollars.amount -= dollars.hundreds * 100;
  dollars.fifties = Math.floor(dollars.amount / 50);
  //Amount is what remains after 50s are dispensed
  dollars.amount -= dollars.fifties * 50;
  dollars.twenties = Math.floor(dollars.amount / 20);
  //Amount is what remains after 20s are dispensed
  dollars.amount -= dollars.twenties * 20;
  dollars.tens = Math.floor(dollars.amount / 10);
  //Amount is what remains after 10s are dispensed
  dollars.amount -= dollars.tens * 10;
  dollars.fives = Math.floor(dollars.amount / 5);
  //Amount is what remains after 5s are dispensed
  dollars.amount -= dollars.fives * 5;
  dollars.ones = dollars.amount;
  // Resets amount at 0.
  dollars.amount = 0;
  console.log(dollars);
  displayDollars(dollars);
}

function dispenseCents(cents) {
  cents.quarters = Math.floor(cents.amount / 25);
  //Amount is what remains after quarters are dispensed
  cents.amount -= cents.quarters * 25;
  cents.dimes = Math.floor(cents.amount / 10);
  //Amount is what remains after dimes are dispensed
  cents.amount -= cents.dimes * 10;
  cents.nickels = Math.floor(cents.amount / 5);
  //Amount is what remains after nickels are dispensed
  cents.amount -= cents.nickels * 5;
  cents.pennies = cents.amount;
  // Resets amount at 0.
  cents.amount = 0;
  console.log(cents);
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
