const findTheOldest = function(people) {
    people.forEach(element => {
        if (element.yearOfDeath == undefined) {
            element.yearOfDeath = new Date().getFullYear();
        }
    });

    const sorted = people.sort((a, b) => 
        a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth ? 1 : -1
    )

    return sorted[0]
};

// Do not edit below this line
module.exports = findTheOldest;
