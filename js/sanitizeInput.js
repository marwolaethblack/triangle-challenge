'use strict'


//Checks if the input is a number, tries to convert it to one if not else throws error
const sanitizeInput = (input) => {

    const sanitizedInput = Number(input);
    if(isNaN(sanitizedInput)) {
        throw new Error("Input must be a number");
    }


    if(sanitizedInput <= 0) {
        throw new Error("Your value must be greater than 0 or you forgot to input a value");
    }

    return sanitizedInput; 
}

module.exports = sanitizeInput;