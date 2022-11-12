const removeFromArray = function (list = [], ...inputs) {

    for (const input of inputs) {
        for (let i = 0; i < list.length; i++) {
            if (typeof (list[i]) !== typeof (input)) {
                continue;
            }

            if (list[i].toString() === input.toString()) {
                list.splice(i, 1);
            }
        }
    }



    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
