import { Model, DataTypes, TinyIntegerDataType } from 'sequelize';
import db from '.';

class Matchs extends Model {
  declare id: number;

  public homeTeam: number;

  public homeTeamGoals: number;

  public awayTeam: number;

  public awayTeamGoals: number;

  public inProgress: TinyIntegerDataType;
}

Matchs.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: {
    type: DataTypes.INTEGER,
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
  },
  awayTeam: {
    type: DataTypes.INTEGER,
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
  },
  inProgress: {
    type: DataTypes.TINYINT,
  },
}, {
  underscored: true,
  timestamps: false,
  sequelize: db,
  modelName: 'Matchs',
});

export default Matchs;
