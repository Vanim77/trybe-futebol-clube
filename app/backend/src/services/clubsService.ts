import Clubs from '../database/models/Clubs';

const getAll = async (): Promise<Clubs[]> => {
  const allClubs = await Clubs.findAll();

  return allClubs;
};

export default {
  getAll,
};
