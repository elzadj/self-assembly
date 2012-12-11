// RequestAnimFrame: a browser API for getting smooth animations
var check; 

function blackcanvas()
{
	var canvas = document.getElementById("canvas");

// Initialize the context of the canvas
var ctx = canvas.getContext("2d");
ctx.fillStyle = "rgba(0,0,0,1)";
ctx.fillRect(0,0,1000,600);
check = 1;
}

function stopAnimatis ()
{
	check = 0;
	}

function go()
{



window.requestAnimFrame = (function()
{
  return  window.requestAnimationFrame       || 
		  window.webkitRequestAnimationFrame || 
		  window.mozRequestAnimationFrame    || 
		  window.oRequestAnimationFrame      || 
		  window.msRequestAnimationFrame     ||  
		  function( callback ){
			window.setTimeout(callback, 1000 / 60);
		  };
})();

// Initializing the canvas
// I am using native JS here, but you can use jQuery, 
// Mootools or anything you want
var canvas = document.getElementById("canvas");

// Initialize the context of the canvas
var ctx = canvas.getContext("2d");

// Set the canvas width and height to occupy full window
var W = 1000, H = 600;
canvas.width = W;
canvas.height = H;

// Some variables for later use
var particleCount,
particleCountType1 = document.getElementById("textInputType1").value,
particleCountType2 = document.getElementById("textInputType2").value,
particleCountType3 = document.getElementById("textInputType3").value,
particleCountType4 = document.getElementById("textInputType4").value,

	particles = [],
	particles2 = [],
	particles3 = [],
	particles4 = [],
	minDist = 70,
	dist,
	partmatrix = [];
	particleCount = particleCountType1 + particleCountType2;

// Function to paint the canvas black
function paintCanvas() 
{
	// Set the fill color to black
	ctx.fillStyle = "rgba(0,0,0,1)";
	
	// This will create a rectangle of white color from the 
	// top left (0,0) to the bottom right corner (W,H)
	ctx.fillRect(0,0,W,H);
}

// Now the idea is to create some particles that will attract
// each other when they come close. We will set a minimum
// distance for it and also draw a line when they come
// close to each other.

// The attraction can be done by increasing their velocity as 
// they reach closer to each other

// Let's make a function that will act as a class for
// our particles.

// Now the idea is to create some particles that will attract
// each other when they come close. We will set a minimum
// distance for it and also draw a line when they come
// close to each other.

// The attraction can be done by increasing their velocity as 
// they reach closer to each other

// Let's make a function that will act as a class for
// our particles.

function Particle() 
{
	// Position them randomly on the canvas
	// Math.random() generates a random value between 0
	// and 1 so we will need to multiply that with the
	// canvas width and height.
	
	this.x = Math.random() * W;
	this.y = Math.random() * H;
	
	
	// We would also need some velocity for the particles
	// so that they can move freely across the space
//	this.vx = -1 + Math.random() * 2;
//	this.vy = -1 + Math.random() * 2;

this.vx = (document.getElementById("textInputTemp").value)/100*Math.random() ;
this.vy =  (document.getElementById("textInputTemp").value)/100*Math.random() ;

	// Now the radius of the particles. I want all of 
	// them to be equal in size so no Math.random() here..
	this.radius = 5;
	
	// This is the method that will draw the Particle on the
	// canvas. It is using the basic fillStyle, then we start
	// the path and after we use the `arc` function to 
	// draw our circle. The `arc` function accepts four
	// parameters in which first two depicts the position
	// of the center point of our arc as x and y coordinates.
	// The third value is for radius, then start angle, 
	// end angle and finally a boolean value which decides
	// whether the arc is to be drawn in counter clockwise or 
	// in a clockwise direction. False for clockwise.
	this.draw = function() 
	{
		ctx.fillStyle = "blue";
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		
		// Fill the color to the arc that we just created
		ctx.fill();
	}
	this.draw2 = function() 
	{
		ctx.fillStyle = "red";
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		
		// Fill the color to the arc that we just created
		ctx.fill();
	}
	this.draw3 = function() 
	{
		ctx.fillStyle = "green";
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		
		// Fill the color to the arc that we just created
		ctx.fill();
	}
	this.draw4 = function() 
	{
		ctx.fillStyle = "orange";
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		
		// Fill the color to the arc that we just created
		ctx.fill();
	}
}

// Time to push the particles into an array

function pusharray(particleCountType, array)
{
		for(var i = 0; i < particleCountType; i++)
		array.push(new Particle());

	}

pusharray(particleCountType1, particles);
pusharray(particleCountType2, particles2);
pusharray(particleCountType3, particles3);
pusharray(particleCountType4, particles4);

/*for(var i = 0; i < particleCountType1; i++) 
{
	particles.push(new Particle());
}

// Time to push the particles into an array
for(var i = 0; i < particleCountType2; i++)
 {
	particles2.push(new Particle());
}

for(var i = 0; i < particleCountType3; i++) 
{
	particles3.push(new Particle());
} */

partmatrix.push(particles);
partmatrix.push(particles2);
partmatrix.push(particles3);
partmatrix.push(particles4);

// Function to draw everything on the canvas that we'll use when 
// animating the whole scene.
function draw()
 {
	
	// Call the paintCanvas function here so that our canvas
	// will get re-painted in each next frame
	paintCanvas();
	
	// Call the function that will draw the balls using a loop
	for (var i = 0; i < particles.length; i++)
	 {
		p = particles[i];
		p.draw();
		//p.draw2();
	}
	
	// Call the function that will draw the balls using a loop
	for (var i = 0; i < particles2.length; i++)
	 {
		p = particles2[i];
		p.draw2();
		
	}
	
	// Call the function that will draw the balls using a loop
	for (var i = 0; i < particles3.length; i++) 
	{
		p = particles3[i];
		p.draw3();
		
	}
	
	// Call the function that will draw the balls using a loop
	for (var i = 0; i < particles4.length; i++) 
	{
		p = particles4[i];
		p.draw4();
		
	}
	//Finally call the update function
	for(i = 0; i < partmatrix.length; i++)
	update(partmatrix);
	//update(particles2);
}

// Give every particle some life
function update(array) 
{
	if (check == 1)
{
	
	// In this function, we are first going to update every
	// particle's position according to their velocities
	for (row = 0; row < array.length; ++ row)
	 {
	 	for (col = 0; col < array [row].length; ++ col)
	 	{
	 		p = array[row][col];
		
			// Change the velocities
			p.x += p.vx;
			p.y += p.vy;
			
			// We don't want to make the particles leave the
			// area, so just change their position when they
			// touch the walls of the window
			if(p.x + p.radius > W) 
			p.x = p.radius;
		
			else if(p.x - p.radius < 0) 
			{
				p.x = W - p.radius;
			}
		
			if(p.y + p.radius > H) 
				p.y = p.radius;
		
			else if(p.y - p.radius < 0) 
			{
				p.y = H - p.radius;
			}
		
		// Now we need to make them attract each other
		// so first, we'll check the distance between
		// them and compare it to the minDist we have
		// already set
		
		// We will need another loop so that each
		// particle can be compared to every other particle
		// except itself
			for(var k = row + 1; k < array.length; ++k) 
			{
				for(var l = col + 1; l < array[k].length; ++l) 
				{
						p2 = array[k][l];
						if(k == row+1)
					 distanceWithLine (p, p2)
					 else
						distance(p, p2);
				}	
			}
		}
	
	}
}
else
{
	
	for (row = 0; row < array.length; ++ row)
	 {
	 	for (col = 0; col < array [row].length; ++ col)
	 	{
	 		p = array[row][col];
for(var k = row + 1; k < array.length; ++k) 
			{
				for(var l = col + 1; l < array[k].length; ++l) 
				{
						p2 = array[k][l];
						if(k == row+1)
					 distanceWithLine (p, p2)
					 else
						distance(p, p2);
				}	
			}	
	}}}

}

function setCheck (val)
{
return val;	
	}

// Distance calculator between two particles
function distanceWithLine(p1, p2) 
{
	var dist,
		dx = p1.x - p2.x;
		dy = p1.y - p2.y;
	
	dist = Math.sqrt(dx*dx + dy*dy);
			
	// Draw the line when distance is smaller
	// then the minimum distance
	if(dist <= minDist) 
	{
		
		// Draw the line
		ctx.beginPath();
		ctx.strokeStyle = "rgba(255,255,255,"+ (1.2-dist/minDist) +")";
		ctx.moveTo(p1.x, p1.y);
		ctx.lineTo(p2.x, p2.y);
		ctx.stroke();
		ctx.closePath();
		
		
		
		// Some acceleration for the partcles 
		// depending upon their distance
		var ax = (document.getElementById("textInputPress").value)*Math.random()/50000,
			ay = (document.getElementById("textInputPress").value)*Math.random()/50000;
		
		// Apply the acceleration on the particles
		p1.vx -= ax;
		p1.vy -= ay;
		
		p2.vx += ax;
		p2.vy += ay;
	}
}

function distance(p1, p2) 
{
	var dist,
		dx = p1.x - p2.x;
		dy = p1.y - p2.y;
	
	dist = Math.sqrt(dx*dx + dy*dy);
			
	// Draw the line when distance is smaller
	// then the minimum distance
	if(dist <= minDist) 
	{
		
		// Some acceleration for the partcles 
		// depending upon their distance
		var ax = (document.getElementById("textInputPress").value)*Math.random()/100000,
			ay = (document.getElementById("textInputPress").value)*Math.random()/100000 ;
		
		// Apply the acceleration on the particles
		p1.vx -= ax;
		p1.vy -= ay;
		
		p2.vx += ax;
		p2.vy += ay;
	}
}

// Start the main animation loop using requestAnimFrame
function animloop() 
{
	draw();
	requestAnimFrame(animloop);
}

animloop();
}

function updateInput(id, val) 
{
      document.getElementById(id).value=val; 
}

function updateVal(id) 
{
	return document.getElementById(id).value;
	}
    
	function print_2d_string_array (array)
{
	document.writeln ("<table border>");
	var row;
	for (row = 0; row < array.length; ++ row)
	{
		document.writeln (" <tr>");
		var col;
		for (col = 0; col < array [row].length; ++ col)
			document.writeln ("  <td>" + array [row] [col] + "</td>");
		document.writeln (" </tr>");
	}
	document.writeln ("</table>");
}