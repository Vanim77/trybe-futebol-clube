import Matchs from '../../database/models/Matchs';

const getGoalsFavor = (matchs: Matchs[], clubId: number) => {
  const goalsFavor = matchs.reduce((acc, _cur, index) => {
    if (matchs[index].homeTeam === clubId) {
      return acc + matchs[index].homeTeamGoals;
    }

    return acc + matchs[index].awayTeamGoals;
  }, 0);

  return goalsFavor;
};

export default getGoalsFavor;
