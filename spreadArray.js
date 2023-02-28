
// #Copy the array currect rule

/*
const arr1 = [2, 4, 6, 8];
const arr2 = [1, 3, 5, 7, ...arr1];

arr1.push(10);

arr2.push(20);

console.log(arr1);
console.log(arr2);

*/



// #Primitive and not primitive copy: Actually when we change any non prrimitive data it will chagne another one that is coppied. But for the primitive it does not create any problem. Because primitive data is pass by value and non primitive data is pass by refernce.


/*
let a = 30;
let  b = a;
b = 50;
console.log(a, b);
*/


// #Copy the array wrong rule

/*
const arr1 = [2, 4, 6, 8];
const arr2 = arr1;

arr1.push(10);
arr2.push(20);

console.log(arr1);
console.log(arr2);
*/




// #Array destructuring by spread Operator: 

/*
const arr1 = [2, 4, 6, 8];
const [first, second, ...remaining] = arr1;

console.log(first, second);
console.log(remaining);

*/
