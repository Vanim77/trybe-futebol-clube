import findMatchsFromTeamId from '../utils/Leaderboard/findMatchsFromTeamId';
import Clubs from '../database/models/Clubs';
import getAllLeaderboardValues from '../utils/Leaderboard/getAllLeaderboardValues';
import orderArray from '../utils/orderArray';
import Matchs from '../database/models/Matchs';

const getLeaderboardValues = async (clubId: number, clubName: string) => {
  const allMatchsOfClub = await findMatchsFromTeamId(clubId);

  const allLeaderboardValues = getAllLeaderboardValues(allMatchsOfClub, clubId, clubName);

  return allLeaderboardValues;
};

const getLeaderboard = async () => {
  const allClubs = await Clubs.findAll();

  const leaderboard = await Promise.all(allClubs.map(async (club) => {
    const classification = await getLeaderboardValues(club.id, club.clubName);

    return classification;
  }));

  orderArray(leaderboard);

  return leaderboard;
};

const getHomeLeaderboardValues = async (clubId: number, clubName: string) => {
  const allMatchsOfClub = await Matchs.findAll({ where: { homeTeam: clubId, inProgress: 0 } });

  const homeLeaderboardValues = getAllLeaderboardValues(allMatchsOfClub, clubId, clubName);

  return homeLeaderboardValues;
};

const getHomeLeaderboard = async () => {
  const allClubs = await Clubs.findAll();

  const leaderboard = await Promise.all(allClubs.map(async (club) => {
    const classification = await getHomeLeaderboardValues(club.id, club.clubName);

    return classification;
  }));

  orderArray(leaderboard);

  return leaderboard;
};

export default {
  getLeaderboard,
  getHomeLeaderboard,
};
