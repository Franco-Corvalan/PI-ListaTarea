const { DataTypes} = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Tarea', {
        id:{
            type: DataTypes.UUID,
            primarykey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        info:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        status:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: false,
        },
    },{timestamps:false})
};