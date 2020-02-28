//Factory function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw");
    }
  };
}

const circle = createCircle(1);

//instead of writing 'radius: radius' we can simply write radius
//draw is a property of which value is the function
//draw is  method