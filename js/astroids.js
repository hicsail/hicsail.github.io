//this doesn't work with mobile
//read comments pl0x
$(function () {

const FPS = 30; //frames per second
const FRAMES = 1000 / FPS;
const SHIP_SIZE = 30 //ship height (rn in pixel, how will this work on mobile?)
const TURN_SPEED = 360 //turn speed - degree speed / second
const SHIP_VELOCITY = 12 //acclerates by X pixels / s^2
const FRICTION = 0.1
const SHIP_EXPLODE_DUR = 0.7;
const SHIP_INVINC = 1; //invincibility time after death
const BLINK_TIME = 0.1; //blinking duration

const LASER_DIST = 0.3 //how far laser will travel, proportion to screen size
const LASER_MAX = 5; //laser on screen
const LASER_SPD = 700; //speed n pixels per sec


const ASTR_SPEED = 17
var ASTR_COUNT =  ASTR_COUNT = Math.ceil(window.innerWidth / 40);//render asteroids as a ratio to window size
var ASTR_SIZE = Math.ceil(window.innerWidth / 13);
// const ASTR_VERT = 4
// const ASTR_ZIG = 0.5 //the random jaggedness of an asteroid

const SHOW_BOUND = false; //show bounds for 
const PRTCLE_COUNT = 8;

if ( $(window).width() < 700 ) {
    ASTR_COUNT = Math.ceil(window.innerWidth / 20);
    ASTR_SIZE = Math.ceil(window.innerWidth / 7);
}

console.log(ASTR_COUNT);


// initialize the canvas area by selecting the canvas element and populating it 
var cnvs = $('#game-canvas').get(0);
var ctx = cnvs.getContext("2d");
var colors = ['#E0533B', '#EBB54A', '#94ED6B', '#73A6FC']

function draw () {
    cnvs.width = $(window).width();
    cnvs.height = window.innerHeight;
}

draw();







//ship object
var ship = newShip();
function newShip() {
    return {
        show: true,
        canShoot: true,
        lasers: [],
        x: cnvs.width / 2,
        y: cnvs.height / 2,
        r: SHIP_SIZE / 2,
        blinkNum: Math.ceil(SHIP_INVINC / BLINK_TIME),
        blinktime: Math.ceil(BLINK_TIME * FPS),
        explosion: 0,
        a: 90 / 180 * Math.PI, //angle from degrees to in radians
        rot: 0, //rotation speed
        thrusting: false,
        thrust: { //thrust speed 
            x: 0,
            y: 0
        }
    }
}
function shoot() {
    // (ship.canShoot && ship.lasers.length < LASER_MAX)
    if (ship.canShoot && ship.lasers.length < LASER_MAX) {
        ship.lasers.push({
            x: ship.x + ship.r * Math.cos(ship.a),
            y: ship.y - ship.r * Math.sin(ship.a),
            dist: 0,
            xv: LASER_SPD * Math.cos(ship.a) / FPS,
            yv: LASER_SPD * Math.sin(ship.a) / FPS

        })
    }
    
}

function explodeShip() {
    ship.explosion = Math.ceil(SHIP_EXPLODE_DUR * FPS);
}

//Builds a new asteroid object based on the SAIL Rectangles and triangles shape 
function newAsteroid(x, y, r) {
    var asteroid = {
        x: x,
        y: y, 
        velx: Math.random() > 0 ? Math.random() * ASTR_SPEED / FPS * (Math.random() < 0.5 ? 1 : -1) : 0.5 * ASTR_SPEED / FPS * (Math.random() < 0.5 ? 1 : -1), //asteroid velocity
        vely: Math.random() > 0 ? Math.random() * ASTR_SPEED / FPS * (Math.random() < 0.5 ? 1 : -1) : 0.5 * ASTR_SPEED / FPS * (Math.random() < 0.5 ? 1 : -1),  //asteroid velocity
        r: r, 
        a: Math.random() * Math.PI * 2,
        offset: [], //change how far each vertex is from the center

        edges: Math.random() > 0.5 ? 4 : 3,
        color: colors[Math.floor(Math.random() * colors.length)], 
        randDirection: Math.random() > 0.5 // will determine which way the triangle is turned 


    }

    // for (var i = 0; i < asteroid.edges; i ++) {
    //     asteroid.offset.push(Math.random() * ASTR_ZIG * 2 + 1 - ASTR_ZIG);
    // }
    return asteroid
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
        asteroids.push(newAsteroid(x,y, Math.ceil(ASTR_SIZE / 2)))
    }
}

function dieAsteroid (index) {
    var x = asteroids[index].x;
    var y = asteroids[index].y;
    var r = asteroids[index].r;

    //split asteroids in two
    if (r ==  Math.ceil(ASTR_SIZE / 2)) {
        asteroids.push(newAsteroid(x,y, Math.ceil(ASTR_SIZE / 3)))
        asteroids.push(newAsteroid(x,y, Math.ceil(ASTR_SIZE / 3)))
    } else if (r ==  Math.ceil(ASTR_SIZE / 3)) {
        asteroids.push(newAsteroid(x,y, Math.ceil(ASTR_SIZE / 4)))
        asteroids.push(newAsteroid(x,y, Math.ceil(ASTR_SIZE / 4)))
    }
    asteroids.splice(index,1);
}



function newParticle(l,h) {
    var particle = {
        x: l,
        y: h,
        r: Math.random() * 10,
        len: Math.sqrt((l*l) + (h*h)),
        color: colors[Math.floor(Math.random() * colors.length)], //may change
        angle: Math.atan2(h,l),
        vel: {
            x: Math.sin(Math.atan2(h,l)) * (Math.random() ),
            y: Math.cos(Math.atan2(h,l)) * (Math.random() )
        },
        reset: true
    }
    return particle
}


function createParticles (x,y) {
    //this function is so cancer and unecessary but it's alrady been made so oh well
    particles = []; 
    for (var i = 0; i < PRTCLE_COUNT; i++) {
        particles.push(newParticle(x,y))
    }
    console.log(particles);
}

var asteroids = [];
createAsteroids();

var particles = [];
createParticles(window.innerWidth / 2 , window.innerHeight / 2);

function distanceBetweenPoints (x1,y1,x2,y2) {
    return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
}


// The following keyup and keydown event handlers involve what happens when you press the arrow keys and when you shoot using the spacebar
//event handlers
$(document).keydown(function(event){
    switch(event.which) {
        case 32: //rotate left
            ship.canShoot= true;
            shoot();
            event.preventDefault();
            break;

        case 37: //rotate left
            ship.rot = TURN_SPEED / 180 * Math.PI / FPS
            event.preventDefault();
            break;
            
        case 38: // forward 
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
        case 32: 
            ship.canShoot = false;
            break; 

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

// The Following four $(document).hammer functions are event handlers for mobile touches. So when use presses on screen, double taps, and single taps will render different events

// handles rotation when user presses down on the screen
$(document).hammer().bind("press", (e) => {
    var xPos = e.gesture.center.x;
    // var yPos = e.gesture.c[0].pageY; 

    if (xPos < ship.x) {
        ship.rot = TURN_SPEED / 180 * Math.PI / FPS
    }
    else if (xPos > ship.x) {
        ship.rot = -1 * TURN_SPEED / 180 * Math.PI / FPS
    }
    
    });


    // moves ship when user double taps
$(document).hammer().bind("doubletap", (e) => {
        ship.thrusting = true
    
    let tapped=setTimeout(function(){
        ship.thrusting = false
      },750); 


});

// starts shooting on tap 
$(document).hammer().bind("tap", (e) => {
    ship.canShoot = true
    shoot()
    e.preventDefault()
});

$(document).hammer().bind("pressup", (e) => {
    ship.rot = 0
    ship.thrusting = false
});


setInterval(update, FRAMES); //predefined canvas method for game loop


function update(){

    ctx.fillStyle = "black";
    ctx.fillRect(0,0,cnvs.width,cnvs.height);

    var expl = ship.explosion > 0; //if explision time = 0 then ship is not exploding
    var blinkOn = ship.blinkNum % 2 == 0; 

    //draw ship
    if (ship.show && (!expl)) {
        if (blinkOn) {
            ctx.strokeStyle = "white",
            ctx.lineWidth = SHIP_SIZE / 15;
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
        }

        if (ship.blinkNum > 0) {
            ship.blinktime--;
            

            if  (ship.blinktime == 0) {
                ship.blinktime= Math.ceil(BLINK_TIME * FPS);
                ship.blinkNum--;
            } 
        }
        
    } else {
        //explosion
        
    }

    //draw laser
    if (!expl) {
    for (var i = 0; i < ship.lasers.length; i++) {
        ctx.fillStyle = "salmon";
        ctx.beginPath()
        ctx.arc(ship.lasers[i].x, ship.lasers[i].y, SHIP_SIZE / 15, 0, Math.PI *2, false);
        ctx.fill();


    }
}

    

    //move laser
    if (!expl) {
        for (var i = ship.lasers.length - 1; i >= 0; i--) {
            if (ship.lasers[i].dist > LASER_DIST * cnvs.width) {
                ship.lasers.splice(i,1);
                continue;
            }
    
            ship.lasers[i].x += ship.lasers[i].xv
            ship.lasers[i].y -= ship.lasers[i].yv
    
            ship.lasers[i].dist += Math.sqrt(Math.pow(ship.lasers[i].xv, 2),Math.pow(ship.lasers[i].yv, 2))
        }
    }
    

        //thrusting 
        if (ship.thrusting) {
            ship.thrust.x += SHIP_VELOCITY * Math.cos(ship.a) / FPS
            ship.thrust.y -= SHIP_VELOCITY * Math.sin(ship.a) / FPS
        } else {
            ship.thrust.x -= FRICTION * ship.thrust.x
            ship.thrust.y -= FRICTION * ship.thrust.y
        }

        // if (SHOW_BOUND) {
        //     ctx.strokeStyle = "blue";
        //     ctx.beginPath();
        //     ctx.arc(ship.x, ship.y, ship.r, 0, Math.PI * 2, false);
        //     ctx.stroke();
        // }

        //rotate ship
        if (!expl) {
            ship.a += ship.rot;

            //move ship
            ship.x += ship.thrust.x;
            ship.y += ship.thrust.y;

            //collision check
            if (ship.blinkNum == 0) { //check for collisions when not invincible
                for (var i = 0; i < asteroids.length; i++) {
                    if (distanceBetweenPoints(ship.x, ship.y, asteroids[i].x, asteroids[i].y) < ship.r + (asteroids[i].r * 0.707)) {
                        dieAsteroid(i);
                        explodeShip();
                    } 
                }
            }
        
        } else {
            ship.canShoot = false;


            for (var i = 0;  i < particles.length; i++) {
                if (particles[i].reset == true) {
                    particles[i].x = ship.x;
                    particles[i].y = ship.y;
                }
                
            }



            
            //start moving particles from ship 
            for (var i = 0;  i < particles.length; i++) {

                //don't want to set particles x,y back to ship lest it don't move here anymore
                particles[i].reset = false;

                

                //move particle
                // length=this.getLength(); this._y =Math.cos(angle)*length; this._x= Math.sin(angle)*length;
                // angle=this.getAngle(); this._y=Math.cos(angle)*length; this._x=Math.sin(angle)*length;
                
                //draw particle
                ctx.strokeStyle = particles[i].color;
                ctx.beginPath();
                ctx.arc(particles[i].x, particles[i].y, particles[i].r, 0, Math.PI *2, false);
                ctx.stroke();

                //TODO: right now the explosions explode gradually but they need to accerlerate for coolness, look at ship thurstig code
                particles[i].x += (particles[i].vel.x) * 3;
                particles[i].y += (particles[i].vel.y) * 3;

            }            

            ship.explosion--;

            

            if (ship.explosion == 0) {
                for (var i = 0;  i < particles.length; i++) {  //able to set the particles x,y position back to ship position

                    particles[i].reset = true;
                }

                ship = newShip();
            }
        }


        //ship at edges
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
    

    //draw asteroids
    ctx.lineWidth = SHIP_SIZE / 25;
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
        rand = asteroids[i].randDirection

        if (asteroids[i].velx == 0 || asteroids[i].vely == 0) {
            console.log(i)
        }

        //draw random path asteroid
        ctx.beginPath();
        ctx.moveTo(
            // x + r * offsets[0] * Math.cos(a), //randomness
            // y + r * offsets[0] * Math.sin(a) //randomness
            x + r * Math.cos(a),
            y + r * Math.sin(a)
        );
            
        for (var j = 1; j < vet; j++) {
            // handles triangle case 
            if (vet === 3) {
                // handles which way right triangle is turned
                if (j === 1) {
                    ctx.lineTo(
                        x + r * Math.cos(a) + (rand ? r : 0),
                        y + r * Math.sin(a) + (!rand ? r : 0),
                    );
                }
                else {
                    ctx.lineTo(
                        x + r * Math.cos(a) + r,
                        y + r * Math.sin(a) + r,
                    );
                }
            }
            // generating rectangle
            else {
                ctx.lineTo(
                    x + r * Math.cos(a + j * Math.PI * 2 / vet),
                    y + r * Math.sin(a + j * Math.PI * 2 / vet),
                );
      
            }

        }

        ctx.closePath();
        ctx.stroke();

        if (SHOW_BOUND) {
            ctx.strokeStyle = "pink";
            ctx.beginPath();
            ctx.arc(x, y, r * 0.707, 0, Math.PI * 2, false); 
            ctx.stroke();
        }

        //0.707 (or sqrt(2) / 2) = proprtion to multiply r by so the circle is inscribed in square
        //otherwise the square is inscribed in circle and less realistic collision
    }

    //laser asteriod collision
    var ax, ay, ar, lx, ly;
    if (!expl) {
        for (var i = asteroids.length - 1; i >= 0; i--) {
            //asteroids prop
            ax = asteroids[i].x; ay = asteroids[i].y;ar = asteroids[i].r;
    
            for (var j = ship.lasers.length - 1; j >= 0; j--) {
                //laser props
                lx = ship.lasers[j].x
                ly = ship.lasers[j].y
    
                if (distanceBetweenPoints(ax, ay, lx, ly) < ar) {
                    //remove laser
                    ship.lasers.splice(j, 1);
    
                    //destroy asteroid
                    dieAsteroid(i);
                    break;
                }
            } 
        }
    }
    

    

    if (!expl) {
        for (var i = 1; i < asteroids.length; i++) {
            //move asteroids
            asteroids[i].x += asteroids[i].velx;
            asteroids[i].y += asteroids[i].vely;
            
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
    } else {
        // createAsteroids();
    }


 

}



if (window.innerWidth <= 500) {
    ship.show = false;  
}
else { ship.show = true; }


console.log(window.innerWidth)



$(window).on("resize", function() {
    draw();
    if (window.innerWidth <= 900) {
        ship.show = false;
        console.log(window.innerWidth)
    }
    else { ship.show = true;}
});



});
