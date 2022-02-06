var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var sensor = new five.Sensor({
    pin: "A0",
    freq : 1000
  });
  var relay = new five.Relay(13);

  sensor.on("change", function () {
    console.log(this.value);
    var val = this.value;
    if (val > 200){
      relay.close()
    }
     else{
      relay.open()
      
    
      }

    });
      this.repl.inject({
          relay: relay  
    })
  });