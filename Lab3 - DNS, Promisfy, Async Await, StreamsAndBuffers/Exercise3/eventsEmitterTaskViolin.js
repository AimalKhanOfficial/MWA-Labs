var util = require('util');
var events = require('events');

var Violin = function () {
    this.msg = "Voilin is Playing!";
}

util.inherits(Violin, events.EventEmitter);


Violin.prototype.someFun = function(){
    setInterval(() => {
        this.emit('note');
    }, 1000);
}

module.exports = Violin;

