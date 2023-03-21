const express = require('express');

function createServer(config) {
  const app = express();

  // Define middleware
  app.use(express.json());

  // Define routes
  app.post('/users', async (req, res, next) => {
    try {
      const { name, email } = req.body;
      const user = await config.userUseCases.createUser({ name, email });
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  });

  app.get('/users/:userId', async (req, res, next) => {
    try {
      const { userId } = req.params;
      const user = await config.userUseCases.getUserById(userId);
      if (!user) {
        res.status(404).send();
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      next(error);
    }
  });

  // Define error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  return {
    start: () => {
      const { port } = config;
      app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
      });
    },
    stop: () => {
      console.log('Server stopped');
    },
  };
}

module.exports = { createServer };
