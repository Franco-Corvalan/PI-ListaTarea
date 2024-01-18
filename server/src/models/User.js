const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('User', {
        id:{
            type: DataTypes.UUID,
            primarykey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{timestamps:false})
}