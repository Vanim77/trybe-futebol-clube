import Matchs from '../../database/models/Matchs';

const getGoalsOwn = (matchs: Matchs[], clubId: number) => {
  const goalsOwn = matchs.reduce((acc, _cur, index) => {
    if (matchs[index].homeTeam !== clubId) {
      return acc + matchs[index].homeTeamGoals;
    }

    return acc + matchs[index].awayTeamGoals;
  }, 0);

  return goalsOwn;
};

export default getGoalsOwn;
