import {Options} from "sequelize";
import devEnv from '../../config/environments/development'

export type EnvironmentType = 'development' | 'production' | 'test';

export enum Environment {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
    TEST = 'test',
}

// tslint:disable-next-line:no-empty-interface
interface DatabaseConfig extends Options {
}

export interface EnvironmentConfig {
    database: DatabaseConfig
}

function getEnvironmentConfig(environmentType: EnvironmentType) {
    return devEnv
}

export function getDatabaseConfig(environmentType: EnvironmentType) {
    return getEnvironmentConfig(environmentType).database
}
