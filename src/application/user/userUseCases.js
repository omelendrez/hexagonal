class GetUserById {
  constructor({ userService }) {
    this.userService = userService;
  }

  async execute(userId) {
    return this.userService.getUserById(userId);
  }
}

class CreateUser {
  constructor({ userService }) {
    this.userService = userService;
  }

  async execute(userData) {
    return this.userService.createUser(userData);
  }
}

module.exports = { GetUserById, CreateUser };
