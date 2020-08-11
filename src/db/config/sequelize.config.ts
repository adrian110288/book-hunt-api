import {Environment, getDatabaseConfig} from '../../config/environments'

const {DEVELOPMENT, PRODUCTION} = Environment;

module.exports = {
    development: getDatabaseConfig(DEVELOPMENT),
    // production: getDatabaseConfig(PRODUCTION),
};
