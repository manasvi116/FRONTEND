// ***************FOR LOOP**********
for (let i = 1; i <= 5; i++) {
    console.log("For Loop - Number: " + i);
}

// *********While Loop***********
let i = 1;
while (i <= 5) {
    console.log("While Loop - Number: " + i);
    i++;
}

// *******For in Loop (for Object Properties)**********
const person = { name: "Alice", age: 25, city: "Delhi" };
for (const key in person) {
    console.log(key + ": " + person[key]);
}

// ***********For of Loop (for Arrays)*********************
const fruits = ["Apple", "Banana", "Mango"];
for (const fruit of fruits) {
    console.log("Fruit: " + fruit);
}

// ******************Using break in a Loop****************
for (let j = 1; j <= 10; j++) {
    if (j === 5) {
        console.log("Breaking at 5");
        break;
    }
    console.log("Break Example: " + j);
}

// ***************Using continue in a Loop*******************
for (let k = 1; k <= 5; k++) {
    if (k === 3) {
        continue; // Skip number 3
    }
    console.log("Number (skip 3): " + k);
}

// ******************Using forEach() with Arrays**********
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log("forEach number: " + number);
});
