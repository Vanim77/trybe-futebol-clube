import Matchs from '../../database/models/Matchs';

const ONE_MORE_DRAW = 1;

const getTotalDraws = (matchs: Matchs[]) => {
  const totalDraws = matchs.reduce((acc, _cur, index) => {
    // Caso aconteça um empate, soma 1 no número de empates
    if (matchs[index].homeTeamGoals === matchs[index].awayTeamGoals) {
      return acc + ONE_MORE_DRAW;
    }

    return acc;
  }, 0);

  return totalDraws;
};

export default getTotalDraws;
