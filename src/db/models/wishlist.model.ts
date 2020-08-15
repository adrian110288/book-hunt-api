import {DataTypes, Sequelize} from "sequelize";
import {BaseModel} from "./base.model";

interface WishlistAttributes {
    id?: string
    code: string
    ownerId: string
}

export class Wishlist extends BaseModel implements WishlistAttributes {

    public static readonly TABLE_NAME: string = 'wishlists';

    public id: string;
    public code: string;
    public ownerId: string;
    public readonly createdAt: Date;
    public readonly updatedAt: Date;

    public static prepare(sequelize: Sequelize) {
        this.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            code: {
                type: DataTypes.STRING,
                allowNull: false
            },
            ownerId: {
                type: DataTypes.UUID,
                allowNull: false
            }

        }, {
            tableName: "wishlist",
            timestamps: true,
            sequelize
        })
    }
}





