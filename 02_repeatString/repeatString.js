const repeatString = function(string, number) {
    let value;
    while (number > 0) {
        value += string;
        number--;
    }
    return value;
};

// Do not edit below this line
module.exports = repeatString;
