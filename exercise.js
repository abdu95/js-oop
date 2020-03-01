function Stopwatch() {
  let startTime,
    endTime,
    started = false,
    stopped = false,
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
    if(started){
        throw new Error('Stopwatch has already started')
    }
    startTime = Date.now();
    started = true;
  };
  this.stop = function() {
    if(stopped){
        throw new Error('Stopwatch is not started')
    }
    endTime = Date.now();
    duration = endTime - startTime;
    stopped = true;
  };
  this.reset = function() {
    duration = 0;
  };
}
