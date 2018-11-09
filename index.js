const express = require('express');
const projectsRouter = require('./projects/projectsRouter');
const actionsRouter = require('./actions/actionsRouter');

const server = express();

server.use(express.json());
server.use('/projects', projectsRouter);
server.use('/actions', actionsRouter);

// root call
server.get('/', (req, res) => {
    res.status(200).json({ message: 'You are at /'});
});


const port  = 9000;
server.listen(port, () => console.log(`\n API running on port ${port} \n`));