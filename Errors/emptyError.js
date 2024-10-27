class EmptyUserError extends Error {
    constructor(message) {
      super(message);
      this.statusCode = 404;
      this.name = "EmptyUserError";
    }
  }
  
  module.exports = EmptyUserError;