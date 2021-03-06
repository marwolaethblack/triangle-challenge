'use strict'

const sanitizeInput = require('../util/sanitizeInput.js');

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


test("it throws an error with a negative value", () => {
    expect(() => {sanitizeInput(-5)}).toThrow();
});