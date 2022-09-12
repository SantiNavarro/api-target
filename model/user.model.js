module.exports = (sequelize, DataTypes, Model) => {
  class Users extends Model {}

  Users.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      },
      createdate: {
        type: DataTypes.DATE,
      },
      updateddate: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "users",
    }
  );

  return Users;
};
