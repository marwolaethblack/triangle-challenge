'use strict'
const Triangle = require('../Triangle.js');
const triangleTypes = require('../constants/triangleTypes')

const triangle = new Triangle();

test("removes duplicates from an array", () => {
    const array = [1,2,2,3,4];
    const arrayWithoutDups = triangle.removeDupsFromArray(array);
    expect(arrayWithoutDups[2]).toBe(3);
});

test("find the amount of equal sides of a triangle", () => {
    const sides = [2,2,3];
    const equalSides = triangle.numOfEqualSides(sides);
    expect(equalSides).toBe(2);
});

test("finds the triangle type according to the number of sides", () => {
    const equalSides = triangle.numOfEqualSides([2,3,3]);
    const triangleType = triangle.findType(equalSides); 
    expect(triangleType).toBe(triangleTypes.ISOSCELES);
});

test("finds an equilateral triangle", () => {
    const equalSides = triangle.numOfEqualSides([3,3,3]);
    const triangleType = triangle.findType(equalSides); 
    expect(triangleType).toBe(triangleTypes.EQUILATERAL);
});

test("finds a scalene triangle", () => {
    const equalSides = triangle.numOfEqualSides([1,2,3]);
    const triangleType = triangle.findType(equalSides); 
    expect(triangleType).toBe(triangleTypes.SCALENE);
});

test("triangle find type throws an error with an invalid input", () => {
    expect(triangle.findType).toThrow();
})

test("removing duplicate floats from an array", () => {
    const array = [1.2,1.2,5,4,5.6];
    const arrayWithoutDups = triangle.removeDupsFromArray(array);
    expect(arrayWithoutDups.length).toBe(4);
});