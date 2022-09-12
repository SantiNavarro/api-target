module.exports = (sequelize, DataTypes, Model) => {

    class Tasks extends Model {}

    Tasks.init({
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        description: {
          type: DataTypes.STRING
        },
        createdate: {
          type: DataTypes.DATE
        },
        updateddate: {
            type: DataTypes.DATE
        },
        createdby: {
            type: DataTypes.STRING,
            allowNull: false
        },
        updatedby: {
            type: DataTypes.STRING
        },
      }, {
        sequelize, 
        modelName: 'tasks'
      });
      
      return Tasks;
}