import { Router } from 'express';
import clubsRouter from './clubs';
import leaderboardRouter from './leaderboard';
import loginRouter from './login';
import matchsRouter from './matchs';

const router = Router();

router.use(loginRouter);
router.use(clubsRouter);
router.use(matchsRouter);
router.use(leaderboardRouter);

export default router;
