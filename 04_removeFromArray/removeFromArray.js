const removeFromArray = function(inArray,...args) {
    let array = [];

    inArray.forEach((indexValue) => {
        if (!args.includes(indexValue)) {
            array.push(indexValue);
        }
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
