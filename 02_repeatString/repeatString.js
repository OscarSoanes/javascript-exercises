const repeatString = function(message, times) {
    let output = "";

    if (times < 0) {
        output += "ERROR";
        return output;
    }

    for (i = 0; i < times; i++) {
        output += message
    }
    return output
};

// Do not edit below this line
module.exports = repeatString;
