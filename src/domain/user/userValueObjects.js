class Email {
  constructor(value) {
    if (!value) {
      throw new Error('Email cannot be empty');
    }
    this.value = value;
  }

  // getters and setters
}

module.exports = { Email };
