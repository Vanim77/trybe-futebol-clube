import { Op } from 'sequelize';
import Matchs from '../../database/models/Matchs';

const findMatchsFromTeamId = async (clubId: number) => {
  const allMatchsOfClub = await Matchs.findAll({
    where: {
      [Op.or]: [
        {
          homeTeam: clubId,
        },
        {
          awayTeam: clubId,
        },
      ],
      inProgress: 0,
    },
  });

  return allMatchsOfClub;
};

export default findMatchsFromTeamId;
