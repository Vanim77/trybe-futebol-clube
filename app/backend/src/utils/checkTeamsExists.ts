import Matchs from '../database/models/Matchs';

const checkTeamsExists = async (teamId: number) => {
  const checkTeam = await Matchs.findByPk(teamId);

  return checkTeam;
};

export default checkTeamsExists;
