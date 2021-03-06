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

function rotate_right() {
    // these repeated lookups should be references to `this`
    pi = Processing.getInstanceById('user_image_1');
    pi.translate(pi.width/2, pi.height/2);
    pi.rotate(Math.PI/2);
    pi.translate(-pi.width/2, -pi.height/2);
}
function rotate_left() {
    // these repeated lookups should be references to `this`
    pi = Processing.getInstanceById('user_image_1');
    pi.translate(pi.width/2, pi.height/2);
    pi.rotate(-Math.PI/2);
    pi.translate(-pi.width/2, -pi.height/2);
}

function load_image(url, callback){
    pi = Processing.getInstanceById('user_image_1');
    new_image = pi.requestImage(url, "", function(){
        if (callback) callback();
        pi.pif_open_image(new_image);
    });
}
// the above functions could be placed by `reflect(rads)`, where `rads` is
// radians from the center of the image and defines the axis to reflect
// around. e.g. reflect(pi/2) has the same effect as reflect_x(), and
// reflect(0) is equivalent to reflect_y() above.
