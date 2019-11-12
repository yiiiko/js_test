let img;
function setup() {
  createCanvas(710, 400);
  img0 = loadImage('assets/map.png');
  img1 = loadImage('assets/NY.png');
  img2 = loadImage('assets/TX.png');
  img3 = loadImage('assets/KY.png');
  img4 = loadImage('assets/OH.png');
  img5 = loadImage('assets/NE.png');
}

function draw() {
  image(img0, 0, 0);
  image(img1, 0, 0);
  image(img2, 0, 0);
  image(img3, 0, 0);
  image(img4, 0, 0);
  image(img5, 0, 0);

}
