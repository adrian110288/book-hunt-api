import {DataTypes, QueryInterface} from 'sequelize';
import {Wishlist} from '../models/wishlist.model';

export async function up(query: QueryInterface) {
  try {
    return query.createTable(Wishlist.TABLE_NAME, {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      ownerId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      deletedAt: DataTypes.DATE,
    });
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function down(query: QueryInterface) {
  try {
    return query.dropTable(Wishlist.TABLE_NAME);
  } catch (e) {
    return Promise.reject(e);
  }
}
