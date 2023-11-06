const reverseString = function(string) {
    let value = '';
    for (let i= string.length; i >= 0; i--) {
        value += string.charAt(i);
    }
    return value;
};

// Do not edit below this line
module.exports = reverseString;
