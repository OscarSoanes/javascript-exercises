const palindromes = function (message) {
    // capitals
    message = message.toLowerCase()
    // letters
    message = message.replace(/\W/g, "")
    // spaces
    message = message.replace(" ", "")

    // core palindrome
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
