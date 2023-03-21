const User = require('../../domain/user/userEntity');

class UserHttp {
  constructor({ http }) {
    this.http = http;
  }

  async getById(userId) {
    const response = await this.http.get(`/users/${userId}`);
    return response.data ? new User(response.data) : null;
  }

  async create(user) {
    await this.http.post('/users', user);
  }

  // other repository methods
}

module.exports = UserHttp;
