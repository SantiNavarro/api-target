const { connect } = require("../config/db.config");
const logger = require("../logger/api.logger");

class UserRepository {
  db = {};

  constructor() {
    this.db = connect();
    this.db.sequelize.sync({ force: true }).then(() => {
      console.log("Drop and re-sync db.");
    });
  }

  async getUsers() {
    try {
      const users = await this.db.users.findAll({
        attributes: ["name", "email"],
      });
      console.log("users:::", users);
      return users;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async getUser(user) {
    try {
      let data = {};
      data = await this.db.users.findOne({
        attributes: ["name", "email"],
        where: {
          email: user.email,
          password: user.password,
        },
      });
      return data;
    } catch (err) {
      console.log(err);
      return data;
    }
  }

  async createUser(user) {
    let data = {};
    try {
      user.createdate = new Date().toISOString();
      data = await this.db.users.create(user);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return { name: user.name, email: user.email };
  }

  async updateUser(user) {
    let data = {};
    try {
      user.updateddate = new Date().toISOString();
      data = await this.db.users.update(
        { ...user },
        {
          where: {
            email: user.email,
            password: user.password,
          },
        }
      );
    } catch (err) {
      logger.error("Error::" + err);
    }
    return { name: data.name, email: data.email };
  }

  async deleteUser(userEmail) {
    let data = {};
    try {
      data = await this.db.users.destroy({
        where: {
          email: userEmail,
        },
      });
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }
}

module.exports = new UserRepository();
