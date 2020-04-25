const express = require('express');
const app = express();
const cors = require('cors');
const port = 3002;

const POSTGRES_HOST = '127.0.0.1';
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: POSTGRES_HOST,
    user: 'ben',
    password: '',
    database: 'test_db',
  }
});
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/role-models', (req, res) => res.send({ role_models: ['Jenny', 'Bob', 'Jeff'] }));

app.get('/users', async (req, res) => {
  const results = await knex.select().from('users');
  const users = results.map((obj) => obj.name);
  res.send({ users });
});

app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const results = await knex.select().from('users').where({ id: userId });
  const users = results.map((obj) => obj.name);
  res.send({ users });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))