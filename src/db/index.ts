import {Sequelize} from "sequelize";
import {EnvironmentType, getDatabaseConfig} from "../config/environments";
import log from "../util/log";

class Database {

    private readonly _sequelize: Sequelize = null;

    constructor(environment: EnvironmentType) {
        const databaseConfig = getDatabaseConfig(environment)
        log(databaseConfig)
        this._sequelize = new Sequelize(databaseConfig);
    }

    public async connect() {
        return this._sequelize.authenticate();
    }
}

export const getDatabase = (environment: EnvironmentType) => {
    return new Database(environment);
};
