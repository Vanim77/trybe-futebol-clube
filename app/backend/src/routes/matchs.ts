import { Router } from 'express';
import tokenValidation from '../middlewares/tokenValidation';
import MatchsController from '../controllers/matchsController';

const matchsRoutes = Router();

matchsRoutes.get('/matchs', MatchsController.getAll);
matchsRoutes.post('/matchs', tokenValidation, MatchsController.createInProgressMatch);
matchsRoutes.patch('/matchs/:id', MatchsController.updateGoals);
matchsRoutes.patch('/matchs/:id/finish', MatchsController.updateMatch);

export default matchsRoutes;
