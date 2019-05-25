console.log('Start Code');

// basic object function

const circle = {
  radius: 1,
  location: { x: 1, y: 1 },
  draw: function() {
    document.getElementById("demo").innerHTML = "Draw";
  }
};
circle.draw();

// factorz function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('Draw');
    }
  };
}

const circle = createCircle(1);

// constructor function
function Circle(radius) {
  this.radius = radius,
  this.draw = function() {
    console.log('Draw');
  }
}

const another = new Circle(1);

//23-30
