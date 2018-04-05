'use strict'
const inputs = document.querySelectorAll("input");
const form = document.querySelector("form")
form.onsubmit = (e) => {
    e.preventDefault();
    inputs.forEach(input => {
        console.log(input.value);
    })
}



const numOfEqualSides = (arrayOfSides) => {
    let fruits_without_duplicates = Array.from(new Set(fruits));
}