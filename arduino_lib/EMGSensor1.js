const { Board, Sensor } = require("johnny-five")
const board = new Board()

board.on("ready", () => {
