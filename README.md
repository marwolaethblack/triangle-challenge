# triangle-challenge

Open the index.html file to start!

All tests passing, to run the tests yourself first run `yarn install` or `npm install`, then run `yarn test or npm test`.

For this project I decided to use modern javascript features (ES6+).  
All of the javascript files later get bundled and minified to a single file using Webpack.

I have decided for this approach because writing javascript using modern ES6+ syntax allows me to write less, more readable and cleaner code. The drawback is that only modern browsers support this syntax.  
Since I have bundled my code with Webpack this drawback is avoided, Webpack automatically transforms the modern syntax into its older versions ensuring older browser compatibility. It also minifies the code improving page load times.

For my testing platform I decided to use jest. This decision was based on my good previous experience with it.
It enables me to write unit tests quickly without problems.

As for the algorithm deciding what king of triangle it is according to the input, I have decided to create a base Class Polygon with methods that could be relevant to other shapes and a Class "Triangle" which inherits from the base class "Polygon" and holds all the methods and properties relevant to it.  
This way I can reuse the code just as if I was using a npm module.  
I just have to create an instance of the class. This also helps me reason the structure of my project better because all the code required for finding a triangle type is in one place - the triangle Class.

## Finding the triangle type ##

First I have created a method to find duplicate entries in an array. This method takes an array of any type, 
then uses the new Set object which automatically removes duplicates.

Next I created the method numOfEqualSides which takes an array as an argument and returns the number of equal sides.     
It uses the previous method to first remove duplicates in the inputted array and then compare the length of the inputted array and the length of the array without duplicates. This enables me to figure out the number of equal sides.  

I have decided for this approach because I can reuse this method for any polygon with n amount of sides not just a triangle.

Afterwards I created a property of the class Triangle called types.
This property is an object whose keys are the amount of equal sides and values are the types corresponding to the amount of equal sides.
e.g.
```
{
  0: "Scalene",
  2: "Isosceles".
  3: "Equilateral:
}
```
Then using the method findType I can just take the amount of equal sides and use it as a key in the object to acces the type of the triangle.
```
  const triangleType = types[numberOfEqualSides] 
```

This enables me if in the future more types of triangles are discovered (higly unlikely) just add them into the types property without changin any other code.

## User Interface ##
The user interface consists of a simple form with inputs and labels. I have decided to use the input of type "number" to have some simple builtin validation and a different keyboard on mobile devices.  
I styled the ui using flexbox for layout. Flexbox is a very simple way to do layouts using CSS and is supported by the vast majority of browsers in use.  
I added a custom font "Robot" using Google Fonts. I used a lighter shade of black for the text color and darker shade of white for the background to reduce the contrast and in turn eyestrain making it more pleasing to look at.




