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
  },
  clubName: {
    type: DataTypes.STRING,
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
