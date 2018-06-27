var util = require('util');
var events = require('events');

var Violin = function () {
    this.msg = "Voilin is Playing!";
}

util.inherits(Violin, events.EventEmitter);



module.exports = Violin;

