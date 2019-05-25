console.log('Start Code');

// basic object function
/*
const circle = {
  radius: 1,
  location: { x: 1, y: 1 },
  draw: function() {
    document.getElementById("demo").innerHTML = "Draw";
  }
};
circle.draw();
*/
// factorz function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      document.getElementById("demo1").innerHTML = "Draw 1";
    }
  };
}

const circle1 = createCircle(1);
circle1.draw();

// constructor function
function Circle(radius) {
  this.radius = radius,
  this.draw = function() {
    document.getElementById("demo2").innerHTML = "Draw 2";
  }
}

const circle2 = new Circle(1);
circle2.draw();
