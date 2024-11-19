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
}

dispenseChange(19.99);
