const express = require('express')
const app = express()
const cors = require('cors');
const port = 3002

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/role-models', (req, res) => res.send({ role_models: ['Jenny', 'Bob', 'Jeff'] }));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))