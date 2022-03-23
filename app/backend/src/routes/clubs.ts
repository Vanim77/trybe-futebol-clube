import { Router } from 'express';
import ClubsController from '../controllers/clubsController';

const clubsRouter = Router();

clubsRouter.get('/clubs', ClubsController.getAll);
clubsRouter.get('/clubs/:id', ClubsController.getById);

export default clubsRouter;
