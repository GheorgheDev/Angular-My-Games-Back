"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const connect = () => {
    const DB_HOSTNAME = 'localhost';
    const DB_PORT = 5432;
    const DB_NAME = 'my-games';
    const DB_USERNAME = 'postgres';
    const DB_PASSWORD = '1996';
    const DB_SCHEMA = 'public';
    const DB_DIALECT = 'postgres';
    const sequelize = new sequelize_typescript_1.Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
        host: DB_HOSTNAME,
        dialect: DB_DIALECT,
        schema: DB_SCHEMA,
        port: DB_PORT,
        repositoryMode: true,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });
    const db = {};
    db.Sequelize = sequelize_typescript_1.Sequelize;
    db.sequelize = sequelize;
};
exports.connect = connect;
