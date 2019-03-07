const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, '/stub/db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/api/employee/:id', getLuminisEmployee);

server.use('/api', router);
server.listen(3000, () => {
    console.log('JSON Server is running')
});

function getLuminisEmployee(req, res) {
    let employee = router.db
        .get('employee')
        .find({id: parseInt(req.params.id)})
        .cloneDeep()
        .value();

    let address = router.db
        .get('address')
        .find({id: employee.addressId})
        .cloneDeep()
        .value();

    employee.address = address;

    res.jsonp(employee);
}