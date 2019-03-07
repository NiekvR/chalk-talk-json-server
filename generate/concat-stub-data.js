const jsonConcat = require('json-concat');

jsonConcat({src: "stub/data", dest: "stub/db.json"}, (json) => console.log(json));
