import {Model, Sequelize} from "sequelize";

export abstract class BaseModel extends Model {

    prepare: (sequelize: Sequelize) => void
}
