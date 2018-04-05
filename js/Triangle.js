'use strict'
const triangleTypes = require('./constants/triangleTypes');

class Triangle {

    constructor() {

        //Types is an object whose key is the number of equal sides of the triangle and value is the type fo the triangle
        this.types  = {
            0: triangleTypes.SCALENE,
            2: triangleTypes.ISOSCELES,
            3: triangleTypes.EQUILATERAL
        }
    }
    
    removeDupsFromArray(array) {
       return Array.from(new Set(array))
    }

    //numOfEqualSides takes an array of triangle sides
    numOfEqualSides(sides) {
        let equalSides = sides.length - this.removeDupsFromArray(sides).length
        if(equalSides != 0) {
            return equalSides + 1;
        }
        return equalSides;
    }

    findType(numOfEqualSides) {
        if(types[numOfEqualSides]) {
            return types[numOfEqualSides]
        }
        throw new Error("Invalid amout of equal sides");
    }
}

module.exports = Triangle;