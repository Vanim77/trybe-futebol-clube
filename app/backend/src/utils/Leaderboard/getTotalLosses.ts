import Matchs from '../../database/models/Matchs';

const ONE_MORE_LOSS = 1;

const getTotalLosses = (matchs: Matchs[], clubId: number) => {
  const totalLosses = matchs.reduce((acc, _cur, index) => {
    // Checando se é o time de casa
    if (matchs[index].homeTeam === clubId) {
      if (matchs[index].homeTeamGoals < matchs[index].awayTeamGoals) {
        return acc + ONE_MORE_LOSS;
      }
    } else if (matchs[index].awayTeamGoals < matchs[index].homeTeamGoals) {
      return acc + ONE_MORE_LOSS;
    }
    // Caso aconteça um empate, vai cair nesse return, retornando o valor atual
    return acc;
  }, 0);

  return totalLosses;
};

export default getTotalLosses;
