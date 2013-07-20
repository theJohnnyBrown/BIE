/* BIE is licensed under the MIT License, see LICENSE.
    For a list of copyright holders, please refer to AUTHORS.*/

// This file should be loaded after processing-1.4.1.js

// hard-coded Processing code, text from an HTML widget, downloaded text, etc.
// var processingCode = "..."; 
// var jsCode = Processing.compile(processingCode).sourceCode;
function reflect_x() {
    pi = Processing.getInstanceById('user_image_1');
    pi.translate(pi.width, 0);
    pi.scale(-1, 1)
}
function reflect_y() {
    pi = Processing.getInstanceById('user_image_1');
    pi.translate(0, pi.height);
    pi.scale(1, -1);
}
// the above functions could be placed by `reflect(rads)`, where `rads` is
// radians from the center of the image and defines the axis to reflect
// around. e.g. reflect(pi/2) has the same effect as reflect_x(), and
// reflect(0) is equivalent to reflect_y() above.
