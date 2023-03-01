"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const Inventories = sequelize.define("inventories", {
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });
    return Inventories;
};
