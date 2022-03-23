import { Router } from 'express';
import ClubsController from '../controllers/clubsController';

const clubsRouter = Router();

clubsRouter.get('/clubs', ClubsController.getAll);

export default clubsRouter;
