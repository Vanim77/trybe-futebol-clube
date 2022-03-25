import checkTeamsExists from '../utils/checkTeamsExists';
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

const create = async (newMatch: Matchs) => {
  if (newMatch.homeTeam === newMatch.awayTeam) {
    return { message: 'It is not possible to create a match with two equal teams' };
  }

  const homeTeam = await checkTeamsExists(newMatch.homeTeam);
  const awayTeam = await checkTeamsExists(newMatch.awayTeam);

  if (!homeTeam || !awayTeam) {
    return { message: 'There is no team with such id!' };
  }

  const createdMatch = await Matchs.create(newMatch);

  return {
    id: createdMatch.id,
    homeTeam: createdMatch.homeTeam,
    homeTeamGoals: createdMatch.homeTeamGoals,
    awayTeam: createdMatch.awayTeam,
    awayTeamGoals: createdMatch.awayTeamGoals,
    inProgress: createdMatch.inProgress,
  };
};

const updateMatch = async (id: number) => {
  await Matchs.update({ inProgress: 0 }, { where: { id } });
};

const updateGoals = async (id: number, homeTeamGoals: number, awayTeamGoals: number) => {
  await Matchs.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
};

export default {
  getAll,
  getByQuery,
  create,
  updateMatch,
  updateGoals,
};
