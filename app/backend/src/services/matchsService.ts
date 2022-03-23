import Clubs from '../database/models/Clubs';
import Matchs from '../database/models/Matchs';

const getAll = async () => {
  // método include consultado nesse link da documentação:
  // https://sequelize.org/master/manual/eager-loading.html
  const matchs = await Matchs.findAll({
    include: [
      { model: Clubs, as: 'homeClub', attributes: ['clubName'] },
      { model: Clubs, as: 'awayClub', attributes: ['clubName'] },
    ],
  });

  return matchs;
};

const getByQuery = async (inProgress: string | undefined) => {
  const inProgressValue = (inProgress === 'true');

  const matchs = await Matchs.findAll({
    where: { inProgress: inProgressValue },
    include: [
      { model: Clubs, as: 'homeClub', attributes: ['clubName'] },
      { model: Clubs, as: 'awayClub', attributes: ['clubName'] },
    ],
  });

  return matchs;
};

export default {
  getAll,
  getByQuery,
};
