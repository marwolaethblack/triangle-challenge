'use strict'

const sanitizeInput = require('../sanitizeInput.js');

test("it sanitizes an int input", () => {
    const input = document.createElement('input');
    input.value = 5;
    const sanitizedValue =  sanitizeInput(input.value);
   
    expect(sanitizedValue).toBe(5);
});

test("it sanitizes a float input", () => {
    const input = document.createElement('input');
    input.value = 5.2;
    const sanitizedValue =  sanitizeInput(input.value);
   
    expect(sanitizedValue).toBe(5.2);
});