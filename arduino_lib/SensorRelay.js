var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var sensor = new five.Sensor(
                                {pin:"A0",
                                  threshold:200    })
  var relay = new five.Relay(13);
  var setDelay = false;
  var open = false;
  sensor.on("change", function () {
    console.log(this.value);
    var val = this.value;

    if (val > 300){
        open = true;
        relay.open();
      }else{
        relay.close();
        open = false;
      }
    });

    if (setDelay){
      if(open){
        setInterval(() => {
          relay.open();
          console.log("open")
        },1500);
      }else{
        setInterval(() => {
          relay.close();
          console.log("close")
        },1500);
      }

    }

      this.repl.inject({
          relay: relay
     
    })
  });
