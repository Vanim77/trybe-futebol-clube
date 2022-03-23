import { Router } from 'express';
import MatchsController from '../controllers/matchsController';

const matchsRoutes = Router();

matchsRoutes.get('/matchs', MatchsController.getAll);

export default matchsRoutes;
