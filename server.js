const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const fs = require('fs')
const taskController = require('./controller/task.controller');
const userController = require('./controller/user.controller');


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
const customCss = fs.readFileSync((process.cwd()+"/swagger/swagger.css"), 'utf8');


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));

// tasks
app.get('/api/tasks', (req, res) => {
    taskController.getTasks().then(data => res.json(data));
});

app.post('/api/task', (req, res) => {
    taskController.createTask(req.body.task).then(data => res.json(data));
});

app.put('/api/task', (req, res) => {
    taskController.updateTask(req.body.task).then(data => res.json(data));
});

app.delete('/api/task/:id', (req, res) => {
    taskController.deleteTask(req.params.id).then(data => res.json(data));
});

// users
app.get('/api/users', (req, res) => {
    userController.getUsers().then(data => res.json(data));
});

app.post('/api/user', (req, res) => {
    userController.createUser(req.body.user).then(data => res.json(data));
});

app.put('/api/user', (req, res) => {
    userController.updateUser(req.body.user).then(data => res.json(data));
});

app.delete('/api/user/:email', (req, res) => {
    userController.deleteUser(req.params.email).then(data => res.json(data));
});

app.get('/api/user', (req, res) => {
    userController.getUser(req.body.user).then(data => res.json(data));
});

// test
app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});






app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})