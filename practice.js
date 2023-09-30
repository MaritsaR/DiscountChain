// we want to write a program using two functions that return a boolean if we are spending 
// within a given budget, tax inclusive.

//create variables
const budget = 100;
const price1 = 20;
const price2 = 25;

console.log(price1);
//define a function that return the sum of the two values before tax
function addTwoPrices(gift1, gift2){
        return gift1 + gift2;
}

console.log(price1 + price2);

const giftTotal = addTwoPrices(price1, price2);
console.log(giftTotal);

function addTax(giftTotal){
    return giftTotal + (giftTotal * 0.08);
}

const giftWithTax = addTax(giftTotal);

function holidayShopping(budget, giftWithTax) {
    return budget >= giftWithTax;
}

console.log(holidayShopping(budget, giftWithTax));
