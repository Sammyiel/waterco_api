import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Payments = sequelize.define('payments', {
    premise_id: {
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    meter_reading: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    date_paid: {
        type: Sequelize.DATE,
        allowNull: false
    },
    charges_paid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    balance: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

}, {
    sequelize,
    tableName: 'payments',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "payment_id" }
        ]
    }]
});

export default Payments;