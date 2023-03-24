import { CryptoPojo } from './../models/crypto.model';
import { UserPojo } from './../models/user.model';
import { Sequelize } from "sequelize-typescript";

export const connect = () => {
    const DB_HOSTNAME = 'localhost';
    const DB_PORT = 5432;
    const DB_NAME = 'my-games';
    const DB_USERNAME = 'postgres';
    const DB_PASSWORD = '1996';
    const DB_SCHEMA = 'public';
    const DB_DIALECT: any = 'postgres';

    const sequelize = new Sequelize(
        DB_NAME,
        DB_USERNAME,
        DB_PASSWORD,
        {
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
        }
    )

    sequelize.addModels([UserPojo, CryptoPojo])

    const db: any = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    return db;
}