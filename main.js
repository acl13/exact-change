function dispenseChange(amount) {
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
}

dispenseChange(169.99);
