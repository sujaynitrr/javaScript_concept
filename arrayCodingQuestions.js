//let arr =[5,10,1,20,15,90,30];
//find number which is not smaller than neighbors
//newArray =[];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>=arr[i-1] && arr[i]>= arr[i+1]){
//         newArray.push(arr[i])

//     }
// }

// console.log(newArray)

// Q2.Find smallest and largest number in array
// let smallestNumber =arr[0];
// let largestNumber=0;
// for(let i=0;i<arr.length;i++){
//     if(smallestNumber>arr[i]){
//         smallestNumber= arr[i];
//     }
//     if(largestNumber<arr[i]){
//         largestNumber = arr[i]
//     }
// }
// console.log(smallestNumber)
// console.log(largestNumber,"largest")

// Q3. Write a program reverse a array

// let reverseArray=[];
// for(let i=arr.length-1;i>0;i--){
//     reverseArray.push(arr[i])
// }
// console.log(reverseArray,"reverseArray");


// Q4.Sort a given array  sort

// const arr=[12,11,13,5,6];
// let key,j,i;
// for(i=1;i<arr.length;i++){
//     key = arr[i];
//     j=i-1;
//     while(j>=0 && arr[j]>key){
//         arr[j+1]= arr[j];
//         j =j-1;
//     }
//     arr[j+1]=key
// }
// console.log(arr,"arr");

//Q5. Find number of occurrence in array

// const arr=  [0, 1, 2, 0, 1, 2];

// const newArray=[0];
// for(let i=0;i<arr.length;i++){
//     newArray[i]=0;
// }
// for(let i=0;i<newArray.length;i++){

//     newArray[arr[i]]++
// }
// console.log(newArray)

//Q6. Move Negative number to beginning and +ve number to end 
//Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// const arr=[-12,11,-13,-5,6,-7,5,-3,-6];
// let i,j,key;
// for(let i=1;i<arr.length;i++){
//     key =arr[i];
//     j=i-1;
//     while(j>=0 && arr[j]>key){
//         arr[j+1]= arr[j];
//         j=j-1;
//     }
//     arr[j+1]=key;
// }

//Q6. union of two array
// const arr1=[1, 3, 4, 5, 7]
// const arr2 = [2, 3, 5, 6]
// const newArray = arr1.concat(arr2);
// console.log(newArray,"NewArray");

//Q7. Find missing number
// const arr=[1,2,4] ;
//  const missingArray =[];
// for(let i=0;i<=arr.length;i++){
//     missingArray[i]=0
// } 
// for(let i=0;i<missingArray.length-1;i++){
//     missingArray[arr[i]]++
// }

// console.log(missingArray)

//Q8 Remove duplicate value form array;
// const arr =[2,2,3,1,2];

let arr =[3,2,1];

let i,j,key;
for(let i=1;i<arr.length;i++){
    key = arr[i];
    j=i-1;
    while(j>=0 && arr[j]>key){
        arr[j+1]= arr[j];

        j= j-1;
    }
    arr[j+1]=key
}
console.log(arr,"arr");





