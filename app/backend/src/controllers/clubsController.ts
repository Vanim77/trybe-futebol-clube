import { Request, Response } from 'express';
import ClubsService from '../services/clubsService';

const getAll = async (_req: Request, res: Response) => {
  const response = await ClubsService.getAll();

  return res.status(200).json(response);
};

export default {
  getAll,
};
