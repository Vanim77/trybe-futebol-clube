import Matchs from '../../database/models/Matchs';
import getGoalsFavor from './getGoalsFavor';
import getTotalPoints from './getTotalPoints';
import getTotalVictories from './getTotalVictories';
import getTotalDraws from './getTotalDraws';
import getTotalLosses from './getTotalLosses';
import getGoalsOwn from './getGoalsOwn';

const getAllLeaderboardValues = (matchs: Matchs[], clubId: number, clubName: string) => {
  const totalPoints = getTotalPoints(matchs, clubId);
  const totalVictories = getTotalVictories(matchs, clubId);
  const totalDraws = getTotalDraws(matchs);
  const totalLosses = getTotalLosses(matchs, clubId);
  const goalsFavor = getGoalsFavor(matchs, clubId);
  const goalsOwn = getGoalsOwn(matchs, clubId);

  return {
    name: clubName,
    totalPoints,
    totalGames: matchs.length,
    totalVictories,
    totalDraws,
    totalLosses,
    goalsFavor,
    goalsOwn,
    goalsBalance: goalsFavor - goalsOwn,
    // efficiency é a porcentagem de jogos ganhos
    // onde o cálculo é:
    // Total de pontos / (Total de jogos * 3) * 100
    efficiency: Number(((totalPoints / (matchs.length * 3)) * 100).toFixed(2)),
  };
};

export default getAllLeaderboardValues;
