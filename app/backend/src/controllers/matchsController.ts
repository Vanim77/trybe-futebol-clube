import { Request, Response } from 'express';
import MatchsService from '../services/matchsService';
import StatusCode from '../utils/StatusCode';

const getAll = async (req: Request, res: Response) => {
  const { inProgress } = req.query;
  let response;

  if (inProgress) {
    response = await MatchsService.getByQuery(String(inProgress));
  } else {
    response = await MatchsService.getAll();
  }

  return res.status(StatusCode.OK).json(response);
};

const createInProgressMatch = async (req: Request, res: Response) => {
  const newMatch = req.body;
  const response = await MatchsService.create(newMatch);

  if (!response.homeTeamGoals) {
    return res.status(StatusCode.Unauthorized).json(response);
  }

  return res.status(StatusCode.Created).json(response);
};

const updateMatch = async (req: Request, res: Response) => {
  const { id } = req.params;

  await MatchsService.updateMatch(Number(id));

  return res.status(StatusCode.OK).json({ message: 'Resource updated successfully' });
};

export default {
  getAll,
  createInProgressMatch,
  updateMatch,
};
