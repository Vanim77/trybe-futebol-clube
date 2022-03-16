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
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  homeTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  awayTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
}, {
  underscored: true,
  timestamps: false,
  sequelize: db,
  modelName: 'Matchs',
});

export default Matchs;
