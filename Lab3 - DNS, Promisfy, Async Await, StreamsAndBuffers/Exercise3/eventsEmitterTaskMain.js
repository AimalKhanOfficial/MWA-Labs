var violinObjRef = require('./eventsEmitterTaskViolin');

//creating an instance of violin obj
var violinInstrument = new violinObjRef();

violinInstrument.on('note', function(){
    console.log('violin is playing music!');
});

setInterval(() => {
    violinInstrument.emit('note');
}, 1000);


