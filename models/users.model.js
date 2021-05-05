import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const User = sequelize.define('users', {
    user_id: {
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    user_name: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    user_gender: {
        type: Sequelize.STRING(6),
        allowNull: true
    },
    date_of_birth: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    email_address: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    telephone_number: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    address: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    password: {
        type: Sequelize.STRING(255),
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "user_id" }
        ]
    }]
});

export default User;