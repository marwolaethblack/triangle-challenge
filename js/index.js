'use strict'
let Triangle = require('./Triangle');
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


    inputs.forEach(input => {
        try {
            inputValues.push(sanitizeInput(input.value));
        } catch(err) {
            error = err.message;
        }   
    });

    if(error.length > 1) {
        resultParagraph.textContent = error;
        return;
    }

    const numOfEqualSides = Triangle.numOfEqualSides(inputValues);
    try{
        const type = Triangle.findType(numOfEqualSides);
        resultParagraph.textContent = "The triangle is " + type;
    } catch(err) {
        resultParagraph.textContent = err.message;
    }
    
    
    
   
}

