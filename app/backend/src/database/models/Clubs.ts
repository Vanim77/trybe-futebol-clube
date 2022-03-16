import { Model, DataTypes } from 'sequelize';
import db from '.';
import Matchs from './Matchs';

class Clubs extends Model {
  declare id: number;

  public clubName: string;
}

Clubs.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  clubName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  timestamps: false,
  sequelize: db,
  modelName: 'Clubs',
});

Clubs.hasMany(Matchs, {
  foreignKey: 'id',
});

export default Clubs;
