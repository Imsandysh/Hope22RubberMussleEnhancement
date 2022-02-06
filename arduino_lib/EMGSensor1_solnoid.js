var five = require("johnny-five");
var board = new five.Board();

var contract = false;
var old_contract = false;
var state_lift = "up";

board.on("ready", function(){
  const sensorForearm = new five.Sensor({
                                          pin:"A0",
                                          threshold:50,
                                        });
  var liftRelay = new five.Relay(13);
  var liftRelay = new five.Relay(12);

  this.repl.inject({
    lift: liftRelay,
    sensor: sensorForearm

  });
  

  sensorForearm.on("change", function () {
    console.log(this.value);
    var val = this.value;

    if (val > 100){
      liftRelay.toggle();
      if (state_lift == "up"){
        state_lift = "down";
      }else{
        state_lift = "up";
      }
      console.log(state_lift)
    }
  });


});
 
