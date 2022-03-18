import { Router } from 'express';
import loginRoutes from './login';

const router = Router();

router.use(loginRoutes);

export default router;
