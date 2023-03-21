const { createServer } = require('./server');
const { UserUseCases } = require('./application/user/userUseCases');
const { UserService } = require('./domain/user/userServices');
const { UserDb } = require('./infrastructure/user/userDb');
const { UserRepository } = require('./application/user/userRepository');
const { Email } = require('./domain/user/userValueObjects');

const userDb = new UserDb({ db: 123 /* your database connection */ });
const userRepository = new UserRepository({ userDb });
const userService = new UserService({ userRepository });
const userUseCases = new UserUseCases({ userService });

const email = new Email('user@example.com');
userUseCases.createUser({ name: 'User', email: email.value }).then(console.log);

const server = createServer(/* your server configuration */);
server.start();
