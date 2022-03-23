import Clubs from '../database/models/Clubs';

const getAll = async (): Promise<Clubs[]> => {
  const allClubs = await Clubs.findAll();

  return allClubs;
};

const getById = async (id: number) => {
  const club = await Clubs.findOne({ where: { id } });

  if (!club) { return { message: 'Bad Request' }; }

  return {
    id: club.id,
    clubName: club.clubName,
  };
};

export default {
  getAll,
  getById,
};
