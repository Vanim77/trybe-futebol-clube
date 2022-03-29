import Matchs from '../../database/models/Matchs';

const ONE_MORE_VICTORY = 1;

const getTotalVictories = (matchs: Matchs[], clubId: number) => {
  const totalVictories = matchs.reduce((acc, _cur, index) => {
    // Checando se é o time de casa
    if (matchs[index].homeTeam === clubId) {
      if (matchs[index].homeTeamGoals > matchs[index].awayTeamGoals) {
        return acc + ONE_MORE_VICTORY;
      }
    } else if (matchs[index].awayTeamGoals > matchs[index].homeTeamGoals) {
      return acc + ONE_MORE_VICTORY;
    }
    // Caso aconteça um empate, vai cair nesse return, retornando o valor atual
    return acc;
  }, 0);

  return totalVictories;
};

export default getTotalVictories;
