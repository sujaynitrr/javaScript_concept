// promise ==> promise is object who represent the eventucall complication of ayncrnous opertion
// There are three state in promise
// pending fullfiled and rejected
// const url ="https://api.github.com/users/alok722";
// const user =  fetch(url)

// console.log(user,"user");

// const cart =["shoes","pant","shirt"];

//  function createOrder(cart){
//     const pr = new Promise(function(resolve,reject){
//         if(!validateCart(cart)){
//             const err = new Error("Cart is not valid");
//             reject(err)

//         }

//         //Logic for valid cart
//         const orderId="1234";
//         if(orderId){
//             setTimeout(() => {
//                 resolve(orderId)

//             }, 3000);
//         }
//     })
//     return pr;
// }

// function validateCart(cart){
//     return true
// }

// function proceedPayment(orderId){
//     if(orderId){
//         return new Promise(function(resolve,reject){
//             resolve("Payment sussesfull")
//         })
//     }
// }

//  const promise= createOrder(cart);

//  promise.then(function(orderId){
//     console.log(orderId)
// })
// .catch(function(error){
//     console.log(error)
// })

//Alternative way to call promise

// createOrder(cart)
// .then(function(orderId){
//     return orderId
// })
// .then(function(orderId){
//     return proceedPayment(orderId)
// })
// .then(function(PaymentInfo){
//     console.log(PaymentInfo)
// })
// .catch(function(error){
//     console.log(error)
// })

//createOrder
//proceedPayment
//showOrderSummary
//updateWallet


// const cart = ["Shoes", "jeans", "paint"];
// function validateCart(cart){
//     return true
// }

// function createOrder(cart) {

//     const pr = new promise(function (resolve, reject) {
//         if (!validateCart(cart)) {
//             const error = new Error("Cart is not valid");
//             reject(error)
//         }
//         //Logic for valid Cart
//         const orderId = "1234";
//         if (orderId) {
//             setTimeout(() => {
//                 resolve(orderId)
//                 console.log(orderId)
//             }, 2000);

//         }

//     })
//     return pr
// }


// function proceedPayment(orderId) {
//     if (orderId) {
//         return new promise(function (resolve, reject) {
//             resolve("payment Sussesfull")
//         })
//     }

// }

// function orderSummary(orderId) {
//     if (orderId) {
//         return new promise(function (resolve, reject) {
//             resolve("Order summary Details")
//         })
//     }

// }

// function updateWallet(orderId) {
//     if (orderId) {
//         return new promise(function (resolve, reject) {
//             resolve("3000");
//         })

//     }

// }

// createOrder(cart)
//     .then(function (orderId) {
//         console.log(orderId);
//         return orderId
//     })
//     .then(function (orderId) {
//         return orderSummary
//     })
//     .then(function (orderId) {
//         return proceedPayment(orderId)
//     })
//     .then(function (orderId) {
//         return updateWallet(orderId)
//     })
//     .catch(function(error){
//         console.log(error)
//     })

    //promise API

    // promise.all([])

    // it accept multiple promise like p1,p2,p3
    //promise.all([p1,p2,p3])
    //Any of them is fail at the same time promise throw error not wait for run other promise

    //promise.allSettled([p1,p2,p2])

    // it Is also accept multiple promise like p1,p2,p3
    //promise.allSettled([p1,p2,p3])
    //Any of them is fail promise it  will not  throw error it will wait for execute other promise.
    

    //promise.race()

    //It accept multiple promise like p1,p2 and p3
    //promise.race([p1,p2,p3]);
    //if p1 will take 5sec, p2 will take 6 sec and p3 will take 2s
    // Any of them will execute promise will not wait for other it give result either fail ya susses

    //promise.any()

    //It is also accept multiple array of promise like p1,p2,p3;
    //This promise api wait for first success
    //eg: promise.any([p1,p2,p3]);
    //If any of promise will success it will give result
    //If all of them will fail it show aggregate error means list of array with all promise error
    //
    
    //promise.all([]) Api
    const p1 = new Promise(function(resolve,reject){
        setTimeout(()=>resolve("P1 success"),1000)
    })
    const p2 = new Promise(function(resolve,reject){
        setTimeout(()=>resolve("P2 success"),2000)
    })
    const p3 = new Promise(function(resolve,reject){
        //setTimeout(()=>resolve("P3 success"),3000)
        setTimeout(()=>reject("P3 fail"),3000)
    })

    // Promise.all([p1,p2,p3]).then((res)=>{
    //     console.log(res,"res");
    // })
    // .catch((error)=>{
    //     console.error(error)
    // })


    //Promise.allSettled([])

    // Promise.allSettled([p1,p2,p3]).then((res)=>{
    //     console.log(res,"res")
    // })

    //Promise.race([]) Api

    // Promise.race([p1,p2,p3]).then((res)=>{
    //     console.log(res,"res")
    // }).catch((err)=>{
    //     console.error(err)
    // })

    

    

