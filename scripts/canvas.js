//Initial setup
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;


// Variables
const mouse = {
    x: innerWidth/ 2,
    y: innerHeight/ 2
};

const colors = [
    //"#FFFFFF",
    //"#FFFFFF"
];


// Eventlistener 
addEventListener("mousemove", event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener("resize", () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});

// Utility Functions
function randomIntFromRange(min, max) {
    return Math.floor(Math.random()* (max-min + 1) + min);
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1;
    const yDist = y2 - y1;
    
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// Object
function Object (x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.velocity = {
        x : "",
        y: ""
    };
    this.radius = radius;
    this.color = color;
    
    this.update = () => {
        
        this.draw();        
    }
    
    this.draw = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath;
    }
}

// Implementation
let objects;

function init() {
    objects = [];
    for (let i = 0; i < 400; i++) {
        //objects.push();
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // objects.forEach(object => {
    //   object.update();
    // });
};

// Execution
init();
animate();