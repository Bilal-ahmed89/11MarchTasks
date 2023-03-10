// Function 1 
function calculateAge(dateOfBirth) {
    var today = new Date();
    var age = today.getFullYear() - dateOfBirth.getFullYear();
    var monthDiff = today.getMonth() - dateOfBirth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())) {
        age--;
    }
    return age;
}
var dateOfBirth = new Date('2003-10-28');
var age = calculateAge(dateOfBirth);
console.log("Your age is ".concat(age, " years old."));
//-----------------------------------------------------------------------//
// Function 2 
function StringLength(input) {
    return input.length;
}
console.log(StringLength('jkahffhashlashasdf'));
//------------------------------------------------------------------//
//Function 3
function getSquare(input) {
    return input * input;
}
console.log(getSquare(14));
