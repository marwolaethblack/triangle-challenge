const Triangle = require('../Triangle.js');

const triangle = new Triangle();

test("removes duplicates from an array", () => {
    const array = [1,2,2,3,4];
    const arrayWithoutDups = triangle.removeDupsFromArray(array);
    expect(arrayWithoutDups[2]).toBe(3);
})

test("find the amount of equal sides of a triangle", () => {
    const sides = [2,2,3];
    equalSides = triangle.numOfEqualSides(sides);
    expect(equalSides).toBe(2);
})