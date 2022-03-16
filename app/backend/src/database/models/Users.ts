import { Model, DataTypes } from 'sequelize';
import db from '.';

class Users extends Model {
  declare id: number;

  public username: string;

  public role: string;

  private email: string;

  private password: string;
}

Users.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  timestamps: false,
  sequelize: db,
  modelName: 'Users',
});

export default Users;
