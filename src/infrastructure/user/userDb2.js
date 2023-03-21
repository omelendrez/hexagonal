const UserRepository = require('../../application/user/userRepository');
const User = require('../../domain/user/userEntity');

class UserDb extends UserRepository {
  constructor({ db }) {
    super();
    this.db = db;
  }

  async create(user) {
    await this.db.query('INSERT INTO users (id, name, email) VALUES (?, ?, ?)', [
      user.id,
      user.name,
      user.email,
    ]);
  }

  async getById(userId) {
    const rows = await this.db.query('SELECT * FROM users WHERE id = ?', [userId]);
    if (rows.length === 0) {
      return null;
    }
    const { id, name, email } = rows[0];
    return new User({ id, name, email });
  }

  // other database methods
}

module.exports = { UserDb };
