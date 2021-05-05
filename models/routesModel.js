import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Routes = sequelize.define('routes', {
    route_id: {
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    sector_id: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    zone_id: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    number_of_clients: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'routes',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "route_id" }
        ]
    }]
});

export default Routes;