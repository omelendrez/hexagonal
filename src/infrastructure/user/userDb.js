const User = require('../../domain/user/userEntity');

class UserDb {
  constructor({ db }) {
    this.db = db;
  }

  async getById(userId) {
    const user = await this.db.query('SELECT * FROM users WHERE id = ?', [userId]);
    return user ? new User(user) : null;
  }

  async create(user) {
    await this.db.query('INSERT INTO users (id, name, email) VALUES (?, ?, ?)', [user.id, user.name, user.email]);
  }

  // other repository methods
}

module.exports = { UserDb };

