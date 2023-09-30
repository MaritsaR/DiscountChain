//create a checkout system that returns the total cost of refills including if they have a subscription and coupon
//if customer has subscription, the customer will receive a 25% discount after the refill total has been calculated.
//If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated
//At the end of the script, you should return and log the string "Your grand total is ${finalAmount}."
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// const pricePerRefill = 25;
// const refills = 3;
// const coupon = 10;

// function prescriptionProduct(param1, param2) {
//     return param1 * param2;
// }

// console.log(pricePerRefill *refills);

// const prescriptionTotal = prescriptionProduct(pricePerRefill, refills);
// console.log(prescriptionTotal);

// function couponDifference(prescriptionTotal){
//     return prescriptionTotal = (prescriptionTotal - 10);
// }

// const couponTotal = couponDifference(prescriptionTotal);
// console.log(couponTotal);

// if (couponTotal == 65) {
//     console.log("Your grand total is $65");
// }

// const pricePerRefill2 = 50;
// const refills2 = 1;


// function prescriptionProduct2(param1, param2) {
//     return param1 * param2;
// }

// console.log(pricePerRefill2 *refills2);

// const prescriptionTotal2 = prescriptionProduct2(pricePerRefill2, refills2);
// console.log(prescriptionTotal2);

// function subscriptionDifference(prescriptionTotal2){
//     return prescriptionTotal2 - (prescriptionTotal2 * 0.25);
// }

// const subscriptionTotal = subscriptionDifference(prescriptionTotal2);
// console.log(subscriptionTotal);

// if (subscriptionTotal == 37.5) {
//     console.log("Your grand total is $37.5");
// }

const pricePerRefill3 = 30;
const refills3 = 5;


function prescriptionProduct3(param1, param2) {
    return param1 * param2;
}

console.log(pricePerRefill3 *refills3);

const prescriptionTotal3 = prescriptionProduct3(pricePerRefill3, refills3);
console.log(prescriptionTotal3);

function subscriptionDifference2(prescriptionTotal3){
    return prescriptionTotal3 - (prescriptionTotal3 * 0.25);
}

const subscriptionTotal3 = subscriptionDifference2(prescriptionTotal3);
console.log(subscriptionTotal3);

function couponDifference2(subscriptionTotal3){
    return subscriptionTotal3 = (subscriptionTotal3 - 10);
}

const couponTotal2 = couponDifference2(subscriptionTotal3);
console.log(couponTotal2);

if (couponTotal2 == 102.5) {
    console.log("Your grand total is $102.5");
}
