const casual = require('casual');

const types = ['SOFTWARE ENGINEER', 'SOFTWARE ENGINEER', 'PROJECT MANAGER'];

//Set json-server base json-object
let db = {employee: []};

for (let employeeId = 0; employeeId < 500; employeeId++) {
    let firstName = casual.first_name;
    let lastName = casual.last_name;
    let role = getRandomItemFrom(types);

    db.employee.push({
        id: employeeId,
        firstName: firstName,
        lastName: lastName,
        role: role,
        addressId: employeeId
    });
}

db.employee = shuffle(db.employee);
console.log(JSON.stringify(db));

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function getRandomItemFrom(items) {
    return items[Math.floor(Math.random() * items.length)];
}
