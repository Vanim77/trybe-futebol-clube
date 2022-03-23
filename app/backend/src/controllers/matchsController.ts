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

export default {
  getAll,
};
