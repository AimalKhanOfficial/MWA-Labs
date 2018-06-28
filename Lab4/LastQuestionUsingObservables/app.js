var os = require("os");
const { from } = require("rxjs");
const { filter, pipe } = require("rxjs/operators");

var checkMemPromise = function () {
    return new Promise(function (resolve, reject) {
        var totalGBs = os.totalmem() / 1073741824;
        if (totalGBs > 4) {
            resolve("success");
        }
        else {
            reject("The processor Needs atleast 2GB of RAM!");
        }
    });
}

var checkCoresPromise = function () {
    return new Promise(function (resolve, reject) {
        if (os.cpus().length >= 2) {
            resolve("success");
        }
        else {
            reject("Processor not supported");
        }
    });
}

function checkSystem() {
    console.log("Checking your system..");
    from(checkMemPromise())
        .pipe(
            filter(res => res != "success")
        )
        .subscribe(
            res => {
                console.log(res);
            }
        );

    from(checkCoresPromise())
        .pipe(
            filter(res => res != "success")
        )
        .subscribe(
            res => {
                console.log(res);
            }
        );

    console.log("System is checked successfully.");
}

checkSystem();