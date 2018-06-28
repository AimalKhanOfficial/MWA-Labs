var os = require("os");

var checkMemPromise = function () {
    return new Promise(function(resolve, reject){
        var totalGBs = os.totalmem() / 1073741824;
        if(totalGBs > 4){
            resolve("success");
        }
        else {
            reject("The processor Needs atleast 2GB of RAM!");
        }
    });
}

var checkCoresPromise = function () {
    return new Promise(function(resolve, reject){
        if(os.cpus().length >= 2){
            resolve("success");
        }
        else {
            reject("Processor not supported");
        }
    });
}

async function checkSystem(){
    try {
        console.log("Checking your system..");
        await checkMemPromise();
        await checkCoresPromise();
        console.log("System is checked successfully!");
    }
    catch(err){
        console.log(err);
    }
}

checkSystem();