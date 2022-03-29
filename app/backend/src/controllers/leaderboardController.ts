import { Request, Response } from 'express';
import StatusCode from '../utils/StatusCode';
import LeaderboardService from '../services/leaderboardService';

const getLeaderboard = async (_req: Request, res: Response) => {
  const response = await LeaderboardService.getLeaderboard();

  return res.status(StatusCode.OK).json(response);
};

const getHomeLeaderboard = async (_req: Request, res: Response) => {
  const response = await LeaderboardService.getHomeLeaderboard();

  return res.status(StatusCode.OK).json(response);
};

export default {
  getLeaderboard,
  getHomeLeaderboard,
};
