const fibonacci = function(stopper) {
    
    stopper = parseInt(stopper);
    if (stopper < 0) {
        return "OOPS";
    }
    
    let current = 1;
    let previous = 0;
    let next;

    if (stopper == 1) {
        return current;
    }
    // greater than 1
    for (var index = 2; index <= stopper; index++) {
        next = current + previous;
        previous = current;
        current = next;
    }
    return next;
};

// Do not edit below this line
module.exports = fibonacci;
