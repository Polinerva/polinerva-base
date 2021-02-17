const Router = require('express').Router;
const db = require('../../db');

const route = Router();

module.exports = ( app ) => {
  app.use('/users', route);

  route.get('/', (request, response) => {
    db.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  });

  route.get('/:id', (request, response) => {
    const id = parseInt(request.params.id)

    db.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }

      response.status(200).json(results.rows)
    })
  });

  route.post('/', (request, response) => {
    const { name, email } = request.body

    db.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${JSON.stringify(results)}`);
    })
  });


  route.put('/:id', (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body

    db.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  });

  route.delete('/:id', (request, response) => {
    const id = parseInt(request.params.id)

    db.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  });
};
