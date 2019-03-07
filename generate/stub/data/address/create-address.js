const casual = require('casual');

//Set json-server base json-object
let db = {address: []};

for (let addressId = 0; addressId < 500; addressId++) {
    db.address.push({
        id: addressId,
        country: casual.country,
        city: casual.city,
        street: casual.street,
        number: casual.building_number,
    });
}

console.log(JSON.stringify(db));
