const userRepository  = require('../repository/user.repository');

class UserService {

    constructor() {}

    async getUsers() {
        return await userRepository.getUsers();
    }

    async getUser(user) {
        return await userRepository.getUser(user);
    }

    async createUser(user) {
        return await userRepository.createUser(user);
    }

    async updateUser(user) {
        return await userRepository.updateUser(user);
    }

    async deleteUser(userEmail) {
        return await userRepository.deleteUser(userEmail);
    }

}

module.exports = new UserService();