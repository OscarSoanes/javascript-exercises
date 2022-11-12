const sumAll = function(start, end) {
    let output = 0;

    // switch start and end if start is larger
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    if (start < 0 || end < 0 || typeof(start) != "number" || typeof(end) != "number") {
        return "ERROR";
    }


    for (let i = start; i <= end; i++) {
        output += i;
    }

    return output;
};

// Do not edit below this line
module.exports = sumAll;
