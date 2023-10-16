// /*
// 1. if ticket number is less than 100, per ticket price : 100
// 2. if ticket number is more that 100 taka, but less than 200, first 100 ticket will be 100/
// rest ticket will be 90 taka

// 3. if you purchase more than 200 tickets
// first 100 ---> 100 taka
// 101 - 200 ---> 90 taka
// 200 + ---> 70 taka
// */

// function ticketPrice(ticketQuantity) {
//   const first100Rate = 100;
//   const second100 = 90;
//   const rest100 = 70;

//   if (ticketQuantity <= 100) {
//     const price = ticketQuantity * first100Rate;
//     return price;
//   } else if (ticketQuantity <= 200) {
//     const first100Price = 100 * first100Rate;
//     const restTicketQuantity = ticketQuantity - 100;
//     const restTicketQuantityPrice = restTicketQuantity * second100;
//     const totalPrice = first100Price + restTicketQuantityPrice;
//     return totalPrice;
//   } else {
//     const first100Price = 100 * first100Rate;
//     const second100Price = 100 * second100;
//     const restTicketQuantity = ticketQuantity - 200;
//     const restTicketPrice = restTicketQuantity * rest100;

//     const totalPrice = first100Price + second100Price + restTicketPrice;
//     return totalPrice;
//   }
// }

// const totalPrice = ticketPrice(20);
// console.log(totalPrice);
