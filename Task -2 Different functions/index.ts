// Function 1 


function calculateAge(dateOfBirth: Date): number {
    const today: Date = new Date();
    let age: number = today.getFullYear() - dateOfBirth.getFullYear();
    const monthDiff: number = today.getMonth() - dateOfBirth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())) {
        age--;
    }

    return age;
}


const dateOfBirth: Date = new Date('2003-10-28');

const age: number = calculateAge(dateOfBirth);


console.log(`Your age is ${age} years old.`);

//-----------------------------------------------------------------------//


// Function 2 

function StringLength(input: string): number {

    return input.length;
}


console.log(StringLength('jkahffhashlashasdf'));


//------------------------------------------------------------------//

//Function 3

function getSquare(input: number): number {
    return input * input;
}

console.log(getSquare(14));
