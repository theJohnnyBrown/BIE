/* BIE is licensed under the MIT License, see LICENSE.
    For a list of copyright holders, please refer to AUTHORS.*/

/* @pjs preload="picture.jpg"; */
PImage pi_img;
float a = 0.0;
float s = 0.0;

void pif_open_image(pi_name) {
    pi_img = loadImage(pi_name);
    pi_w = pi_img.width;pi_h = pi_img.width;
    pf_dim = max(pi_w, pi_h);
    size(pf_dim, pf_dim);
}


void setup() {
    pif_open_image("picture.jpg");
}

void draw() {
    background(150, 150, 150);
    // pi_img = loadImage("picture.png");
    a = a + 0.04;
    s = cos(a);
 
    // translate(width/2, height/2);
    // scale(s); 
    image(pi_img, 0,0);  
}

// Processing code
// void pif_draw_rectangle(pi_x, pi_y, pi_w, pi_h) {
//   size(pi_w, pi_h);
//   background(100);
//   stroke(255);
//   // ellipse(50, 50, 25, 25);
// }

