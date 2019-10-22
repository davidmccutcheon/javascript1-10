function sleep_in(weekday,vacation) {
    return (weekday === false || vacation === true);
}

function monkey_trouble(a_smile, b_smile) {
    return (a_smile === true && b_smile) || (a_smile === false && b_smile === false);
}

function string_times(string, num) {
    var result = "";
    for (var i = 0; i < num; i ++) {
        result += string;
    }
    return result;
}

function front_times(string, num) {
    var front = string.substring(0, 3);
    var result = "";
    for (var i = 0; i < num; i++) {
        result += front;
    }
    return result;
}

function string_bits(string) {
    var result = "";
    var stringLength = string.length;
    var num = 0;

    while (num < stringLength) {
        var end = num + 1;
        var bit = string.substring(num, end);
        if (num % 2 === 0) {
            result += bit;
        }
        num++;
    }

    return result;
}

function caughtSpeeding(speed, bool) {

    var ticketAddress = 3;
    if (bool === false) {
        if (speed <= 60) {
            ticketAddress = 0;
        }
        if (speed >= 61 && speed <= 80) {
            ticketAddress = 1;
        }
        if (speed > 80) {
            ticketAddress = 2;
        }
    } else {
        if (speed <= 65) {
            ticketAddress = 0;
        }
        if (speed >= 66 && speed <= 85) {
            ticketAddress = 1;
        }
        if (speed > 85) {
            ticketAddress = 2;
        }
    }
    return ticketAddress;
}

function fizz_buzz (num) {
    var result = "";
    var numBit = num;
    if (num % 3 === 0) {
        result+= "Fizz";
        numBit = "";
    }
    if (num % 5 === 0) {
        numBit = "";
        result+= "Buzz";
    }
    if (num % 5 !== 0 && num % 3 !== 0) {
        numBit = num + "!";
        result += numBit;
    }
    return result;
}

function teaParty(tea, candy) {

    var goodness = 0;
    if (tea >= 5 && candy >= 5) {
        goodness = 1;
        var teaMakesGreat = doubleNumber(candy);
        var candyMakesGreat = doubleNumber(tea);

        if (tea >= teaMakesGreat) {
            goodness = 2;
        }
        if (candy >= candyMakesGreat) {
            goodness = 2;
        }
    }
    return goodness;
}

function doubleNumber (x) {
    x *= 2;
    return x;
}

function blackjack (num1, num2) {
    var LIMIT = 21;
    if (num1 > LIMIT && num2 > LIMIT) {
        return 0;
    } else {
        if ((num1 >= num2 && num1 <= LIMIT) || num2 > LIMIT) {
            return num1;
        } else {
            return num2;
        }
    }
}

function loneSum (a, b, c) {
    var result = 0;
    if (a === b && b === c) {
        a = 0;
        b = 0;
        c = 0;
    }
    if (a === b) {
        a = 0;
        b = 0;
    }
    if (b === c) {
        b = 0;
        c = 0;
    }
    if (a === c) {
        a = 0;
        c = 0;
    }
    result += (a + b + c);
    return result;
}

function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times("true", 6);
    document.getElementById("output").innerHTML += front_times("true", 6);
    document.getElementById("output").innerHTML += string_bits("hello");
    document.getElementById("output").innerHTML += caughtSpeeding(90, true);
    document.getElementById("output").innerHTML += fizz_buzz(56);
    document.getElementById("output").innerHTML += teaParty(2, 5);
    document.getElementById("output").innerHTML += blackjack(20, 22);
    document.getElementById("output").innerHTML += loneSum(2, 5, 5);
}

// DEBUGGING: console.log(i);