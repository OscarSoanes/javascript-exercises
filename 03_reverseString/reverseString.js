const reverseString = function(message) {
    let output = "";

    for (let i = message.length; i >= 0;i--) {
        output += message.charAt(i);
    }


    return output;
};

// Do not edit below this line
module.exports = reverseString;
