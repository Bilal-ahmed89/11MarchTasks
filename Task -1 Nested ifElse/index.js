"use strict";
// Nested if Else 
function lifeStage(age) {
    if (age < 2) {
        console.log(`This person is a baby`);
    }
    else if (age >= 2 && age < 4) {
        console.log(`This person is a toddler`);
    }
    else if (age >= 4 && age < 13) {
        console.log(`This person is a kid`);
    }
    else if (age >= 13 && age < 20) {
        console.log(`This person is a teenager`);
    }
    else if (age >= 20 && age < 65) {
        console.log(`This person is a adult`);
    }
    else {
        console.log(`This person is an elder`);
    }
}
lifeStage(57);
let myVariable = 'hello';
console.log(myVaribale);