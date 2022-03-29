import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboardController';

const leaderboardRouter = Router();

leaderboardRouter.get('/leaderboard', LeaderboardController.getLeaderboard);
leaderboardRouter.get('/leaderboard/home', LeaderboardController.getHomeLeaderboard);
leaderboardRouter.get('/leaderboard/away', LeaderboardController.getAwayLeaderboard);

export default leaderboardRouter;
