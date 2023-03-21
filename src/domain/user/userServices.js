class UserService {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async getUserById(userId) {
    const user = await this.userRepository.getById(userId);
    if (!user) {
      throw new UserNotFoundError(userId);
    }
    return user;
  }

  async createUser(userData) {
    const user = new User(userData);
    await this.userRepository.create(user);
    return user;
  }

  // other service methods
}

module.exports = { UserService };
