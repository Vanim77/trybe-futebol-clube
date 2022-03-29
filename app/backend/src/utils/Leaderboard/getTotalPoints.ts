import Matchs from '../../database/models/Matchs';

const WIN_POINTS = 3;
const LOSE_POINTS = 0;
const DRAW_POINTS = 1;

const getHomeTeamTotalPoints = (match: Matchs) => {
  // Checando se o clube venceu o adversário
  if (match.homeTeamGoals > match.awayTeamGoals) {
    return WIN_POINTS;
  }
  // Checando se o clube perdeu para o adversário
  if (match.homeTeamGoals < match.awayTeamGoals) {
    return LOSE_POINTS;
  }
  // Se não venceu nem perdeu, ele empatou
  return DRAW_POINTS;
};

const awayTeamTotalPoints = (match: Matchs) => {
  // Checando se o clube venceu o adversário
  if (match.awayTeamGoals > match.homeTeamGoals) {
    return WIN_POINTS;
  }
  // Checando se o clube perdeu para o adversário
  if (match.awayTeamGoals < match.homeTeamGoals) {
    return LOSE_POINTS;
  }
  // Se não venceu nem perdeu, ele empatou
  return DRAW_POINTS;
};

const getTotalPoints = (matchs: Matchs[], clubId: number) => {
  const totalPoints = matchs.reduce((acc, _cur, index) => {
    // Checando se o clube buscado está no time da casa ou no time de fora
    if (matchs[index].homeTeam === clubId) {
      return acc + getHomeTeamTotalPoints(matchs[index]);
    }
    return acc + awayTeamTotalPoints(matchs[index]);
  }, 0);

  return totalPoints;
};

export default getTotalPoints;
