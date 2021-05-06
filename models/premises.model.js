// const Sequelize = require('sequelize');
import Sequelize from 'sequelize';
import { sequelize } from "../db/dbConnect.js";

const Premises = sequelize.define('premises', {
    premise_id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    member_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    route_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    meter_number: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tariff: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    status: {
        type: Sequelize.STRING(10),
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'premises',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
            { name: "premise_id" },
        ]
    }, ]
});

export default Premises;