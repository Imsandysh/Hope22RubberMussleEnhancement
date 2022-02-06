var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var sensor = new five.Sensor(
                                {pin:"A0",
                                  threshold:100    })
  var relay = new five.Relay(13);
  var setDelay = false;
  var open = false;
  sensor.on("change", function () {
    console.log(this.value);
    var val = this.value;

    if (val > 100){
        open = true;
        //relay.toggle();
      }else{
        //relay.close();
        relay.toggle();
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
         // relay.close();
          console.log("close")
        },1500);
      }

    }

      this.repl.inject({
          relay: relay
     
    })
  });
