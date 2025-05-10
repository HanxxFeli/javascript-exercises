const repeatString = function(input, count) {
    let initialCount = 0;
    let output = "";

    while (initialCount < count) { 
        output += input;
        initialCount++;
    }

    return output;
};

// Do not edit below this line
module.exports = repeatString;
