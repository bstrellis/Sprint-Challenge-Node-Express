const express = require('express');
const server = express();
server.use(express.json());
const port  = 9000;
server.listen(port, () => console.log(`\n API running on port ${port} \n`));