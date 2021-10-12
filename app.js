
// Exercice 1

function showNumbersFrom() {
    console.log("Exercise 1, a");
    var n = 20;
    for (i = 1; i <= n; i++) {
        console.log(i);
    }
}

function showOddNumbersFrom() {
    console.log("Exercise 1, b");
    var n = 20;
    for (var i = 1; i <=n; i+=2) {
        console.log(i);
    }
}

// Exercice 2

function sumOfElemesOfArr() {
    console.log("Exercise 2, a");
    var list = [2, 3, 5, 7, 5, 3];
    sum = 0;
    for (var i = 0; i < list.length; i++) {
        sum = sum + list[i];
    }
    console.log(sum);
}

function maximumOfElemesOfArr() {
    console.log("Exercise 2, b");
    var list = [2, 3, 5, 7, 5, 3];
    var max = list[0];
    for ( var i = 1; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }
    console.log(max);
}

function elementAppearArr() {
    console.log("Exercise 2, c");
    var list = [2, 3, 5, 7, 5, 3];
    var listNumbers = [2, 3, 5, 7];
    for ( var i = 0; i < listNumbers.length; i++) {
        var repeat = 0;
        for ( var y = 0; y < list.length; y++) {
            if (list[y] === listNumbers[i]) repeat++; 
       }
       console.log(listNumbers[i] + ' count is ' + repeat);
    }
}

// Exercice 3

function fibonacci() {
    console.log("Exercise 3");
    console.log("Fibonacci series of the first 50 terms");
    var n = 50;
    var firstPastNumber = 0;
    var secondPastNumber = 1;
    for ( i = 1; i <= n; i++ ) {
        console.log(firstPastNumber);
        var nextNumber = firstPastNumber + secondPastNumber;
        firstPastNumber = secondPastNumber;
        secondPastNumber = nextNumber;
    }
}

// Exercice 4

function printFizzBuzz() {
    console.log("Exercise 4");
    var n = 100;
    for ( var i = 1; i <= n; i++) {
        if ( i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }  else if  ( i % 5 == 0) {
            console.log("Buzz");
        } else if ( i % 3 == 0 ) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}