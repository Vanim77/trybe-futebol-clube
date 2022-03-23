import { Router } from 'express';
import clubsRouter from './clubs';
import loginRouter from './login';
import matchsRouter from './matchs';

const router = Router();

router.use(loginRouter);
router.use(clubsRouter);
router.use(matchsRouter);

export default router;
