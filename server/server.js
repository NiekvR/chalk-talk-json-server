const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/api/luminis', getEmployees);
server.get('/api/luminis/:id', getEmployee);
server.post('/api/luminis', postEmployee);

server.use('/api', router);
server.listen(3000, () => {
    console.log('JSON Server is running')
});

function getEmployees(req, res) {
    let employees = router.db
        .get('luminis')
        .cloneDeep()
        .value();

    employees.forEach(employee => {
        const car = router.db
            .get('car')
            .find({luminisId: employee.id})
            .cloneDeep()
            .value();

        employee.car = car;
    });

    res.jsonp(employees);
}

function getEmployee(req, res) {
    let employee = router.db
        .get('luminis')
        .find({id: parseInt(req.params.id)})
        .cloneDeep()
        .value();

    const car = router.db
        .get('car')
        .find({luminisId: employee.id})
        .cloneDeep()
        .value();

    employee.car = car;

    res.jsonp(employee);
}

function postEmployee(req, res) {
    let employeeCollection = router.db.get('luminis');

    console.log(req.body);
    employeeCollection.insert(req.body).write();

    res.jsonp(employeeCollection.find({firstName: req.body.firstName, lastName: req.body.lastName}).value());
}