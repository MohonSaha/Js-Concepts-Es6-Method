

/*

// # Array destructuring:

const details = {
    name: 'Mohon Saha',
    age: 76,
    address: 'Dhaka',
    job: 'Student',
    p: [1, 2, 3, 4]
}

const {address:bari, age, name, job} = details;
console.log(bari);  // Change the new variable name;
console.log(address);   // Will give you undefind 


const {address, age, ...rest} = details; 
console.log(rest);

*/



/*

# Object Spreading

const details1 = {
    name: 'Mohon Saha',
    age: 76,
    address: 'Dhaka',
    job: 'Student',
    p: [1, 2, 3, 4]
}

const details2 = {...details1};

details2.isMale = true;     // Create a new property to the obj.
console.log(details1);

*/



// # Complex array and object destructuring:

/*
const details1 = {
    name: 'Mohon Saha',
    age: 76,
    address: 'Dhaka',
    job: 'Student',
    p: [1, 2, 3, 4]
}

const {p} = details1;
const [firstElement] = p;
console.log(firstElement);

*/
