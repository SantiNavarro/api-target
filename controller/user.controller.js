const userService  = require('../service/user.service');
const logger = require('../logger/api.logger');

class UserController {

    async getUsers() {
        logger.info('Controller: getUsers')
        return await userService.getUsers();
    }

    async getUser(user) {
        logger.info('Controller: getUser')
        return await userService.getUser(user);
    }

    async createUser(user) {
        logger.info('Controller: createUser', user);
        return await userService.createUser(user);
    }

    async updateUser(user) {
        logger.info('Controller: updateUser', user);
        return await userService.updateUser(user);
    }

    async deleteUser(userEmail) {
        logger.info('Controller: deleteUser', userEmail);
        return await userService.deleteUser(userEmail);
    }
}
module.exports = new UserController();