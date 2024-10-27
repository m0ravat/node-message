// storages/usersStorage.js
class MessageStorage {
    constructor() {
        this.storage = {};
        this.id = 0;
    }

    addUser({ username, message }) {
        const id = this.id;
        this.storage[id] = { id, username, message };
        this.id++;
    }

    getUsers() {
        return Object.values(this.storage);
    }

    getUser(id) {
        return this.storage[id];
    }

    updateUser(id, { username, message }) {
        this.storage[id] = { id, username, message };
    }

    deleteUser(id) {
        delete this.storage[id];
    }
}

// Export an instance of the class for a singleton pattern
module.exports = new MessageStorage();

  