var dns = require('dns');
const { promisify } = require('util');

// Part A of the first question
dns.resolve4('www.mum.edu', function (err, res) {
    if (err) throw err;
    console.log("Normal output:", res);
});

//PART B of the first question
promisify(dns.resolve4)('www.mum.edu').then(res => console.log("Promisfy output:", res));

//PART C of the first question
var finalPromiseToAsync = promisify(dns.resolve4);
async function promiseToDnsWithAsyncAwait() {
    try {
        var result = await finalPromiseToAsync('www.mum.edu');
        console.log("Async/Await output", result);
    } catch (err) {
        console.log("Error", err);
    }
} 
promiseToDnsWithAsyncAwait();