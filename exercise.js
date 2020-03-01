function Stopwatch() {
  let startTime,
    endTime,
    duration = 0;

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    },
    set: function(value) {
      duration = value;
    }
  });

  this.start = function() {
    // if(){
    //     throw new Error('Stopwatch has already started')
    // }
    startTime = Date.now();
  };
  this.stop = function() {
    // if(){
    //     throw new Error('Stopwatch is not started')
    // }
    endTime = Date.now();
    duration = endTime - startTime;
  };
  this.reset = function() {
    duration = 0;
  };
}
