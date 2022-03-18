import { Model, DataTypes } from 'sequelize';
import db from '.';

class Users extends Model {
  declare id: number;

  public username: string;

  public role: string;

  public email: string;

  public password: string;
}

Users.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
}, {
  underscored: true,
  timestamps: false,
  sequelize: db,
  modelName: 'Users',
});

export default Users;
