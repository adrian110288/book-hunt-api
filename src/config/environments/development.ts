import {EnvironmentConfig} from "./index";

export default {
    database: {
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        dialect: 'postgres',
        logging: false,
        sync: {
            force: false,
            logging: false,
            alter: false,
        },
        define: {
            paranoid: true,
            timestamps: true,
            underscored: false,
            freezeTableName: true,
            createdAt: 'createdAt',
            updatedAt: 'updatedAt',
            deletedAt: 'deletedAt',
            charset: 'utf8',
            schema: 'public',
        },
        timezone: 'UTC',
    }
} as EnvironmentConfig
