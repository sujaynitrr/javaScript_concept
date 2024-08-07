// async function always return a promise
// If we will try to return any value , in this case async will wrap this value in promise then return promise

//example:
//  async function getData(){
//     return "any thing"
// }

// const data = getData();
// console.log(data,"data")
//how to get data
// data.then((res)=>{
//     console.log(res,"res")
// })

// if we return a promise in this case async function don't wrap with promise. It will return at it is.

// const p= new Promise((resolve,reject)=>{
//     resolve("P1 success");
// })

// async function getData(){
//         return p;
// }

// const data = getData();
// data.then((res)=>{
//     console.log(res)
// })

//Async and wait both are use to handle promise.

//Before async await we are handling like =>

//     function getData(){
//         p.then((res)=>{
//             console.log(res)
//         })
//     }
//  getData();   


//After async await handling of promise is different approach

//await is keyword which one used in side async function
// const p= new Promise((resolve,reject)=>{
//     setTimeout(()=>{

//         resolve("resolved promise");
//     },10000)
// })

// async function handlePromise(){
//     const val = await p;
//     console.log(val,"val");
// }
// handlePromise()

// function getData(){
//     p.then((res)=>{
//         console.log(res)
//     })

//     console.log("Hello javascript");
// }
// getData();

const p1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("P1 promise");
    }, 10000);
})

const p2 = new  Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("p2 promise")
    }, 5000);
})

async function handlePromise(){
    const data = await p1;
    console.log(data);

    const data2 = await p2;
    console.log(data2)

}
handlePromise();

    


