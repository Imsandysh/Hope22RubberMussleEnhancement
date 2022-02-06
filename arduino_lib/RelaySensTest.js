var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var sensor = new five.Sensor("A0")
  var relay = new five.Relay(13);

  sensor.on("change", function () {
    console.log(this.value);
    var val = this.value;

    if (val > 200){
      relay.open()
      setTimeout(function() {
        relay.close();
    }, 3000);
      }
    
    });
      this.repl.inject({
          relay: relay
     
    })
  });