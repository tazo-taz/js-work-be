import { UUIDV4 } from "sequelize"

module.exports = (sequelize: any, DataTypes: any) => {
    const Inventories = sequelize.define("inventories", {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
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
    })
    
    return Inventories
}