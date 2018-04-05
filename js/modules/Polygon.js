'use strict'

class Polygon {
    
     //Removes duplicate entries in an array
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
}

module.exports = Polygon;