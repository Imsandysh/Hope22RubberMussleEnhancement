var five = require("johnny-five");
//var express = require("express");
//var app = express();
var board = new five.Board();
//const port = 8080

board.on("ready", function(){
    var relay = new five.Relay(13);
    //var sensor = new five.Sensor("a0");
    console.log("toggle");
    relay.toggle();
    this.repl.inject({
        relay:relay,
        //sensor:sensor
      });

}); 
/*

app.get('/', (req, res) => {
    res.send('Hello World!');
    led.off()
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
*/


