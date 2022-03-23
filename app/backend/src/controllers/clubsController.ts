import { Request, Response } from 'express';
import StatusCode from '../utils/StatusCode';
import ClubsService from '../services/clubsService';

const getAll = async (_req: Request, res: Response) => {
  const response = await ClubsService.getAll();

  return res.status(StatusCode.OK).json(response);
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const response = await ClubsService.getById(Number(id));

  if (!response.clubName) {
    return res.status(StatusCode.BadRequest).json(response);
  }

  return res.status(StatusCode.OK).json(response);
};

export default {
  getAll,
  getById,
};
