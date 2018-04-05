'use strict'
const triangleTypes = require('../constants/triangleTypes');
const Polygon = require('./Polygon');

class Triangle extends Polygon{

    constructor() {
        super();
        //Types is an object whose key is the number of equal sides of the triangle and value is the type fo the triangle
        this.types  = {
            0: triangleTypes.SCALENE,
            2: triangleTypes.ISOSCELES,
            3: triangleTypes.EQUILATERAL
        }
    }
    
    //findType finds the type of the triangle according to the number of its equal sides
    findType(numOfEqualSides) {
        if(this.types[numOfEqualSides]) {
            return this.types[numOfEqualSides]
        }
        throw new Error("No such type with that many equal sides");
    }
}

module.exports = Triangle;