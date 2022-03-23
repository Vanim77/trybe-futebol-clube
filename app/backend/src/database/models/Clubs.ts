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
    primaryKey: true,
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

Matchs.belongsTo(Clubs, { foreignKey: 'homeTeam', as: 'homeClub' });
Matchs.belongsTo(Clubs, { foreignKey: 'awayTeam', as: 'awayClub' });

export default Clubs;
