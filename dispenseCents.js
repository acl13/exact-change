export default function dispenseCents(amount) {
  const cents = {
    amount: amount,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  };
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
  // displayCents(cents);
  return cents;
}
