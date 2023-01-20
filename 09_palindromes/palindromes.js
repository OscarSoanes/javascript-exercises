const palindromes = function (message) {
    var messageReversed = "";

    for (let index = message.length; index >= 0; index--) {
        messageReversed += message.charAt(index)
    }

    if (message == messageReversed) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
