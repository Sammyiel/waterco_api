import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Billing = sequelize.define('billing', {
    billing_id: {
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    premise_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    previous_reading: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    current_reading: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    reading_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    total_charges: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

}, {
    sequelize,
    tableName: 'billing',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "billing_id" }
        ]
    }]
});

export default Billing;