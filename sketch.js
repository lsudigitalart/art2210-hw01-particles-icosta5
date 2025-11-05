let particles = []
let img1;
let img2;
let img3;
let img4;

function preload() {
    img1 = loadImage('assets/bowl.png');
    img2 = loadImage('assets/kibble.png');
    img3 = loadImage('assets/Trouble.jpeg');
    img4 = loadImage('assets/foodbag.png');
}

function setup() {
    createCanvas(3024 * 0.5, 4032 * 0.5);
    particles = [];
}

function draw() {
    background(220);
    //load in trouble and food bowl images
    image(img3, 0, 0, width, height);
    image(img1, width/2 - 400, height - 600, 900, 550);

//makes new particles when mouse is pressed
if(mouseIsPressed) {
particles.push(new Particle(mouseX, mouseY));
}

//updates and displays particles
for (let i = particles.length -1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();

    //removes particles when they go off screen
if (particles[i].x < 0 || particles[i].x > width || particles[i].y < 0 || particles[i].y > height) {
    particles.splice(i, 1);
}
}
//moving mouse food bag
push();
translate(mouseX- 110, mouseY - 190);
rotate(PI/4)
image(img4, 0, 0, 250, 300);
pop();

//text banner
strokeWeight(0);
rect(0, 0, width, 170);

//text
textSize(75);
textAlign(CENTER);
text("Click to feed a hungry Trouble!" , width/2, 100);
textSize(40);
text("(his greed knows no bounds)" , width/2, 150);
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(30, 90);
        this.speedX = random(-2, 2);
        this.speedY = random(-5, -1);
        //gravity for realistic fall of food particles
        this.gravity = .2;
    }
    update() {
        this.speedY += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY;
    }
    display() {
        //display food particles
        let aspectRatio = img2.height / img2.width;
        let h = this.size * aspectRatio;
        image(img2, this.x, this.y, this.size, h);
    }
    }

