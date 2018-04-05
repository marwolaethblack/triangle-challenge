# triangle-challenge

All tests passing, to run the tests yourself first run `yarn install` or `npm install`, then run `yarn test or npm test`.

For this project I decided to use modern javascript features (ES6+).
All of the javascript files later get bundled and minified to a single file using Webpack.
I have decided for this approach because writing javascript using modern ES6+ syntax allows me to write less, more readable and cleaner code. The drawback is that only modern browsers support this syntax. 
Since I have bundled my code with Webpack this drawback is avoided, Webpack automatically transforms the modern syntax into its older versions ensuring older browser compatibility. It also minifies the code improving page load times.

As for the algorithm deciding what king of triangle it is according to the input, I have decided to create a Class "Triangle" holding all the relevant methods and properties.
This way I can reuse the code just as if I was using a npm module.
I just have to create an instance of the class. This also helps me reason the structure of my project better because all the code required for finding a triangle type is in one place - the triangle Class.

