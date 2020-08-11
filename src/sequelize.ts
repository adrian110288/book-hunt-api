import {Sequelize} from 'sequelize'
import {EnvironmentType, getDatabaseConfig} from './config/environments'

const databaseConfig = getDatabaseConfig(process.env.NODE_ENV as EnvironmentType)

export const sequelize = new Sequelize(databaseConfig);
