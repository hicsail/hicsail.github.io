//mobile asteroids usually horizontal heads up 
$(function () {

const FPS = 30; //frames per second
const FRAMES = 1000 / FPS;
const SHIP_SIZE = 30 //ship height (rn in pixel, how will this work on mobile?)
const TURN_SPEED = 360 //turn speed - degree speed / second
const SHIP_VELOCITY = 7 //acclerates by X pixels / s^2
const FRICTION = 0.05 

//render asteroids as a ratio to window size
const ASTR_COUNT = Math.ceil(window.innerWidth / 30);
const ASTR_SPEED = 12
const ASTR_SIZE = 100
const ASTR_VERT = 4
const ASTR_ZIG = 0.5 //the random jaggedness of an asteroid

console.log(ASTR_COUNT);

var cnvs = $('#game-canvas').get(0);
var ctx = cnvs.getContext("2d");
var colors = ['#E0533B', '#EBB54A', '#94ED6B', '#73A6FC']

function draw () {
    cnvs.width = window.innerWidth;
    cnvs.height = window.innerHeight;
}


draw();




//ship object
var ship = {
    show: true,
    x: cnvs.width / 2,
    y: cnvs.height / 2,
    r: SHIP_SIZE / 2,
    a: 90 / 180 * Math.PI, //angle from degrees to in radians
    rot: 0, //rotation speed
    thrusting: false,
    thrust: { //thrust speed 
        x: 0,
        y: 0
    }
}

var asteroids = [];
createAsteroids();



//regular asteroids
// function newAsteroid(x, y) {
//     var asteroid = {
//         x: x,
//         y: y, 
//         velx: Math.random() * ASTR_SPEED / FPS * (Math.random() < 0.5 ? 1 : -1),
//         vely: Math.random() * ASTR_SPEED / FPS * (Math.random() < 0.5 ? 1 : -1),
//         r: ASTR_SIZE / 2, //asteroid velocity
//         a: Math.random() * Math.PI * 2,
//         offset: [], //change how far each vertex is from the center

//         //TODO chnage for SAIL shapes
//         edges: Math.floor(Math.random() * (ASTR_VERT + 1) + ASTR_VERT / 2)
//     }

//     for (var i = 0; i < asteroid.edges; i ++) {
//         asteroid.offset.push(Math.random() * ASTR_ZIG * 2 + 1 - ASTR_ZIG);
//     }
//     return asteroid
// }

//SAIL asteroid
function newAsteroid(x, y) {
    var asteroid = {
        x: x,
        y: y, 
        velx: Math.random() * ASTR_SPEED / FPS * (Math.random() < 0.5 ? 1 : -1), //asteroid velocity
        vely: Math.random() * ASTR_SPEED / FPS * (Math.random() < 0.5 ? 1 : -1), //asteroid velocity
        r: ASTR_SIZE / 2, 
        a: Math.random() * Math.PI * 2,
        offset: [], //change how far each vertex is from the center

        //TODO chnage for SAIL shapes
        // edges: Math.floor(Math.random() * (ASTR_VERT + 1) + ASTR_VERT - 1),
        edges: Math.random() > 0.5 ? 4 : 3,
        color: colors[Math.floor(Math.random() * colors.length)]

    }

    for (var i = 0; i < asteroid.edges; i ++) {
        asteroid.offset.push(Math.random() * ASTR_ZIG * 2 + 1 - ASTR_ZIG);
    }
    return asteroid
}

function distanceBetweenPoints (x1,y1,x2,y2) {
    return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
}

function createAsteroids () {
    asteroids = [];
    for (var i = 0; i < ASTR_COUNT; i++) {
        do {
            var x = Math.floor(Math.random() * cnvs.width)
            var y = Math.floor(Math.random() * cnvs.height)
        } while ( 
            distanceBetweenPoints(ship.x,ship.y,x,y) < ASTR_SIZE * 1.5 + ship.r
        ); //makes sure that astroids dont render near ship
        
        asteroids.push(newAsteroid(x,y))
    }
    console.log(asteroids);
}

//event handlers
$(document).keydown(function(event){
    switch(event.which) {
        case 37: //rotate left
            ship.rot = TURN_SPEED / 180 * Math.PI / FPS
            event.preventDefault();
            break;
            
        case 38: 
            ship.thrusting = true;
            event.preventDefault();
            break;
        
        case 39: //rotate right
            ship.rot = -1 * TURN_SPEED / 180 * Math.PI / FPS
            event.preventDefault();
            break;

        case 40:
            event.preventDefault();

    }
    
});

$(document).keyup(function(event){
    switch(event.which) {
        case 37: //stop 
            ship.rot = 0;
            break;
            
        case 38:
            ship.thrusting = false;
            break;
        
        case 39: //rotate right
            ship.rot = 0
            break;
        case 40:
            event.preventDefault();

    }
    // event.preventDefault();
});


setInterval(update, FRAMES); //predefined canvas method for game loop


function update(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,cnvs.width,cnvs.height);

    //draw ship
    if (ship.show) {
        ctx.strokeStyle = "white",
        ctx.lineWidth = SHIP_SIZE / 17;
        ctx.beginPath();
        ctx.moveTo( //start path at nose of ship
            ship.x + ship.r * Math.cos(ship.a),
            ship.y - ship.r * Math.sin(ship.a),
        )
        ctx.lineTo( //draw line to bottom left 
            ship.x - ship.r * (Math.cos(ship.a) + Math.sin(ship.a)),
            ship.y + ship.r * (Math.sin(ship.a) - Math.cos(ship.a))
        )
        ctx.lineTo(
            ship.x - ship.r * (Math.cos(ship.a) - Math.sin(ship.a)),
            ship.y + ship.r * (Math.sin(ship.a) + Math.cos(ship.a))
        )
        ctx.closePath();
        ctx.stroke(); //draws previously defined paths

        ctx.fillStyle ="salmon";
        ctx.fillRect(ship.x - 2,ship.y - 2,4,4);

        //rotate ship
        ship.a += ship.rot;

        //thrusting 
        if (ship.thrusting) {
            ship.thrust.x += SHIP_VELOCITY * Math.cos(ship.a) / FPS
            ship.thrust.y -= SHIP_VELOCITY * Math.sin(ship.a) / FPS
        } else {
            ship.thrust.x -= FRICTION * ship.thrust.x
            ship.thrust.y -= FRICTION * ship.thrust.y
        }

        //move ship
        ship.x += ship.thrust.x;
        ship.y += ship.thrust.y;

        //edges
        if (ship.x > cnvs.width + ship.r) {
            ship.x = 0 - ship.r
        } else if (ship.x < 0 - ship.r) {
            ship.x = cnvs.width + ship.r
        }
        if (ship.y > cnvs.height + ship.r) {
            ship.y = 0 - ship.r
        } else if (ship.y < 0 - ship.r) {
            ship.y = cnvs.height + ship.r
        }

    }
    


    //draw asteroids

    
    ctx.lineWidth = ASTR_SIZE / 50;
    var x, y, r, a, vet, offsets;
    for (var i = 0; i < asteroids.length; i++) {
        
        
        x = asteroids[i].x;
        y = asteroids[i].y;
        r = asteroids[i].r;
        a = asteroids[i].a;
        vet = asteroids[i].edges;
        offsets = asteroids[i].offset //vertices
        colour = asteroids[i].color
        ctx.strokeStyle = colour

        //draw random path asteroid
        ctx.beginPath();
        ctx.moveTo(
            // x + r * offsets[0] * Math.cos(a), //randomness
            // y + r * offsets[0] * Math.sin(a) //randomness
            x + r * Math.cos(a),
            y + r * Math.sin(a)
        );
        
        
        for (var j = 1; j < vet; j++) {
            ctx.lineTo(
                // x + r * offsets[j] * Math.cos(a + j * Math.PI * 2 / vet), //randomness
                // y + r * offsets[j] * Math.sin(a + j * Math.PI * 2 / vet), //rando
                x + r * Math.cos(a + j * Math.PI * 2 / vet),
                y + r * Math.sin(a + j * Math.PI * 2 / vet),
            );

            //makes funny shape :D
            // ctx.lineTo(
            //     x + r * Math.cos(a + Math.floor(j / 2) * Math.PI * 2 / vet),
            //     y + r * Math.sin(a + Math.floor(j / 2) * Math.PI * 2 / vet),
            // )
            // ctx.lineTo(
            //     x + r * Math.cos(a + 0 * Math.PI * 2 / vet),
            //     y + r * Math.sin(a + 0 * Math.PI * 2 / vet),
            // )
            // ctx.lineTo(
            //     x + r * Math.cos(a + j * Math.PI * 2 / vet),
            //     y + r * Math.sin(a + j * Math.PI * 2 / vet),
            // )
        }
        ctx.closePath();
        ctx.stroke();

        //move asteroids
        asteroids[i].x += asteroids[i].velx;
        asteroids[i].y += asteroids[i].vely
        
        //asteroid edges
        if (asteroids[i].x > cnvs.width + asteroids[i].r) {
            asteroids[i].x = 0 - asteroids[i].r
        } else if (asteroids[i].x < 0 - asteroids[i].r) {
            asteroids[i].x = cnvs.width + asteroids[i].r
        }
        if (asteroids[i].y > cnvs.height + asteroids[i].r) {
            asteroids[i].y = 0 - asteroids[i].r
        } else if (asteroids[i].y < 0 - asteroids[i].r) {
            asteroids[i].y = cnvs.height + asteroids[i].r
        }
    }

    

}

if (window.innerWidth <= 500) {
    ship.show = false;  
}
else { ship.show = true; }


console.log(window.innerWidth)



$(window).on("resize", function() {
    draw();
    if (window.innerWidth <= 500) {
        ship.show = false;
        console.log(window.innerWidth)
    }
    else { ship.show = true;}
});



});
