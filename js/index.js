'use strict'
let Triangle = require('./Triangle');
const sanitizeInput = require('./sanitizeInput');

const resultParagraph = document.querySelector(".result");
const inputs = document.querySelectorAll("input[type=number]");
const form = document.querySelector(".triangle-form");

//Instantiate the Triangle Class
Triangle = new Triangle();


//Add event handler to form
form.onsubmit = (e) => {
    e.preventDefault();
    const inputValues = [];
    inputs.forEach(input => {
        inputValues.push(sanitizeInput(input.value));
    });

    const numOfEqualSides = Triangle.numOfEqualSides(inputValues);
    const type = Triangle.findType(numOfEqualSides);

    resultParagraph.textContent = "The triangle is " + type;
}

