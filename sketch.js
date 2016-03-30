

function setup() {
  console.log('setting up');
  createCanvas(400, 400);
  // Create object
  walker = new Walker();
  background(255);

}

function draw() {

  walker.step();
  walker.display();
}

function Walker (){
	this.x = 150;
	this.y = 150;


	this.display = function(){
		stroke(0);
		point(this.x,this.y);
	}

	this.step = function(){
		var stepSize = 1;
		var r = random(1);
		var s = random(1);

		if(s < 0.04){//4% chance of large step
			stepSize = 10;
		}


		if (r < 0.25) {this.x+= stepSize;} 
		else if (r < 0.50) {this.x-=stepSize;} 
		else if (r < 0.75) {this.y+=stepSize;} 
		else {this.y-=stepSize;}
	}
}