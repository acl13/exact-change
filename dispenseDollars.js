export default function dispenseDollars(amount) {
  const dollars = {
    amount: amount,
    hundreds: 0,
    fifties: 0,
    twenties: 0,
    tens: 0,
    fives: 0,
    ones: 0,
  };
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
  // displayDollars(dollars);
  return dollars;
}
