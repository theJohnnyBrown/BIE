/* BIE is licensed under the MIT License, see LICENSE.
    For a list of copyright holders, please refer to AUTHORS.*/

/* @pjs preload="picture.png"; */
PImage pi_img;

void pif_open_image(pi_name) {
    pi_img = loadImage(pi_name);
    image(pi_img, 0, 0);
    println("w: " + pi_img.width + " h: " + pi_img.height);
}


void setup() {
    pif_open_image("picture.png");
}

// Processing code
void pif_draw_rectangle(pi_x, pi_y, pi_w, pi_h) {
  size(pi_w, pi_h);
  background(100);
  stroke(255);
  // ellipse(50, 50, 25, 25);
}

