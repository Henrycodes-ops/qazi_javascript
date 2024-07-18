// Asynchronous Programming

// You order a tomato soup
// Meanwhileyou continous your convo with a friend
// resolved - your server brings you soup
// rejected - No soup today

// Setting a timeout
// setTimeout(() => {
//   console.log('soup')
// }, 2000);

// Applying it in a function
// const waitingForSoup = () => console.log('soup')
// setTimeout(waitingForSoup(), 2000);

// The difference in asynchronous progamming
// const orderSoup = () => console.log("soup is ready");
// console.log("You start the convo with ur friend");
// setTimeout(orderSoup, 2000);
// console.log("You continue the convo with ur friend");

// Promises
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     isReady = [true, false][Math.floor(Math.random() * 2)];
//     //condition// runs if true           runs if false
//     isReady ? resolve("soup is ready") : reject("no soup today");
//   }, 5000);
// });

// console.log(promise1
//   .then((success) => console.log({success}))
//   .catch((error) => console.log({error}))
//   // catch fetches the error message from the reject parameter
// );
// .then is a special thing a promise has that returns the value of a promise

// e.g of a ternary operator > ?
// if (isReady == true) {
//   'run this'
// } else {
//   'do this'
// }

// async & Await
// Rules
// 1. You must create a function
// 2. You must use the keyword async
// 2. You must use the keyword await
// const  getDog = async () => {
//   const url = "https://dog.ceo/api/breeds/image/random"
//   const response = await fetch(url)
//   const data = await response.json()
// }

// getDog()

// Turning Promise1 into a async / await
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)];
    //condition// runs if true           runs if false
    isReady ? resolve("🍲 soup is ready") : reject("❌ no soup today");
  }, 1000);
});

// Resolved - if waiter brings you soup
//  tip the waiter
// you pay for soup

// Rejected - leave a bad review, no tip

// const getSoup = async () => {
//   const tipWaiter = "tip the waiter";
//   const payForSoup = "Pay for the soup";
//   // Rejected
//   const badReview = "This restaurant is shit!!!!";
//   const tip = "no tip";
//   try {
//     const soup = await promise1;
//     console.log(soup);
//     console.log(payForSoup);
//     console.log(tipWaiter);
//   } catch (error) {
//     console.log(error);
//     console.log(badReview);
//     console.log(tip);
//   }
// };

// getSoup();

// or
const getSoup = async () => {
  const data = { rating: null, tip: null, pay: null, review: null };
  try {
    const soup = await promise1;
    console.log(soup);
    data.rating = 5;
    data.tip = 5;
    data.pay = 5;
    data.review = 5;
    return data;
  } catch (error) {
    console.log(error);
    data.rating = 1;
    data.tip = null;
    data.pay = null;
    data.review = 1;
    return data;
  }
};

console.log(getSoup().then((value) => console.log(value)));

const sum = async (a, b) => a + b;
console.log(
  sum(1, 2).then((value) => console.log(value)),
  "sum"
);
