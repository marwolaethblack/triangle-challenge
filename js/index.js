'use strict'
let Triangle = require('./modules/Triangle');
const sanitizeInput = require('./util/sanitizeInput');

const resultParagraph = document.querySelector(".result");
const inputs = document.querySelectorAll("input[type=number]");
const form = document.querySelector(".triangle-form");

//Instantiate the Triangle Class
Triangle = new Triangle();


//Add event handler to form
form.onsubmit = (e) => {
    
    e.preventDefault();
    const inputValues = [];
    let error = "";


    //Sanitize each input value, if thats not possible catch error and assign it to a variable
    inputs.forEach(input => {
        try {
            inputValues.push(sanitizeInput(input.value));
        } catch(err) {
            error = err.message;
        }   
    });

    //If an error was thrown during sanitization display it and return
    if(error.length > 1) {
        resultParagraph.textContent = error;
        return;
    }

    //Find the amount of equal sides of the triangle
    const numOfEqualSides = Triangle.numOfEqualSides(inputValues);

    //Try to find the type fo the triangle if it throws and error display it
    try{
        const type = Triangle.findType(numOfEqualSides);
        resultParagraph.textContent = "The triangle is " + type;
    } catch(err) {
        resultParagraph.textContent = err.message;
    }
    
    
    
   
}

