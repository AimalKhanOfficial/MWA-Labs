const { from } = require('rxjs');
const { filter } = require('rxjs/operators');

Array.prototype.even = function () {
    console.log(this);
    var myEvenFunction = function () {
        var evenValuesArr = [];
        from(this)
            .pipe(
                filter(values => values % 2 == 0)
            )
            .subscribe(
                evenValues => {
                    evenValuesArr.push(evenValues);
                }
            );
        console.log(evenValuesArr);
    };
    setTimeout(myEvenFunction.bind(this), 0);
}

Array.prototype.odd = function () {
    var myOddFunction = function () {
        var oddValuesArr = [];
        from(this)
            .pipe(
                filter(values => values % 2 != 0)
            )
            .subscribe(
                oddValues => {
                    oddValuesArr.push(oddValues);
                }
            );
        console.log(oddValuesArr);
    };
    var finalFun = myOddFunction.bind(this);
    setTimeout(finalFun, 0);
}

console.log('Start');
[1, 2, 3, 4, 5, 6, 7, 8].even();
[1, 2, 3, 4, 5, 6, 7, 8].odd();
console.log('End');