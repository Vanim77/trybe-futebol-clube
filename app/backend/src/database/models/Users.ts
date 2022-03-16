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
